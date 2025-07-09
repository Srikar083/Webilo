
import { useState, useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Undo, 
  Redo, 
  Save, 
  Eye, 
  Share, 
  Settings, 
  Plus, 
  Type, 
  Image, 
  Square, 
  Circle,
  Layout,
  Smartphone,
  Monitor,
  Tablet,
  Trash2
} from "lucide-react";
import { Link, useParams } from "react-router-dom";
import { toast } from "sonner";

interface CanvasElement {
  id: string;
  type: 'text' | 'image' | 'button' | 'section' | 'shape';
  content: string;
  x: number;
  y: number;
  width: number;
  height: number;
  style: {
    fontSize?: string;
    color?: string;
    backgroundColor?: string;
    borderRadius?: string;
  };
}

const WebsiteEditor = () => {
  const { type, id } = useParams();
  const [selectedElement, setSelectedElement] = useState<string | null>(null);
  const [viewMode, setViewMode] = useState<'desktop' | 'tablet' | 'mobile'>('desktop');
  const [canvasElements, setCanvasElements] = useState<CanvasElement[]>([]);
  const [draggedElement, setDraggedElement] = useState<string | null>(null);
  const canvasRef = useRef<HTMLDivElement>(null);

  const elements = [
    { id: 'text', name: 'Text', icon: Type, description: 'Add headings and paragraphs' },
    { id: 'image', name: 'Image', icon: Image, description: 'Upload and display images' },
    { id: 'button', name: 'Button', icon: Square, description: 'Call-to-action buttons' },
    { id: 'section', name: 'Section', icon: Layout, description: 'Container for other elements' },
    { id: 'shape', name: 'Shape', icon: Circle, description: 'Geometric shapes' },
  ];

  useEffect(() => {
    // Initialize with template content if it's a template
    if (type === 'template' && id) {
      const templateElements: CanvasElement[] = [
        {
          id: '1',
          type: 'text',
          content: 'Welcome to Your Website',
          x: 50,
          y: 50,
          width: 400,
          height: 60,
          style: { fontSize: '2rem', color: '#000000' }
        },
        {
          id: '2',
          type: 'text',
          content: 'This is a sample subtitle that you can edit',
          x: 50,
          y: 120,
          width: 300,
          height: 30,
          style: { fontSize: '1rem', color: '#666666' }
        }
      ];
      setCanvasElements(templateElements);
    }
  }, [type, id]);

  const handleDragStart = (elementType: string) => {
    setDraggedElement(elementType);
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    if (!draggedElement || !canvasRef.current) return;

    const rect = canvasRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const newElement: CanvasElement = {
      id: Date.now().toString(),
      type: draggedElement as any,
      content: getDefaultContent(draggedElement),
      x,
      y,
      width: getDefaultWidth(draggedElement),
      height: getDefaultHeight(draggedElement),
      style: getDefaultStyle(draggedElement)
    };

    setCanvasElements(prev => [...prev, newElement]);
    setDraggedElement(null);
    toast.success(`${draggedElement} element added!`);
  };

  const getDefaultContent = (type: string): string => {
    switch (type) {
      case 'text': return 'Click to edit text';
      case 'button': return 'Button';
      case 'image': return 'Image placeholder';
      case 'section': return 'Section';
      case 'shape': return 'Shape';
      default: return 'Element';
    }
  };

  const getDefaultWidth = (type: string): number => {
    switch (type) {
      case 'text': return 200;
      case 'button': return 120;
      case 'image': return 250;
      case 'section': return 300;
      case 'shape': return 100;
      default: return 100;
    }
  };

  const getDefaultHeight = (type: string): number => {
    switch (type) {
      case 'text': return 40;
      case 'button': return 40;
      case 'image': return 150;
      case 'section': return 200;
      case 'shape': return 100;
      default: return 40;
    }
  };

  const getDefaultStyle = (type: string) => {
    switch (type) {
      case 'text': return { fontSize: '1rem', color: '#000000' };
      case 'button': return { backgroundColor: '#3B82F6', color: '#FFFFFF', borderRadius: '6px' };
      case 'image': return { backgroundColor: '#F3F4F6' };
      case 'section': return { backgroundColor: '#F9FAFB', borderRadius: '8px' };
      case 'shape': return { backgroundColor: '#10B981', borderRadius: '50%' };
      default: return {};
    }
  };

  const handleElementClick = (elementId: string) => {
    setSelectedElement(elementId);
  };

  const handleDeleteElement = () => {
    if (selectedElement) {
      setCanvasElements(prev => prev.filter(el => el.id !== selectedElement));
      setSelectedElement(null);
      toast.success("Element deleted!");
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
      case 'mobile': return 'max-w-sm';
      case 'tablet': return 'max-w-2xl';
      default: return 'w-full';
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      {/* Header */}
      <header className="bg-white border-b border-gray-200 px-4 py-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <Link to="/dashboard" className="text-blue-600 hover:text-blue-700">
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
            <Button variant="outline" size="sm">
              <Settings className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </header>

      <div className="flex-1 flex">
        {/* Sidebar - Elements Panel */}
        <aside className="w-64 bg-white border-r border-gray-200 p-4">
          <div className="mb-6">
            <h2 className="text-lg font-semibold mb-4">Elements</h2>
            <div className="space-y-2">
              {elements.map((element) => (
                <Card
                  key={element.id}
                  className="cursor-grab hover:shadow-md transition-shadow p-3"
                  draggable
                  onDragStart={() => handleDragStart(element.id)}
                >
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center">
                      <element.icon className="w-4 h-4 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="font-medium text-sm">{element.name}</h3>
                      <p className="text-xs text-gray-500">{element.description}</p>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>

          <div>
            <h2 className="text-lg font-semibold mb-4">Layers</h2>
            <div className="space-y-1">
              {canvasElements.map((element) => (
                <div
                  key={element.id}
                  className={`p-2 text-sm rounded cursor-pointer ${
                    selectedElement === element.id
                      ? 'bg-blue-50 text-blue-700'
                      : 'text-gray-600 hover:bg-gray-50'
                  }`}
                  onClick={() => handleElementClick(element.id)}
                >
                  {element.type.charAt(0).toUpperCase() + element.type.slice(1)} - {element.content.substring(0, 15)}
                </div>
              ))}
              {canvasElements.length === 0 && (
                <p className="text-gray-500 text-sm">No elements added yet</p>
              )}
            </div>
          </div>
        </aside>

        {/* Main Canvas */}
        <main className="flex-1 p-6">
          <div className="h-full bg-white rounded-lg border border-gray-200 shadow-sm overflow-hidden">
            <div className={`mx-auto transition-all duration-300 ${getCanvasWidth()}`}>
              {/* Canvas Content */}
              <div
                ref={canvasRef}
                className="min-h-full bg-white relative"
                onDragOver={handleDragOver}
                onDrop={handleDrop}
                style={{ minHeight: '600px' }}
              >
                {canvasElements.length === 0 ? (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center">
                      <Plus className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                      <h3 className="text-lg font-semibold text-gray-600 mb-2">Start Building</h3>
                      <p className="text-gray-500">Drag elements from the sidebar to get started</p>
                    </div>
                  </div>
                ) : (
                  canvasElements.map((element) => (
                    <div
                      key={element.id}
                      className={`absolute cursor-pointer border-2 ${
                        selectedElement === element.id
                          ? 'border-blue-500'
                          : 'border-transparent hover:border-gray-300'
                      }`}
                      style={{
                        left: element.x,
                        top: element.y,
                        width: element.width,
                        height: element.height,
                        ...element.style,
                      }}
                      onClick={() => handleElementClick(element.id)}
                    >
                      {element.type === 'text' && (
                        <div className="p-2 h-full flex items-center">
                          {element.content}
                        </div>
                      )}
                      {element.type === 'button' && (
                        <button className="w-full h-full px-4 py-2 text-sm font-medium">
                          {element.content}
                        </button>
                      )}
                      {element.type === 'image' && (
                        <div className="w-full h-full flex items-center justify-center border border-gray-300">
                          <Image className="w-8 h-8 text-gray-400" />
                        </div>
                      )}
                      {element.type === 'section' && (
                        <div className="w-full h-full p-4 flex items-center justify-center">
                          <span className="text-gray-500">Section</span>
                        </div>
                      )}
                      {element.type === 'shape' && (
                        <div className="w-full h-full"></div>
                      )}
                    </div>
                  ))
                )}
              </div>
            </div>
          </div>
        </main>

        {/* Properties Panel */}
        <aside className="w-64 bg-white border-l border-gray-200 p-4">
          <div className="mb-6">
            <h2 className="text-lg font-semibold mb-4">Properties</h2>
            {selectedElement ? (
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium mb-2">Element Type</label>
                  <Badge variant="outline" className="mb-4">
                    {canvasElements.find(e => e.id === selectedElement)?.type}
                  </Badge>
                </div>
                
                <div>
                  <label className="block text-sm font-medium mb-2">Content</label>
                  <input 
                    type="text" 
                    className="w-full border border-gray-300 rounded px-3 py-2" 
                    value={canvasElements.find(e => e.id === selectedElement)?.content || ''}
                    onChange={(e) => {
                      setCanvasElements(prev => prev.map(el => 
                        el.id === selectedElement 
                          ? { ...el, content: e.target.value }
                          : el
                      ));
                    }}
                  />
                </div>
                
                <Button 
                  variant="destructive" 
                  size="sm" 
                  onClick={handleDeleteElement}
                  className="w-full"
                >
                  <Trash2 className="w-4 h-4 mr-2" />
                  Delete Element
                </Button>
              </div>
            ) : (
              <p className="text-gray-500 text-center py-8">
                Select an element to edit its properties
              </p>
            )}
          </div>
        </aside>
      </div>
    </div>
  );
};

export default WebsiteEditor;
