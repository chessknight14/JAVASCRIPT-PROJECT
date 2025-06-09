const canvas = document.querySelector('canvas');
const c = canvas.getContext('2d');


canvas.width = 600;
canvas.height = 400;

//        CLASSES

class Player{
	
	constructor(){
		
		this.position = {x: 300, y: 200}
		this.width = 9;
		this.height = 9;
		this.velocity = {x: 0, y: 0}
	}
	
	draw(){ //draw ze person guy
		c.beginPath();
		c.arc(this.position.x, this.position.y, 9, 0, 2 * Math.PI);
		c.fillStyle = '#fcf9fc';
		c.fill();
		
	}
	
	update(){ //update peron's draw and physics
		const speed = 3;
		
		this.draw();
		
		//this.position.x += this.velocity.x;
		//this.position.y += this.velocity.y;
		
		
		//player's movement moved?
		/*if (keys.left.pressed){
			this.velocity.x = -speed;
		} else if (keys.right.pressed){
			this.velocity.x = speed;
		} else{
			this.velocity.x = 0;
		}
	
		if (keys.up.pressed){
		this.velocity.y = -speed;
		} else if (keys.down.pressed){
		this.velocity.y = speed;
		} else{
		this.velocity.y = 0;
		}*/
	
	
	} 
}







//FUNCTIONS

function bg(){
	
	c.fillStyle = "purple"; // <- ah
	c.fillRect(0,0, canvas.width, canvas.height);

	//or we could do this in render next time?
}
bg();
const guy = new Player();





function render(){
	requestAnimationFrame(render);
	c.clearRect(0,0, canvas.width, canvas.height); 
	//draw/update everything \/
	bg();
    guy.update();




}

render();


/*
document.addEventListener("keyup", event => {
    console.log("umm");
});


addEventListener('keydown', event =>  {
	switch (keyCode){
		case 38:
			keys.up.pressed = true;
			break;
		case 40:
			keys.down.pressed = true;
			break;
		case 37:
			keys.left.pressed = true;
			break;
		case 39:
			keys.right.pressed = true;
			break;
	}
	
})

addEventListener('keyup', event =>  {
	switch (keyCode){
		case 38:
			
			keys.up.pressed = false;
			break;
		case 40:
			
			keys.down.pressed = false;
			break;
		case 37:
			
			keys.left.pressed = false;
			break;
		
		case 39:
			
			keys.right.pressed = false;
			break;
	}
	


})

*/