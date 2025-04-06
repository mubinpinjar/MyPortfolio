// Show greeting message on page load
window.onload = function () {
    const greeting = document.createElement('p');
    const hour = new Date().getHours();
    let message = "Welcome!";
    if (hour < 12) message = "Good Morning!";
    else if (hour < 18) message = "Good Afternoon!";
    else message = "Good Evening!";
    greeting.textContent = message;
    greeting.style.fontSize = "2.5rem";
    greeting.style.color = "#1b2631";
    greeting.style.fontWeight = "bold";
    greeting.style.fontFamily = "Georgia, serif";
    greeting.style.fontStyle = "italic";
    document.querySelector("#home .container").appendChild(greeting);
};

// Glittery animated background and landing page logic
document.addEventListener("DOMContentLoaded", function () {
    // Glitter Canvas
    const canvas = document.createElement("canvas");
    canvas.id = "glitterCanvas";
    document.body.appendChild(canvas);

    canvas.style.position = "fixed";
    canvas.style.top = "0";
    canvas.style.left = "0";
    canvas.style.zIndex = "-1";
    canvas.style.pointerEvents = "none";

    const ctx = canvas.getContext("2d");
    let width, height;
    const particles = [];

    function resizeCanvas() {
        width = canvas.width = window.innerWidth;
        height = canvas.height = window.innerHeight;
    }

    window.addEventListener("resize", resizeCanvas);
    resizeCanvas();

    class Particle {
        constructor() {
            this.reset();
        }

        reset() {
            this.x = Math.random() * width;
            this.y = Math.random() * height;
            this.radius = Math.random() * 1.5 + 0.5;
            this.opacity = Math.random();
            this.speed = Math.random() * 0.5 + 0.2;
        }

        update() {
            this.y += this.speed;
            if (this.y > height) this.reset();
        }

        draw() {
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.radius, 0, 2 * Math.PI);
            ctx.fillStyle = `rgba(255, 255, 255, ${this.opacity})`;
            ctx.fill();
        }
    }

    for (let i = 0; i < 1000; i++) {
        particles.push(new Particle());
    }

    function animate() {
        ctx.clearRect(0, 0, width, height);
        particles.forEach(p => {
            p.update();
            p.draw();
        });
        requestAnimationFrame(animate);
    }

    animate();

    // ✅ Split landing page button logic
    document.querySelectorAll('.enter-btn, .hire-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            const landing = document.getElementById('landing');
            if (landing) {
                landing.style.display = 'none';
            }
        });
    });

    // ✅ Split hover effect
    const left = document.querySelector('.left');
const right = document.querySelector('.right');
const container = document.querySelector('.container');

left.addEventListener('mouseenter', () => container.classList.add('hover-left'));
left.addEventListener('mouseleave', () => container.classList.remove('hover-left'));

right.addEventListener('mouseenter', () => container.classList.add('hover-right'));
right.addEventListener('mouseleave', () => container.classList.remove('hover-right'));


});
