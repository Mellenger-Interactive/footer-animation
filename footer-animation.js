// module aliases
const Engine = Matter.Engine,
      Render = Matter.Render,
      Runner = Matter.Runner,
      Bodies = Matter.Bodies,
      Events = Matter.Events,
      Composite = Matter.Composite,
      Common = Matter.Common,
      Mouse = Matter.Mouse,
      MouseConstraint = Matter.MouseConstraint,
      Body = Matter.Body;

      
const footerOutlineVertices = [
    { x: 98.5000, y: 1.0000 },
    { x: 6.0000, y: 1.0000 },
    { x: 1.0000, y: 1.0000 },
    { x: 1.0000, y: 294.5000 },
    { x: 1340.5000, y: 294.5000 },
    { x: 1340.5000, y: 284.0000 },
    { x: 1340.5000, y: 148.0000 },
    { x: 1340.8276, y: 145.0246 },
    { x: 1355.9886, y: 133.7265 },
    { x: 1375.5000, y: 133.0000 },
    { x: 1375.5000, y: 53.0000 },
    { x: 1350.5000, y: 53.0000 },
    { x: 1336.2039, y: 58.0475 },
    { x: 1322.5897, y: 72.5288 },
    { x: 1322.0000, y: 73.5000 },
    { x: 1322.0000, y: 53.0000 },
    { x: 1252.0000, y: 53.0000 },
    { x: 1252.0000, y: 85.0000 },
    { x: 1241.7128, y: 72.3458 },
    { x: 1225.2880, y: 61.0479 },
    { x: 1206.6373, y: 53.9201 },
    { x: 1187.0220, y: 50.1135 },
    { x: 1168.0000, y: 49.0000 },
    { x: 1167.0659, y: 49.0055 },
    { x: 1147.2433, y: 51.3679 },
    { x: 1128.2505, y: 57.5442 },
    { x: 1110.8174, y: 67.2582 },
    { x: 1110.5000, y: 67.5000 },
    { x: 1110.5000, y: 18.5000 },
    { x: 1062.0000, y: 18.5000 },
    { x: 1059.8995, y: 18.5363 },
    { x: 1040.8311, y: 23.7392 },
    { x: 1029.6176, y: 39.6830 },
    { x: 1029.0000, y: 49.0000 },
    { x: 1018.3843, y: 49.1421 },
    { x: 998.4222, y: 50.3090 },
    { x: 978.6185, y: 53.0508 },
    { x: 959.2859, y: 58.1053 },
    { x: 941.2185, y: 66.5844 },
    { x: 925.6837, y: 79.1132 },
    { x: 919.5000, y: 85.0000 },
    { x: 917.3888, y: 73.8064 },
    { x: 904.7094, y: 58.7239 },
    { x: 886.3914, y: 50.9706 },
    { x: 869.0000, y: 49.0000 },
    { x: 866.5428, y: 49.0548 },
    { x: 847.0388, y: 53.1137 },
    { x: 829.2859, y: 62.2177 },
    { x: 822.5000, y: 67.5000 },
    { x: 822.5000, y: 49.0000 },
    { x: 752.0000, y: 49.0000 },
    { x: 752.0000, y: 108.0000 },
    { x: 751.2256, y: 104.6976 },
    { x: 743.0063, y: 86.5454 },
    { x: 730.1777, y: 71.2762 },
    { x: 713.8705, y: 59.7900 },
    { x: 695.2733, y: 52.5510 },
    { x: 675.5662, y: 49.3203 },
    { x: 666.5000, y: 49.0000 },
    { x: 655.5870, y: 49.4632 },
    { x: 635.9174, y: 52.9283 },
    { x: 617.2923, y: 60.1184 },
    { x: 600.6088, y: 71.0766 },
    { x: 586.7202, y: 85.4104 },
    { x: 576.5089, y: 102.5460 },
    { x: 574.5000, y: 108.0000 },
    { x: 574.5000, y: 1.0000 },
    { x: 425.0000, y: 1.0000 },
    { x: 425.0000, y: 108.0000 },
    { x: 422.5659, y: 97.6156 },
    { x: 413.3261, y: 79.9634 },
    { x: 399.3592, y: 65.7461 },
    { x: 382.0012, y: 55.9307 },
    { x: 362.7725, y: 50.5766 },
    { x: 343.0000, y: 49.0000 },
    { x: 342.8583, y: 49.0002 },
    { x: 322.9421, y: 50.5770 },
    { x: 303.6177, y: 55.6128 },
    { x: 285.7015, y: 64.4173 },
    { x: 270.1080, y: 76.8755 },
    { x: 257.6904, y: 92.4968 },
    { x: 250.5000, y: 108.0000 },
    { x: 250.5000, y: 1.0000 },
    { x: 151.5000, y: 1.0000 },
    { x: 121.5000, y: 77.5000 }
]

