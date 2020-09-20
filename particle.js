class Particle {
    constructor(){
        var options = {
            restitution: 0.5,
            density:3,
            isStatic: false
        }
        this.x = random(5,475);
        this.y = 0;
        this.radius = 10;
        this.body = Bodies.circle(this.x,this.y,this.radius,options);
        this.colour = color(random(0,255),random(0,255),random(0,255));
        World.add(world,this.body);
    }

    display(){
        var pos = this.body.position;
        var angle = this.body.angle;
        ellipseMode(RADIUS);
        push();
        fill(this.colour);
        ellipse(this.body.position.x,this.body.position.y,this.radius,this.radius);
        pop();
    }
}