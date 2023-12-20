import { generateReturnsArray } from "./src/investimentGoals";

const form = document.getElementById("investment-form");
const calculateButton = document.getElementById("calculate-results");

function renderProgression(evt) {
  evt.preventDefault();
  const startingAmount = Number(
    form["starting-amount"].value.replace(",", ".")
  );
  // const startingAmount = Number(
  //   document.getElementById("starting-amount").value
  // );
  const additionalContribution = Number(
    document.getElementById("additional-contribution").value.replace(",", ".")
  );
  const timeAmount = Number(document.getElementById("time-amount").value);
  const timeAmountPeriod = document.getElementById("time-amount-period").value;
  const returnRatePeriod = document
    .getElementById("evaluation-period")
    .value.replace(",", ".");
  const returnRate = Number(document.getElementById("return-rate").value);
  const taxRate = Number(
    document.getElementById("tax-rate").value.replace(",", ".")
  );

  const returnsArray = generateReturnsArray(
    startingAmount,
    timeAmount,
    timeAmountPeriod,
    additionalContribution,
    returnRate,
    returnRatePeriod
  );

  console.log(returnsArray);
}
function validateInput(evt) {
  if (evt.target.value === "") {
    return;
  }
}

for (const formElement of form) {
  if (formElement.tagName === "INPUT" && formElement.hasAttribute("name")) {
    formElement.addEventListener("blur", validateInput);
  }
}

// form.addEventListener("submit", renderProgression);
calculateButton.addEventListener("click", renderProgression);
