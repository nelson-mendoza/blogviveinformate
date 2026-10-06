// Assets/js/clock.js
document.addEventListener("DOMContentLoaded", () => {
    // Intentamos crear el reloj y ponerlo en el header si Blowfish lo permite
    // Como Blowfish es complejo, vamos a inyectarlo dinámicamente si el header existe
    const header = document.querySelector('header');
    if (header) {
        const clock = document.createElement('div');
        clock.id = 'hacker-clock';
        clock.style.color = '#00ff00';
        clock.style.fontFamily = 'monospace';
        clock.style.fontSize = '0.8rem';
        clock.style.padding = '5px 10px';
        clock.style.textAlign = 'right';
        header.prepend(clock);

        function updateClock() {
            const now = new Date();
            clock.innerText = now.toISOString().replace('T', ' ').substring(0, 19) + ' UTC';
        }
        setInterval(updateClock, 1000);
        updateClock();
    }
});
