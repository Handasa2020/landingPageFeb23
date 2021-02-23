/*
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None.
 * 
 * JS Version: ES2015/ES6.
 * 
 * JS Standard: ESlint.
 * 
 */


// Define Global Variables.

const listOfSections = document.querySelectorAll('section');
const myList = document.getElementById('navbar__list');
const myDocFrag = document.createDocumentFragment();

// Dynamically building the navigation bar by detecting sections.
// Activate scrolling by mouse clicks on the navigation bar items.
// Adding classes to active items and sections.
listOfSections.forEach( el => {
    let secInfo = el.getAttribute('data-nav');
    let newList = document.createElement('li');
    let newAnchor = document.createElement('a');
    let textNode = document.createTextNode(secInfo);
    newAnchor.appendChild(textNode);
    newAnchor.addEventListener('click', clicked => {
        clicked.preventDefault();
        el.scrollIntoView({behavior: 'smooth'});
        newAnchor.classList.add('active-link');
        el.classList.add('your-active-class');
    });
    newList.appendChild(newAnchor);
    newList.className = ('links');
    myDocFrag.appendChild(newList);
});
myList.appendChild(myDocFrag);

function detectActiveSection () {
    listOfSections.forEach( section => {
        let recActSec = document.getBoundingClientRect();
        if ( recActSec.top > 0 && recActSec.top <200 ){
            listOfSections.forEach( section => {
                section.classList.remove('your-active-class');
            });
            section.classList.add('your-active-class');
        };
    });
};

function checkall (activeSection) {
    let activeLinks = document.querySelectorAll('a');
    let actSecNavData = activeSection.getAttribute('data-nav');
    for ( singleLink of activeLinks ) {
        singleLink.classList.remove ('active-link');
        if ( singleLink.textNode  === actSecNavData ) {
            singleLink.classList.add('active-link');
        };
    };
};

window.addEventListener( 'scroll', function (e) {
    e.preventDefault();
    detectActiveSection();
    }, false
);