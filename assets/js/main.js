function checkAge(age) {
  let result = "";
  switch (true) {
    case age >= 0 && age <= 11:
      result = "Дитина";
      break;

    case age >= 12 && age <= 17:
      result = "Підліток";
      break;

    case age >= 18 && age <= 59:
      result = "Дорослий";
      break;

    case age >= 60:
      result = "Пенсіонер";
      break;

    default:
      result = "Невідомий вік";
  }

  return result;
}

function calculateYears() {
  const years = document.getElementById("years").value;
  const output = document.getElementById("output");

  if (isNaN(years) || years <= 0) {
    output.innerHTML = "Будь ласка, введіть коректне значення!";
    return;
  }

  output.innerHTML = checkAge(years);
}

function getSpecialCharacter(number) {
  let specialCharacter;

  switch (number) {
    case 1:
      specialCharacter = "!";
      break;
    case 2:
      specialCharacter = "@";
      break;
    case 3:
      specialCharacter = "#";
      break;
    case 4:
      specialCharacter = "$";
      break;
    case 5:
      specialCharacter = "%";
      break;
    case 6:
      specialCharacter = "^";
      break;
    case 7:
      specialCharacter = "&";
      break;
    case 8:
      specialCharacter = "*";
      break;
    case 9:
      specialCharacter = "(";
      break;
    case 0:
      specialCharacter = ")";
      break;
    default:
      alert("Будь ласка, введіть число від 0 до 9.");
      specialCharacter = "Error";
  }

  return specialCharacter;
}

function calculateSymbol() {
  const number = Number(document.getElementById("number").value);
  const output = document.getElementById("output");

  if (isNaN(number) || number <= 0) {
    alert("Будь ласка, введіть число від 0 до 9.");
    return;
  }

  output.innerHTML = getSpecialCharacter(number);
}

function calculateSumNumber() {
  const start = Number(document.getElementById("start_for_sum").value);
  const finish = Number(document.getElementById("finish_for_sum").value);

  const output = document.getElementById("output");

  let sum = 0;
  for (let i = start; i <= finish; i++) {
    sum += i;
  }

  output.innerHTML = `Сума діапазону ${start}:${finish} = ${sum} `;
}

function gcd(a, b) {
  return b ? gcd(b, a % b) : a;
}

function calculateFindMaxDiv() {
  const first_number = Number(document.getElementById("first_number").value);
  const second_number = Number(document.getElementById("second_number").value);

  const output = document.getElementById("output");

  const sum = gcd(first_number, second_number);

  output.innerHTML = `НСД(${first_number}; ${second_number}) = ${sum} `;
}

function findDivisors() {
  const div_number = Number(document.getElementById("div_number").value);
  const output = document.getElementById("output");

  if (isNaN(div_number) || div_number <= 0) {
    alert("Будь ласка, введіть додатнє число.");
    return;
  }

  let divisors = [];

  for (let i = 1; i <= div_number; i++) {
    if (div_number % i === 0) {
      divisors.push(i);
    }
  }

  output.innerHTML = `Дільники числа ${div_number}: ${divisors.join(", ")}`;
}

function isPalindrome(palindrome_str) {
  let left = 0;
  let right = palindrome_str.length - 1;

  while (left < right) {
    if (palindrome_str[left] != palindrome_str[right]) {
      return false;
    }

    left++;
    right--;
  }

  return true;
}

function checkPalindrome() {
  const palindrome_str = document.getElementById("palindrome_number").value;
  const output = document.getElementById("output");
  if (palindrome_str.length !== 5) {
    output.innerHTML = "Помилка: введене число не є п’ятизначним.";
    result;
  }

  let result = isPalindrome(palindrome_str);

  output.innerHTML = `Число ${palindrome_str} ${
    result ? "паліндромом" : "не є паліндромом"
  }`;
}

