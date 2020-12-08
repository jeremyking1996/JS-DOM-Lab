let farenheitVal = document.querySelector("#farenheit");
let celsiusVal = document.querySelector("#celsius");
let kelvinVal = document.querySelector("#kelvin");
let rankineVal = document.querySelector("#rankine");
let scaleType= document.querySelector('#scale');

document.querySelector('#calcButton').addEventListener('click', totalConverts());

// To farenheit
let celsiusFarenheit = (userNumber) =>{
    let farenheitValue= document.querySelector('#tempValue').value;
    let output = parseInt(fahrenheitValue) - 32 * 5/9;
    celsiusTextVal.innerHTML = output.toFixed(2) + ' C'
};
function farenheitValue () {
    fahrenheitVal.innerHTML = document.querySelector('#tempValue').value + ' F'
};
let kelvinFarenheit = (userNumber) => { 
    let farenheitValue=  document.querySelector('#tempValue').value + 'K';
    let output = (parseInt(fahrenheitValue) - 32) * 5/9 + 273.15;
    kelvinValue.innerHTML = product.toFixed(2) + ' K'
let rankineFarenheit = (userNumber) => {
    let fahrenheitValue = document.querySelector('#tempValue').value
    let product = (parseInt(fahrenheitValue) + 459.67);
    rankineValue.innerHTML = product.toFixed(2) + ' R'
};


// From celsius

function celsiusValue () {
    celsiusTextVal.innerHTML = document.querySelector('#tempBox').value + ' C'
}

function farenheitCelsius () {
    let celsiusInput = document.querySelector('#tempBox').value
    let product = (parseInt(celsiusInput) * 9/5) + 32
    fahrenheitTextVal.innerHTML = product.toFixed(2) + ' F'
}

function kelvinCelsius () {
    let celsiusInput = document.querySelector('#tempBox').value
    let product = parseInt(celsiusInput) + 273.15
    kelvinTextVal.innerHTML = product.toFixed(2) + ' K'
}

function rankineCelsius () {
    let celsiusInput = document.querySelector('#tempBox').value
    let product = parseInt(celsiusInput) * 9/5 + 491.67
    rankineTextVal.innerHTML = product.toFixed(2) + ' R'
}

// From Kelvin
function kelvinValue () {
    kelvinTextVal.innerHTML = document.querySelector('#tempValueBox').value + ' K'
}

function farenheitKelvin () {
    let kelvinInput = document.querySelector('#tempBox').value
    let product = (parseInt(kelvinInput) - 273.15) * 9/5 + 32
    fahrenheitTextVal.innerHTML = product.toFixed(2) + ' F'
}

function celsiusKelvin () {
    let kelvinInput = document.querySelector('#tempBox').value
    let product = parseInt(kelvinInput) - 273.15
    celsiusTextVal.innerHTML = product.toFixed(2) + ' C'
}

function rankineKelvin() {
    let kelvinInput = document.querySelector('#tempBox').value
    let product = parseInt(kelvinInput) * 1.8
    rankineTextVal.innerHTML = product.toFixed(2) + ' R'
}

// From rankine
function rankineValue () {
    rankineTextVal.innerHTML = document.querySelector('#tempBox').value + ' R'
}

function farenheitRankine () {
    let rankineInput = document.querySelector('#tempBox').value
    let product = parseInt(rankineInput) - 459.67
    fahrenheitTextVal.innerHTML = product.toFixed(2) + ' F'
}

function celsiusRankine () {
    let rankineInput = document.querySelector('#tempBox').value
    let product = (parseInt(rankineInput) - 491.67) * 5/9
    celsiusTextVal.innerHTML = product.toFixed(2) + ' C'
}

function kelvinRankine () {
    let rankineInput = document.querySelector('#tempBox').value
    let product = parseInt(rankineInput) * 5/9
    kelvinTextVal.innerHTML = product.toFixed(2) + ' K'
}

// Determine which formula to use;
function totalConverts () {
if(scale.value === "farenheit"){
    celsiusFarenheit()
    rankineFarenheit()
    kelvinToFahrenheit()
    farenheitValue();
} else if(scale.value === "celsius"){
    farenheitCelsius()
    celsiusValue()
    rankineCelsius()
    kelvinCelsius();
} else if(scale.value === "kelvin"){
    kelvinValue()
    kelvinFarenheit()
    kelvinCelsius()
    kelvinRankine();
} else{
    rankineValue()
    farenheitRankine()
    celsiusRankine()
    kelvinRankine();
}
}
};
