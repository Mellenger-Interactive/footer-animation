import Matter, { IRendererOptions } from "matter-js";
import { parseSVG } from "svg-path-parser";
import * as polyDecomp from "poly-decomp";
import { handleResize } from "../utils/resize";

interface Size {
  width: number;
  height: number;
}

declare module "matter-js" {
  interface Body {
    targetColor?: string;
    currentColor?: string;
    t?: number;
  }
}

type Sizes = Size[];

export function MellengerHomePageAnimation(containerId: string) {
  const Engine = Matter.Engine,
    Render = Matter.Render,
    Runner = Matter.Runner,
    Bodies = Matter.Bodies,
    Composite = Matter.Composite,
    Common = Matter.Common;

  Common.setDecomp(polyDecomp);

  const engine = Engine.create({
    timing: {
      timeScale: 0.2,
    },
  });

  engine.world.gravity.y = 0;

  const canvasWidth = window.innerWidth;
  const canvasHeight = window.innerWidth * 0.6;

  const render = Render.create({
    element: document.getElementById(containerId) as HTMLElement,
    engine: engine,
    options: {
      width: canvasWidth,
      height: canvasHeight,
      wireframes: false,
      pixelRatio: 2,
      background: "#0031AF",
    } as IRendererOptions,
  });

  //Custom Canvas Shape
  let terrain = null;
  if (typeof fetch !== "undefined") {
    const select = (root: ParentNode, selector: string): Element[] => {
      return Array.from(root.querySelectorAll(selector));
    };

    const loadSvg = async (url: string): Promise<Document> => {
      const response = await fetch(url);
      const rawSvg = await response.text();
      return new window.DOMParser().parseFromString(rawSvg, "image/svg+xml");
    };

    loadSvg("src/images/HomeBG_Bottom_SVG.svg").then((root: Document) => {
      const path = select(root, "path")[0] as SVGPathElement;
      if (!path || !(path instanceof SVGPathElement)) {
        throw new Error("No path found in svg file");
      }
      const pathData = path.getAttribute("d");
      if (!pathData) {
        throw new Error('SVG path has no "d" attribute');
      }

      const parsedPath = parseSVG(pathData);
      const allVertices: any[] = [];

      let currentShape: any[] = [];
      parsedPath.forEach((segment) => {
        if (segment.code === "M") {
          if (currentShape.length > 0) {
            allVertices.push(currentShape);
            currentShape = [];
          }
        }
        if (segment.code === "M" || segment.code === "L") {
          currentShape.push({ x: segment.x, y: segment.y });
        }
        if (segment.code === "H") {
          currentShape.push({
            x: segment.x,
            y: currentShape[currentShape.length - 1].y,
          });
        }
        if (segment.code === "V") {
          currentShape.push({
            x: currentShape[currentShape.length - 1].x,
            y: segment.y,
          });
        }
        if (segment.code === "Z") {
          allVertices.push(currentShape);
          currentShape = [];
        }
      });

      const bottomShape = allVertices[2];
      const minX = Math.min(...bottomShape.map((p: { x: any }) => p.x));
      const maxX = Math.max(...bottomShape.map((p: { x: any }) => p.x));
      const shapeWidth = maxX - minX;
      const scaleX = canvasWidth / shapeWidth;

      const scaledVertices = bottomShape.map((p: { x: number; y: number }) => ({
        x: (p.x - minX) * scaleX,
        y: p.y * scaleX,
      }));

      terrain = Bodies.fromVertices(
        canvasWidth / 2.3,
        canvasHeight / 1.085,
        scaledVertices,
        {
          isStatic: true,
          restitution: 1,
          render: {
            fillStyle: "white",
            strokeStyle: "white",
            lineWidth: 1,
          },
          collisionFilter: {
            mask: 1,
          },
          label: "Terrain",
        }
      );
      Composite.add(engine.world, terrain);
    });
  }

  //Borders
  const drawWalls = () => {
    const Bodies = Matter.Bodies;
    const margin = 1;
    const wallOptions = {
      isStatic: true,
      render: {
        fillStyle: "white",
        strokeStyle: "white",
        lineWidth: 4,
      },
      collisionFilter: {
        mask: 1,
      },
      label: "Wall",
    };

    const wallData = [
      { x: 0, y: canvasHeight, width: canvasWidth * 2, height: margin },
      { x: canvasWidth, y: 0, width: margin, height: canvasHeight * 2 },
      { x: 0, y: 0, width: canvasWidth * 2, height: margin },
      { x: 0, y: 0, width: margin, height: canvasHeight * 2 },
    ];

    return wallData.map((wall) =>
      Bodies.rectangle(wall.x, wall.y, wall.width, wall.height, wallOptions)
    );
  };

  const walls = drawWalls();
  Matter.Composite.add(engine.world, walls);

  //Shapes
  const shapeSizes: Sizes = [
    { width: 400, height: 200 },
    { width: 200, height: 200 },
    { width: 400, height: 400 },
    { width: 120, height: 120 },
    { width: 120, height: 200 },
  ];

  const colours = [
    "rgba(0, 32, 114, 0.5)",
    "rgba(46, 55, 72, 0.5333)",
    "rgba(91, 176, 255, 0.50196)",
    "rgba(26, 32, 44, 0.50196)",
    "rgba(173, 218, 229, 0.50196)",
  ];

  const calculateParticleSize = (size: Size) => {
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

  const createParticle = (
    particleSize: { width: number; height: number },
    colour: string
  ) => {
    const particleX = Math.random() * (canvasWidth - particleSize.width);
    const particleY = Math.random() * (canvasHeight - particleSize.height);

    const particle = Matter.Bodies.rectangle(
      particleX,
      particleY,
      particleSize.width,
      particleSize.height,
      {
        restitution: 1,
        friction: 0,
        frictionAir: 0,
        render: {
          fillStyle: colour,
        },
      }
    );
    Composite.add(engine.world, particle);
    Matter.Body.setInertia(particle, Infinity);

    return particle;
  };

  const particles: Matter.Body[] = [];
  shapeSizes.forEach((size, index) => {
    const colour = colours[index];
    const particleSize = calculateParticleSize(size);
    const particle = createParticle(particleSize, colour);

    const angularVelocity = (1 / (size.width * size.height)) * 1000;
    const randomSign = Math.random() < 0.5 ? -1 : 1;
    const finalAngularVelocity = angularVelocity * randomSign;

    Matter.Body.setAngularVelocity(particle, finalAngularVelocity);

    particles.push(particle);
  });

  //Movement
  const particleSpeed = 2;
  particles.forEach((particle) => {
    const direction = Math.random() * Math.PI * 2;
    Matter.Body.setVelocity(particle, {
      x: Math.sin(direction) * particleSpeed,
      y: Math.cos(direction) * particleSpeed,
    });
  });

  const adjustE = function (particle: Matter.Body) {
    if (Math.abs(particle.speed - particleSpeed) > 0.2) {
      let speedMultiplier = particleSpeed / particle.speed;

      Matter.Body.setVelocity(particle, {
        x: particle.velocity.x * speedMultiplier,
        y: particle.velocity.y * speedMultiplier,
      });
    }
  };

  const handleWallCollision = (particle: Matter.Body, wall: Matter.Body) => {
    if (wall === walls[0] || wall === walls[2]) {
      Matter.Body.setVelocity(particle, {
        x: particle.velocity.x,
        y: -particle.velocity.y,
      });
    } else if (wall === walls[1] || wall === walls[3]) {
      Matter.Body.setVelocity(particle, {
        x: -particle.velocity.x,
        y: particle.velocity.y,
      });
    }
  };

  const handleTerrainCollision = (
    particle: Matter.Body,
    collision: Matter.Collision
  ) => {
    const normal = collision.normal || { x: 0, y: 0 };
    const newVelocity = {
      x: particle.velocity.x * (normal.x < 0 ? -1 : 1),
      y: particle.velocity.y * (normal.y < 0 ? -1 : 1),
    };
    Matter.Body.setVelocity(particle, newVelocity);
    adjustE(particle);
  };

  Matter.Events.on(engine, "collisionStart", (event) => {
    event.pairs.forEach(({ bodyA, bodyB, collision }) => {
      const isParticleA = particles.includes(bodyA);
      const isParticleB = particles.includes(bodyB);

      if (isParticleA || isParticleB) {
        const particle = isParticleA ? bodyA : bodyB;
        const otherBody = isParticleA ? bodyB : bodyA;

        if (otherBody.label === "Wall") {
          handleWallCollision(particle, otherBody);
        } else if (otherBody.label === "Terrain") {
          handleTerrainCollision(particle, collision);
        }
      }
    });
  });

  Matter.Events.on(engine, "beforeUpdate", function () {
    particles.forEach((particle) => {
      adjustE(particle);
    });
  });

  Render.run(render);
  const runner = Runner.create();
  Runner.run(runner, engine);

  handleResize(render, engine, containerId, MellengerHomePageAnimation)
}
