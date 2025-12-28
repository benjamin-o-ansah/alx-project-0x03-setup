// interfaces/index.ts
import { ReactNode } from "react";

export interface ButtonProps {
  buttonLabel: string;
  buttonSize?: string;
  buttonBackgroundColor?: 'red' | 'blue' | 'orange' | 'green';
  action?: () => void;
}

export interface LayoutProps {
  children: ReactNode;
}

// Add any property listing interfaces if used in pages/index.tsx
export interface PropertyProps {
  id: number;
  name: string;
  image: string;
  price: number;
  rating: number;
}

export interface PageRouteProps {
  pageRoute: string
}