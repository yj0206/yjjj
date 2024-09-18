document.querySelectorAll('.gallery img').forEach(img => {
    img.addEventListener('click', () => {
        const src = img.src;
        const modal = document.createElement('div');
        modal.classList.add('modal');
        modal.innerHTML = `<img src="${src}" alt="Enlarged Image"><button class="close">&times;</button>`;
        document.body.appendChild(modal);

        document.querySelector('.close').addEventListener('click', () => {
            document.body.removeChild(modal);
        });
    });
});