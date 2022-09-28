video = "";
var status1;
function preload(){
    video = createVideo("video.mp4");
    video.hide();
}
function setup(){
    canvas = createCanvas(800, 500);
    canvas.center();
}
function draw(){
    image(video, 0, 0, 800, 500);
}

function start(){
    objdetection = ml5.objectDetector("cocossd", modelLoaded);
    document.getElementById("status").innerHTML =  "Objects being detected";
}
function modelLoaded(){
    status1=true;
    video.loop();
    video.speed(1);
    video.volume(1);
}