const numberCharText = 100 
const charArray = ['!','@','\'','\"','#','$','%','&','*','(',')',
                        '-','_','+','=','[',']','{','}','<','>','.',':',';',',','\\',
                        "ArrowRight", "ArrowLeft","ArrowUp","ArrowDown","Delete","Home",
                        "End", "\|"];

const charArrayMap = new Map()



const GetRandomChars = (min, max) => charArray[Math.floor(Math.random() * (max - min)) + min]
let currentChar = 0;


window.onload = () =>{
    
    createLabels();
    
    const getLabels = document.querySelectorAll("label");
    
    document.addEventListener('keydown',(e)=>{
        let { key } = e
        console.log(key)

        if(charArrayMap.has(key) || (Number(key)>=0 && Number(key)<10) ){
           getLabels[currentChar].classList.add("gray")
           currentChar++
        }

    })
}


const createLabels = () =>{
    for(let i = 0 ; i < numberCharText ; i++){

        if(i < charArray.length) charArrayMap.set(charArray[i])

        const createLabel = document.createElement("label");
        createLabel.innerText = GetRandomChars(0,charArray.length) + " "
        const getMainDiv = document.querySelector(".main")
        getMainDiv.appendChild(createLabel);
    }
}

