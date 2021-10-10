img_array = ["rage.png","dream.png","idk.jfif","player niceeee.png"];
randomn = Math.floor(Math.random()*4);


var canvas = new fabric.Canvas("c");
px = 10;
py = 10;

biw = 30;
bih = 30;

var po = "";
var bo = "";

function playerupdate(){
fabric.Image.fromURL("player niceeee.png", function(Img){
    po = Img;
    po.scaleToWidth(150);
    po.scaleToHeight(140);
    po.set({
        top:py,
        left:px
    });
    canvas.add(po);
});
}

function newimg(getimg){
    fabric.Image.fromURL(getimg, function(Img){
        bo = Img;
        bo.scaleToWidth(biw);
        bo.scaleToHeight(bih);
        bo.set({
            top:py,
            left:px
        });
        canvas.add(bo);
    });
    }

    window.addEventListener("keydown",keydown);
    function keydown(e){
        keyPressed = e.keyCode;
        console.log(keyPressed);
        if(e.shiftKey == true && keyPressed == "80"){
            console.log("shift and p pressed together");
            biw = biw + 10;
            bih = bih + 10;
            document.getElementById("w").innerHTML = biw;
            document.getElementById("h").innerHTML = bih;
            
        }

        if(e.shiftKey == true && keyPressed == "77"){
            console.log("shift and m pressed together");
            biw = biw - 10;
            bih = bih - 10;
            document.getElementById("w").innerHTML = biw;
            document.getElementById("h").innerHTML = bih;
            
        }

        if(keyPressed == "38"){
        up();
        console.log("up");
        }
        
        if(keyPressed == "40"){
            down();
            console.log("down");
            }
            
        if(keyPressed == "37"){
            left();
            console.log("left");
            }
            
        if(keyPressed == "39"){
            right();
            console.log("right");
            }
        
            if(keyPressed == "87"){
                newimg("wall.jpg");
                console.log("w");
                }
                if(keyPressed == "71"){
                    newimg("ground.png");
                    console.log("g");
                    }
                    if(keyPressed == "76"){
                        newimg("light_green.png");
                        console.log("l");
                        }
                        if(keyPressed == "84"){
                            newimg("trunk.jpg");
                            console.log("t");
                            }
                            if(keyPressed == "82"){
                                newimg("roof.jpg");
                                console.log("r");
                                }
                                if(keyPressed == "89"){
                                    newimg("yellow_wall.png");
                                    console.log("y");
                                    }
                                    if(keyPressed == "68"){
                                        newimg("dark_green.png");
                                        console.log("d");
                                        }
                                        if(keyPressed == "85"){
                                            newimg("unique.png");
                                            console.log("u");
                                            }
                                            if(keyPressed == "67"){
                                                newimg("cloud.jpg");
                                                console.log("c");
                                                }
                                                if(keyPressed == "81"){
                                                    newimg("download.png");
                                                    console.log("q");}
                                                    if(keyPressed == "72"){
                                                        newimg("p.jfif");
                                                        console.log("h");}
                                                    
    }

function up(){
    if(py >= 0){
        py = py - bih;
        console.log("Block height is " + bih);
        console.log("When up arrow is pressed x = "+ px + ", y = "+py);
        canvas.remove(po);
        playerupdate();
    }
}
function down(){
    if(py <= 500){
        py = py + bih;
        console.log("Block height is " + bih);
        console.log("When down arrow is pressed x = "+ px + ", y = "+py);
        canvas.remove(po);
        playerupdate();
    }
}
function right(){
    if(px <= 850){
        px = px + biw;
        console.log("Block width is " + biw);
        console.log("When right arrow is pressed x = "+ px + ", y = "+py);
        canvas.remove(po);
        playerupdate();
    }
}
function left(){
    if(px > 0){
        px = px - biw;
        console.log("Block width is " + biw);
        console.log("When left arrow is pressed x = "+ px + ", y = "+py);
        canvas.remove(po);
        playerupdate();
    }
}