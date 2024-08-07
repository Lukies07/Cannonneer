let canvas = document.getElementById('canvas');
let ctx = canvas.getContext('2d');
let cannonImage = new Image();

let cannon = {
    x: undefined,
    y: undefined,
    width: 60,
    height: 180,
    pivotOffset: 0.17, // Pivot point offset from the bottom (5%)
    pivotPoint: { x: undefined, y: undefined },
};

cannonImage.src = "images/cannon.png";  // Make sure the path is correct

// Update cannon position based on canvas size
function updateCannonPosition() {
    cannon.x = (canvas.width - cannon.width) / 2; // Center horizontally
    cannon.y = canvas.height - cannon.height; // Positioned at the bottom
    cannon.pivotPoint.x = cannon.x + cannon.width / 2;
    cannon.pivotPoint.y = cannon.y + cannon.height * (1 - cannon.pivotOffset); // Pivot point 5% above the bottom
}

function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    updateCannonPosition();
    drawCannon();
}

function drawCannon(angle = 0) {
    ctx.clearRect(0, 0, canvas.width, canvas.height); // Clear the canvas before drawing
    ctx.save(); // Save the current state
    ctx.translate(cannon.pivotPoint.x, cannon.pivotPoint.y); // Move to the pivot point
    ctx.rotate(angle); // Rotate the canvas to the specified angle
    ctx.drawImage(cannonImage, -cannon.width / 2, -cannon.height * (1 - cannon.pivotOffset), cannon.width, cannon.height); // Draw the cannon
    ctx.restore(); // Restore the previous state
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
    let dx = mouseX - cannon.pivotPoint.x;
    let dy = mouseY - cannon.pivotPoint.y;
    let angle = Math.atan2(dy, dx) + Math.PI / 2; // Calculate the angle and add π/2
    drawCannon(angle); // Draw the cannon at the calculated angle
});
