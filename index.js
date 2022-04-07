function writeCards(cards, event) {
    let newArr = [];
    for (let i = 0; i < cards.length; i++) {
       let message = (`Thank you, ${cards[i]}, for the wonderful ${event} gift!`);
       newArr.push(message);
    } 
    return newArr;
}

function countDown(int) {
    while (int>= 0) {
        console.log(int);
        int--;
    }
}