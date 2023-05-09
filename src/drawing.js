const stepSize = 90; // horizontal axis
const vertStepSize = 30; // vertical axis
const offset = 10;
const tickLen = 10;
const deg = "°";

// function for drawing the axis
function drawAxis(canvasWidth, canvasHeight) {
    const canvas = document.getElementById("sineCanvas");
    const width = canvasWidth;
    const height = canvasHeight;
    let context = canvas.getContext("2d");
    context.clearRect(0,0,width,height);
    context.beginPath();

    // style
    context.strokeStyle = "#000000";
    context.lineWidth = 1;
    
    // axis
    context.moveTo(width/2,offset);
    context.lineTo(width/2,height-offset);
    context.stroke();

    context.moveTo(offset, height/2);
    context.lineTo(width-offset, height/2);
    context.stroke();

    // ticks
    context.moveTo(width/2, height/2);
    for (let x = 0; x < width/2-offset; x+=stepSize) {
        context.moveTo(width/2+x, height/2-tickLen);
        context.lineTo(width/2+x, height/2);
        context.stroke();
        context.fillText(String(x)+deg, width/2+x, height/2+tickLen);
    }
    context.moveTo(width/2, height/2);
    for (let x = 0; x < width/2-offset; x+=stepSize) {
        context.moveTo(width/2-x, height/2-tickLen);
        context.lineTo(width/2-x, height/2);
        context.stroke();
        context.fillText(String(-1*x)+deg, width/2-x, height/2+tickLen);
    }
    context.moveTo(width/2, height/2);
    for (let y = vertStepSize; y < height/2-offset; y+=vertStepSize) {
        context.moveTo(width/2+tickLen, height/2+y);
        context.lineTo(width/2, height/2+y);
        context.stroke();
        context.fillText(String(-1*y/vertStepSize), width/2-1.2*tickLen, height/2+y);
    }
    context.moveTo(width/2, height/2);
    for (let y = 0; y < height/2-offset; y+=vertStepSize) {
        context.moveTo(width/2+tickLen, height/2-y);
        context.lineTo(width/2, height/2-y);
        context.stroke();
        context.fillText(String(y/vertStepSize), width/2-tickLen, height/2-y);
    }
}

// draw sine wave
function drawWave(a,b,c,d,canvasWidth,canvasHeight) {
    const width = canvasWidth;
    const height = canvasHeight;

    // calc min and max x values
    const n = Math.floor((width/2-offset)/stepSize);
    const maxX = stepSize*n;
    const minX = -1*stepSize*n;
    
    const canvas = document.getElementById("sineCanvas");
    let context = canvas.getContext("2d");

    // style
    context.beginPath();
    context.strokeStyle = "#CC6600";
    context.lineWidth = 1;
    
    // draw
    for (let x = minX; x <= maxX; x++) {
        const res = a*Math.sin((b*x+c)*Math.PI/180)+d; // degrees
        const y = res*vertStepSize; // convert result to y value in coordinates
        context.lineTo(width/2+x, height/2-y);
        context.stroke();
    }
}

// draw axis and sine wave
function draw(a,b,c,d,width,height) {
    drawAxis(width, height);
    drawWave(a,b,c,d,width,height);
}


export default draw;