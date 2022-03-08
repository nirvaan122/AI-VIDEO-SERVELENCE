video="";
function preload(){
video=createVideo("video.mp4")
video.hide()
}

function setup(){
canvas=createCanvas(480,480)
canvas.center()


}

function draw(){
image(video,0,0,480,480)
}

function start(){
    objectd=ml5.objectDetector("cocossd",modelLoaded)
document.getElementById("status").innerHTML="status:detecting objects";
}

function modelLoaded(){
console.log("model is loaded")
}