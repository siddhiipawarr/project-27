class Bob{
    constructor(x,y,r){
        var options = {
          isStatic: false,
          density: 7.8,
          friction : 0,
          restitutuion:1
        }
        this.body = Bodies.circle(x,y,r,options);
        this.r = r;
        World.add(world,this.body);
    }
    display(){
        var pos = this.body.position;
        push ();
        fill("yellow");
        ellipseMode(RADIUS);
        ellipse(pos.x,pos.y,this.r);
        pop ();
    }
}