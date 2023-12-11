import * as React from "react";
import { createRoot } from 'react-dom/client';

export function getSize(size: string) {
  switch(size) {
    case "small":
      return {height: 30};
    case "medium":
      return {height: 40};
    case "large":
      return {height: 50};
    default:
      return {height: 40};
  }
}



export const reactDomRender = (
    reactElement: React.ReactElement
): HTMLElement | undefined => {
  const div = document.createElement('div');
  const root = createRoot(div);
  root.render(reactElement);
  return div;
};