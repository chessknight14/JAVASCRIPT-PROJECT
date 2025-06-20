const canvas = document.querySelector('canvas');
const c = canvas.getContext('2d');


canvas.width = 600;
canvas.height = 400;


let score = 0;

var circle = {
    x: 150,
    y: 100,
    r: 9
};
var rect = {
    x: 100,
    y: 100,
    w: 40,
    h: 40
};




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


function RectCircleColliding(circle, rect) {
    var distX = Math.abs(circle.x - rect.x - rect.w / 2);
    var distY = Math.abs(circle.y - rect.y - rect.h / 2);

    if (distX > (rect.w / 2 + circle.r)) {
        return false;
    }
    if (distY > (rect.h / 2 + circle.r)) {
        return false;
    }

    if (distX <= (rect.w / 2)) {
        return true;
    }
    if (distY <= (rect.h / 2)) {
        return true;
    }

    var dx = distX - rect.w / 2;
    var dy = distY - rect.h / 2;
    return (dx * dx + dy * dy <= (circle.r * circle.r));
	
}



//        CLASSES



class Obs{
	constructor(x, y, wd, ht){
		this.position = {x, y}
		this.width = wd;
		this.height = ht;
		
		// this.movement = {x: 0, y: 0}
	}

	draw(){
		c.fillStyle = '#5c76c4';
		c.fillRect(this.position.x, this.position.y, this.width, this.height);
	}


	update(){
		this.draw();

	}

}

class Player{

	constructor(x, y, r){

		this.position = {x, y};
		this.radius = r;

		this.velocity = {x,y};
	
	}
	
	draw(){ //draw ze person guy
		c.beginPath();
		c.arc(this.position.x, this.position.y, this.radius, 0, 2 * Math.PI);
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



	// constructor(x, y, wd, ht){
const ob = new Obs(rect.x, rect.y, rect.w, rect.h);



// constructor(x, y, r){
const guy = new Player(circle.x, circle.y, circle.r);

// collision?







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

function render(){   //ctrl+ ] for indent all
	requestAnimationFrame(render);
	c.clearRect(0,0, canvas.width, canvas.height); 
	//draw/update everything \/
	bg();
	

	ob.update();


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
			keys.down.pressed = false;
			break;
		case "ArrowUp":
			keys.up.pressed = false;
			break;
		case "ArrowLeft":
			keys.left.pressed = false;
			break;
			case "ArrowRight":
			keys.right.pressed = false;
			break;
		default:
			return;

	}

	event.preventDefault();

	}, 
	true  //idk
);


document.addEventListener("keydown", event => {  
	if (event.defaultPrevented){
		return;
	}

	switch (event.key) {
		case "ArrowDown":
			keys.down.pressed = true;
			break;
		case "ArrowUp":
			keys.up.pressed = true;
			break;
		case "ArrowLeft":
			keys.left.pressed = true;
			break;
		case "ArrowRight":
			keys.right.pressed = true;
			break;
		default:
			return;

	}

	event.preventDefault();

	}, 
	true  //idk
);

