document.querySelectorAll('.card').forEach(card => {
    card.addEventListener('click', function () {
        this.style.background = 'linear-gradient(135deg, #ffb69e, white)';
        setTimeout(() => {
            this.style.background = 'white';
        }, 200);
    });
});

document.getElementById('cta').addEventListener('click', function (e) {
    e.preventDefault();
    this.textContent = '🎉 Let\'s go!';
    setTimeout(() => {
        this.textContent = 'Start Now';
    }, 1500);
});

const cards = document.querySelectorAll('.card');
cards.forEach((card, index) => {
    card.style.animationDelay = `${index * 0.2}s`;
});

const stats = document.querySelectorAll('.stat-number');
const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.animation = 'fadeInUp 0.8s ease-out';
        }
    });
});

stats.forEach(stat => observer.observe(stat));