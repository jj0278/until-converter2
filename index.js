/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/
//Conversion numbers
const lenCon = 3.281
const volCon = 0.264
const masCon = 2.204
//HTML Elements
const tempEl = document.getElementById("temp-el")
const lengthEl = document.getElementById("length-el")
const volumeEl = document.getElementById("volume-el")
const massEl = document.getElementById("mass-el")
const inputEl = document.getElementById("input-el")
const convertBtn = document.getElementById("convert-btn")
//input variable
let input = 0

//button
convertBtn.addEventListener("click", function(){
    clear()
    input = inputEl.value
    render()
})

function render(){
    if (input <= 0){
        tempEl.textContent = `${input} °C = ${ctf(input)} °F | ${input} °F = ${ftc(input)} °C`
    } else {
        tempEl.textContent = `${input} °C = ${ctf(input)} °F | ${input} °F = ${ftc(input)} °C`
        lengthEl.textContent = `${input} meters = ${mtf(input)} feet | ${input} feet = ${ftm(input)} meters`
        volumeEl.textContent = `${input} liters = ${ltg(input)} gallons | ${input} gallons = ${gtl(input)} liters`
        massEl.textContent = `${input} kilos = ${ktp(input)} pounds | ${input} pounds = ${ptk(input)} kilos`
    }
}

function clear(){
    tempEl.textContent = ""
    lengthEl.textContent = ""
    volumeEl.textContent = ""
    massEl.textContent = ""
}
//Math functions
function ctf(num){
    return ((num * 9/5) + 32).toFixed(0)
}
function ftc(num){
    return ((num - 32) * 5/9).toFixed(0)
}
function mtf(num){
    return (num * lenCon).toFixed(3)   
}
function ftm(num){
    return (num / lenCon).toFixed(3)   
}
function ltg(num){
    return (num * volCon).toFixed(3)  
}
function gtl(num){
    return (num / volCon).toFixed(3)
}
function ktp(num){
    return (num * masCon).toFixed(3)   
}
function ptk(num){
    return (num / masCon).toFixed(3)
}
//testing
/*console.log(mtf(20))
console.log(ftm(20))
console.log(ltg(20))
console.log(gtl(20))
console.log(ctf(20))
console.log(ftc(20))*/
