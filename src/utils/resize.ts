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
      clearTimeout(resizeTimeout); // Clear the previous timeout if resizing is still ongoing.
    }

    resizeTimeout = setTimeout(() => {
      // Remove any existing canvas elements only if it's not initialized yet
      const existingCanvas = document.querySelectorAll(
        `#${containerId} canvas`
      );
      
      if (existingCanvas.length > 0 && !canvasInitialized) {
        existingCanvas.forEach((canvas: Element) => {
          const canvasElement = canvas as HTMLCanvasElement;
          canvasElement.remove();
          console.log("canvas removed");
        });
      }

      if (!canvasInitialized) {
        if (render) {
          // Stop the render loop and remove the existing canvas if needed
          Matter.Render.stop(render);
          if (render.canvas) {
            render.canvas.remove();
            render.textures = {}; // Clear any textures to ensure fresh start
          }
        }

        if (engine) {
          // Clear Matter.js engine world and reset the engine
          Matter.Composite.clear(engine.world, true);
          Matter.Engine.clear(engine);
        }

        // Initialize a new canvas after clearing the old one
        animationFunction(containerId);
        canvasInitialized = true; // Mark the canvas as initialized
      }
    }, 300); // Wait for the resize to settle before reinitializing
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
