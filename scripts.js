/**************************
testimonial section
**************************/

//three dots
const nextNext = document.getElementById('next-next');
const next = document.getElementById('next');
const prev = document.getElementById('prev');

// individual testimonials
const testi1 = document.querySelector('.testimonial testi-1');
const testi2 = document.querySelector('.testimonial testi-2');
const testi3 = document.querySelector('.testimonial testi-3');

//testimonial parent container
const tests = document.querySelector('.tests');

/*
Interval Timers
- We want the testimonials to automatically cycle through
- The next actions won't occur unless the testimonial parent container already
contains the class that shows the testimonial closest on the right.
- This should cycle us through all the testimonials on repeat.
*/
let nextNextInt = window.setInterval(function() {
    //check for and remove second class
    if (tests.classList.contains('second')) {
        tests.classList.remove('second');

        //add the class which shows the third testimonial
        tests.classList.add('third');
    }

}, 4000);

let nextint = window.setInterval(function() {
    //check for and remove first class
    if (tests.classList.contains('first')) {
        tests.classList.remove('first');

        //add the class that shows the second testimonial
        tests.classList.add('second');
  }

}, 8000);

let prevint = window.setInterval(function() {
    //check for and remove third class
    if (tests.classList.contains('third')) {
        tests.classList.remove('third');

        //add the class that has the first testimonial
        tests.classList.add('first');
  }
}, 16000)

/*By default, we show the testimonials assciated with the .prev class.
We want to creat an event listener that let's us move to the next one.
//Create a resueable function for clicking on the dots. */
function dotClick(oldClassOne, oldClassTwo, newClass) {
    if (tests.classList.contains(oldClassOne)) {
        tests.classList.remove(oldClassOne);
    }

    if (tests.classList.contains(oldClassTwo)) {
        tests.classList.remove(oldClassTwo)
    }

    window.clearInterval(nextNextInt);
    window.clearInterval(nextint);
    window.clearInterval(prevint);
    tests.classList.add(newClass);
}

/*Because we can click any dot no matter what position we're in, we have to remove
the other classes because we add the one that brings us where we need to go. */
nextNext.addEventListener("click", function() {

    dotClick('second', 'first', 'third');

})

next.addEventListener("click", function() {

    dotClick('first', 'third', 'second');

})

prev.addEventListener("click", function() {

    dotClick('second', 'third', 'first');
})

///////////////// end of testimonial section

////////////FAQ accordion section///////////
//declare default vars
const acc = document.getElementsByClassName("accordion");

//loop through all accordion buttons
for (let i = 0; i < acc.length; i++) {

    //trigger an event after click
    acc[i].addEventListener("click", function() {

        //add in the active class
        this.classList.toggle("active");
        //select sibling element
        let panel = this.nextElementSibling;
        //if sibling is open, close it, if closed, open it
        if (panel.style.maxHeight){
            //panel is open
            panel.style.maxHeight = null;

        } else {
            //panel is closed
            panel.style.maxHeight = panel.scrollHeight + "px";
        }
    });
}
