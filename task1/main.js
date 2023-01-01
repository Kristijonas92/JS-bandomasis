/*
  Parašyti JS kodą, kuris leis vartotojui įvesti temperatūrą celsijumi arba farenheitu.
  Įvedus celsijų - parodoma kiek temperatūros tai būtų farenheitu | įvedus farenheitą - parodoma kiek temperatūros tai būtų celsijumi.
*/


// Get the temperature input element and the result display element
const tempInput = document.getElementById('temp-input');
const resultDisplay = document.getElementById('result-display');

// Add an event listener to the temperature input element
tempInput.addEventListener('input', function() {
  // Get the entered temperature and the selected unit from the input element
  const temp = tempInput.value;
  const unit = tempInput.dataset.unit;

  // Check if the unit is Celsius or Fahrenheit
  if (unit === 'C') {
    // Convert the temperature to Fahrenheit
    const tempInF = Math.ceil(temp * 1.8) + 32;
    // Update the result display element with the converted temperature
    resultDisplay.innerHTML = `${tempInF}°F`;
  } else if (unit === 'F') {
    // Convert the temperature to Celsius
    const tempInC = Math.ceil(temp - 32) / 1.8;
    // Update the result display element with the converted temperature
    resultDisplay.innerHTML = `${tempInC}°C`;
  }
});
