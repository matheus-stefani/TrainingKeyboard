const numberCharText = 100 
const charArray = ['!','@','\'','\"','#','$','%','&','*','(',')',
                        '-','_','+','=','[',']','{','}','<','>','.',':',';',',','\\',
                        "ArrowRight", "ArrowLeft","ArrowUp","ArrowDown","Delete","Home",
                        "End", "\|","\/"];
charArrayInOrder = []
const charArrayMap = new Map()



const GetRandomChars = (min, max) => charArray[Math.floor(Math.random() * (max - min)) + min]
let currentChar = 0;


window.onload = () =>{
    
    createLabelsAndHash();

    const getLabels = document.querySelectorAll("label");
    
    document.addEventListener('keydown',(e)=>{
        let { key } = e
        if(key=="Backspace" && currentChar > 0 && getLabels[currentChar-1].classList == "red"){
            
            getLabels[currentChar].classList.remove("gray")
            currentChar--
            getLabels[currentChar].classList.remove("red")
            getLabels[currentChar].classList.add("gray")

        }
        if(charArrayMap.has(key) || (Number(key)>=0 && Number(key)<10) ){
           
           if(charArrayInOrder[currentChar]==key){
            getLabels[currentChar].classList.remove("gray")
            getLabels[currentChar].classList.add("green")
           } 
           else{
            getLabels[currentChar].classList.remove("gray")
            getLabels[currentChar].classList.add("red")
           }
        currentChar++               
        getLabels[currentChar].classList.add("gray")
        }

    })
}


const createLabelsAndHash = () =>{
    for(let i = 0 ; i < numberCharText ; i++){

        if(i < charArray.length) charArrayMap.set(charArray[i])

        const createLabel = document.createElement("label");
        charArrayInOrder[i] = GetRandomChars(0,charArray.length)
        createLabel.innerText = charArrayInOrder[i]
        const getMainDiv = document.querySelector(".main")
        if(i==0) createLabel.classList.add("gray")
        getMainDiv.appendChild(createLabel);

        if(i%13==0 && i != 0) getMainDiv.appendChild(document.createElement("br"));
        
    }
}

