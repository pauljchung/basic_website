let myImage = document.querySelector('img');
myImage.setAttribute('width', '600');
myImage.setAttribute('width', '600');
myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/pic_facebook.png') {
      myImage.setAttribute('src','images/pic_magnifying.png');
    } else {
      myImage.setAttribute('src','images/pic_facebook.png');
    }
    myImage.setAttribute('width', '600');
    myImage.setAttribute('width', '600');
}

let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

function setUserName() {
    let myName = prompt('Please enter your name.');
    localStorage.setItem('name', myName);
    myHeading.textContent = 'Gareth is cool, ' + myName;
  }

if(!localStorage.getItem('name')) {
setUserName();
} else {
let storedName = localStorage.getItem('name');
myHeading.textContent = 'Mozilla is cool, ' + storedName;
}

myButton.onclick = function() {
    setUserName();
  }
  