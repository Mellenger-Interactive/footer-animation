import * as Matter from "matter-js";

interface Size {
  width: number;
  height: number;
}

export const handleCanvasResize = (
  render: Matter.Render | null,
  engine: Matter.Engine | null,
  containerId: string,
  animationFunction: (containerId: string) => void
) => {
  let resizeTimeout: number | null = null;
  let canvasInitialized = false;

  window.addEventListener("resize", () => {
    if (resizeTimeout) {
      clearTimeout(resizeTimeout);
    }

    resizeTimeout = setTimeout(() => {
      const existingCanvas = document.querySelectorAll(
        `#${containerId} canvas`
      );
      
      if (existingCanvas.length > 0 && !canvasInitialized) {
        existingCanvas.forEach((canvas: Element) => {
          const canvasElement = canvas as HTMLCanvasElement;
          canvasElement.remove();
        });
      }

      if (!canvasInitialized) {
        if (render) {
          Matter.Render.stop(render);
          if (render.canvas) {
            render.canvas.remove();
            render.textures = {};
          }
        }

        if (engine) {
          Matter.Composite.clear(engine.world, true);
          Matter.Engine.clear(engine);
        }

        animationFunction(containerId);
        canvasInitialized = true; 
      }
    }, 300); 
  });
};

export const handleObjectResize = (size: Size) => {
  const maxWidth = size.width;
  const maxHeight = size.height;
  const screenWidth = window.innerWidth;
  let scaleFactor = 1;

  if (screenWidth < 1440) {
    if (screenWidth < 900) {
      scaleFactor = (screenWidth / 1800) * 1.5;
    } else {
      scaleFactor = screenWidth / 1800;
    }
  }

  const calculatedWidth = Math.max(maxWidth * scaleFactor, 40);
  const calculatedHeight = Math.max(maxHeight * scaleFactor, 40);

  return { width: calculatedWidth, height: calculatedHeight };
};

export const handleFooterObjectResize = (size: Size) => {
  const maxWidth = size.width;
  const maxHeight = size.height;
  const screenWidth = window.innerWidth;
  let scaleFactor = 1;

  if (screenWidth < 900) {
    if (screenWidth < 400) {
      scaleFactor = (screenWidth / 1050) * 1.6;
    } else {
      scaleFactor = screenWidth / 900;
    }
  }

  const calculatedWidth = Math.max(maxWidth * scaleFactor, 40);
  const calculatedHeight = Math.max(maxHeight * scaleFactor, 40);

  return { width: calculatedWidth, height: calculatedHeight, scaleFactor: scaleFactor };
};
