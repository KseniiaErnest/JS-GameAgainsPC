'use strict'

const input = document.querySelector('#guess');
const button = document.querySelector('#btn');
const answer = Math.floor(Math.random() * 20) + 1;

input.addEventListener('keypress', (e) => {
if (e.keyCode === 13) {
  play();
}
})

button.addEventListener('click', play);


// get access users number
// no possibility to enter a number that is number < 1 and number > 20
//  If input is not a number

function play() {
const userNumber = input.value;

if (userNumber < 1 || userNumber > 20) {
  Swal.fire({
    icon: 'error',
    title: 'Oops...',
    text: 'Please enter a number from 1 to 20!'
  })
} else if (isNaN(userNumber)) {
  Swal.fire({
    icon: 'error',
    title: 'Oops...',
    text: 'Please enter a number!'
  })
} else {
  if (userNumber < answer) {
    Swal.fire('Try a higher number!')
  } else if (userNumber > answer) {
    Swal.fire('Try a lower number!')
  } else {
    Swal.fire({
      title: 'Victory!',
      imageUrl: 'https://images.unsplash.com/photo-1527269534026-c86f4009eace?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1025&q=80',
      imageWidth: 600,
      imageHeight: 400,
      imageAlt: 'Victory',
    })
  }
}

}