const messageInput = document.querySelector('#problem-4 #message-input');
const messageFeedback = document.querySelector('#problem-4 #message-feedback')


// Write your code here

const MAX_CHARACTERS = 50;


messageInput.classList.add('is-valid')
setInterval(() => {
    if (messageInput.value.length <= MAX_CHARACTERS){
        messageInput.classList.add('is-valid')
        messageInput.classList.remove('is-invalid')
        messageFeedback.classList.add('valid-feedback')
        messageFeedback.classList.remove('invalid-feedback')
    
        left = 50 - (messageInput.value.length);
        messageFeedback.textContent = left + " characters left"
    }else{
        messageInput.classList.add('is-invalid')
        messageInput.classList.remove('is-valid')
        messageFeedback.classList.add('invalid-feedback')
        messageFeedback.classList.remove('valid-feedback')

    
        over = (messageInput.value.length) - 50;
        messageFeedback.textContent = over + " characters too long"
    }
},10)
