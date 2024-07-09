const container = document.querySelector('.container');
const numberOfDots = 50; 
const dots = [];
const speed = 2; 
for (let i = 0; i < numberOfDots; i++) {
    const dot = document.createElement('div');
    dot.classList.add('dot');
    dot.style.top = Math.random() * 100 + 'vh';
    dot.style.left = Math.random() * 100 + 'vw';
    container.appendChild(dot);
    dots.push({ element: dot, dx: (Math.random() - 0.5) * speed, dy: (Math.random() - 0.5) * speed });
}
function moveDots() {
    dots.forEach(dot => {
        const rect = dot.element.getBoundingClientRect();
        let newX = rect.left + dot.dx;
        let newY = rect.top + dot.dy;

        if (newX <= 0 || newX >= window.innerWidth - rect.width) {
            dot.dx *= -1;
        }
        if (newY <= 0 || newY >= window.innerHeight - rect.height) {
            dot.dy *= -1;
        }
        dot.element.style.left = (rect.left + dot.dx) + 'px';
        dot.element.style.top = (rect.top + dot.dy) + 'px';
    });
    requestAnimationFrame(moveDots);
}
moveDots();
document.addEventListener('DOMContentLoaded', () => {
    const rocket = document.querySelector('.rocket');
    rocket.addEventListener('click', () => {
        rocket.style.animation = 'launchRocket 5s linear forwards'; // Adjust time as needed
    });
});


