document.addEventListener('mousemove', (e) => {
    if (Math.random() > 0.9) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        particle.style.left = e.clientX + 'px';
        particle.style.top = e.clientY + 'px';
        particle.style.background = `rgba(255, ${Math.random() * 100 + 130}, ${Math.random() * 100 + 90}, 0.8)`;
        document.body.appendChild(particle);

        setTimeout(() => {
            particle.remove();
        }, 2000);
    }
});