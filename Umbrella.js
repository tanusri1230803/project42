class Umbrella
{

constructor(x,y)
{
    var options = {
        'isStatic': true
    }
    this.radius = 50;
    this.body = Bodies.circle(x, y, this.radius, options);
   
    this.image = loadImage("walking_1.png");
    World.add(world,this.body);
}

display(){
   var pos = this.body.position;
    imageMode(CENTER);
    image(this.image, pos.x,pos.y + 70,300,300);

  }


}