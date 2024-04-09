    // Verplaats de bal en controleer of het doel is bereikt
    function moveBall(dx, dy) {
        con
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
