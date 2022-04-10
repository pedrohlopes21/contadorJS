let count = 0;

const CURRENT_NUMBER = document.getElementById('currentNumber');

function resetCounter(){
    CURRENT_NUMBER.innerHTML = 0;
}

function decrement(){
    count--;
    CURRENT_NUMBER.innerHTML = count;
}

function increment(){
    count++;
    CURRENT_NUMBER.innerHTML = count;
}