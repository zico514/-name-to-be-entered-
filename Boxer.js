// class Bo extends BaseClass {
//     constructor(x, y, width, height){
//       super(x,y,width,height);
//       this.image=loadImage("wood1.png")
//     }
  
//   };
class Bo extends BaseClass {
  constructor(x, y){
    super(x,y,30,40);
    this.image = loadImage("wood1.png");
    this.Visibility=255;
  }
  display(){
    console.log(this.body.speed);
    if(this.body.speed<4){
          super.display();

    }
    else{
     World.remove(world,this.body);

    push(); 
     this.Visibility=this.Visibility-5;
     tint(255,this.Visibility);
     image(this.image,this.body.position.x,this.body.position.y,30,40);
     pop();
    }
  }

}