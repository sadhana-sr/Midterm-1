const clickCountButton = document.querySelector('#problem-3 #click-count');

// write your code here

function addS(num) {
    if(num === 1) {
        return '';
    } else {
        return 's';
    }
}

button = document.getElementById('click-count')

let clicks = 0
button.addEventListener('click', () => {
    clicks++
    button.firstChild.textContent = " You clicked the button " + clicks + " times"

});
