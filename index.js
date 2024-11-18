const containerEl = document.querySelector(".container");
const clickBtn = document.getElementById('clickbutton');
console.log(clickBtn);

for (let index = 0; index < 32; index++) {
    const colorContainerEl = document.createElement("div");
    colorContainerEl.classList.add("color-container");
    containerEl.appendChild(colorContainerEl);    
}

const colorContainerEls = document.
querySelectorAll(".color-container");

generateColors();
clickBtn.addEventListener('click' , generateColors);

function generateColors(){
    colorContainerEls.forEach((colorContainerEl)=>{
        const newColorCode = randomColor();
        
        colorContainerEl.style.backgroundColor = "#" + newColorCode;
        colorContainerEl.innerText = "#" + newColorCode;
    });
}

function randomColor(){
    const chars = "0123456789abcdef";
    const colorCodeLength = 6;
    let colorCode = "";
    for (let index = 0; index < colorCodeLength; index++) {
        const randomNumber = Math.floor(Math.random( )* chars.length);
        colorCode += chars.substring(randomNumber, randomNumber+1);   
    }
    return colorCode;
}
