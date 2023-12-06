import * as React from "react";
import * as ReactDOM from "react-dom";

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
    const div = document.createElement("div");
    ReactDOM.render(reactElement, div);
    return div;
  };
  