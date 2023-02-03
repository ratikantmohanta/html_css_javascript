const boxesContainer = document.getElementById('boxes');
const btn = document.getElementById('btn');

btn.addEventListener('click', () => boxesContainer.classList.toggle('big'));

function createBoxes() {
    for (let y = 0; y < 4; y++) {
        for (let x = 0; x < 4; x++) {
            const box = document.createElement('div');
            box.classList.add('box');
            box.style.backgroundPosition = `${-x * 125}px ${-y * 125}px`;

            boxesContainer.appendChild(box);
        }
    }
};

createBoxes();