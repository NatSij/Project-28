class Stone{
	constructor(x,y,r)
	{
		var options={
			isStatic:false,
			restitution:0.3,
			friction:0.5,
			density:1.2

			
			}
		this.x=x;
		this.y=y;
		this.r=r;
		this.image = loadImage("Images/stone.png");
		this.body=Bodies.circle(this.x, this.y, this.r/2, options)
		World.add(world, this.body);

	}
	display()
	{		
			var stonepos=this.body.position;		

			push()
			translate(stonepos.x, stonepos.y);
			rectMode(CENTER)
			strokeWeight(3);
			fill(255,0,255)
			imageMode(CENTER);
			image(this.image, 0, 0, this.r*2, this.r*2);
			//Doesn't need ellipse or rectangle if adding image
			pop()
			
	}

}