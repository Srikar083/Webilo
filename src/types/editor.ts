
export interface CanvasElement {
  id: string;
  type: 'text' | 'heading' | 'image' | 'button' | 'section' | 'shape' | 'divider' | 'spacer';
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
    fontWeight?: string;
    textAlign?: string;
    padding?: string;
    margin?: string;
  };
}

export interface Template {
  id: string;
  name: string;
  description: string;
  thumbnail: string;
  category: string;
  elements: CanvasElement[];
}
