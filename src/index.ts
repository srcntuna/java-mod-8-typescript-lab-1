var button = document.getElementById('buttonPrepend') as HTMLButtonElement;
var actualText = document.getElementById('actualText') as HTMLInputElement;
var actualNumber = document.getElementById('actualNumber') as HTMLInputElement;

function prepend<T>(array: T[]): string {
  let result: string = '';
  let emptySpace: string = ' ';

  const numTimes = +array[0];

  for (let i = 0; i < numTimes; i++) {
    result += emptySpace;
  }

  return result + array[1];
  // your code here
}

button.addEventListener('click', () => {

  var inputText: string = actualText.value;
  var inputNum: number = parseInt(actualNumber.value);

  const result = prepend([inputNum, inputText]);
  console.log(result);
});
