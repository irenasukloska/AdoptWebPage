'use strict';

let btnScrollTo = document.querySelector(".btn--scroll-to");
let section1 = document.querySelector("#section--1");

///////////////////////////////////////
// Modal window

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');

const openModal = function (e) {
    e.preventDefault();
    modal.classList.remove('hidden');
    overlay.classList.remove('hidden');
};

const closeModal = function () {
    modal.classList.add('hidden');
    overlay.classList.add('hidden');
};

for (let i = 0; i < btnsOpenModal.length; i++)
    btnsOpenModal[i].addEventListener('click', openModal);

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
        closeModal();
    }
});



btnScrollTo.addEventListener("click", function (e) {
    section1.scrollIntoView({ behavior: 'smooth' });

}); //scrolling to the first section when clicking on button

////////////////////////////////////////////////////////

//Page Navigation

document.querySelector(".nav__links").addEventListener("click", function (e) {
    e.preventDefault();
    let id = e.target.getAttribute("href"); 
    //  console.log(id); 
    if (e.target.classList.contains("nav__link")) {
        document.querySelector(id).scrollIntoView({behavior : "smooth"});

    }
});

let tabs = document.querySelectorAll(".works__tab");
let tabsContainer = document.querySelector(".works__tab-container");
let tabsContent = document.querySelectorAll(".works__content")

tabsContainer.addEventListener("click",function(e){
    
    let clicked = e.target.closest(".works__tab");
    // console.log(clicked)
    if(!clicked) return;
    for (let index = 0; index < tabs.length; index++) {
        const element = tabs[index];
        element.classList.remove("works__tab--active");
        clicked.classList.add("works__tab--active");

        for (let index = 0; index < tabsContent.length; index++) {
            const element1 = tabsContent[index];
            element1.classList.remove("works__content--active");
            document.querySelector(`.works__content--${clicked.dataset.tab}`).classList.add("works__content--active");
            
    }
 

    }
});

var imgs=[
    "img/testimonial1.JPG",
    "img/testimonial2.JPG",
    "img/testimonial3.JPG",
    "img/testimonial4.JPG",
    "img/testimonial5.JPG"

  
];



 setInterval(()=>{
     
    let index = Math.floor(Math.random() * imgs.length);
    //console.log(index);

    document.getElementById("gallery-img").setAttribute("src",imgs[index]); 

},3000);