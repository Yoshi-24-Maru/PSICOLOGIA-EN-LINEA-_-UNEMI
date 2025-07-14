const canvas = document.getElementById("malla");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const cols = 40;
const rows = 40;
const spacingX = canvas.width / cols;
const spacingY = canvas.height / rows;

let mouse = { x: canvas.width / 2, y: canvas.height / 2 };

window.addEventListener("mousemove", function(e) {
  mouse.x = e.clientX;
  mouse.y = e.clientY;
});

function drawGrid() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  for (let x = 0; x < cols; x++) {
    for (let y = 0; y < rows; y++) {
      const posX = x * spacingX;
      const posY = y * spacingY;

      const dx = mouse.x - posX;
      const dy = mouse.y - posY;
      const dist = Math.sqrt(dx * dx + dy * dy);

      const angle = Math.atan2(dy, dx);
      const len = Math.min(20, 100 / dist);

      ctx.beginPath();
      ctx.moveTo(posX, posY);
      ctx.lineTo(posX + Math.cos(angle) * len, posY + Math.sin(angle) * len);
      ctx.strokeStyle = `hsl(${dist}, 100%, 70%)`;
      ctx.stroke();
    }
  }
  requestAnimationFrame(drawGrid);
}

drawGrid();
