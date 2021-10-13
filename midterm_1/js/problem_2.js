// Helps us pluralize word formatting by returning if we should
// add an 's' for a given quantity.
//
// For example, we should say '1 car' but '5 cars'
function addS(num) {
    if(num === 1) {
        return '';
    } else {
        return 's';
    }
}

const thingInput = document.querySelector('#problem-2 #thing-num-input');
const thingCountOutput = document.querySelector('#problem-2 #thing-count');

// Write your code here

if (parseInt(thingInput.value) >= 0){
    setInterval(() => { 
        (function(){
            thingCountOutput.textContent = "You added " + parseInt(thingInput.value) + " thing" + addS(parseInt(thingInput.value));
        }) ();
        
        },0)
}

    
    
    

