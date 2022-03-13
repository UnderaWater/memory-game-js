const section = document.querySelector('.game');
const livesCount = document.querySelector('.liveCount');

let lives = 5;

livesCount.textContent = lives;

const getData = () => [
    { id: 1, imgSrc: './images/cat.jpg', name: 'cat'},
    { id: 2, imgSrc: './images/dog.jpg', name: 'dog'},
    { id: 3, imgSrc: './images/deer.jpg', name: 'deer'},
    { id: 4, imgSrc: './images/wolf.jpg', name: 'wolf'},
    { id: 5, imgSrc: './images/bear.jpg', name: 'bear'},
    { id: 6, imgSrc: './images/elephant.jpg', name: 'elephant'},
    { id: 7, imgSrc: './images/lion.jpg', name: 'lion'},
    { id: 8, imgSrc: './images/rabbit.jpg', name: 'rabbit'},
    { id: 9, imgSrc: './images/cat.jpg', name: 'cat'},
    { id: 10, imgSrc: './images/dog.jpg', name: 'dog'},
    { id: 11, imgSrc: './images/deer.jpg', name: 'deer'},
    { id: 12, imgSrc: './images/wolf.jpg', name: 'wolf'},
    { id: 13, imgSrc: './images/bear.jpg', name: 'bear'},
    { id: 14, imgSrc: './images/elephant.jpg', name: 'elephant'},
    { id: 15, imgSrc: './images/lion.jpg', name: 'lion'},
    { id: 16, imgSrc: './images/rabbit.jpg', name: 'rabbit'},
];

const randomize = () => {
    const data = getData();
    data.sort(() => Math.random() - 0.5);
    return data;
};

const generatorCards = () => {
    const data = randomize();
    
    data.forEach(element => {
        const card = document.createElement('div');
        const front = document.createElement('img');
        const back = document.createElement('div');

        card.classList = 'card';
        front.classList = 'front';
        back.classList = 'back';

        front.src = element.imgSrc;

        card.setAttribute('name', element.name);

        section.appendChild(card);
        card.appendChild(front);
        card.appendChild(back);

        card.addEventListener('click', (e) => {
            card.classList.toggle('toggleCard');
            checkCards(e)
        });
    });
};

const checkCards = (e) => {
    const clickedCard = e.target;
    clickedCard.classList.add('flipped');

    const flippedCards = document.querySelectorAll('.flipped');
    

    if(flippedCards.length === 2) {
        if(flippedCards[0].getAttribute('name') === flippedCards[1].getAttribute('name')){
            flippedCards.forEach(element => {
                element.classList.remove('flipped');
                element.style.pointerEvents = 'none';
            })
        } else {
            flippedCards.forEach(element => {
                element.classList.remove('flipped');
                setTimeout(() => {
                    element.classList.remove('toggleCard');
                }, 1000);
            });
            lives--;
            livesCount.textContent = lives;
            if(lives === 0) {
                restart()
            }
        };
    };
};

const restart = () => {
    let cardData = randomize();

    let fronts = document.querySelectorAll('.front');
    let cards = document.querySelectorAll('.card');

    section.style.pointerEvents = 'none'

    cardData.forEach((element, index) => {
        cards[index].classList.remove('toggleCard');
        setTimeout(() => {
            cards[index].style.pointerEvents = 'all';
            fronts[index].src = element.imgSrc;
            cards[index].setAttribute('name', element.name);
            section.style.pointerEvents = 'all'
        }, 1000);
    });

    lives = 5;
    livesCount.textContent = lives;
};

generatorCards();