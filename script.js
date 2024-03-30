const copy = document.querySelector(".logos-slide").cloneNode(true);
document.querySelector('.logos').appendChld(copy);

const body = document.querySelector("body");
const button = document.getElementsById("button-element");
        
button.onclick = function() {
    button.classList.toggle('active');
    body.classList.toggle('active');
}