document.addEventListener('DOMContentLoaded', function () {
    const ball = document.getElementById('ball');
    const goal = document.getElementById('goal');

    let score = 0;

    // Beweeg de bal met de pijltjestoetsen
    document.addEventListener('keydown', function (event) {
        const key = event.key;
        const step = 10;

        if (key === 'ArrowUp') {
            moveBall(0, -step);
        } else if (key === 'ArrowDown') {
            moveBall(0, step);
        } else if (key === 'ArrowLeft') {
            moveBall(-step, 0);
        } else if (key === 'ArrowRight') {
            moveBall(step, 0);
        }
    });

    // Verplaats de bal en controleer of het doel is bereikt
    function moveBall(dx, dy) {
        const ballRect = ball.getBoundingClientRect();
        const gameRect = gameContainer.getBoundingClientRect();

        const newLeft = Math.min(Math.max(ballRect.left + dx, gameRect.left), gameRect.right - ballRect.width);
        const newTop = Math.min(Math.max(ballRect.top + dy, gameRect.top), gameRect.bottom - ballRect.height);

        ball.style.left = newLeft + 'px';
        ball.style.top = newTop + 'px';

        checkGoalReached();
    }

    // Controleer of de bal het doel heeft bereikt
    function checkGoalReached() {
        const ballRect = ball.getBoundingClientRect();
        const goalRect = goal.getBoundingClientRect();

        if (ballRect.left < goalRect.right &&
            ballRect.right > goalRect.left &&
            ballRect.top < goalRect.bottom &&
            ballRect.bottom > goalRect.top) {
            score++;
            document.getElementById('score').innerText = score;
            moveGoal();
        }
    }

    // Verplaats het doel naar een willekeurige positie binnen het speelveld
    function moveGoal() {
        const gameRect = gameContainer.getBoundingClientRect();

        const maxX = gameRect.width - goal.offsetWidth;
        const maxY = gameRect.height - goal.offsetHeight;

        const newX = Math.floor(Math.random() * maxX);
        const newY = Math.floor(Math.random() * maxY);

        goal.style.left = newX + 'px';
        goal.style.top = newY + 'px';
    }
});
