clouds = [];
stars = [];
let b1, b2, c1, c2;
var time;

function setup() 
{
	createCanvas(windowWidth - 20, windowHeight - 20)
	img = loadImage("https://i.imgur.com/vRpssEi.png")
	imageMode(CENTER);
	b1 = color(255);
  b2 = color(0);
  c1 = color(204, 102, 0);
  c2 = color(0, 102, 153);
}

function draw() 
{
	clear();
	background(10, 0);
	frameRate(60);
	for (let i = 0; i < random(2, 7); i++) 
	{
		let c = new Particle();
		clouds.push(c);
	}

	for (let i = clouds.length - 1; i >= 0 ; i--)
	{
		clouds[i].update();
		clouds[i].show();

		if (clouds[i].finished()) 
		{
			clouds.splice(i, 1);
		}
	}


	setTimeout(function(){ time = true }, 14000);


	if (time)
	{
		createStars();
	}

	image (img, width/2, 350, img.width/4, img.height/4);
}

class Particle
{
	constructor() {
		this.x1 = width/2 + 28;
		this.y1 = 470;
		this.x2 = width/2 - 29;
		this.y2 = 470;

		this.velx1 = random(-0.5, 0.5);
		this.vely1 = random(3, 7);
		this.velx2 = random(-0.5, 0.5);
		this.vely2 = random(3, 7);
		this.alpha = random(200, 255);
	}

	show() {
		fill(random(175, 200), this.alpha);
		noStroke();
		ellipse(this.x1, this.y1, random(14, 16), random(14, 16));
		ellipse(this.x2, this.y2, random(14, 16), random(14, 16));
	}

	finished() {
		return this.alpha < 0;
	}

	update() {
		this.x1 += this.velx1;
		this.y1 += this.vely1;
		this.x2 += this.velx2;
		this.y2 += this.vely2;
		this.alpha -= random(3, 6);
	}
}


function setGradient(x, y, w, h, c1, c2) 
{
  noFill();
    for (let i = y; i <= y + h; i++) 
    {
      let inter = map(i, y, y + h, 0, 1);
      let c = lerpColor(c1, c2, inter);
      stroke(c);
      line(x, i, x + w, i);
	}
}

class Star
{
	constructor()
	{
		this.x = random(0, width);
		this.y = 0;
		this.vel = random(0.2, 3.5);
	}

	show()
	{
		fill(random(200, 255));
		ellipse(this.x, this.y, (this.vel/(random(1, 4))));
	}

	finished() 
	{
		return this.y > height;
	}

	update()
	{
		this.y += this.vel;
	}
}

function createStars()
{
	for (let i = 0; i < random(0, 2); i++) 
		{
			let s = new Star();
			stars.push(s);
		}

	for (let i = stars.length - 1; i >= 0 ; i--)
		{
			stars[i].update();
			stars[i].show();

			if (stars[i].finished()) 
			{
				stars.splice(i, 1);
			}
		}
}
