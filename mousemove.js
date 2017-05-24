const wrapper = document.querySelector('.wrapper');
const letterE = document.querySelector('.e');
const walk = 100; // 100px
const letterC = document.querySelector('.c');

function shadow(e) {
    const { offsetWidth: width, offsetHeight: height } = wrapper;
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

function layers(e){
    const { offsetWidth: width, offsetHeight: height } = letterC;
    let { offsetX: x, offsetY: y } = e; // mouse coordinates when on C

    letterc.style.textShadow = `
        ${xWalk * 1.2}px ${yWalk * 1.2}px 0 rgba(72, 102, 251, 0.1),
        ${xWalk * 0.9}px ${yWalk * 0.9}px 0 rgba(72, 102, 251, 0.3),
        ${xWalk * 0.6}px ${yWalk * 0.6}px 0 rgba(72, 102, 251, 0.5),
        ${xWalk * 0.3}px ${yWalk * 0.3}px 0 rgba(72, 102, 251, 0.7)
   `;
    console.log(e.offsetY, e.offsetX);

}





wrapper.addEventListener('mousemove', shadow);
letterC.addEventListener('mousemove', layers);
