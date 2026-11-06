let inputEl = document.getElementById("input-el")
let converBtn = document.getElementById("convert-btn")
let lengthEl = document.getElementById("length-el")
let volomeEl = document.getElementById("volume-el")
let massEl = document.getElementById("mass-el")

converBtn.addEventListener("click", function(){
   getLength()
   getVolume()
   getMass()
})

function getLength(){
    feet = inputEl.value * 3.281
    meter = inputEl.value * 0.305
    lengthEl.textContent = `${inputEl.value} meters = ${feet} feet | ${inputEl.value} feet = ${meter} meters`
}

function getVolume(){
    gallons = inputEl.value * 0.264
    Liters = inputEl.value * 3.785
    volomeEl.textContent = `${inputEl.value} liters = ${gallons} liters | ${inputEl.value} gallon = ${Liters} gallon`
}

function getMass(){
    pound = inputEl.value * 2.204
    kilo = inputEl.value * 0.454
    massEl.textContent = `${inputEl.value} kilos = ${pound.toFixed(2)} pound | ${inputEl.value} pounds = ${kilo} kilos`
}

console.log(getLength())



/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/