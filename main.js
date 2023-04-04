// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!
document.querySelectorAll('.like').forEach(like => {
  like.addEventListener('click', () => {
    mimicServerCall()
      .then(() => {
        // Handle success case
        like.classList.add('activated-heart')
        like.innerHTML = FULL_HEART
      })
      .catch(() => {
        // Handle error case
        const modal = document.getElementById('modal')
        modal.classList.remove('hidden')
        const modalMessage = document.getElementById('modal-message')
        modalMessage.innerText = "Random server error. Please try again."
        setTimeout(() => {
          modal.classList.add('hidden')
        }, 3000)
      })
  })
})
document.querySelectorAll('.like').forEach(like => {
  like.addEventListener('click', () => {
    if (like.classList.contains('activated-heart')) {
      like.classList.remove('activated-heart')
      like.innerHTML = EMPTY_HEART
    } else {
      mimicServerCall()
        .then(() => {
          // Handle success case
          like.classList.add('activated-heart')
          like.innerHTML = FULL_HEART
        })
        .catch(() => {
          // Handle error case
          const modal = document.getElementById('modal')
          modal.classList.remove('hidden')
          const modalMessage = document.getElementById('modal-message')
          modalMessage.innerText = "Random server error. Please try again."
          setTimeout(() => {
            modal.classList.add('hidden')
          }, 3000)
        })
    }
  })
})




//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
