const btn = document.querySelector ("button");
const liElements = document.querySelectorAll ('li');
let liSize = 10
const showElements = function () {
    liElements.forEach (function (liElement) {
        liElement.style.opacity = 1;
        liElement.style.fontSize = liSize + "px";
    })
    liSize++;
};





btn.addEventListener('click', showElements);