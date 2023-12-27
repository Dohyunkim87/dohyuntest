const todaySpan = document.querySelector('#today')
const numbersDiv = document.querySelector('.numbers')
const drawButton = document.querySelector('#draw')
const resetButton = document.querySelector('#reset')

const lottoNumbers = []
const colors = ['orange', 'skyblue', 'red', 'purple', 'green']

const today = new Date()
let year = today.getFullYear()
let month = today.getMonth() + 1
let date = today.getDate()
todaySpan.textContent = `${year}년 ${month}월 ${date}일`

function paintNumber(number){
    const eachNumDiv = document.createElement('div')
    eachNumDiv.classList.add('eachnum')
    let colorIndex = Math.floor(number / 10)
    eachNumDiv.style.backgroundColor = colors[colorIndex]
    eachNumDiv.textContent = number
    numbersDiv.appendChild(eachNumDiv)
}

// drawButton.addEventListener('click', function(){
//     while(lottoNumbers.length < 6){
//         let ran = Math.floor(Math.random() * 45) + 1
//         if(lottoNumbers.indexOf(ran) === -1){
//         lottoNumbers.push(ran)
//         paintNumber(ran)
//         }
//     }
// })

let isNumbersGenerated = false;

drawButton.addEventListener('click', function(){
    if (isNumbersGenerated) {
        lottoNumbers.splice(0, 6);
        numbersDiv.innerHTML = "";
        isNumbersGenerated = false;
    } else {
        while(lottoNumbers.length < 6){
            let ran = Math.floor(Math.random() * 45) + 1;
            if(lottoNumbers.indexOf(ran) === -1){
                lottoNumbers.push(ran);
                paintNumber(ran);
            }
        }
        isNumbersGenerated = true;
    }
});

resetButton.addEventListener("click", function(){
    lottoNumbers.splice(0, 6)
    numbersDiv.innerHTML = ""
})