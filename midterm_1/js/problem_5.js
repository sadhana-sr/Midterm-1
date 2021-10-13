const wordInput = document.querySelector('#problem-5 #rhyme-with-input');
const showRhymesButton = document.querySelector('#problem-5 #show-rhymes-button');
const clearButton = document.querySelector('#problem-5 #clear-rhymes-button');
const rhymesOutput = document.querySelector('#problem-5 #rhymes');

function getRhymes(rel_rhy, callback) {
    fetch(`https://api.datamuse.com/words?${(new URLSearchParams({rel_rhy})).toString()}`)
        .then((response) => response.json())
        .then((data) => {
            callback(data);
        }, (err) => {
            console.error(err);
        });
}

// Write your code here
let click = 0;
showRhymesButton.addEventListener('click', () =>{
    click++;
    getRhymes(wordInput.value, (result) => {
        for (a in result){
            let i = document.createElement('li')
            rhyming_word = result[a].word
            i.innerHTML='<li class="list-group-item">'+rhyming_word+'</li>'
            //console.log(rhymesOutput)
            rhymesOutput.append(i)
            wordInput.value = ''
        }

        if (result.length ==0 ){
            console.log('none')
            rhymesOutput.append('no rhymes')
        }

        if (click>1){
            rhymesOutput.innerHTML = ''
            console.log(rhymesOutput.innerHTML)

            for (a in result){
                let i = document.createElement('li')
                rhyming_word = result[a].word
                i.innerHTML='<li class="list-group-item">'+rhyming_word+'</li>'
                //console.log(rhymesOutput)
                rhymesOutput.append(i)
                wordInput.value = ''
            }
        }
        //console.log(result);
        }); 
    })

clearButton.addEventListener('click', () =>{
    rhymesOutput.innerHTML = ''
    wordInput.value = ''
})