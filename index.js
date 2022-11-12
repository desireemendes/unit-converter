/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/

const meterToFeet = 3.281
const literTGoGal = 0.264
const kiloToPound = 2.204
let convertBtn = document.getElementById("convert-btn")
let length = document.getElementById("length-el")
let inputEl = document.getElementById("input")


convertBtn.addEventListener("click", function() {
    let baseValue = inputEl.value
    
    length.textContent = `${baseValue} meter = ${baseValue * meterToFeet} feet` 
})
