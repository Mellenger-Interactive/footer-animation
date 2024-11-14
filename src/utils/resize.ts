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
  let canvasInitialized = true;

  window.addEventListener("resize", () => {
    if (resizeTimeout) {
      clearTimeout(resizeTimeout);
    }

    resizeTimeout = setTimeout(() => {
      if (canvasInitialized) {
        if (render) {
          Matter.Render.stop(render); // Stop the current render
          if (render.canvas) {
            render.canvas.remove(); // Remove the canvas
          }
        }

        // Remove any existing canvas elements from the DOM
        const existingCanvas = document.querySelectorAll(
          `#${containerId} canvas`
        );
        if (existingCanvas.length > 0) {
          existingCanvas.forEach((canvas: Element) => {
            const canvasElement = canvas as HTMLCanvasElement;
            canvasElement.remove();
          });
        }

        if (engine) {
          Matter.Engine.clear(engine); // Clear the Matter engine
        }
        canvasInitialized = false;
      }

      if (!canvasInitialized) {
        // Call the provided animation function
        animationFunction(containerId);
        canvasInitialized = true;
      }
    }, 200); // Debounce the resize event with a timeout
  });
};

export const handleObjectResize = (size: Size) => {
  const maxWidth = size.width;
  const maxHeight = size.height;
  const screenWidth = window.innerWidth;
  let scaleFactor = 1;

  if (screenWidth < 1440) {
    if (screenWidth < 900) {
      scaleFactor = (screenWidth / 1800) * 0.75;
    } else {
      scaleFactor = screenWidth / 1800;
    }
  }

  const calculatedWidth = Math.max(maxWidth * scaleFactor, 40);
  const calculatedHeight = Math.max(maxHeight * scaleFactor, 40);

  return { width: calculatedWidth, height: calculatedHeight };
};

