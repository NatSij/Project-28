class Tree {
	constructor(x,y)
	{
		this.x=x;
		this.y=y;
		this.treeWidth=450;
		this.treeHeight=600;
		this.treeThickness=20;
		this.image = loadImage("Images/tree.png");

		this.bottomBody=Bodies.rectangle(this.x, this.y, this.treeWidth, this.treeThickness, {isStatic:true})
		this.leftWallBody=Bodies.rectangle(this.x-this.treeWidth/2, this.y-this.treeHeight/2, this.treeThickness, this.treeHeight, {isStatic:true})
		

		this.rightWallBody=Bodies.rectangle(this.x+this.treeWidth/2, this.y-this.treeHeight/2, this.treeThickness, this.treeHeight, {isStatic:true})
		World.add(world, this.bottomBody)
		World.add(world, this.leftWallBody)
		World.add(world, this.rightWallBody);

	}
	display()
	{
			var posBottom=this.bottomBody.position;
			var posLeft=this.leftWallBody.position;
			var posRight=this.rightWallBody.position;

			push()
			translate(posBottom.x, posBottom.y);
			imageMode(CENTER);
			//strokeWeight(4);
			stroke(255)
			angleMode(RADIANS)
			fill(255)
			image(this.image, 0, -this.treeHeight/2, this.treeWidth, this.treeHeight);
			pop()
			
	}

}

