
import { Button } from "@/components/ui/button";
import { 
  Type, 
  Image, 
  Square, 
  Circle,
  Layout,
  Minus,
  Plus,
  Palette,
  AlignLeft,
  AlignCenter,
  AlignRight
} from "lucide-react";

interface ElementToolbarProps {
  onAddElement: (type: string) => void;
}

export const ElementToolbar = ({ onAddElement }: ElementToolbarProps) => {
  const elements = [
    { id: 'text', name: 'Text', icon: Type, description: 'Add text element' },
    { id: 'heading', name: 'Heading', icon: Type, description: 'Add heading' },
    { id: 'button', name: 'Button', icon: Square, description: 'Add button' },
    { id: 'image', name: 'Image', icon: Image, description: 'Add image' },
    { id: 'section', name: 'Container', icon: Layout, description: 'Add container' },
    { id: 'divider', name: 'Divider', icon: Minus, description: 'Add divider line' },
    { id: 'spacer', name: 'Spacer', icon: Plus, description: 'Add spacing' },
    { id: 'shape', name: 'Shape', icon: Circle, description: 'Add shape' },
  ];

  return (
    <div className="space-y-4">
      <div>
        <h3 className="text-sm font-semibold mb-3">Basic Elements</h3>
        <div className="grid grid-cols-1 gap-2">
          {elements.slice(0, 4).map((element) => (
            <Button
              key={element.id}
              variant="outline"
              className="w-full justify-start p-3 h-auto"
              onClick={() => onAddElement(element.id)}
            >
              <element.icon className="w-4 h-4 mr-2" />
              <div className="text-left">
                <div className="font-medium text-sm">{element.name}</div>
                <div className="text-xs text-gray-500">{element.description}</div>
              </div>
            </Button>
          ))}
        </div>
      </div>
      
      <div>
        <h3 className="text-sm font-semibold mb-3">Layout</h3>
        <div className="grid grid-cols-1 gap-2">
          {elements.slice(4).map((element) => (
            <Button
              key={element.id}
              variant="outline"
              className="w-full justify-start p-3 h-auto"
              onClick={() => onAddElement(element.id)}
            >
              <element.icon className="w-4 h-4 mr-2" />
              <div className="text-left">
                <div className="font-medium text-sm">{element.name}</div>
                <div className="text-xs text-gray-500">{element.description}</div>
              </div>
            </Button>
          ))}
        </div>
      </div>
    </div>
  );
};
