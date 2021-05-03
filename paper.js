class Paper{
    constructor(){
        var option ={
            isStatic:false,
            restitution:0,
            friction:0,
            density:1.2
        }
        this.body=Bodies.circle(250,650,40,option);
        this.radius=40;
        this.image=loadImage("paper.png");
        World.add(world, this.body);
    }
    display(){
        var pos = this.body.position;
        var angle = this.body.angle;
        push();
        translate(pos.x,pos.y);
        //rotate(angle);
        imageMode(CENTER);
        image(this.image,0,0,this.radius,this.radius);
        pop();
    }
}