function calculateDiscount() {
  const purchase_sum = Number(document.getElementById("purchase_sum").value);
  const output = document.getElementById("output");
  let discount = 0;

  if (purchase_sum >= 200 && purchase_sum < 300) {
    discount = 0.03; // 3%
  } else if (purchase_sum >= 300 && purchase_sum < 500) {
    discount = 0.05; // 5%
  } else if (purchase_sum >= 500) {
    discount = 0.07; // 7%
  }
  const discounted_price = (purchase_sum - purchase_sum * discount).toFixed(2);
  const discount_percentage = (discount * 100).toFixed(2);

  output.innerHTML =
    discount > 0
      ? `Сума до оплати зі знижкою ${discount_percentage}% = ${discounted_price} грн`
      : `Знижка не застосовується. Сума до оплати = ${purchase_sum.toFixed(
          2
        )} грн`;
}

function calculateStatistics() {
  const input = document.getElementById("ten_numbers").value;
  const output = document.getElementById("output");
  const numbers = input.split(",").map((num) => Number(num.trim()));

  if (numbers.length !== 10 || numbers.some(isNaN)) {
    output.innerHTML = "Будь ласка, введіть рівно 10 чисел, розділених комами.";
    return;
  }

  let positives = 0;
  let negatives = 0;
  let zeros = 0;
  let evens = 0;
  let odds = 0;

  numbers.forEach((num) => {
    if (num > 0) positives++;
    else if (num < 0) negatives++;
    else zeros++;

    if (num % 2 === 0) evens++;
    else odds++;
  });

  output.innerHTML = `
    <ul>
      <li>Додатні: ${positives}</li>
      <li>Від’ємні: ${negatives}</li>
      <li>Нулі: ${zeros}</li>
      <li>Парні: ${evens}</li>
      <li>Непарні: ${odds}</li>
    </ul>
  `;
}

function showDaysOfWeek() {
  const daysOfWeek = [
    "Понеділок",
    "Вівторок",
    "Середа",
    "Четвер",
    "П’ятниця",
    "Субота",
    "Неділя",
  ];
  let index = 0;

  while (true) {
    const userResponse = confirm(`Сьогодні ${daysOfWeek[index]}. Продовжити?`);
    if (!userResponse) {
      alert("Цикл завершено.");
      break;
    }
    index = (index + 1) % daysOfWeek.length;
  }
}

function guessNumberGame() {
  const output = document.getElementById("output");

  let min = 0;
  let max = 100;
  let attempts = 0;

  while (true) {
    const mid = Math.floor((min + max) / 2);
    attempts++;

    const userResponse = prompt(
      `Ваше число > ${mid}, < ${mid}, чи == ${mid}? (Введіть ">", "<" або "==")`
    );

    if (userResponse === "==") {
      output.innerHTML = `Я вгадав! Ваше число: ${mid}. Кількість спроб: ${attempts}`;
      break;
    } else if (userResponse === ">") {
      min = mid + 1;
    } else if (userResponse === "<") {
      max = mid - 1;
    } else {
      alert("Будь ласка, введіть тільки '>', '<' або '=='");
    }

    if (min > max) {
      output.innerHTML = "Схоже, ви зробили помилку! Перевірте свої відповіді.";
      break;
    }
  }
}

function showMultiplicationTable() {
  const output = document.getElementById("output");
  let tableHTML =
    "<table border='1' cellpadding='5' style='border-collapse: collapse;'>";

  for (let i = 2; i <= 9; i++) {
    tableHTML += "<tr>";
    for (let j = 1; j <= 10; j++) {
      tableHTML += `<td>${i} × ${j} = ${i * j}</td>`;
    }
    tableHTML += "</tr>";
  }

  tableHTML += "</table>";
  output.innerHTML = tableHTML;
}

function calculateNextDate() {
  const inputDate = document.getElementById("input_date").value;
  const output = document.getElementById("output");

  if (!inputDate) {
    output.innerHTML = "Будь ласка, введіть дату.";
    return;
  }

  const date = new Date(inputDate);
  date.setDate(date.getDate() + 1);

  const nextDay = date.getDate().toString().padStart(2, "0");
  const nextMonth = (date.getMonth() + 1).toString().padStart(2, "0");
  const nextYear = date.getFullYear();

  output.innerHTML = `Наступна дата: ${nextDay}-${nextMonth}-${nextYear}`;
}
