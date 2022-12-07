//Pulse Oximieter reading
console.log(`TASK 1: PULSE OXIMETER READING (PART 1)`);
// let currentPulse = Number(prompt("Enter your Pulse Oximeter"));

let currentPulse = 93;

console.log(`Based on your Oxygen Saturation: 👇`);

function pulseOximeter(pulse) {
  if (pulse >= 96) {
    console.log(`Normal Reading`);
    // alert("Normal Reading");
  } else if (pulse == 95) {
    console.log(`Acceptable to continue home monitoring`);
    // alert("Acceptable to continue home monitoring");
  } else if (pulse == 93 || pulse == 94) {
    console.log(`Seek advice from health professionals`);
    // alert("Seek advice from health professionals");
  } else if (pulse <= 92) {
    console.log(`Seek urgent medical advice`);
    // alert("Seek urgent medical advice");
  }
}

pulseOximeter(currentPulse);

console.log("            ");
console.log(`TASK 2: PULSE OXIMETER READING(PART 2)`);

let pulseRate = 142;
console.log(`Based on your Pulse Rate: 👇`);

function pulseOximeter2(pulseRate) {
  if (pulseRate >= 40 && pulseRate <= 100) {
    console.log(`Normal Reading`);
  } else if (pulseRate >= 101 && pulseRate <= 109) {
    console.log(`Acceptable to continue home monitoring`);
  } else if (pulseRate >= 110 && pulseRate <= 130) {
    console.log(`Seek advice from health professionals.`);
  } else if (pulseRate >= 131) {
    console.log(`Seek urgent medical advice`);
  }
}

pulseOximeter2(pulseRate);
