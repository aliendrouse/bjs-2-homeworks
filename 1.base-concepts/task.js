"use strict";

function solveEquation(a, b, c) {
  let arr = [];

  // Вычисляем дискриминант
  let discriminant = b ** 2 - 4 * a * c;

  // Если дискриминант меньше нуля - корней нет
  if (discriminant < 0) {
    return arr; // возвращаем пустой массив
  }

  // Если дискриминант равен нулю - один корень
  if (discriminant === 0) {
    let root = -b / (2 * a);
    arr.push(root);
    return arr;
  }

  // Если дискриминант больше нуля - два корня
  let root1 = (-b + Math.sqrt(discriminant)) / (2 * a);
  let root2 = (-b - Math.sqrt(discriminant)) / (2 * a);
  arr.push(root1, root2);

  return arr;
}

function calculateTotalMortgage(percent, contribution, amount, countMonths) {
  // Пытаемся преобразовать все аргументы в числа
  let percentNum = parseFloat(percent);
  let contributionNum = parseFloat(contribution);
  let amountNum = parseFloat(amount);
  let countMonthsNum = parseFloat(countMonths);

  // Проверяем, что все аргументы являются корректными числами
  if (isNaN(percentNum) || isNaN(contributionNum) || isNaN(amountNum) || isNaN(countMonthsNum)) {
    return false;
  }

  // Преобразуем процентную ставку из диапазона 0-100 в 0-1 и в месячную ставку
  let monthlyPercent = percentNum / 100 / 12;

  // Вычисляем тело кредита (сумма кредита минус первоначальный взнос)
  let loanBody = amountNum - contributionNum;

  // Если тело кредита равно 0 или отрицательное, возвращаем 0
  if (loanBody <= 0) {
    return 0;
  }

  // Вычисляем ежемесячный платеж по формуле: S * (P + P / (((1 + P)^n) - 1))
  let monthlyPayment = loanBody * (monthlyPercent + monthlyPercent / (((1 + monthlyPercent) ** countMonthsNum) - 1));

  // Вычисляем общую сумму, которую придется заплатить клиенту
  let totalAmount = monthlyPayment * countMonthsNum;

  // Округляем до двух знаков после запятой и возвращаем число
  return Number(totalAmount.toFixed(2));
}