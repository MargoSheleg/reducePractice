// Вычислите сумму чисел массива, используя метод reduce().
const arr = [2, 2, 2, 2, -5, 5, 6, -24, 8, -7, 12, 9, 4, 77, -8, 54, 100];

const sum = arr.reduce((acc, curVal) => {
  acc = curVal + acc;
  return acc;
}, 0);

// Вычислите произведение чисел массива, используя метод reduce().

const mult = arr.reduce((acc, curVal) => {
  acc = curVal * acc;
  return acc;
});

// Преобразуйте массив строк в одну строку с помощью метода reduce().
const stringArr = ["Hello", ", ", "how ", "are ", "you ", "doing?"];

const newString = stringArr.reduce((acc, curVal) => {
  acc = acc + curVal;
  return acc;
}, "");

// Подсчитайте количество отрицательных значения в массив, используя метод reduce().

const negativeCount = arr.reduce((counter, curVal) => {
  if (curVal < 0) counter++;
  return counter;
}, 0);

// Найдите максимальное значение в массиве, используя метод reduce().

const max = arr.reduce((maxVal, curVal) => {
  if (curVal > maxVal) maxVal = curVal;
  return maxVal;
}, arr[0]);

// Найдите минимальное значение в массиве, используя метод reduce().

const min = arr.reduce((minVal, curVal) => {
  if (curVal < minVal) minVal = curVal;
  return minVal;
}, arr[0]);

// Вычислите среднее значение массива чисел, используя метод reduce().
const mid = arr.reduce((acc, curVal) => {
  acc = acc + curVal;
  return acc;
}, arr[0]);

// Сведите массив массивов в один массив с помощью метода reduce().
let arrOfArrs = [
  [2, -5, 5, 6, -24],
  [-24, 8, -7, 12, 9],
  [-7, 12, 9, 4, 77, -8, 54],
  [77, -8, 54, 100],
];

const oneArr = arrOfArrs.reduce((acc, curVal) => {
  for (let i = 0; i < curVal.length; i++) {
    acc.push(curVal[i]);
  }
  return acc;
}, []);

// Подсчитайте количество слов в предложении, используя метод reduce().
let string = "This is an example of a text";

const arrFromStr = string.split(" ");

const wordCounter = arrFromStr.reduce((acc) => {
  return acc + 1;
}, 0);

// либо еще проще:
const wordQuantity = arrFromStr.length - 1;

// Удалите повторяющиеся значения из массива с помощью метода reduce().

// const noRepeateArr = arr.reduce((acc, curVal, ind, arr) => {
//   let numCheck = 0;

//   for (let i = 0; i < arr.length; i++) {
//     if (curVal === arr[i]) {
//       numCheck++;
//     }
//   }

//   if (numCheck === 1) {
//     acc.push(curVal);
//   }
//   return acc;
// }, []);

const uniqueArray = arr.reduce((acc, curVal) => {
  if (!acc.includes(curVal)) {
    acc.push(curVal);
  }
  return acc;
}, []);

// Вычислите факториал числа, используя метод reduce().
function findFactorial(num) {
  const arr2 = [];

  for (let i = 1; i <= num; i++) {
    arr2.push(i);
  }

  const factorial = arr2.reduce((acc, curVal) => {
    acc = acc * curVal;
    return acc;
  }, 1);

  return factorial;
}

// Удалите ложные значения из массива с помощью метода reduce().
const booleanArr = [true, false, true, true, false];

const trueArr = booleanArr.reduce((acc, curVal) => {
  if (curVal) {
    acc.push(curVal);
  }
  return acc;
}, []);

// Подсчитайте, сколько раз определенное слово появляется в предложении, используя метод reduce().
const str = "An example example of a text in English";

function howManyRepeats(text, word) {
  const arrOfStr = text.split(" ");

  const counter = arrOfStr.reduce((acc, curVal) => {
    if (word === curVal) {
      acc++;
    }
    return acc;
  }, 0);

  return counter;
}

console.log(howManyRepeats(str, "example"));
