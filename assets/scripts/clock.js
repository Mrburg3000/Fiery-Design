const fullscreenClock = document.getElementById('fullscreenClock');
const openClockBtn = document.getElementById('openClock');
const closeClockBtn = document.getElementById('closeClock');
const clockTime = document.getElementById('clockTime');
const clockDate = document.getElementById('clockDate');

let clockInterval;

function updateClock() {
    const now = new Date();

    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');
    clockTime.textContent = `${hours}:${minutes}:${seconds}`;

    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    clockDate.textContent = now.toLocaleDateString('pt-BR', options);
}

openClockBtn.addEventListener('click', () => {
    fullscreenClock.classList.add('active');
    updateClock();
    clockInterval = setInterval(updateClock, 1000);
});

closeClockBtn.addEventListener('click', () => {
    fullscreenClock.classList.remove('active');
    clearInterval(clockInterval);
});

document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && fullscreenClock.classList.contains('active')) {
        fullscreenClock.classList.remove('active');
        clearInterval(clockInterval);
    }
});