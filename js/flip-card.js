const card = document.querySelectorAll('.character-card');

for (let i = 0; i < card.length; i++) {
    card[i].addEventListener('click', function() {
        for (let j = 0; j < card.length; j++) {
            card[j].classList.remove('flipped');
        }
        card[i].classList.add('flipped');
    });
}

// si on clique n'importe ou hors de la carte, on enlève la classe flipped
window.addEventListener('click', function(e) {
    if (!e.target.closest('.character-card')) {
        for (let i = 0; i < card.length; i++) {
            card[i].classList.remove('flipped');
        }
    }
});