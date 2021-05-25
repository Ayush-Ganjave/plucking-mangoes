class Throw{
	constructor(bodyA,pointB){
		var options={
			bodyA:bodyA,
            pointB:pointB,
            stiffness:0.01,		
		    length:10
		}
		this.sling = Constraint.create(options)
		this.pointB = pointB;
 		World.add(world, this.sling);
	}
   fly(){
       this.sling.bodyA = null
   }

   reconnect(body){
    this.sling.bodyA = body
}
   
	display(){
			
			
	}

}