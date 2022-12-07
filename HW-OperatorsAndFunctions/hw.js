//weather converter - Convert to Celsius
console.log("TASK 1: TEMPREATURE CONVERTER - CONVERT CELSIUS TO KELVIN");

let convertCelToKelvin = (celsius) => {
  let kelvin = celsius + 273.15;
  console.log(`${celsius}C = ${kelvin}F`);
};

convertCelToKelvin(35);
console.log(`              `);

//weather converter - Convert to Fahrenheit
console.log("TASK 2: TEMPREATURE CONVERTER - CONVERT FAHRENHEIT TO KELVIN");
let fahrenheit;
let convertFaToKelvin = (fahrenheit) => {
  let faToKelvin = (((fahrenheit - 32) * 5) / 9 + 273.15).toFixed(2);
  console.log(`${fahrenheit}F = ${faToKelvin} K`);
};

convertFaToKelvin(30);
console.log(`                  `);
//Tip Calculator
console.log("TASK 3: TIP CALCULATOR");
function computeTip(totalBill) {
  let tip = totalBill * 0.1;
  return console.log(`Bill is P${totalBill}, total tip is P${tip}`);
}

computeTip(7420);
