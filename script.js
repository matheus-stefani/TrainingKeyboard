const numberCharText = 100 
const charArray = ['!','@','\'','\"','#','$','%','&','*','(',')',
                        '-','_','+','=','[',']','{','}','<','>','.',':',';',',','\\',
                        "ArrowRight", "ArrowLeft","ArrowUp","ArrowDown","Delete","Home",
                        "End"];

const GetRandomChars = (min, max) => charArray[Math.floor(Math.random() * (max - min)) + min]
let currentChar = 0;


window.onload = () =>{
    
    createLabels();
    const getLabels = document.querySelectorAll("label");
    
    document.addEventListener('keydown',(e)=>{
        let { key } = e
        getLabels[currentChar].classList.add("gray")
        console.log(key)
        currentChar++
    })
}


const createLabels = () =>{
    for(let i = 0 ; i < numberCharText ; i++){
        const createLabel = document.createElement("label");
        createLabel.innerText = GetRandomChars(0,charArray.length-1) + " "
        const getMainDiv = document.querySelector(".main")
        getMainDiv.appendChild(createLabel);
    }
}