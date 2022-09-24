"use strict";

const tipOutput = document.querySelector(".tip-output");
const totalOutput = document.querySelector(".total-output");
const splitOutput = document.querySelector(".split-output");

const calc = document.querySelector(".calculate-btn");

const newCalc = document.querySelector(".newBill-btn");
const newText = document.querySelector(".text-Bill");

let playing;
const initTrue = function () {
  playing = true;
  calc.textContent = "calculate";
};

const initFalse = function () {
  playing = false;
};

initTrue();

calc.addEventListener("click", function () {
  console.log("calculate clicked");
  if (playing) {
    let bill = Number(document.getElementById("bill").value);
    let split = Number(document.getElementById("split").value);
    let tip = bill * 0.15;
    let totalBill = bill + tip;
    let splitPerPerson = totalBill / split;

    tipOutput.innerHTML = `${Number(tip).toFixed(2)}$`;
    totalOutput.textContent = `${totalBill.toFixed(2)}$`;
    splitOutput.textContent = `${splitPerPerson.toFixed(2)}$`;
    newCalc.classList.remove("hidden");
    calc.style.backgroundColor = "green";

    initFalse();
  } else {
    calc.textContent = "click on new bill";
    calc.style.backgroundColor = "black";
    calc.style.color = "red";
    calc.style.cursor = "not-allowed";
  }
});

// calc.addEventListener("click", init);

newCalc.addEventListener("click", function () {
  initTrue();

  console.log("new bill clicked");
  document.querySelector(".form-control").value = "";
  document.querySelector(".form2").value = "";
  tipOutput.innerHTML = 0;
  totalOutput.innerHTML = 0;
  splitOutput.innerHTML = 0;

  newCalc.classList.add("hidden");

  calc.style.backgroundColor = "rgb(248, 41, 41)";
  calc.style.color = "white";
  calc.style.cursor = "pointer";
});
