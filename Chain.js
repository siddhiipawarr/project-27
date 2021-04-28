class Chain{
    constructor(A,B,offsetX,offsetY){
        this.offsetX = offsetX;
        this.offsetY = offsetY;
         var options = {
            bodyA : A,
            bodyB : B,
            pointB : {x:this.offsetX,y:this.offsetY},
            stiffness : 0.4,
            length : 300 
         }
         this.rope = Constraint.create(options);
         World.add(world,this.rope);
    }
    display(){
        var point1 = this.rope.bodyA.position;
        var point2 = this.rope.bodyB.position;
        var pointB1 = point2.x + this.offsetX;
        var pointB2 = point2.y + this.offsetY;

        push();
        strokeWeight(3);
        stroke("orange");
        line(point1.x,point1.y,pointB1,pointB2);
        pop ();
    }
}