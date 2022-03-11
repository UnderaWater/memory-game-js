const section = document.querySelector('.game');
const livesCount = document.querySelector('.liveCount');

const lives = 5;

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
]