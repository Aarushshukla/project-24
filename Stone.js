class Stone{
	constructor(x,y)

	{
		var options={
restitution:0.8,
friction:3,
density:30


		}
	
		this.x=x
		this.y=y
		
		this.body=Bodies.rectangle(this.x,this.y , options)
		
		World.add(world, this.body);

	}
	display()
	{
			var stonepos=this.body.position;		
			push()
			translate(stonepos.x, stonepos.y);
			rectMode(CENTER)
			strokeWeight(4);
			stroke("black");
			fill("blue");
			

			pop()
	}

}