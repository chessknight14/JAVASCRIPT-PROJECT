const canvas = document.querySelector('canvas');
const c = canvas.getContext('2d');


canvas.width = 600;
canvas.height = 400;



let score = 0;




//FUNCTIONS

function bg(){
	
	c.fillStyle = "#dac3e2"; // <- ah
	c.fillRect(0,0, canvas.width, canvas.height);

	//or we could do this in render next time?
}
bg();

function drawScore(){
	c.font = "16px Arial";
	c.fillStyle = '#fcfcfc';
	c.fillText(`Score: ${score}`, 5, 20);
	c.fillText("Hello? hello? hello?", 10, 50);
}

drawScore();










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
		c.fillStyle = '#6ecc90';
		c.fill();
		
	}
	
	update(){ //update peron's draw and physics
		const speed = 5;
		
		this.draw();
		
		this.position.x += this.velocity.x;
		this.position.y += this.velocity.y;
		
		
		//player's movement moved?
		if (keys.left.pressed){
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
		}
	
	
	} 
}









const guy = new Player();


//___________________________KEYS?________________________


const keys = {
	right: {
	   pressed: false
	},
	left: {
	   pressed: false
	},
	up: {
		pressed: false
	},
	down: {
		pressed: false
	}
};




//________________________________________-___GAME LOOP  _________________-__________

function render(){   //ctrl+ ]
	requestAnimationFrame(render);
	c.clearRect(0,0, canvas.width, canvas.height); 
	//draw/update everything \/
	bg();
    guy.update();
	drawScore();




}

render();


//trying to figure out keyboard functions



document.addEventListener("keyup", event => {  ///actually works
	if (event.defaultPrevented){
		return;
	}

	switch (event.key) {
		case "ArrowDown":
			console.log("ldowneft");
			break;
		case "ArrowUp":
			console.log("up");
			break;
		case "ArrowLeft":
			console.log("left");
			break;
		case "ArrowRight":
			console.log("right");
			break;
		default:
			return;

	}

	event.preventDefault();

	}, 
	true  //idk
);


document.addEventListener("keydown", event => {  ///actually works
	if (event.defaultPrevented){
		return;
	}

	switch (event.key) {
		case "ArrowDown":
			console.log("leftdown");
			break;
		case "ArrowUp":
			console.log("updown");
			break;
		case "ArrowLeft":
			console.log("leftdown");
			break;
		case "ArrowRight":
			console.log("rightdown");
			break;
		default:
			return;

	}

	event.preventDefault();

	}, 
	true  //idk
);




/*
addEventListener('keyup', event =>  {
	switch (event){
		case 38:
			
			keys.up.pressed = false;
			console.log('key up?');
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