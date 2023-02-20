// let myHeading = document.querySelector('h1');
// myHeading.textContent = 'Hello world!';

// let myVariable = '李雷';
// myVariable = '韩梅梅';

// let iceCream = 'chocolate';
// if (iceCream === 'chocolate') {
//     alert('我最喜欢巧克力冰激淋了。');
// } else {
//     alert('但是巧克力才是我的最爱呀……');
// }


let myImage = document.querySelector('img');

myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/Siberian-Husky-in-Snow-900x500.jpg') {
      myImage.setAttribute('src', 'images/Siberian-Husky-dog.jpg');
    } else {
      myImage.setAttribute('src', 'images/Siberian-Husky-in-Snow-900x500.jpg');
    }
}

let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

function setUserName() {
    let myName = prompt('请输入你的名字。');
    localStorage.setItem('name', myName);
    myHeading.textContent = 'Mozilla 酷毙了，' + myName;
  }
  

  if(!localStorage.getItem('name')) {
    setUserName();
  } else {
    let storedName = localStorage.getItem('name');
    myHeading.textContent = 'Mozilla 酷毙了，' + storedName;
  }
  
  myButton.onclick = function() {
    setUserName();
 }
 