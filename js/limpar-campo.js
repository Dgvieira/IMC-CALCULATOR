var clearButton = document.querySelector("#clear-button");


clearButton.addEventListener("click", function(){

    var heightInput = document.querySelector("#height-input");
    var weightInput = document.querySelector("#weight-input");
    var imcInfo = document.querySelector("#imc-info");
    

    heightInput.value = "";  
    weightInput.value = "";

    imcInfo.textContent = "";
    imcInfo.classList.add("invisible");


});