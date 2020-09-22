// let myHeading = document.querySelector('h1');

// myHeading.textContent = 'Hello world!';

// function multiply(num1, num2) {
//     let result = num1 * num2;
//     return result;
//   }


// document.querySelector('html').onclick = function() {

//     alert( multiply(2,3));
// }

let me = document.querySelector('p');
me.onclick = function () {
    let id = me.getAttribute('id');
    if (id == 'p_id') {
        alert('id');
    } else {
        alert('ic');
    }
}


document.querySelector('img').onclick = function () {
    let tupian = document.querySelector('img').getAttribute('src');
    if (tupian == 'images/shangjiantou.png') {
        alert('id');
    } else {
        alert('ic');
    }
}


let myButton = document.querySelector('button');
let myh1 = document.querySelector('h1');


function myHeading() {
    let button = prompt('欢迎登陆');
    if (!button || button === null) {
        myHeading();
    } else {
        myh1.innerHTML = '欢迎，' + button +'!';
        // localStorage.setItem('name', button);
        // alert(localStorage.getItem('name'));
    }

}
myButton.onclick = function () {
    myHeading();
}


