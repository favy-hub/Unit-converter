let inputEl = document.getElementById("input-el")
let converBtn = document.getElementById("convert-btn")
let lengthEl = document.getElementById("length-el")

converBtn.addEventListener("click", function(){
   getLength()
})

function getLength(){
    feet = inputEl.value * 3.281
    meter = inputEl.value * 0.305
    lengthEl.textContent = `${inputEl.value} meters = ${feet} feet | ${inputEl.value} feet = ${meter} meters`
}

console.log(getLength())



/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/