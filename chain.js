class Chain {
constructor(A,B){
var options = {
    bodyA:A,bodyB:B,length:10,stiffness:0.04
}
this.chain = Constraint.create(options);
World.add(world,this.chain);
}
display(){
    strokeWeight(3);
    line(this.chain.bodyA.position.x,this.chain.bodyA.position.y,this.chain.bodyB.position.x,this.chain.bodyB.position.y)
}






}