
function goHero(){
    window.scrollTo({
        top: 800,
        behavior: 'smooth',   
    });
}

const copy = document.querySelector(".logos-slide").cloneNode(true);
document.querySelector('.logos').appendChld(copy);
