let canvas = document.getElementById("pongCanvas");
let context = canvas.getContext("2d");

let ball;
let paddleWidth = 15, paddleHeight = 80;
let paddleSpeed = 2;
let leftPaddle;
let rightPaddle;

function drawBall() {
    context.beginPath();
    context.arc(ball.x, ball.y, ball.radius, 0, Math.PI * 2, false);
    context.fillStyle = "#fff";
    context.fill();
    context.closePath();
}

function drawPaddle(x, y, width, height) {
    context.beginPath();
    context.rect(x, y, width, height);
    context.fillStyle = "#fff";
    context.fill();
    context.closePath();
}

function update() {
  context.clearRect(0, 0, canvas.width, canvas.height);
  drawBall();
  drawPaddle(leftPaddle.x, leftPaddle.y, leftPaddle.width, leftPaddle.height);
  drawPaddle(rightPaddle.x, rightPaddle.y, rightPaddle.width, rightPaddle.height);
  
  ball.x += ball.dx;
  ball.y += ball.dy;

  if(ball.y + ball.radius > canvas.height || ball.y - ball.radius < 0) {
      ball.dy *= -1;
  }

  if(leftPaddle.y + leftPaddle.height / 2 < ball.y) {
    leftPaddle.y += leftPaddle.dy;
  } else {
      leftPaddle.y -= leftPaddle.dy;
  }
  if(rightPaddle.y + rightPaddle.height / 2 < ball.y) {
      rightPaddle.y += rightPaddle.dy;
  } else {
      rightPaddle.y -= rightPaddle.dy;
  }

  if(ball.dx < 0) {
      if(ball.x - ball.radius <= leftPaddle.x + leftPaddle.width && ball.y >= leftPaddle.y && ball.y <= leftPaddle.y + leftPaddle.height) {
          ball.dx *= -1;
      }
  } else if(ball.dx > 0) {
      if(ball.x + ball.radius >= rightPaddle.x && ball.y >= rightPaddle.y && ball.y <= rightPaddle.y + rightPaddle.height) {
          ball.dx *= -1;
      }
  }
}

function setInitialPosition() {
    leftPaddle = { x: 0, y: canvas.height / 2, width: paddleWidth, height: paddleHeight, dy: paddleSpeed };
    rightPaddle = { x: canvas.width - paddleWidth, y: canvas.height / 2, width: paddleWidth, height: paddleHeight, dy: paddleSpeed };

    ball = {
        x: canvas.width / 2,
        y: canvas.height / 2,
        radius: 10,
        dx: 2,
        dy: 2
    };
}

function resizeCanvas() {
    canvas.width = canvas.offsetWidth;
    canvas.height = canvas.offsetHeight;
    setInitialPosition();
}

setInterval(update, 20);

resizeCanvas();

window.addEventListener("resize", resizeCanvas);
