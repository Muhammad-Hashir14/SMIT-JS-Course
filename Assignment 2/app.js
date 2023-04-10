// Write a function that creates a closure and returns a function that can add
// a specific number to any number passed to it. For example, if the closure is
// created with 5, the returned function should add 5 to any number passed
// to it.
function firstNum(num1){
    return function(num2){
        return num1 + num2;
    }
}
const add = firstNum(10);
console.log(add(10));

// Write a recursive function that searches an array for a specific value. The
// function should return true if the value is found, and false if it is not. You
// can assume that the array is not nested
let arr = [43, 54, 7, 23, 76, 89, 23];
function check(arr, value){
   if (arr.length === 0){
    return false
   }
   if (arr[0] === value){
        return true
   }
   else{
        return check(arr.slice(1), value)
   }
}
let val = +prompt("Enter a value : ");
console.log(check(arr, val));

// Write a function that adds a new paragraph element to the bottom of an
// HTML document. The function should take a string argument that will be
// used as the text content of the new paragraph element.
function innerText(str){
    let doc = document.getElementById("text");
    doc.innerText = str
}
innerText("hello world")

// Write a function that adds a new list item to an unordered list in an HTML
// document. The function should take a string argument that will be used as
// the text content of the new list item.
function addList(list){
    let val = document.querySelector('ul');
    let li = document.createElement('li');
    li.textContent = list
    val.appendChild(li);
}
addList("python");
addList("java");
addList("C#");
addList("Dart");
addList("Javascript");

// Write a function that changes the background color of an HTML element.
// The function should take two arguments: the first argument is a reference
// to the HTML element, and the second argument is a string representing
// the new background color.
function color(ref, backColor){
    let doc = document.getElementById(ref);
    doc.style.backgroundColor = backColor;
}
color("hlo", "pink")

// Write a function that saves an object to localStorage. The function should
// take two arguments: the first argument is a string representing the key to
// use for storing the object, and the second argument is the object to store.
let languages = {
    python : "datascience",
    javascript: "webdevelopment",
    flutter : "appdevelopment",
}
function obj(key, object){
    localStorage.setItem(key, JSON.stringify(object));
}
obj("data",languages)

// Write a function that retrieves an object from localStorage. The function
// should take one argument, which is a string representing the key used to
// store the object. The function should return the object.
function dataLocalStorage(key){
    return localStorage.getItem(key);
}
console.log(dataLocalStorage("data"));

// Write a function that takes an object and saves each property to
// localStorage using the property name as the key and the property value as
// the value. The function should also retrieve the object from localStorage
// and return it as a new object
function data(val) {

    let keys = Object.keys(val)
    keys.forEach(function (key, index) {
        localStorage.setItem(key, obj[key])
    })
    let newObj = {}
    keys.forEach(function (key, index) {
        let value = localStorage.getItem(key)

        newObj[key] = obj[key]

    })
    return newObj
}
let val = {

    blue:'whale',
    butter:'fly'
}
let retrieve = data(obj)
console.log(retrieve);