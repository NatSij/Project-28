class Launcher {
    constructor(bodyA,pointB){
     
      var options = {
     bodyA:bodyA,
     pointB:pointB,
     stiffness: 0.04,
     length: 10
     }
     
     this.pointB = pointB;
     this.stone = Constraint.create(options)
     World.add(world, this.stone);
  }
  
  fly(){
  this.stone.bodyA = null;
  }
  
  display(){
  if(this.stone.bodyA){
    var pointA = this.stone.bodyA.position;
    var pointB = this.pointB;
    line(pointA.x, pointA.y, pointB.x, pointB.y);
  }
  }
  }