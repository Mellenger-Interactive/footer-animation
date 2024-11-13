import Matter, {
  Vector,
  IChamferableBodyDefinition,
  IRendererOptions,
} from "matter-js";

import { handleResize } from "../utils/resize";

interface ICustomBodyDefinition extends IChamferableBodyDefinition {
  url?: string;
}

interface Sizes {
  [key: string]: { width: number; height: number };
}

interface ColorMap {
  [key: string]: string;
}

export function MellengerFooterAnimation(containerId: string) {
  const Engine = Matter.Engine,
    Render = Matter.Render,
    Runner = Matter.Runner,
    Bodies = Matter.Bodies,
    Events = Matter.Events,
    Composite = Matter.Composite,
    Mouse = Matter.Mouse,
    MouseConstraint = Matter.MouseConstraint,
    Body = Matter.Body;

  const footerOutlineVertices: Vector[][] = [
    [
      {
        x: 98.5,
        y: 1.0,
      },
      {
        x: 6.0,
        y: 1.0,
      },
      {
        x: 1.0,
        y: 1.0,
      },
      {
        x: 1.0,
        y: 294.5,
      },
      {
        x: 1340.5,
        y: 294.5,
      },
      {
        x: 1340.5,
        y: 284.0,
      },
      {
        x: 1340.5,
        y: 148.0,
      },
      {
        x: 1340.8276,
        y: 145.0246,
      },
      {
        x: 1355.9886,
        y: 133.7265,
      },
      {
        x: 1375.5,
        y: 133.0,
      },
      {
        x: 1375.5,
        y: 53.0,
      },
      {
        x: 1350.5,
        y: 53.0,
      },
      {
        x: 1336.2039,
        y: 58.0475,
      },
      {
        x: 1322.5897,
        y: 72.5288,
      },
      {
        x: 1322.0,
        y: 73.5,
      },
      {
        x: 1322.0,
        y: 53.0,
      },
      {
        x: 1252.0,
        y: 53.0,
      },
      {
        x: 1252.0,
        y: 85.0,
      },
      {
        x: 1241.7128,
        y: 72.3458,
      },
      {
        x: 1225.288,
        y: 61.0479,
      },
      {
        x: 1206.6373,
        y: 53.9201,
      },
      {
        x: 1187.022,
        y: 50.1135,
      },
      {
        x: 1168.0,
        y: 49.0,
      },
      {
        x: 1167.0659,
        y: 49.0055,
      },
      {
        x: 1147.2433,
        y: 51.3679,
      },
      {
        x: 1128.2505,
        y: 57.5442,
      },
      {
        x: 1110.8174,
        y: 67.2582,
      },
      {
        x: 1110.5,
        y: 67.5,
      },
      {
        x: 1110.5,
        y: 18.5,
      },
      {
        x: 1062.0,
        y: 18.5,
      },
      {
        x: 1059.8995,
        y: 18.5363,
      },
      {
        x: 1040.8311,
        y: 23.7392,
      },
      {
        x: 1029.6176,
        y: 39.683,
      },
      {
        x: 1029.0,
        y: 49.0,
      },
      {
        x: 1018.3843,
        y: 49.1421,
      },
      {
        x: 998.4222,
        y: 50.309,
      },
      {
        x: 978.6185,
        y: 53.0508,
      },
      {
        x: 959.2859,
        y: 58.1053,
      },
      {
        x: 941.2185,
        y: 66.5844,
      },
      {
        x: 925.6837,
        y: 79.1132,
      },
      {
        x: 919.5,
        y: 85.0,
      },
      {
        x: 917.3888,
        y: 73.8064,
      },
      {
        x: 904.7094,
        y: 58.7239,
      },
      {
        x: 886.3914,
        y: 50.9706,
      },
      {
        x: 869.0,
        y: 49.0,
      },
      {
        x: 866.5428,
        y: 49.0548,
      },
      {
        x: 847.0388,
        y: 53.1137,
      },
      {
        x: 829.2859,
        y: 62.2177,
      },
      {
        x: 822.5,
        y: 67.5,
      },
      {
        x: 822.5,
        y: 49.0,
      },
      {
        x: 752.0,
        y: 49.0,
      },
      {
        x: 752.0,
        y: 108.0,
      },
      {
        x: 751.2256,
        y: 104.6976,
      },
      {
        x: 743.0063,
        y: 86.5454,
      },
      {
        x: 730.1777,
        y: 71.2762,
      },
      {
        x: 713.8705,
        y: 59.79,
      },
      {
        x: 695.2733,
        y: 52.551,
      },
      {
        x: 675.5662,
        y: 49.3203,
      },
      {
        x: 666.5,
        y: 49.0,
      },
      {
        x: 655.587,
        y: 49.4632,
      },
      {
        x: 635.9174,
        y: 52.9283,
      },
      {
        x: 617.2923,
        y: 60.1184,
      },
      {
        x: 600.6088,
        y: 71.0766,
      },
      {
        x: 586.7202,
        y: 85.4104,
      },
      {
        x: 576.5089,
        y: 102.546,
      },
      {
        x: 574.5,
        y: 108.0,
      },
      {
        x: 574.5,
        y: 1.0,
      },
      {
        x: 425.0,
        y: 1.0,
      },
      {
        x: 425.0,
        y: 108.0,
      },
      {
        x: 422.5659,
        y: 97.6156,
      },
      {
        x: 413.3261,
        y: 79.9634,
      },
      {
        x: 399.3592,
        y: 65.7461,
      },
      {
        x: 382.0012,
        y: 55.9307,
      },
      {
        x: 362.7725,
        y: 50.5766,
      },
      {
        x: 343.0,
        y: 49.0,
      },
      {
        x: 342.8583,
        y: 49.0002,
      },
      {
        x: 322.9421,
        y: 50.577,
      },
      {
        x: 303.6177,
        y: 55.6128,
      },
      {
        x: 285.7015,
        y: 64.4173,
      },
      {
        x: 270.108,
        y: 76.8755,
      },
      {
        x: 257.6904,
        y: 92.4968,
      },
      {
        x: 250.5,
        y: 108.0,
      },
      {
        x: 250.5,
        y: 1.0,
      },
      {
        x: 151.5,
        y: 1.0,
      },
      {
        x: 121.5,
        y: 77.5,
      },
    ],
  ];

  // const footerAnimation = () => {
  const initialBodyPositions = [];

  // Engine
  const engine = Engine.create({
    timing: {
      timeScale: 1,
    },
  });

  function updateEngine() {
    const fixedTimestep = 1000 / 80;
    Engine.update(engine, fixedTimestep);

    requestAnimationFrame(updateEngine);
  }

  requestAnimationFrame(updateEngine);

  engine.world.gravity.y = 0;

  Events.on(engine, "beforeUpdate", () => {
    if (
      window.scrollY >=
      document.body.scrollHeight - window.innerHeight - 50
    ) {
      engine.world.gravity.y = 2;
    }
  });

  // Renderer
  const canvasWidth = window.innerWidth;
  const canvasHeight = canvasWidth * 0.8;

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

  const topWall = Bodies.rectangle(
    canvasWidth / 2,
    canvasHeight,
    canvasWidth * 2,
    2,
    {
      isStatic: true,
      render: {
        strokeStyle: "white",
      },
    }
  );
  const bottomWall = Bodies.rectangle(
    canvasWidth / 2,
    canvasHeight,
    canvasWidth * 2,
    2,
    {
      isStatic: true,
      render: {
        fillStyle: "white",
        strokeStyle: "white",
      },
    }
  );
  const leftWall = Bodies.rectangle(0, canvasHeight / 2, 2, canvasHeight * 2, {
    isStatic: true,
    render: {
      fillStyle: "white",
      strokeStyle: "white",
    },
  });
  const rightWall = Bodies.rectangle(
    canvasWidth,
    canvasHeight / 2,
    2,
    canvasHeight * 2,
    {
      isStatic: true,
      render: {
        fillStyle: "white",
        strokeStyle: "white",
      },
    }
  );
  Composite.add(engine.world, [topWall, bottomWall, leftWall, rightWall]);

  //Logo
  const logoHeight = canvasWidth / 5;
  const logo = Bodies.rectangle(
    canvasWidth / 2,
    canvasHeight - logoHeight / 2,
    canvasWidth,
    logoHeight,
    {
      restitution: 0,
      friction: 1,
      isStatic: true,
      render: {
        sprite: {
          texture:
            "https://cdn.prod.website-files.com/66f46f702cf0b6ef3be0db49/66fc7bf9e82a4f5109989136_Union.svg",
          xScale: canvasWidth / 1440,
          yScale: canvasWidth / 1440,
        },
      },
    }
  );

  Body.set(logo, "collisionFilter", {
    group: -1,
    category: 2,
    mask: 0,
  });

  const logoOutline = Bodies.fromVertices(
    canvasWidth * 0.62,
    canvasHeight - (canvasWidth / 100) * 10.3,
    footerOutlineVertices,
    {
      restitution: 0,
      friction: 1,
      isStatic: true,
      render: {
        fillStyle: "#0031AF",
      },
    }
  );

  Body.scale(logoOutline, canvasWidth / 1370, canvasWidth / 1370);
  Composite.add(engine.world, [logoOutline, logo]);

  // Shapes
  const sizes: Sizes = {
    xssq: {
      width: 56,
      height: 56,
    },
    smsq: {
      width: 80,
      height: 80,
    },
    mdsq: {
      width: 120,
      height: 120,
    },
    lgsq: {
      width: 200,
      height: 200,
    },
    xsrec: {
      width: 80,
      height: 56,
    },
    smrec: {
      width: 88,
      height: 64,
    },
    mdrec: {
      width: 200,
      height: 96,
    },
    lgrec: {
      width: 200,
      height: 120,
    },
    xlgrec: {
      width: 320,
      height: 200,
    },
  };

  const colours: ColorMap = {
    charcoal: "#1A202C",
    brightAzure: "#327AE0",
    skyBlue: "#5BB0FF",
    lightPeriwinkle: "#BFCCEB",
    paleSkyBlue: "#ADDAE5",
    midnightBlue: "#002072",
  };

  const createBody = (
    hasImage: boolean = true,
    text: string = "",
    x: number,
    y: number,
    size: string,
    colourName: string,
    link: string | null,
    scale: number,
    bodyAngle: number,
    xScale?: number,
    yScale?: number
  ) => {
    const { width, height } = sizes[size] || {
      width: 120,
      height: 120,
    };
    const colour = colours[colourName];

    const body = Bodies.rectangle(x, y, width, height, {
      density: 10,
      restitution: 0.1,
      friction: 5,
      frictionAir: 0.02,
      render: {
        fillStyle: colour,
      },
    });

    if (scale != 1) {
      Body.scale(body, scale, scale);
    }

    Composite.add(engine.world, body);

    Body.setAngle(body, bodyAngle);
    initialBodyPositions.push({
      body,
      x,
      y,
    });

    const bodyText = Bodies.rectangle(
      body.position.x,
      body.position.y,
      Math.max(40, width / 2),
      20,
      {
        restitution: 0.1,
        friction: 1,
        isStatic: true,
        inertia: Infinity,
        frictionAir: 0.5,
        render: {
          sprite: {
            texture: String(
              hasImage ? text : createTextImage(text, colourName)
            ),
            xScale: hasImage ? xScale : 0.75,
            yScale: hasImage ? yScale : 0.75,
          },
        },
        url: link,
      } as ICustomBodyDefinition
    );

    Body.setPosition(bodyText, {
      x: body.position.x,
      y: body.position.y,
    });

    const collisionGroup = Body.nextGroup(true);
    Body.set(body, "collisionFilter", {
      group: collisionGroup,
      category: 0x0001,
      mask: 0xffff,
    });
    Body.set(bodyText, "collisionFilter", {
      group: collisionGroup,
      category: 0x0001,
      mask: 0xffff,
    });

    Composite.add(engine.world, bodyText);

    //keep bodyText on top of body
    Events.on(engine, "beforeUpdate", function () {
      Body.setPosition(bodyText, {
        x: body.position.x,
        y: body.position.y,
      });
      Body.setAngle(bodyText, body.angle);
    });

    return body;
  };

  const createTextImage = (string: string, colourName: string) => {
    const drawing = document.createElement("canvas");
    drawing.width = 250;
    drawing.height = 200;
    const ctx = drawing.getContext("2d");
    if (!ctx) return;

    // Clear the canvas
    ctx.clearRect(0, 0, drawing.width, drawing.height);

    // Set text properties
    ctx.fillStyle =
      colourName === "charcoal" ||
      colourName === "brightAzure" ||
      colourName === "midnightBlue"
        ? "#fff"
        : "#000";
    ctx.font =
      string === "© 2024 Mellenger Interactive."
        ? "12pt Hanken Grotesk, sans-serif"
        : "20pt Hanken Grotesk, sans-serif";
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";

    // Add text to the canvas
    ctx.fillText(string, drawing.width / 2, drawing.height / 2);

    drawing.style.cursor = "pointer";

    return drawing.toDataURL("image/png");
  };

  const links = [
    {
      hasImage: false,
      text: "Services",
      positionX: canvasWidth > 768 ? canvasWidth * 0.1 : canvasWidth * 0.1,
      positionY: -250,
      size: "lgrec",
      color: "brightAzure",
      link: "/services",
      xScale: 0,
      yScale: 0,
    },
    {
      hasImage: false,
      text: "Our work",
      positionX: canvasWidth > 768 ? canvasWidth * 0.7 : canvasWidth * 0,
      positionY: -290,
      size: "lgsq",
      color: "skyBlue",
      link: "/our-work",
      xScale: 0,
      yScale: 0,
    },
    {
      hasImage: false,
      text: "About",
      positionX: canvasWidth > 768 ? canvasWidth * 0.3 : canvasWidth * 0.3,
      positionY: -250,
      size: "mdsq",
      color: "paleSkyBlue",
      link: "/about-us",
      xScale: 0,
      yScale: 0,
    },
    {
      hasImage: false,
      text: "Get in touch",
      positionX: canvasWidth > 768 ? canvasWidth * 0.4 : canvasWidth * 0.4,
      positionY: -250,
      size: "lgrec",
      color: "charcoal",
      link: "/contact-us",
    },
    {
      hasImage: false,
      text: "Blog",
      positionX: canvasWidth > 768 ? canvasWidth * 0.5 : canvasWidth * 0.5,
      positionY: -250,
      size: "smsq",
      color: "brightAzure",
      link: "/blog",
      xScale: 0,
      yScale: 0,
    },
    {
      hasImage: false,
      text: "Process",
      positionX: canvasWidth > 768 ? canvasWidth * 0.2 : canvasWidth * 0.2,
      positionY: -250,
      size: "mdrec",
      color: "midnightBlue",
      link: "/services",
      xScale: 0,
      yScale: 0,
    },
    {
      hasImage: false,
      text: "© 2024 Mellenger Interactive.",
      positionX: canvasWidth > 768 ? canvasWidth * 0.9 : canvasWidth * 0.8,
      positionY: canvasHeight * 0.65,
      size: "mdrec",
      color: "lightPeriwinkle",
      link: null,
      xScale: 0,
      yScale: 0,
    },
    {
      hasImage: true,
      text: "https://cdn.prod.website-files.com/66f46f702cf0b6ef3be0db49/66fc829c9758c3e9b1586dae_Social%20icon.svg",
      positionX: canvasWidth > 768 ? canvasWidth * 0.9 : canvasWidth * 0.8,
      positionY: canvasHeight * 0.65 - 100,
      size: "xssq",
      color: "midnightBlue",
      link: "https://www.instagram.com/mellengerinteractive",
      xScale: 1,
      yScale: 1,
    },
    {
      hasImage: true,
      text: "https://cdn.prod.website-files.com/66f46f702cf0b6ef3be0db49/66fc829c9758c3e9b1586d57_Social%20icon-1.svg",
      positionX: canvasWidth > 768 ? canvasWidth * 0.95 : canvasWidth * 0.6,
      positionY: canvasHeight * 0.65 - 100,
      size: "xssq",
      color: "brightAzure",
      link: "https://ca.linkedin.com/company/mellenger-interactive-ltd",
      xScale: 1,
      yScale: 1,
    },
  ];

  links.forEach((link) => {
    createBody(
      link.hasImage,
      link.text,
      link.positionX,
      link.positionY,
      link.size,
      link.color,
      link.link,
      1,
      0,
      link.xScale,
      link.yScale
    );
  });

  const octoboiImage =
    "https://mellenger-interactive.github.io/footer-animation/images/wand.webp";

  const staff = [
    {
      image:
        "https://mellenger-interactive.github.io/footer-animation/images/andrew.webp",
    },
    {
      image:
        "https://mellenger-interactive.github.io/footer-animation/images/chino.webp",
    },
    {
      image:
        "https://mellenger-interactive.github.io/footer-animation/images/codt.webp",
    },
    {
      image:
        "https://mellenger-interactive.github.io/footer-animation/images/danika.webp",
    },
    {
      image:
        "https://mellenger-interactive.github.io/footer-animation/images/dawn.webp",
    },
    {
      image:
        "https://mellenger-interactive.github.io/footer-animation/images/doug.webp",
    },
    {
      image:
        "https://mellenger-interactive.github.io/footer-animation/images/francois.webp",
    },
    {
      image:
        "https://mellenger-interactive.github.io/footer-animation/images/megan.webp",
    },
    {
      image:
        "https://mellenger-interactive.github.io/footer-animation/images/muneeba.webp",
    },
    {
      image:
        "https://mellenger-interactive.github.io/footer-animation/images/philippe.webp",
    },
  ];

  const initialBox = createBody(
    true,
    octoboiImage,
    canvasWidth > 768 ? canvasWidth * 0.6 : canvasWidth * 0.6,
    -250,
    "medsq",
    "paleSkyBlue",
    null,
    1,
    0,
    0.6,
    0.6
  );

  let currentStaffIndex = 0;

  const generateStaffBox = (x: number, y: number) => {
    if (currentStaffIndex >= staff.length) {
      return null;
    }

    const staffMember = staff[currentStaffIndex];

    const staffBox = createBody(
      true,
      staffMember.image,
      x,
      y,
      "mdsq",
      "paleSkyBlue",
      null,
      1,
      0,
      0.6,
      0.6
    );

    currentStaffIndex++;

    return staffBox;
  };

  //Mouse
  const mouse = Mouse.create(render.canvas);
  const mouseConstraint = MouseConstraint.create(engine, {
    mouse: mouse,
    constraint: {
      stiffness: 1,
      render: {
        visible: false,
      },
    },
  });

  console.log(mouseConstraint.mouse)

  // mouseConstraint.mouse.element.removeEventListener("mousewheel", mouseConstraint.mouse.mousewheel);
  // mouseConstraint.mouse.element.removeEventListener("DOMMouseScroll", mouseConstraint.mouse.mousewheel);
  // mouseConstraint.mouse.element.removeEventListener('touchstart', mouseConstraint.mouse.mousedown);
  // mouseConstraint.mouse.element.removeEventListener('touchmove', mouseConstraint.mouse.mousemove);
  // mouseConstraint.mouse.element.removeEventListener('touchend', mouseConstraint.mouse.mouseup);
  // mouseConstraint.mouse.element.addEventListener('touchstart', mouseConstraint.mouse.mousedown, { passive: true });
  // mouseConstraint.mouse.element.addEventListener('touchmove', (event) => {
  //   if (mouseConstraint.body) {
  //     mouseConstraint.mouse.mousemove(event);
  //   }
  // });
  // mouseConstraint.mouse.element.addEventListener('touchend', (event) => {
  //   if (mouseConstraint.body) {
  //     mouseConstraint.mouse.mouseup(event);
  //   }
  // });

  Composite.add(engine.world, mouseConstraint);

  Events.on(mouseConstraint, "mousedown", function (event) {
    const mouseConstraint = event.source;
    const bodies = engine.world.bodies;
    if (mouseConstraint.body) {
      for (let i = bodies.length - 1; i >= 0; i--) {
        const body: any = bodies[i];
        if (
          Matter.Bounds.contains(body.bounds, mouseConstraint.mouse.position)
        ) {
          const bodyUrl = typeof body.url ? body.url : null;
          // Hyperlinking feature
          if (bodyUrl) {
            window.location.href = bodyUrl;
          }
          break;
        }
      }
    }
  });

  const canvas = document.querySelector("#footer-wrap canvas");
  canvas?.addEventListener("dblclick", (event) => {
    const mouseEvent = event as MouseEvent;
    const rect = canvas.getBoundingClientRect();
    const mousePosition = {
      x: mouseEvent.clientX - rect.left,
      y: mouseEvent.clientY - rect.top,
    };
    const bodies: Matter.Body[] = Composite.allBodies(engine.world);

    let clickedBody;
    for (let i = 0; i < bodies.length; i++) {
      const body = bodies[i];
      if (Matter.Bounds.contains(body.bounds, mousePosition)) {
        clickedBody = body;
        break;
      }
    }

    if (clickedBody === initialBox && currentStaffIndex <= staff.length) {
      generateStaffBox(initialBox.position.x, initialBox.position.y);
    }
  });

  render.mouse = mouse;

  // run the renderer
  Render.run(render);

  // create runner
  const runner = Runner.create();

  // run the engine
  Runner.run(runner, engine);

  handleResize(render, engine, containerId, MellengerFooterAnimation)
}

