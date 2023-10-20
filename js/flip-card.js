const characterCard = document.querySelectorAll('.character-card');
const levelCard = document.querySelectorAll('.level-card');
const descriptionCard = document.querySelectorAll('.description-card');


for (let i = 0; i < characterCard.length; i++) {
    characterCard[i].addEventListener('click', function() {
        for (let j = 0; j < characterCard.length; j++) {
            characterCard[j].classList.remove('flipped');
        }
        characterCard[i].classList.add('flipped');
    });
}

window.addEventListener('click', function(e) {
    if (!e.target.closest('.character-card')) {
        for (let i = 0; i < characterCard.length; i++) {
            characterCard[i].classList.remove('flipped');
        }
    }
});

for (let i = 0; i < levelCard.length; i++) {
    levelCard[i].addEventListener('click', function() {
        for (let j = 0; j < levelCard.length; j++) {
            levelCard[j].classList.remove('flipped');
        }
        levelCard[i].classList.add('flipped');
    });
}

window.addEventListener('click', function(e) {
    if (!e.target.closest('.level-card')) {
        for (let i = 0; i < levelCard.length; i++) {
            levelCard[i].classList.remove('flipped');
        }
    }
});

for (let i = 0; i < descriptionCard.length; i++) {
    descriptionCard[i].addEventListener('click', function() {
        for (let j = 0; j < descriptionCard.length; j++) {
            descriptionCard[j].classList.remove('flipped');
        }
        descriptionCard[i].classList.add('flipped');
    });
}

window.addEventListener('click', function(e) {
    if (!e.target.closest('.description-card')) {
        for (let i = 0; i < descriptionCard.length; i++) {
            descriptionCard[i].classList.remove('flipped');
        }
    }
});