const footerAnimation = () => {
    window.decomp = decomp;
    const initialBodyPositions = [];

    // Engine
    const engine = Engine.create({
        timing: {
        timeScale: 1,
        timeStep: 1000 / 80,
        },
    });

    engine.world.gravity.y = 0;

    Events.on(engine, 'beforeUpdate', () => {
        if (window.scrollY >= document.body.scrollHeight - window.innerHeight - 50) {
        engine.world.gravity.y = 2
        }
    });

    // Renderer
    const canvasWidth = window.innerWidth;
    const canvasHeight = window.innerWidth <= 768 ? 912 : 1400;

    const render = Render.create({
        element: document.body,
        engine: engine,
        options: {
            width: canvasWidth,
            height: canvasHeight,
            wireframes: false,
            pixelRatio: 2,
            background: "#0031AF",
          },
          render: {
            strokeStyle: 'white',
          },
    });

    const topWall = Bodies.rectangle(canvasWidth/2, canvasHeight, canvasWidth * 2, 2, { isStatic: true, render: {fillStyle: 'white', strokeStyle: 'white'} });
    const bottomWall = Bodies.rectangle(canvasWidth/2, canvasHeight, canvasWidth * 2, 2, { isStatic: true, render: {fillStyle: 'white', strokeStyle: 'white'} });
    const leftWall = Bodies.rectangle(0, canvasHeight/2, 2, canvasHeight * 2, { isStatic: true, render: {fillStyle: 'white',strokeStyle: 'white'} });
    const rightWall = Bodies.rectangle(canvasWidth, canvasHeight/2, 2, canvasHeight * 2, { isStatic: true, render: {fillStyle: 'white',strokeStyle: 'white'} });
    Composite.add(engine.world, [topWall, bottomWall, leftWall, rightWall])

    //Logo
    const logoHeight = canvasWidth / 5;
    const logo = Bodies.rectangle(canvasWidth/2, canvasHeight-(logoHeight/2) , canvasWidth, logoHeight, {
        restitution: 0,
        friction: 1,
        isStatic: true,
        render: {
          sprite: {
            texture: '/images/logo_white.svg',
            xScale: canvasWidth / 100 ,
            yScale: canvasWidth / 100
          },
        },
      });

      Body.set(logo, 'collisionFilter', {
        'group': -1,
        'category': 2,
        'mask': 0,
      });
  

      const logoOutline = Bodies.fromVertices(canvasWidth*0.62, canvasHeight-(canvasWidth/100*10.3), footerOutlineVertices, {
        restitution: 0,
        friction: 1,
        isStatic: true,
        render: {
          fillStyle: "#0031AF"
        },
      });
  
      Body.scale(logoOutline, canvasWidth/1370, canvasWidth/1370)
      Composite.add(engine.world, [logoOutline, logo]);



    // Shapes
    const sizes = {
        xssq: { width: 56, height: 56 },
        smsq: { width: 80, height: 80 },
        mdsq: { width: 120, height: 120 },
        lgsq: { width: 200, height: 200 },
        xsrec: { width: 80, height: 56 },
        smrec: { width: 88, height: 64 },
        mdrec: { width: 200, height: 96 },
        lgrec: { width: 200, height: 120 },
        xlgrec: { width: 320, height: 200 }
    }

    const colours = {
        charcoal: "#1A202C",
        brightAzure: "#327AE0",
        skyBlue: "#5BB0FF",
        lightPeriwinkle: "#BFCCEB",
        paleSkyBlue: "#ADDAE5",
        midnightBlue: "#002072"
    };


    const createBody = (hasImage, text, x, y, size, colourName, link, scale, bodyAngle) => {

        const { width, height } = sizes[size] || {width: 120, height: 120}
        const colour = colours[colourName];

        const body = Bodies.rectangle(x, y, width, height, {
            density: 10,
            restitution: 0.1,
            friction: 5,
            frictionAir: 0.02,
            render: {
              fillStyle: colour
            }
        })

        if (scale != 1) {
            Body.scale(body, scale, scale)
        }
        
        Composite.add(engine.world, body);

  
        Body.setAngle(body, bodyAngle);
        initialBodyPositions.push({ body, x, y });
  
        const bodyText = Bodies.rectangle(body.position.x, body.position.y, Math.max(40, width/2), 20, {
            restitution: 0.1,
            friction: 1,
            isStatic: true,
            inertia: Infinity,
            frictionAir: 0.5,   
            render: {
              sprite: {
                texture: hasImage ? text : createTextImage(text, colourName),
                xScale: hasImage ? 1 : 0.75,
                yScale: hasImage ? 1 : 0.75
              },
            },
            url: link
        });

        Body.setPosition(bodyText, {
            x: body.position.x,
            y: body.position.y
        });
  
        const collisionGroup = Body.nextGroup(true);
        Body.set(body, 'collisionFilter', { group: collisionGroup, category: 0x0001, mask: 0xFFFF });
        Body.set(bodyText, 'collisionFilter', { group: collisionGroup, category: 0x0001, mask: 0xFFFF });

        Composite.add(engine.world, bodyText);
  
        //keep bodyText on top of body
        Events.on(engine, 'beforeUpdate', function () {
            Body.setPosition(bodyText, { x: body.position.x, y: body.position.y });
            Body.setAngle(bodyText, body.angle);
        });
    }
  
    const createTextImage = (string, colourName) => {
        const drawing = document.createElement("canvas");
        drawing.width = 250;
        drawing.height = 200;
        const ctx = drawing.getContext("2d");
  
        // Clear the canvas
        ctx.clearRect(0, 0, drawing.width, drawing.height);
  
        // Set text properties
        ctx.fillStyle = (colourName === 'charcoal' || colourName === 'brightAzure' || colourName === 'midnightBlue') ? '#fff' : '#000';
        ctx.font = (string === "© 2024 Mellenger Interactive.") ? "12pt Hanken Grotesk, sans-serif" : "20pt Hanken Grotesk, sans-serif";
        ctx.textAlign = "center";
        ctx.textBaseline = "middle";
  
        // Add text to the canvas
        ctx.fillText(string, drawing.width / 2, drawing.height / 2);

        drawing.style.cursor = "pointer";
  
        return drawing.toDataURL("image/png");
    };

    const links = [
        { hasImage: false, text: "Services", positionX: canvasWidth > 768 ? canvasWidth * 0.1 : canvasWidth * 0.1, positionY: -250, size: "lgrec", color: 'brightAzure', link: "/services" },
        { hasImage: false, text: "Our work", positionX: canvasWidth > 768 ? canvasWidth * 0.7 : canvasWidth * 0., positionY: -290, size: "lgsq", color: 'skyBlue', link: "/our-work" },
        { hasImage: false, text: "About", positionX: canvasWidth > 768 ? canvasWidth * 0.3 : canvasWidth * 0.3, positionY: -250, size: "mdsq", color: 'paleSkyBlue', link: "/about" },
        { hasImage: false, text: "Get in touch", positionX: canvasWidth > 768 ? canvasWidth * 0.4: canvasWidth * 0.4, positionY: -250, size: "lgrec", color: 'charcoal', link: "/contact-us" },
        { hasImage: false, text: "Blog", positionX: canvasWidth > 768 ? canvasWidth * 0.5 : canvasWidth * 0.5, positionY: -250, size: "smsq", color: 'brightAzure', link: "/blog" },
        { hasImage: false, text: "Process", positionX: canvasWidth > 768 ? canvasWidth * 0.2 : canvasWidth * 0.2, positionY: -250, size: "mdrec", color: 'midnightBlue', link: "/process" },
        { hasImage: false, text: "© 2024 Mellenger Interactive.", positionX: canvasWidth > 768 ? canvasWidth * 0.9 : canvasWidth * 0.8, positionY: canvasWidth > 768 ? 1100 : 750, size: "mdrec", color: 'lightPeriwinkle', link: null },
        { hasImage: true, text: "/images/Instagram_White.svg", positionX: canvasWidth > 768 ? canvasWidth * 0.9: canvasWidth * 0.8, positionY: canvasWidth > 768 ? 1050 : 700, size: "xssq", color: 'midnightBlue', link:"https://www.instagram.com/mellengerinteractive"},
        { hasImage: true, text: "/images/LinkedIn_White.svg", positionX: canvasWidth > 768 ? canvasWidth * 0.95: canvasWidth * 0.6, positionY: canvasWidth > 768 ? 1050 : 700, size: "xssq", color: 'brightAzure', link: "https://ca.linkedin.com/company/mellenger-interactive-ltd" }
    ];
    
    links.forEach(link => {
        createBody(link.hasImage, link.text, link.positionX, link.positionY, link.size, link.color, link.link, 1, 0);
    });

    //Mouse
    const mouse = Mouse.create(render.canvas);
    const mouseConstraint = MouseConstraint.create(engine, {
        mouse: mouse,
        constraint: {
            stiffness: 1.5,
            render: {
                visible: false
            }
        }
    });

    mouseConstraint.mouse.element.removeEventListener("mousewheel", mouseConstraint.mouse.mousewheel);
    mouseConstraint.mouse.element.removeEventListener("DOMMouseScroll", mouseConstraint.mouse.mousewheel);
    mouseConstraint.mouse.element.removeEventListener('touchstart', mouseConstraint.mouse.mousedown);
    mouseConstraint.mouse.element.removeEventListener('touchmove', mouseConstraint.mouse.mousemove);
    mouseConstraint.mouse.element.removeEventListener('touchend', mouseConstraint.mouse.mouseup);
    mouseConstraint.mouse.element.addEventListener('touchstart', mouseConstraint.mouse.mousedown, { passive: true });
    mouseConstraint.mouse.element.addEventListener('touchmove', (event) => {
      if (mouseConstraint.body) {
        mouseConstraint.mouse.mousemove(event);
      }
    });
    mouseConstraint.mouse.element.addEventListener('touchend', (event) => {
      if (mouseConstraint.body) {
        mouseConstraint.mouse.mouseup(event);
      }
    });

    Composite.add(engine.world, mouseConstraint);

    Events.on(mouseConstraint, 'mousedown', function(event) {
        const mouseConstraint = event.source;
        const bodies = engine.world.bodies;
        if (!mouseConstraint.bodyB) {
          for (let i = bodies.length-1; i >= 0; i--) {
            const body = bodies[i];
            if (Matter.Bounds.contains(body.bounds, mouseConstraint.mouse.position)) {
              const bodyUrl = body.url;
              // Hyperlinking feature
              if (bodyUrl != undefined) {
                window.location.href = bodyUrl;
              }
              break;
            }
          }
        }
      });

    render.mouse = mouse;

    // run the renderer
    Render.run(render);

    // create runner
    const runner = Runner.create();

    // run the engine
    Runner.run(runner, engine);

}

window.onload = footerAnimation;
