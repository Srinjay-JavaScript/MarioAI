noseX = 0;
noseY = 0;
function preload() {
	world_start = loadSound("world_start.wav");
	collect_coin = loadSound("coin.wav");
	mario_jump = loadSound("jump.wav");
	mario_kick = loadSound("kick.wav");
	mario_die = loadSound("mariodie.wav");
	game_over = loadSound("gameover.wav");
	
	setSprites();
	MarioAnimation();
}

function setup() {
	canvas = createCanvas(1240,336);
	instializeInSetup(mario);

	video = createCapture(VIDEO);
	video.size(600, 300);
	video.parent('gameConsole');
	posenet = ml5.poseNet(video, init);
	posenet.on('pose', got_result);
}

function draw() {
	game();
}
function init(){
  console.log('Posenet has successfully initialized.');
}
function got_result(results){
   if (results.length > 0){
	 noseX = results[0].pose.nose.x;
	 noseY = results[0].pose.nose.y;
	 console.log('NoseX: ' + noseX + ' NoseY: ' + noseY);
   }
}






