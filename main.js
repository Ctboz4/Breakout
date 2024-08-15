document.addEventListener('DOMContentLoaded', (event) => {
    const paddle = document.getElementById('playerPaddle');
    const ball = document.getElementById('ball');
    const startButton = document.getElementById('startButton');
    let ballDirectionY = 1; // 1 for down, -1 for up
    let ballSpeed = 5; // Speed of the ball
    const lives = document.getElementById('healthBar');
    let healthBar = 3;

    startButton.addEventListener('click', () => {
        // Start the ball animation
        requestAnimationFrame(gameLoop);
   
    });

    function updateHealthBar(lives) {   
        

    }



function gameLoop() {


    // Get current positions
    const ballRect = ball.getBoundingClientRect();
    const paddleRect = paddle.getBoundingClientRect();

    // Move the ball
    ball.style.top = `${ballRect.top + ballSpeed * ballDirectionY}px`;

    // Check for collision with the paddle
    if (ballRect.bottom >= paddleRect.top &&
        ballRect.left < paddleRect.right &&
        ballRect.right > paddleRect.left) {
        ballDirectionY = -1; // Reverse direction to up
    }

    // Check for collision with the top of the screen
    if (ballRect.top <= 0) {
        ballDirectionY = 1; // Reverse direction to down
    }

    if (ballRect.bottom >= window.innerHeight) {
        console.log('Game Over!');
    }



    if (ballRect.bottom > window.innerHeight) {
        lives -= 1;
    }

    if (ballRect.top > window.innerHeight) {
        lives -= 1;
    }

   



    // Continue the game loop
    requestAnimationFrame(gameLoop);

    if (lives === 0) {
        alert('Game Over!');
        return;
    }

   
}


document.addEventListener('keydown', (event) => {
    const key = event.key;
    const walk = 15;
    let left = parseInt(window.getComputedStyle(paddle).left);

    if (key === 'a' || key === 'A') {
        left -= walk;
    } else if (key === 'd' || key === 'D') {
        left += walk;
    }

    paddle.style.left = `${left}px`;
});

});