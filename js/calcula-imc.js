var calculatorButton = document.querySelector("#calculator-button");

calculatorButton.addEventListener("click", function(){

    var height = document.querySelector("#height-input").value;
    var weight = document.querySelector("#weight-input").value;
    var imc = (weight / (height**2)).toFixed(2);
    console.log(imc)

    var imcInfo = document.querySelector("#imc-info");
    imcInfo.classList.remove("invisible");
    imcInfo.textContent = imc;

});