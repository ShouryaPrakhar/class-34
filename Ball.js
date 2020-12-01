class Ball {
    constructor(x,y,width,height,angle) {
      var options = {
          isStatic: false,
          frictionAir: 0.005,
          density:1.0
      }
      this.width = width;
      this.height = height;
      this.body = Bodies.rectangle(x,y,width,height,options);
     
      World.add(world, this.body);
    }
    display(){
      var angle=this.body.angle
      push()
      translate(this.body.position.x,this.body.position.y)
      rotate(angle)
      fill(0);
      ellipse(0,0, this.width, this.height);
      pop()
    }
  };
  
  