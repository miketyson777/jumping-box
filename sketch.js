//maám I loaded the sound but it didnt played I checked the code twice but unable to spot the problem
var canvas;
var slab1,slab2,slab3,slab4;
var ball, edges;

function preload(){
}


function setup(){
    canvas = createCanvas(400,400);

    slab1 = createSprite(0,380,100,30);
    slab1.shapeColor=("red");

    slab2 = createSprite(120,380,100,30);
    slab2.shapeColor=("green");

    slab3 = createSprite(240,380,100,30);
    slab3.shapeColor =("orange");

    slab4 = createSprite(360,380,100,30);
    slab4.shapeColor = ("blue");

    ball = createSprite(random(100,350),100, 30,30);
    ball.shapeColor = ("white");
    ball.velocityX = 3;
    ball.velocityY = 7;


}

function draw() {
    background("lightgreen");
    edges=createEdgeSprites();
    ball.bounceOff(edges);

    if(slab1.isTouching(ball) && ball.bounceOff(slab1)){
        ball.shapeColor=("red");
      
    }

    if(slab2.isTouching(ball)){
        ball.shapeColor=("green");
        ball.velocityX = 0;
        ball.velocityY = 0;
        ball.shapeColor=("green");
    }

    if(slab3.isTouching(ball) && ball.bounceOff(slab3)){
        ball.shapeColor=("orange");
    }

    if(slab4.isTouching(ball) && ball.bounceOff(slab4)){
        ball.shapeColor=("blue");
    }
    ball.bounceOff(edges);
    createEdgeSprites();
    drawSprites();
}
