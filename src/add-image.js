import NaatuNaatu from './NaatuNaatu.png';
import altText from './img-alt.txt';
const addImage = () => {
    const img = document.createElement('img');
    img.alt = altText;
    img.width = 300;
    img.src = NaatuNaatu;
    
    const body = document.querySelector('body');
    body.appendChild(img);
}

export default addImage;