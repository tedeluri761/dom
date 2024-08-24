let numberinput = document.getElementById("firsinput");
let howmanynumber = document.getElementById("numberofpeople");

function handleButtonClick5() {
  let numberOfPeople = parseInt(howmanynumber.value);
  let inputValue = parseFloat(numberinput.value);
  let result = (5 / 100) * inputValue;
  let lastresult = result / numberOfPeople;
  if (numberinput.value.trim() === "") {
    alert("Please write only numbers");
    return;
  }

  const tipamount = document.createElement("p");

  tipamount.textContent = `$${result}`;
  tipamount.classList.add("dolllarr");
  const containerAmount = document.getElementById("dolllarr2");
  containerAmount.appendChild(tipamount);

  const tipamount2 = document.createElement("p");
  tipamount2.textContent = `$${lastresult}`;
  tipamount2.classList.add("dolllarr");
  const containerAmount2 = document.getElementById("dolllarr");
  containerAmount2.appendChild(tipamount2);
}

function handleButtonClick10() {
  let numberOfPeople = parseInt(howmanynumber.value);
  let inputValue = parseFloat(numberinput.value);
  let result = (10 / 100) * inputValue;
  let lastresult = result / numberOfPeople;
  if (numberinput.value.trim() === "") {
    alert("Please write only numbers");
    return;
  }
  const tipamount = document.createElement("p");
  tipamount.textContent = `$${result}`;
  tipamount.classList.add("dolllarr");
  const containerAmount = document.getElementById("dolllarr2");
  containerAmount.appendChild(tipamount);

  const tipamount2 = document.createElement("p");
  tipamount2.textContent = `$${lastresult}`;
  tipamount2.classList.add("dolllarr");
  const containerAmount2 = document.getElementById("dolllarr");
  containerAmount2.appendChild(tipamount2);
}

function handleButtonClick15() {
  let numberOfPeople = parseInt(howmanynumber.value);
  let inputValue = parseFloat(numberinput.value);
  let result = (15 / 100) * inputValue;
  let lastresult = result / numberOfPeople;
  if (numberinput.value.trim() === "") {
    alert("Please write only numbers");
    return;
  }
  const tipamount = document.createElement("p");
  tipamount.textContent = `$${result}`;
  tipamount.classList.add("dolllarr");
  const containerAmount = document.getElementById("dolllarr2");
  containerAmount.appendChild(tipamount);

  const tipamount2 = document.createElement("p");
  tipamount2.textContent = `$${lastresult}`;
  tipamount2.classList.add("dolllarr");
  const containerAmount2 = document.getElementById("dolllarr");
  containerAmount2.appendChild(tipamount2);
}

function handleButtonClick25() {
  let numberOfPeople = parseInt(howmanynumber.value);
  let inputValue = parseFloat(numberinput.value);
  let result = (25 / 100) * inputValue;
  let lastresult = result / numberOfPeople;
  if (numberinput.value.trim() === "") {
    alert("Please write only numbers");
    return;
  }

  const tipamount = document.createElement("p");
  tipamount.textContent = `$${result}`;
  tipamount.classList.add("dolllarr");
  const containerAmount = document.getElementById("dolllarr2");
  containerAmount.appendChild(tipamount);

  const tipamount2 = document.createElement("p");
  tipamount2.textContent = `$${lastresult}`;
  tipamount2.classList.add("dolllarr");
  const containerAmount2 = document.getElementById("dolllarr");
  containerAmount2.appendChild(tipamount2);
}

function handleButtonClick50() {
  let numberOfPeople = parseInt(howmanynumber.value);
  let inputValue = parseFloat(numberinput.value);
  let result = (50 / 100) * inputValue;
  let lastresult = result / numberOfPeople;
  if (numberinput.value.trim() === "") {
    alert("Please write only numbers");
    return;
  }
  const tipamount = document.createElement("p");
  tipamount.textContent = `$${result}`;
  tipamount.classList.add("dolllarr");
  const containerAmount = document.getElementById("dolllarr2");
  containerAmount.appendChild(tipamount);

  const tipamount2 = document.createElement("p");
  tipamount2.textContent = `$${lastresult}`;
  tipamount2.classList.add("dolllarr");
  const containerAmount2 = document.getElementById("dolllarr");
  containerAmount2.appendChild(tipamount2);
}

let writeNumber = document.getElementById("costum");

function enterandlistener(enter) {
  if (enter.key === "Enter") {
    let numberOfPeople = parseInt(howmanynumber.value);
    let inputValue = parseFloat(numberinput.value);
    let secondinputvalue = parseFloat(writeNumber.value);
    let result = (secondinputvalue / 100) * inputValue;

    let lastresult = result / numberOfPeople;

    const tipamount = document.createElement("p");
    tipamount.textContent = `$${result}`;
    tipamount.classList.add("dolllarr");
    const containerAmount = document.getElementById("dolllarr2");
    containerAmount.appendChild(tipamount);

    const tipamount2 = document.createElement("p");
    tipamount2.textContent = `$${lastresult}`;
    tipamount2.classList.add("dolllarr");
    const containerAmount2 = document.getElementById("dolllarr");
    containerAmount2.appendChild(tipamount2);
  }
}

numberinput.addEventListener("keydown", enterandlistener);
howmanynumber.addEventListener("keydown", enterandlistener);
writeNumber.addEventListener("keydown", enterandlistener);

function reseted() {
  const reseted = document.getElementById("reset");
  document.getElementById("dolllarr").innerHTML = "";
  document.getElementById("dolllarr2").innerHTML = "";
}
