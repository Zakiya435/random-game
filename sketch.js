var man;
var ground,top;
var score = 0;

function preload()
{
    ground_img = loadImage("ground.gif");
    man_img = loadImage("man.gif");
    bg = loadImage("bg.gif");
}
function setup()
{
    createCanvas(800,800);
    man = createSprite(200,350,40,40);
    man.addImage("man",man_img); 
    man.scale = 0.4;

    ground = createSprite(200,995,1000,10);
    ground.addImage("grounds",ground_img);
    ground.scale = 5;

    rand = random(400,600);
    bottom = createSprite(800,rand,500,100);
    bottom.velocityX = -10;
    bottom.addImage("grounds",ground_img);
    bottom.scale = 1;
}
function draw()
{
    background(bg);
    man.collide(ground);
    man.collide(bottom);
    rand2 = random(400,600);
    if(keyDown("space") && (man.y >= 150))
    {
      man.velocityY = -15;
    }  
    if(bottom.x < -150&&(bottom.y = rand2))
    {
        bottom.x = 800;
    }
    if(man.collide(bottom))
    {
        score++;
    }
    textSize(20);
    text("if you go out of the screen, you lose!!     Score: "+score,200,200);
    textSize(15);
    text("press space bar to jump and if you stay on the floating ground for too long, you will be dragged away",50,300);
    if(man.y >= 700)
    {
        bottom.velocityX = 0;
        textSize(20);
        text("YOU LOSE!!",400,400);
    }
    man.velocityY = man.velocityY + 0.8;
    drawSprites();
}
