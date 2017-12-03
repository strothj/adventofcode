import puzzleInput from "./puzzleInput";

export function day02_part1(input: string) {
  return input
    .split("\n")
    .map(l =>
      l
        .trim()
        .split(/\s/)
        .map(n => parseInt(n, 10))
        .sort((a, b) => a - b)
    )
    .map(l => l[l.length - 1] - l[0])
    .reduce((acc, value) => acc + value, 0);
}

/* tslint:disable-next-line:no-console */
console.log(day02_part1(puzzleInput));
