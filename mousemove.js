

const eContainer = document.querySelector('.wrapper');
const letterE = document.querySelector('.e');
let walk = 100; // 100px
const cContainer = document.querySelector('.c-container');

function echo(e) {
    const { offsetWidth: width, offsetHeight: height } = eContainer;

    let { offsetX: x, offsetY: y } = e;
    // to account for nested elements, do this:
    if (this !== e.target) {
        x = x + e.target.offsetLeft;
        y = y + e.target.offsetTop;
    }
    const xWalk = Math.round((x / width * walk) - (walk / 2));
    // range goes from +1/2 walk value to - 1/2 walk value, ex -50, 50
    const yWalk = Math.round((y / height * walk) - (walk / 2));

    letterE.style.textShadow = `
        ${xWalk * 1.2}px ${yWalk * 1.2}px 0 rgba(72, 102, 251, 0.1),
        ${xWalk * 0.9}px ${yWalk * 0.9}px 0 rgba(72, 102, 251, 0.3),
        ${xWalk * 0.6}px ${yWalk * 0.6}px 0 rgba(72, 102, 251, 0.5),
        ${xWalk * 0.3}px ${yWalk * 0.3}px 0 rgba(72, 102, 251, 0.7)
   `;
}
function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}
function layers(e){
    const letterC = document.querySelector('.c-container');
    let shadowR = getRandomNumber(0, 255);
    let shadowG = getRandomNumber(0, 255);
    let shadowB = getRandomNumber(0, 255);
    // let minOpacity = 0;
    // let maxOpacity = 1;
    // let opacity = Math.random();
    console.log(shadowR, shadowG, shadowB);
    // const layerOrder1 = Math.floor((Math.random() * 4) + 1);
    // const layerOrder2 = Math.floor((Math.random() * 4) + 1);
    // const layerOrder3 = Math.floor((Math.random() * 4) + 1);
    // const layerOrder4 = Math.floor((Math.random() * 4) + 1);
    
    // const { offsetWidth: width, offsetHeight: height } = cContainer;
    // const cHalfWidth = cContainer.offsetWidth - (cContainer.offsetWidth / 2);
    // const cHalfHeight = cContainer.offsetHeight - (cContainer.offsetHeight / 2);

    letterC.style.backgroundColor = `
        rgba(${shadowR}, ${shadowG}, ${shadowB}, 0.5) 
    `;
   
}
function fizzle(e){
    const kContainer = document.querySelector('k-container');
    const letterK = document.querySelector('.k');
}

// debounce() limits the window.scrolled event, needs a function to limit as param, limit in millisec.
function debounceLayers(func, wait = 20, immediate = true) {
    var timeout;
    return function() {
        var context = this, args = arguments;
        var later = function() {
            timeout = null;
            if (!immediate) func.apply(context, args);
        };
        var callNow = immediate && !timeout;
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
        if (callNow) func.apply(context, args);
    };
};



eContainer.addEventListener('mousemove', echo);
cContainer.addEventListener('mousemove', debounceLayers(layers));
