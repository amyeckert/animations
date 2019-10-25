const cContainer = document.querySelector('.c-container');

 export const layers =(e) =>  {
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

  letterC.style.backgroundColor = `rgba(${shadowR}, ${shadowG}, ${shadowB}, 0.5)`;
 
}