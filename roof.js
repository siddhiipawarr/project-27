class Roof{
    constructor(x,y,width,height){
        this.body = Bodies.rectangle(x,y,width,height,{isStatic:true});
        this.width = width;
        this.height = height;
    }
    display(){
        var pos = this.body.position;
        push ();
        fill ("blue");
        rectMode(CENTER);
        rect(pos.x,pos.y,this.width,this.height);
        pop ();
    }
}