// Modules Aliases
const { Engine, World, Bodies, Body, Constraint } = Matter;

function setup() {
  createCanvas(1600, 700);
  rectMode(CENTER);
  
  engine = Engine.create();
  world = engine.world;

  roof = new Roof(width/2,height/4,width/7,20);
  // Bodies
  b1 = new Bob(width/2-40 * 2, height/4+500, 40);
  b2 = new Bob(width/2-40 * 1, height/4+500, 40);
  b3 = new Bob(width/2, height/4+500, 40);
  b4 = new Bob(width/2+40 * 1,height/4+500, 40);
  b5 = new Bob(width/2+40 * 2, height/4+500, 40);
  
  
  r1 = new Rope(b1.body, roof.body, -40 * 2, 0);
  r2 = new Rope(b2.body, roof.body, -40 * 1, 0);
  r3 = new Rope(b3.body, roof.body, 0, 0);
  r4 = new Rope(b4.body, roof.body, 40 * 1, 0);
  r5 = new Rope(b5.body, roof.body, 40 * 2, 0);

  Engine.run(engine);
}

function draw() {
  rectMode(CENTER);
  background(0);
  r1.show();
  r2.show();
  r3.show();
  r4.show();
  r5.show()
  b1.show();
  b2.show();
  b3.show();
  b4.show();
  b5.show();
  roof.show();
  
}
function keyPressed() {
  if (keyCode === UP_ARROW) {
    Matter.Body.applyForce(b1.body, b1.body.position, {
      x: -55,
      y: -41,
    });
  }
}

