
import { useState } from "react";
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
  Tablet
} from "lucide-react";
import { Link, useParams } from "react-router-dom";
import { toast } from "sonner";

const WebsiteEditor = () => {
  const { type, id } = useParams();
  const [selectedElement, setSelectedElement] = useState<string | null>(null);
  const [viewMode, setViewMode] = useState<'desktop' | 'tablet' | 'mobile'>('desktop');

  const elements = [
    { id: 'text', name: 'Text', icon: Type, description: 'Add headings and paragraphs' },
    { id: 'image', name: 'Image', icon: Image, description: 'Upload and display images' },
    { id: 'button', name: 'Button', icon: Square, description: 'Call-to-action buttons' },
    { id: 'section', name: 'Section', icon: Layout, description: 'Container for other elements' },
    { id: 'circle', name: 'Shape', icon: Circle, description: 'Geometric shapes' },
  ];

  const handleSave = () => {
    toast.success("Website saved successfully!");
  };

  const handlePreview = () => {
    toast.info("Opening preview in new tab...");
  };

  const handlePublish = () => {
    toast.success("Website published! Your site is now live.");
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
                  className="cursor-pointer hover:shadow-md transition-shadow p-3"
                  onClick={() => setSelectedElement(element.id)}
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
              <div className="p-2 text-sm bg-blue-50 text-blue-700 rounded">
                Header Section
              </div>
              <div className="p-2 text-sm text-gray-600 rounded hover:bg-gray-50">
                Hero Section
              </div>
              <div className="p-2 text-sm text-gray-600 rounded hover:bg-gray-50">
                Content Section
              </div>
              <div className="p-2 text-sm text-gray-600 rounded hover:bg-gray-50">
                Footer Section
              </div>
            </div>
          </div>
        </aside>

        {/* Main Canvas */}
        <main className="flex-1 p-6">
          <div className="h-full bg-white rounded-lg border border-gray-200 shadow-sm overflow-hidden">
            <div className={`mx-auto transition-all duration-300 ${
              viewMode === 'desktop' ? 'max-w-full' : 
              viewMode === 'tablet' ? 'max-w-2xl' : 'max-w-sm'
            }`}>
              {/* Canvas Content */}
              <div className="min-h-full bg-white">
                {/* Sample Website Content */}
                <div className="p-8">
                  <div className="text-center mb-12">
                    <h1 className="text-4xl font-bold mb-4 cursor-pointer hover:outline hover:outline-2 hover:outline-blue-500 p-2">
                      Your Website Title
                    </h1>
                    <p className="text-xl text-gray-600 cursor-pointer hover:outline hover:outline-2 hover:outline-blue-500 p-2">
                      Click to edit this subtitle
                    </p>
                  </div>

                  <div className="grid md:grid-cols-2 gap-8 mb-12">
                    <div className="cursor-pointer hover:outline hover:outline-2 hover:outline-blue-500 p-4">
                      <div className="aspect-video bg-gray-200 rounded-lg mb-4 flex items-center justify-center">
                        <Plus className="w-8 h-8 text-gray-400" />
                      </div>
                      <h2 className="text-2xl font-semibold mb-2">Add Image</h2>
                      <p className="text-gray-600">Click to add an image or drag from the sidebar</p>
                    </div>
                    
                    <div className="cursor-pointer hover:outline hover:outline-2 hover:outline-blue-500 p-4">
                      <h2 className="text-2xl font-semibold mb-4">About Section</h2>
                      <p className="text-gray-600 mb-4">
                        Click to edit this text. You can add multiple paragraphs, 
                        format text, and create engaging content for your visitors.
                      </p>
                      <Button className="cursor-pointer hover:outline hover:outline-2 hover:outline-blue-500">
                        Call to Action
                      </Button>
                    </div>
                  </div>

                  <div className="text-center">
                    <div className="border-2 border-dashed border-gray-300 rounded-lg p-12 cursor-pointer hover:border-blue-500 hover:bg-blue-50 transition-colors">
                      <Plus className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                      <h3 className="text-lg font-semibold text-gray-600 mb-2">Add New Section</h3>
                      <p className="text-gray-500">Drag elements here or click to add content</p>
                    </div>
                  </div>
                </div>
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
                    {elements.find(e => e.id === selectedElement)?.name}
                  </Badge>
                </div>
                
                <div>
                  <label className="block text-sm font-medium mb-2">Width</label>
                  <input 
                    type="number" 
                    className="w-full border border-gray-300 rounded px-3 py-2" 
                    placeholder="100%" 
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium mb-2">Height</label>
                  <input 
                    type="number" 
                    className="w-full border border-gray-300 rounded px-3 py-2" 
                    placeholder="auto" 
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium mb-2">Margin</label>
                  <input 
                    type="number" 
                    className="w-full border border-gray-300 rounded px-3 py-2" 
                    placeholder="0" 
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium mb-2">Padding</label>
                  <input 
                    type="number" 
                    className="w-full border border-gray-300 rounded px-3 py-2" 
                    placeholder="0" 
                  />
                </div>
              </div>
            ) : (
              <p className="text-gray-500 text-center py-8">
                Select an element to edit its properties
              </p>
            )}
          </div>

          <div>
            <h2 className="text-lg font-semibold mb-4">Page Settings</h2>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-2">Page Title</label>
                <input 
                  type="text" 
                  className="w-full border border-gray-300 rounded px-3 py-2" 
                  placeholder="Page Title" 
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-2">Meta Description</label>
                <textarea 
                  className="w-full border border-gray-300 rounded px-3 py-2" 
                  rows={3}
                  placeholder="Page description for SEO..." 
                />
              </div>
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
};

export default WebsiteEditor;
