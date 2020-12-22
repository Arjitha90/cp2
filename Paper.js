class Paper
{
    constructor(x,y,r)
    {
        var options={
            isStatic:false,
            restitution:0.3,
            friction:0.5,
            density:1.3
        }
       this.x=x
       this.r=r
       this.y=y
       this.body=Bodies.circle(this.x,this.y,this.r/2,options)
      this.image = loadImage("paper.png")
       World.add(world,this.body)
      

    }
    display(){
       var paperpos = this.body.position
       push()
       translate(paperpos.x,paperpos.y)
       imageMode(CENTER)
       image(this.image,0,0, this.r,this.r);
       pop()
    }
    }








