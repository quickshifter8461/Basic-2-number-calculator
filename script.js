function firstValue() {
  return document.getElementById("num1").value;
}
function secondValue() {
  return document.getElementById("num2").value;
}

function add() {
  let value1 = firstValue();
  let value2 = secondValue();
  let sum = Number(value1) + Number(value2);
  document.getElementById("result").innerText = sum;
}

function sub() {
  let value1 = firstValue();
  let value2 = secondValue();
  let sub = Number(value1) - Number(value2);
  document.getElementById("result").innerText = sub;
}

function mul() {
  let value1 = firstValue();
  let value2 = secondValue();
  let mul = Number(value1) * Number(value2);
  document.getElementById("result").innerText = mul;
}

function div() {
  let value1 = firstValue();
  let value2 = secondValue();
  let div = Number(value1) / Number(value2);
  document.getElementById("result").innerText = div;
}

function mod() {
  let value1 = firstValue();
  let value2 = secondValue();
  let mod = (Number(value1) / 100) * Number(value2);
  document.getElementById("result").innerText = mod;
}

function pow() {
  let value1 = firstValue();
  let value2 = secondValue();
  let pow = Number(value1) * Number(value2);
  document.getElementById("result").innerText = pow;
}

function sqrt() {
  let value1 = firstValue();
  let sqrt = Math.sqrt(Number(value1));
  document.getElementById("result").innerText = sqrt;
}
function reset() {
  document.getElementById("num1").value = "";
  document.getElementById("num2").value = "";
  document.getElementById("result").innerText = "Result";
}
