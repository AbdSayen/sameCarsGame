document.addEventListener('DOMContentLoaded', () => {
    const cardArray = [{
            name: 'fries',
            img: 'img/fries.png'
        },
        {
            name: 'cheeseburger',
            img: 'img/cheeseburger.png'
        },
        {
            name: 'ice-cream',
            img: 'img/ice-cream.png'
        },
        {
            name: 'pizza',
            img: 'img/pizza.png'
        },
        {
            name: 'milkshake',
            img: 'img/milkshake.png'
        },
        {
            name: 'hotdog',
            img: 'img/hotdog.png'
        },
        {
            name: 'fries',
            img: 'img/fries.png'
        },
        {
            name: 'cheeseburger',
            img: 'img/cheeseburger.png'
        },
        {
            name: 'ice-cream',
            img: 'img/ice-cream.png'
        },
        {
            name: 'pizza',
            img: 'img/pizza.png'
        },
        {
            name: 'milkshake',
            img: 'img/milkshake.png'
        },
        {
            name: 'hotdog',
            img: 'img/hotdog.png'
        }
    ]

    let board = document.querySelector('.gameBoard');
    let cardsChosen = [];
    let cardsChosenId = [];
    let foundCards = [];

    let stepsCounter = document.querySelector('#steps');
    let steps = 0;

    function createBoard() {
        for (let index = 0; index < cardArray.length; index++) {
            let image = document.createElement('img');
            image.setAttribute('src', 'img/blank.png');
            image.setAttribute('data-id', index);
            image.addEventListener('click', flipCard);

            board.appendChild(image);
        }
    }

    function flipCard() {
        steps++;
        stepsCounter.innerHTML = steps;

        let images = document.querySelectorAll('img');
        if (cardsChosen.length == 2) {
            checkMatch();
        }
        let cardId = this.getAttribute('data-id');
        cardsChosenId.push(cardId);
        cardsChosen.push(cardArray[cardId].name);
        this.setAttribute('src', cardArray[cardId].img)

        console.log(cardsChosen);
    }

    function checkMatch() {
        let images = document.querySelectorAll('img');
        if (cardsChosenId[0] === cardsChosenId[1]) {
            alert('you chose the same card');
            images[cardsChosenId[0]].setAttribute('src', 'img/blank.png')
            images[cardsChosenId[1]].setAttribute('src', 'img/blank.png')
        } else if (cardsChosen[0] === cardsChosen[1]) {
            images[cardsChosenId[0]].setAttribute('src', 'img/white.png')
            images[cardsChosenId[1]].setAttribute('src', 'img/white.png')

            images[cardsChosenId[0]].removeEventListener('click', flipCard);
            images[cardsChosenId[1]].removeEventListener('click', flipCard);

            foundCards.push(cardsChosen[0]);

            alert('you found same cards!');
        } else {
            images[cardsChosenId[0]].setAttribute('src', 'img/blank.png')
            images[cardsChosenId[1]].setAttribute('src', 'img/blank.png')
        }

        cardsChosen = []
        cardsChosenId = []

        // if (cardsChosen.length >= 2) {
        //     cardsChosen = [];
        //     cardsChosenId = [];
        //     for (let index = 0; index < images.length; index++) {
        //         if (images[index] in ) {

        //         }
        //         images[index].setAttribute('src', 'img/blank.png');
        //     }
        // }
    }

    createBoard();
})