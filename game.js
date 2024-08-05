let canvas = document.getElementById('canvas');
let ctx = canvas.getContext('2d');
let cannonImage = new Image();

let cannon = {
    x: undefined,
    y: undefined,
    width: 60,
    height: 180
};

cannonImage.src = "images/cannon.png";  // Make sure the path is correct

// Update cannon position based on canvas size
function updateCannonPosition() {
    cannon.x = (canvas.width - (cannon.width)/2)/2; // Center horizontally
    cannon.y = canvas.height - cannon.height; // Positioned at the bottom
}

function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    updateCannonPosition();
    drawCannon();
}

function drawCannon() {
    ctx.clearRect(0, 0, canvas.width, canvas.height); // Clear the canvas before drawing
    ctx.drawImage(cannonImage, cannon.x, cannon.y, cannon.width, cannon.height);
}

window.addEventListener('resize', resizeCanvas);

// Draw the cannon once the image has loaded
cannonImage.onload = () => {
    resizeCanvas(); // Ensure canvas is resized and cannon position is updated
};

// Initial canvas size and drawing
resizeCanvas();

canvas.addEventListener('mousemove', (event) => {
    let mouseX = event.clientX;
    let mouseY = event.clientY;
    console.log(`Mouse X: ${mouseX}, Mouse Y: ${mouseY}`);
});
