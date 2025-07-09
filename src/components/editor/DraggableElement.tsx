
import { useState, useRef, useEffect } from "react";
import { Trash2, Copy, Move, RotateCcw, Settings } from "lucide-react";
import { CanvasElement } from "../../types/editor";

interface DraggableElementProps {
  element: CanvasElement;
  isSelected: boolean;
  onSelect: () => void;
  onUpdate: (updates: Partial<CanvasElement>) => void;
  onDelete: () => void;
  onDuplicate: () => void;
  canvasRef: React.RefObject<HTMLDivElement>;
}

export const DraggableElement = ({
  element,
  isSelected,
  onSelect,
  onUpdate,
  onDelete,
  onDuplicate,
  canvasRef
}: DraggableElementProps) => {
  const [isDragging, setIsDragging] = useState(false);
  const [isResizing, setIsResizing] = useState(false);
  const [dragOffset, setDragOffset] = useState({ x: 0, y: 0 });
  const [isEditing, setIsEditing] = useState(false);
  const elementRef = useRef<HTMLDivElement>(null);

  const handleMouseDown = (e: React.MouseEvent) => {
    if (e.target !== e.currentTarget && !e.currentTarget.contains(e.target as Node)) return;
    
    e.preventDefault();
    e.stopPropagation();
    
    onSelect();
    setIsDragging(true);
    
    const rect = elementRef.current?.getBoundingClientRect();
    if (rect) {
      setDragOffset({
        x: e.clientX - rect.left,
        y: e.clientY - rect.top
      });
    }
  };

  const handleMouseMove = (e: MouseEvent) => {
    if (!isDragging || !canvasRef.current) return;
    
    const canvasRect = canvasRef.current.getBoundingClientRect();
    const newX = e.clientX - canvasRect.left - dragOffset.x;
    const newY = e.clientY - canvasRect.top - dragOffset.y;
    
    onUpdate({
      x: Math.max(0, Math.min(newX, canvasRect.width - element.width)),
      y: Math.max(0, Math.min(newY, canvasRect.height - element.height))
    });
  };

  const handleMouseUp = () => {
    setIsDragging(false);
    setIsResizing(false);
  };

  useEffect(() => {
    if (isDragging || isResizing) {
      document.addEventListener('mousemove', handleMouseMove);
      document.addEventListener('mouseup', handleMouseUp);
      
      return () => {
        document.removeEventListener('mousemove', handleMouseMove);
        document.removeEventListener('mouseup', handleMouseUp);
      };
    }
  }, [isDragging, isResizing, dragOffset]);

  const handleResizeStart = (e: React.MouseEvent, direction: string) => {
    e.preventDefault();
    e.stopPropagation();
    setIsResizing(true);
    
    const startX = e.clientX;
    const startY = e.clientY;
    const startWidth = element.width;
    const startHeight = element.height;
    const startLeft = element.x;
    const startTop = element.y;

    const handleResize = (e: MouseEvent) => {
      const deltaX = e.clientX - startX;
      const deltaY = e.clientY - startY;
      
      let newWidth = startWidth;
      let newHeight = startHeight;
      let newX = startLeft;
      let newY = startTop;

      if (direction.includes('right')) newWidth = Math.max(50, startWidth + deltaX);
      if (direction.includes('left')) {
        newWidth = Math.max(50, startWidth - deltaX);
        newX = startLeft + (startWidth - newWidth);
      }
      if (direction.includes('bottom')) newHeight = Math.max(30, startHeight + deltaY);
      if (direction.includes('top')) {
        newHeight = Math.max(30, startHeight - deltaY);
        newY = startTop + (startHeight - newHeight);
      }

      onUpdate({ width: newWidth, height: newHeight, x: newX, y: newY });
    };

    const handleResizeEnd = () => {
      setIsResizing(false);
      document.removeEventListener('mousemove', handleResize);
      document.removeEventListener('mouseup', handleResizeEnd);
    };

    document.addEventListener('mousemove', handleResize);
    document.addEventListener('mouseup', handleResizeEnd);
  };

  const handleDoubleClick = () => {
    if (element.type === 'text') {
      setIsEditing(true);
    }
  };

  const handleContentChange = (newContent: string) => {
    onUpdate({ content: newContent });
    setIsEditing(false);
  };

  const renderContent = () => {
    switch (element.type) {
      case 'text':
        return isEditing ? (
          <input
            type="text"
            value={element.content}
            onChange={(e) => handleContentChange(e.target.value)}
            onBlur={() => setIsEditing(false)}
            onKeyDown={(e) => e.key === 'Enter' && setIsEditing(false)}
            className="w-full h-full bg-transparent border-none outline-none"
            style={{ fontSize: element.style.fontSize, color: element.style.color }}
            autoFocus
          />
        ) : (
          <div 
            className="w-full h-full flex items-center justify-center cursor-text"
            style={{ fontSize: element.style.fontSize, color: element.style.color }}
          >
            {element.content}
          </div>
        );
      
      case 'button':
        return (
          <button 
            className="w-full h-full text-sm font-medium cursor-pointer hover:opacity-80 transition-opacity"
            style={{
              backgroundColor: element.style.backgroundColor,
              color: element.style.color,
              borderRadius: element.style.borderRadius
            }}
            onClick={(e) => e.preventDefault()}
          >
            {element.content}
          </button>
        );
      
      case 'image':
        return (
          <div className="w-full h-full flex items-center justify-center border-2 border-dashed border-gray-300 bg-gray-50">
            <span className="text-gray-500 text-sm">Click to add image</span>
          </div>
        );
      
      case 'section':
        return (
          <div 
            className="w-full h-full flex items-center justify-center border border-gray-200"
            style={{ backgroundColor: element.style.backgroundColor, borderRadius: element.style.borderRadius }}
          >
            <span className="text-gray-500">Section Container</span>
          </div>
        );
      
      case 'shape':
        return (
          <div 
            className="w-full h-full"
            style={{ 
              backgroundColor: element.style.backgroundColor, 
              borderRadius: element.style.borderRadius 
            }}
          />
        );
      
      default:
        return <div>Unknown Element</div>;
    }
  };

  return (
    <>
      <div
        ref={elementRef}
        className={`absolute cursor-move select-none ${
          isSelected ? 'ring-2 ring-blue-500' : 'hover:ring-1 hover:ring-gray-300'
        } ${isDragging ? 'opacity-75' : ''}`}
        style={{
          left: element.x,
          top: element.y,
          width: element.width,
          height: element.height,
          zIndex: isSelected ? 1000 : 1,
        }}
        onMouseDown={handleMouseDown}
        onDoubleClick={handleDoubleClick}
      >
        {renderContent()}
        
        {/* Selection Handles */}
        {isSelected && !isDragging && (
          <>
            {/* Corner Resize Handles */}
            <div
              className="absolute -top-1 -left-1 w-3 h-3 bg-blue-500 border border-white cursor-nw-resize"
              onMouseDown={(e) => handleResizeStart(e, 'top-left')}
            />
            <div
              className="absolute -top-1 -right-1 w-3 h-3 bg-blue-500 border border-white cursor-ne-resize"
              onMouseDown={(e) => handleResizeStart(e, 'top-right')}
            />
            <div
              className="absolute -bottom-1 -left-1 w-3 h-3 bg-blue-500 border border-white cursor-sw-resize"
              onMouseDown={(e) => handleResizeStart(e, 'bottom-left')}
            />
            <div
              className="absolute -bottom-1 -right-1 w-3 h-3 bg-blue-500 border border-white cursor-se-resize"
              onMouseDown={(e) => handleResizeStart(e, 'bottom-right')}
            />
            
            {/* Edge Resize Handles */}
            <div
              className="absolute -top-1 left-1/2 transform -translate-x-1/2 w-3 h-2 bg-blue-500 border border-white cursor-n-resize"
              onMouseDown={(e) => handleResizeStart(e, 'top')}
            />
            <div
              className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-3 h-2 bg-blue-500 border border-white cursor-s-resize"
              onMouseDown={(e) => handleResizeStart(e, 'bottom')}
            />
            <div
              className="absolute -left-1 top-1/2 transform -translate-y-1/2 w-2 h-3 bg-blue-500 border border-white cursor-w-resize"
              onMouseDown={(e) => handleResizeStart(e, 'left')}
            />
            <div
              className="absolute -right-1 top-1/2 transform -translate-y-1/2 w-2 h-3 bg-blue-500 border border-white cursor-e-resize"
              onMouseDown={(e) => handleResizeStart(e, 'right')}
            />
            
            {/* Action Toolbar */}
            <div className="absolute -top-10 left-0 flex items-center space-x-1 bg-gray-900 text-white px-2 py-1 rounded text-xs">
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  onDuplicate();
                }}
                className="p-1 hover:bg-gray-700 rounded"
                title="Duplicate"
              >
                <Copy className="w-3 h-3" />
              </button>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  onDelete();
                }}
                className="p-1 hover:bg-gray-700 rounded text-red-400"
                title="Delete"
              >
                <Trash2 className="w-3 h-3" />
              </button>
            </div>
          </>
        )}
      </div>
    </>
  );
};
