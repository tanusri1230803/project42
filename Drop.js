class Drop
{

constructor(x,y)
{
    var options = {
        'restitution':0.1,
        'friction':0.001,
       
    }
    this.radius = 5;
    this.body = Bodies.circle(x, y, this.radius, options);
    World.add(world,this.body);
}

update()
{
   if(this.body.position.y > height)
   {
       Matter.Body.setPosition(this.body,{x:random(0,400),y:random(0,400)});
   }
}

// display() {

//     var pos = this.body.position;
//     var angle = this.body.angle;

//     push();
//     translate(pos.x, pos.y);
//     rotate(angle);
//     noStroke();
//     fill("blue");
//     ellipseMode(RADIUS);
//     ellipse(0,0,this.r,this.r);
//     pop();
// }

showDrop()
{
    fill("blue");
    ellipseMode(CENTER);
    ellipse(this.body.position.x,this.body.position.y,this.radius,this.radius);
}

}

