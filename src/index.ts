function prepend(numSpaces: number, inputString: string): string {
  let result: string = '';
  let emptySpace: string = ' ';

  for (let i = 0; i < numSpaces; i++) {
    result += emptySpace;
  }

  return result + inputString;
  // your code here
}

const result: string = prepend(3, 'Sercan');

console.log(result);
