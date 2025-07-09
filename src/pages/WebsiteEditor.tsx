
import { useState, useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { 
  Undo, 
  Redo, 
  Save, 
  Eye, 
  Share, 
  Settings, 
  Plus, 
  Smartphone,
  Monitor,
  Tablet,
  ChevronLeft,
  ChevronRight
} from "lucide-react";
import { Link, useParams } from "react-router-dom";
import { toast } from "sonner";
import { DraggableElement } from "../components/editor/DraggableElement";
import { ElementToolbar } from "../components/editor/ElementToolbar";
import { PropertiesPanel } from "../components/editor/PropertiesPanel";
import { CanvasElement } from "../types/editor";

const WebsiteEditor = () => {
  const { type, id } = useParams();
  const [selectedElement, setSelectedElement] = useState<string | null>(null);
  const [viewMode, setViewMode] = useState<'desktop' | 'tablet' | 'mobile'>('desktop');
  const [canvasElements, setCanvasElements] = useState<CanvasElement[]>([]);
  const [leftPanelCollapsed, setLeftPanelCollapsed] = useState(false);
  const [rightPanelCollapsed, setRightPanelCollapsed] = useState(false);
  const canvasRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Initialize with template content if it's a template
    if (type === 'template' && id) {
      const templateElements: CanvasElement[] = [
        {
          id: '1',
          type: 'heading',
          content: 'Welcome to Your Website',
          x: 100,
          y: 80,
          width: 500,
          height: 60,
          style: { fontSize: '2.5rem', color: '#1f2937', fontWeight: 'bold' }
        },
        {
          id: '2',
          type: 'text',
          content: 'This is a sample subtitle that you can edit and customize',
          x: 100,
          y: 160,
          width: 400,
          height: 30,
          style: { fontSize: '1.125rem', color: '#6b7280' }
        },
        {
          id: '3',
          type: 'button',
          content: 'Get Started',
          x: 100,
          y: 220,
          width: 150,
          height: 45,
          style: { backgroundColor: '#3b82f6', color: '#ffffff', borderRadius: '8px' }
        }
      ];
      setCanvasElements(templateElements);
    }
  }, [type, id]);

  const handleAddElement = (elementType: string) => {
    const newElement: CanvasElement = {
      id: Date.now().toString(),
      type: elementType as any,
      content: getDefaultContent(elementType),
      x: 100,
      y: 100,
      width: getDefaultWidth(elementType),
      height: getDefaultHeight(elementType),
      style: getDefaultStyle(elementType)
    };

    setCanvasElements(prev => [...prev, newElement]);
    setSelectedElement(newElement.id);
    toast.success(`${elementType} element added!`);
  };

  const getDefaultContent = (type: string): string => {
    switch (type) {
      case 'text': return 'Edit this text';
      case 'heading': return 'Your Heading';
      case 'button': return 'Click Me';
      case 'image': return 'Image';
      case 'section': return 'Container';
      case 'shape': return '';
      case 'divider': return '';
      case 'spacer': return '';
      default: return 'Element';
    }
  };

  const getDefaultWidth = (type: string): number => {
    switch (type) {
      case 'text': return 200;
      case 'heading': return 300;
      case 'button': return 120;
      case 'image': return 250;
      case 'section': return 400;
      case 'shape': return 100;
      case 'divider': return 300;
      case 'spacer': return 100;
      default: return 100;
    }
  };

  const getDefaultHeight = (type: string): number => {
    switch (type) {
      case 'text': return 24;
      case 'heading': return 40;
      case 'button': return 40;
      case 'image': return 150;
      case 'section': return 200;
      case 'shape': return 100;
      case 'divider': return 2;
      case 'spacer': return 50;
      default: return 40;
    }
  };

  const getDefaultStyle = (type: string) => {
    switch (type) {
      case 'text': return { fontSize: '1rem', color: '#374151' };
      case 'heading': return { fontSize: '1.5rem', color: '#1f2937', fontWeight: 'bold' };
      case 'button': return { backgroundColor: '#3b82f6', color: '#ffffff', borderRadius: '6px' };
      case 'image': return { backgroundColor: '#f3f4f6', borderRadius: '4px' };
      case 'section': return { backgroundColor: '#f9fafb', borderRadius: '8px' };
      case 'shape': return { backgroundColor: '#10b981', borderRadius: '50%' };
      case 'divider': return { backgroundColor: '#e5e7eb' };
      case 'spacer': return { backgroundColor: 'transparent' };
      default: return {};
    }
  };

  const handleUpdateElement = (id: string, updates: Partial<CanvasElement>) => {
    setCanvasElements(prev => prev.map(el => 
      el.id === id ? { ...el, ...updates } : el
    ));
  };

  const handleDeleteElement = (id: string) => {
    setCanvasElements(prev => prev.filter(el => el.id !== id));
    if (selectedElement === id) {
      setSelectedElement(null);
    }
    toast.success("Element deleted!");
  };

  const handleDuplicateElement = (id: string) => {
    const element = canvasElements.find(el => el.id === id);
    if (element) {
      const newElement = {
        ...element,
        id: Date.now().toString(),
        x: element.x + 20,
        y: element.y + 20
      };
      setCanvasElements(prev => [...prev, newElement]);
      setSelectedElement(newElement.id);
      toast.success("Element duplicated!");
    }
  };

  const handleCanvasClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      setSelectedElement(null);
    }
  };

  const handleSave = () => {
    toast.success("Website saved successfully!");
  };

  const handlePreview = () => {
    toast.info("Opening preview in new tab...");
  };

  const handlePublish = () => {
    toast.success("Website published! Your site is now live.");
  };

  const getCanvasWidth = () => {
    switch (viewMode) {
      case 'mobile': return 'w-[375px]';
      case 'tablet': return 'w-[768px]';
      default: return 'w-full max-w-[1200px]';
    }
  };

  const selectedElementData = canvasElements.find(el => el.id === selectedElement);

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      {/* Header */}
      <header className="bg-white border-b border-gray-200 px-4 py-3 flex-shrink-0">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <Link to="/dashboard" className="text-blue-600 hover:text-blue-700 flex items-center">
              ← Back to Dashboard
            </Link>
            <div>
              <h1 className="text-lg font-semibold">
                {type === 'blank' ? 'Blank Website' : `Template ${id}`}
              </h1>
              <p className="text-sm text-gray-500">Last saved 2 minutes ago</p>
            </div>
          </div>

          <div className="flex items-center space-x-2">
            {/* Responsive Controls */}
            <div className="flex items-center space-x-1 bg-gray-100 rounded-lg p-1">
              <Button
                variant={viewMode === 'desktop' ? 'default' : 'ghost'}
                size="sm"
                onClick={() => setViewMode('desktop')}
              >
                <Monitor className="w-4 h-4" />
              </Button>
              <Button
                variant={viewMode === 'tablet' ? 'default' : 'ghost'}
                size="sm"
                onClick={() => setViewMode('tablet')}
              >
                <Tablet className="w-4 h-4" />
              </Button>
              <Button
                variant={viewMode === 'mobile' ? 'default' : 'ghost'}
                size="sm"
                onClick={() => setViewMode('mobile')}
              >
                <Smartphone className="w-4 h-4" />
              </Button>
            </div>

            <Button variant="outline" size="sm">
              <Undo className="w-4 h-4" />
            </Button>
            <Button variant="outline" size="sm">
              <Redo className="w-4 h-4" />
            </Button>
            <Button variant="outline" size="sm" onClick={handleSave}>
              <Save className="w-4 h-4 mr-2" />
              Save
            </Button>
            <Button variant="outline" size="sm" onClick={handlePreview}>
              <Eye className="w-4 h-4 mr-2" />
              Preview
            </Button>
            <Button size="sm" className="bg-blue-600 hover:bg-blue-700" onClick={handlePublish}>
              <Share className="w-4 h-4 mr-2" />
              Publish
            </Button>
          </div>
        </div>
      </header>

      <div className="flex-1 flex overflow-hidden">
        {/* Left Panel - Elements */}
        <div className={`${leftPanelCollapsed ? 'w-12' : 'w-64'} bg-white border-r border-gray-200 flex-shrink-0 transition-all duration-300`}>
          <div className="h-full flex flex-col">
            <div className="p-4 border-b border-gray-200 flex items-center justify-between">
              {!leftPanelCollapsed && <h2 className="font-semibold">Elements</h2>}
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setLeftPanelCollapsed(!leftPanelCollapsed)}
              >
                {leftPanelCollapsed ? <ChevronRight className="w-4 h-4" /> : <ChevronLeft className="w-4 h-4" />}
              </Button>
            </div>
            {!leftPanelCollapsed && (
              <div className="flex-1 overflow-y-auto p-4">
                <ElementToolbar onAddElement={handleAddElement} />
              </div>
            )}
          </div>
        </div>

        {/* Main Canvas */}
        <div className="flex-1 flex flex-col overflow-hidden">
          <div className="flex-1 p-6 overflow-auto">
            <div className="flex justify-center">
              <div className={`${getCanvasWidth()} transition-all duration-300`}>
                <div
                  ref={canvasRef}
                  className="bg-white rounded-lg border border-gray-200 shadow-sm relative overflow-hidden"
                  style={{ minHeight: '600px', height: '800px' }}
                  onClick={handleCanvasClick}
                >
                  {canvasElements.length === 0 ? (
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-center">
                        <Plus className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                        <h3 className="text-lg font-semibold text-gray-600 mb-2">Start Building</h3>
                        <p className="text-gray-500">Add elements from the left panel to get started</p>
                      </div>
                    </div>
                  ) : (
                    canvasElements.map((element) => (
                      <DraggableElement
                        key={element.id}
                        element={element}
                        isSelected={selectedElement === element.id}
                        onSelect={() => setSelectedElement(element.id)}
                        onUpdate={(updates) => handleUpdateElement(element.id, updates)}
                        onDelete={() => handleDeleteElement(element.id)}
                        onDuplicate={() => handleDuplicateElement(element.id)}
                        canvasRef={canvasRef}
                      />
                    ))
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Panel - Properties */}
        <div className={`${rightPanelCollapsed ? 'w-12' : 'w-80'} bg-white border-l border-gray-200 flex-shrink-0 transition-all duration-300`}>
          <div className="h-full flex flex-col">
            <div className="p-4 border-b border-gray-200 flex items-center justify-between">
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setRightPanelCollapsed(!rightPanelCollapsed)}
              >
                {rightPanelCollapsed ? <ChevronLeft className="w-4 h-4" /> : <ChevronRight className="w-4 h-4" />}
              </Button>
              {!rightPanelCollapsed && <h2 className="font-semibold">Properties</h2>}
            </div>
            {!rightPanelCollapsed && (
              <div className="flex-1 overflow-y-auto p-4">
                <PropertiesPanel
                  selectedElement={selectedElementData || null}
                  onUpdateElement={handleUpdateElement}
                  onDeleteElement={handleDeleteElement}
                  onDuplicateElement={handleDuplicateElement}
                />
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default WebsiteEditor;
