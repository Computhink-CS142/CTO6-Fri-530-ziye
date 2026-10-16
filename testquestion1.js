let posX;
let xSpeed;

function setup(){
    createCanvas(600, 400);
    posX = width/ 2;
    xSpeed = 5;
    background("skyblue");
    
}
function draw(){
    background('skyblue');
    circle(posX,height/2,50);
    fill ("limegreen");
    if (posX!=600){
        posX=posX+xSpeed
    }
    else{
        posX=posX-xSpeed
    }
    
}