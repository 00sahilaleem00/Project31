class Plinko {
    constructor(x,y){
        var options = {
            isStatic:true
        }
        this.x = x;
        this.y = y;
        this.radius = 10;
        this.body = Bodies.circle(this.x,this.y,this.radius,options);
        World.add(world,this.body);
    }

    display(){
        ellipseMode(RADIUS);
        push();
        fill("white");
        ellipse(this.body.position.x,this.body.position.y,this.radius,this.radius);
        pop();
    }
}