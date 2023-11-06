document.addEventListener('DOMContentLoaded', (event) => {
  document.getElementById('water-form').addEventListener('submit', function(event) {
    event.preventDefault();

    var showers = document.getElementById('showers').value;
    var toilet = document.getElementById('toilet').value;
    var drinking = document.getElementById('drinking').value;
    var washing = document.getElementById('washing').value;

    // Calculation based on some average values
    var totalWaterUsage = (showers * 15) + (toilet * 9) + (drinking * 1) + (washing * 150);

    var resultElement = document.getElementById('result');

    if(totalWaterUsage < 110) {
      resultElement.textContent = "Your daily water usage is " + totalWaterUsage + " liters. Good job!";
      resultElement.style.color = "#4caf50";
    } else {
      resultElement.textContent = "Your daily water usage is " + totalWaterUsage + " liters, which is higher than the average daily usage in Hong Kong (110 liters). Try to reduce your water usage to help achieve SDG 6.";
      resultElement.style.color = "#f44336";
    }
  });
});