import { echo } from "./functionality/echo";
import { layers } from "./functionality/layers";
import { fizzle} from "./functionality/fizzle";
const eContainer = document.querySelector('.wrapper');

function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
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

export const mousemove = () => {
    eContainer.addEventListener('mousemove', echo);
    cContainer.addEventListener('mousemove', debounceLayers(layers));
}

