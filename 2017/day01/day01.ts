import puzzleInput from "./puzzleInput";

export default function day01(input: string) {
  return input
    .toString()
    .split("")
    .map(d => parseInt(d, 10))
    .reduce((acc, value, i, arr) => {
      const nextDigit = i === arr.length - 1 ? arr[0] : arr[i + 1];
      return value === nextDigit ? acc + value : acc;
    }, 0);
}

/* tslint:disable-next-line:no-console */
console.log(day01(puzzleInput));
