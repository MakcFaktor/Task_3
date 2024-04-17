let number = prompt("Введіть п'ятизначне число:");


if (number.length < 5) {
    console.log("Ви ввели недостатньо цифр. Будь ласка, введіть п'ятизначне число.");
} else {
    let numberString = number.toString();

    let result = numberString.split('').join(' ');

    console.log(result);
}
