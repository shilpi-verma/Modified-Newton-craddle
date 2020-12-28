class Bob {
  constructor(x, y, r) {
    var options = {
      isStatic: false,
      restitution: 1,
      friction: 0,
      density: 0.8,
    };
    this.r=r;
    this.x=x;
    this.y=y;
    this.body = Bodies.circle(this.x, this.y, this.r/2, options);
    World.add(world, this.body);
  }
  show() {
    let pos = this.body.position;
    push();
    translate(pos.x, pos.y);
    noStroke();
    fill(225, 198, 153);
    ellipse(0, 0, this.r, this.r);
    pop();
  }
}
