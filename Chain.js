class Chain{
constructor(bodyA,bodyB){
var options={
    bodyA:bodyA,
    bodyB:bodyB,
    stiffness: 0.04,
    length:10
}
this.chain=Constraint.create(options)
World.add(world,this.chain)
}
display(){
    var bird=this.chain.bodyA.position
    var log=this.chain.bodyB.position
    strokeWeight(5)
    line(bird.x,bird.y,log.x,log.y)
}
}