var scaling = 10
var maxi = 50

var foodx,foody
var snake

function setup() {
	createCanvas(scaling*maxi,scaling*maxi)
	snake = new Snake(1,49)
	frameRate(10)
	foodx = random(49)
	foody = random(49)
}

function draw() {
	background(10)
	fill(255)
	showFood()
	snake.go(function(x,y,l,b){
		fill(255)
		rect(x*scaling,y*scaling,scaling,scaling)
	})

	if(snake.checkCollision()){
		alert()
	}
	
	if(snake.checkEat(foodx,foody)){
		snake.add([snake.x,snake.y])
		foodx = random(49)
		foody = random(49)
		showFood()
	}

}

function keyPressed(){
	if(keyCode === UP_ARROW){
		snake.up()
	}else if(keyCode === DOWN_ARROW){
		snake.down()
	}else if(keyCode === LEFT_ARROW){
		snake.left()
	}else{
		snake.right()
	}
}

function showFood(){
	fill(255,255,0)
	rect(foodx*scaling,foody*scaling,scaling,scaling)
}