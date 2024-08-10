document.addEventListener('DOMContentLoaded', (event) => {
    const paddle = document.getElementById('playerPaddle');
    const ball = document.getElementById('ball');
    const startButton = document.getElementById('startButton');

    startButton.addEventListener('click', () => {
        // Start the ball animation
        ball.style.animation = 'fall 2s linear infinite';
    });
});