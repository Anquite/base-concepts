"use strict"

function solveEquation(a, b, c) {
    if(a == 0)
        return false;
    let arr = [];
    let D = b * b - 4 * a * c;
    console.log('D = ' + D);
    if(D < 0)
        return arr;
    if(D == 0)
        arr.push((-b + Math.sqrt(D)) / (2 * a));
    else if(D > 0) {
        arr.push((-b + Math.sqrt(D)) / (2 * a));
        arr.push((-b - Math.sqrt(D)) / (2 * a));
    }
    return arr;
}
solveEquation(1,12,36);

function calculateTotalMortgage(percent, contribution, amount, date) {
  if(Number.isNaN(Number(percent)) || typeof percent === "undefined") {
    return "Параметр \"Процентная ставка\" содержит неправильное значение \"" + percent + "\"";
  }
  if(Number.isNaN(Number(contribution)) || typeof contribution === "undefined") {
    return "Параметр \"Начальный взнос\" содержит неправильное значение \"" + contribution + "\"";
    }
  if(Number.isNaN(Number(amount)) || typeof amount === "undefined") {
    return "Параметр \"Общая стоимость\" содержит неправильное значение \"" + amount + "\"";
  }
  let creditBody = amount - contribution;
  let today = new Date();
  let months = (date.getFullYear() - today.getFullYear()) * 12 + (date.getMonth() - today.getMonth());
  let partOfTheInterestRate = percent / 12 / 100;
  let payment = creditBody * (partOfTheInterestRate + partOfTheInterestRate / ((Math.pow((1 + partOfTheInterestRate), months)) - 1));
  let totalAmount = Number((payment * months).toFixed(2));
  console.log(totalAmount);
  return totalAmount;
}
calculateTotalMortgage(10, 1000, 50000, 12);