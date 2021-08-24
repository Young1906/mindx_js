// Reference: 
// https://www.javascripttutorial.net/web-apis/javascript-draw-line/

// cursor is an object describe current state of
// the pen {x, y, angle}
var turtle = {x: 0, y:0, w:-90}

// canvas thingy
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

// adjust coordinate system
W = Math.floor(canvas.width / 2)
H = Math.floor(canvas.height / 2)

draw()
console.log(turtle)

// Homework content here
// ====================================


function draw(){
    if (!ctx)
        return;

    
      
    // e11.a: square
    polygon(4, 100);

    // e11.b: triangle
    polygon(3, 100);

    // e11.c: pentagon
    polygon(5, 100);

    // e11.d: hexagon
    polygon(6, 100);

    // e12
    {
        let n = read_number("Input number of side");
        let l = 400/n;
        polygon(n, l);
    }
    

    // e13
    {
        let n = read_number("Input number of polygon");
        for (let i = 3; i < n+3; i++){
            polygon(i, 100);
        }
    }
    

}


function polygon(n, l){
    // angle to rotate
    let w = 360/n;

    for (let i = 0; i < n; i++) {
        forward(l);
        right(w);
    }
}
// ====================================
// End of homework content





// My turtle implementation
function forward(l){
    // convert w to radian
    w = turtle.w * Math.PI / 180;
    let _x = turtle.x + l * Math.cos(w);
    let _y = turtle.y + l * Math.sin(w)
    
    drawLine([turtle.x, turtle.y], [_x, _y]);

    // move turtle forward
    turtle.x = _x; 
    turtle.y = _y;

    // console.log(turtle);
}

function rotate(w){
    // rotate turtle by angle w
    turtle.w+=w;
    
}

function left(w){
    // counter clockwise rotation
    rotate(-w);
}

function right(w){
    rotate(w);
}


function drawLine(begin, end, stroke="black", width=1){
    /*
    Draw a line between 2 point begin and end
        begin [x, y]
        end   [x, y]
    */

    // Adjusting coordinate so that center of canvas = [0, 0];
    begin = [begin[0] + W, begin[1] + H]
    end = [end[0] + W, end[1] + H]
    if (stroke)
        ctx.strokeStyle = stroke;
    
    if (width)
        ctx.lineWidth = width;

    ctx.beginPath();
    ctx.moveTo(...begin);
    ctx.lineTo(...end);
    ctx.stroke();
    ctx.moveTo(...end);
}

function read_number(msg){
    let n; 
    do {
        n = Number(prompt(msg));
    } while (isNaN(n));

    return n;
}