
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Trash2, Copy, Palette, Type, Layout, Move } from "lucide-react";
import { CanvasElement } from "../../types/editor";

interface PropertiesPanelProps {
  selectedElement: CanvasElement | null;
  onUpdateElement: (id: string, updates: Partial<CanvasElement>) => void;
  onDeleteElement: (id: string) => void;
  onDuplicateElement: (id: string) => void;
}

export const PropertiesPanel = ({
  selectedElement,
  onUpdateElement,
  onDeleteElement,
  onDuplicateElement
}: PropertiesPanelProps) => {
  if (!selectedElement) {
    return (
      <div className="p-4 text-center text-gray-500">
        <Layout className="w-12 h-12 mx-auto mb-4 opacity-50" />
        <h3 className="font-medium mb-2">No Element Selected</h3>
        <p className="text-sm">Select an element to edit its properties</p>
      </div>
    );
  }

  const handleStyleUpdate = (styleUpdates: Partial<CanvasElement['style']>) => {
    onUpdateElement(selectedElement.id, {
      style: { ...selectedElement.style, ...styleUpdates }
    });
  };

  return (
    <div className="space-y-6">
      {/* Element Info */}
      <div>
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-semibold">Properties</h2>
          <Badge variant="outline">
            {selectedElement.type.charAt(0).toUpperCase() + selectedElement.type.slice(1)}
          </Badge>
        </div>
        
        {/* Actions */}
        <div className="flex space-x-2 mb-4">
          <Button
            variant="outline"
            size="sm"
            onClick={() => onDuplicateElement(selectedElement.id)}
            className="flex-1"
          >
            <Copy className="w-4 h-4 mr-1" />
            Duplicate
          </Button>
          <Button
            variant="destructive"
            size="sm"
            onClick={() => onDeleteElement(selectedElement.id)}
            className="flex-1"
          >
            <Trash2 className="w-4 h-4 mr-1" />
            Delete
          </Button>
        </div>
      </div>

      {/* Content */}
      <div>
        <label className="block text-sm font-medium mb-2">Content</label>
        <textarea
          value={selectedElement.content}
          onChange={(e) => onUpdateElement(selectedElement.id, { content: e.target.value })}
          className="w-full border border-gray-300 rounded px-3 py-2 text-sm resize-none"
          rows={3}
          placeholder="Enter content..."
        />
      </div>

      {/* Position & Size */}
      <div>
        <h3 className="text-sm font-medium mb-3 flex items-center">
          <Move className="w-4 h-4 mr-2" />
          Position & Size
        </h3>
        <div className="grid grid-cols-2 gap-3">
          <div>
            <label className="block text-xs text-gray-500 mb-1">X Position</label>
            <input
              type="number"
              value={selectedElement.x}
              onChange={(e) => onUpdateElement(selectedElement.id, { x: parseInt(e.target.value) || 0 })}
              className="w-full border border-gray-300 rounded px-2 py-1 text-sm"
            />
          </div>
          <div>
            <label className="block text-xs text-gray-500 mb-1">Y Position</label>
            <input
              type="number"
              value={selectedElement.y}
              onChange={(e) => onUpdateElement(selectedElement.id, { y: parseInt(e.target.value) || 0 })}
              className="w-full border border-gray-300 rounded px-2 py-1 text-sm"
            />
          </div>
          <div>
            <label className="block text-xs text-gray-500 mb-1">Width</label>
            <input
              type="number"
              value={selectedElement.width}
              onChange={(e) => onUpdateElement(selectedElement.id, { width: parseInt(e.target.value) || 50 })}
              className="w-full border border-gray-300 rounded px-2 py-1 text-sm"
            />
          </div>
          <div>
            <label className="block text-xs text-gray-500 mb-1">Height</label>
            <input
              type="number"
              value={selectedElement.height}
              onChange={(e) => onUpdateElement(selectedElement.id, { height: parseInt(e.target.value) || 30 })}
              className="w-full border border-gray-300 rounded px-2 py-1 text-sm"
            />
          </div>
        </div>
      </div>

      {/* Styling */}
      <div>
        <h3 className="text-sm font-medium mb-3 flex items-center">
          <Palette className="w-4 h-4 mr-2" />
          Styling
        </h3>
        
        {/* Text Styles */}
        {(selectedElement.type === 'text' || selectedElement.type === 'button') && (
          <div className="space-y-3">
            <div>
              <label className="block text-xs text-gray-500 mb-1">Font Size</label>
              <select
                value={selectedElement.style.fontSize || '1rem'}
                onChange={(e) => handleStyleUpdate({ fontSize: e.target.value })}
                className="w-full border border-gray-300 rounded px-2 py-1 text-sm"
              >
                <option value="0.75rem">12px</option>
                <option value="0.875rem">14px</option>
                <option value="1rem">16px</option>
                <option value="1.125rem">18px</option>
                <option value="1.25rem">20px</option>
                <option value="1.5rem">24px</option>
                <option value="2rem">32px</option>
                <option value="2.5rem">40px</option>
                <option value="3rem">48px</option>
              </select>
            </div>
            
            <div>
              <label className="block text-xs text-gray-500 mb-1">Text Color</label>
              <input
                type="color"
                value={selectedElement.style.color || '#000000'}
                onChange={(e) => handleStyleUpdate({ color: e.target.value })}
                className="w-full h-8 border border-gray-300 rounded"
              />
            </div>
          </div>
        )}
        
        {/* Background Color */}
        {selectedElement.type !== 'text' && (
          <div className="mb-3">
            <label className="block text-xs text-gray-500 mb-1">Background Color</label>
            <input
              type="color"
              value={selectedElement.style.backgroundColor || '#ffffff'}
              onChange={(e) => handleStyleUpdate({ backgroundColor: e.target.value })}
              className="w-full h-8 border border-gray-300 rounded"
            />
          </div>
        )}
        
        {/* Border Radius */}
        <div>
          <label className="block text-xs text-gray-500 mb-1">Border Radius</label>
          <select
            value={selectedElement.style.borderRadius || '0px'}
            onChange={(e) => handleStyleUpdate({ borderRadius: e.target.value })}
            className="w-full border border-gray-300 rounded px-2 py-1 text-sm"
          >
            <option value="0px">None</option>
            <option value="4px">Small</option>
            <option value="8px">Medium</option>
            <option value="12px">Large</option>
            <option value="50%">Circle</option>
          </select>
        </div>
      </div>
    </div>
  );
};
