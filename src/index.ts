var button = document.getElementById('buttonPrepend') as HTMLButtonElement;
var actualText = document.getElementById('actualText') as HTMLInputElement;
var actualNumber = document.getElementById('actualNumber') as HTMLInputElement;

function prepend(numSpaces: number, inputString: string): string {
  let result: string = '';
  let emptySpace: string = ' ';

  for (let i = 0; i < numSpaces; i++) {
    result += emptySpace;
  }

  return result + inputString;
  // your code here
}

button.addEventListener('click', () => {

  var inputText: string = actualText.value;
  var inputNum: number = parseInt(actualNumber.value);

  const result = prepend(inputNum, inputText);
  console.log(result);
});
