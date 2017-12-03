export function day01_part1(input: string) {
  return input
    .toString()
    .split("")
    .map(d => parseInt(d, 10))
    .reduce((acc, value, i, arr) => {
      const nextDigit = i === arr.length - 1 ? arr[0] : arr[i + 1];
      return value === nextDigit ? acc + value : acc;
    }, 0);
}

export function day01_part2(input: string) {
  return input
    .toString()
    .split("")
    .map(d => parseInt(d, 10))
    .reduce((acc, value, i, arr) => {
      const nextDigit =
        i < arr.length / 2 ? arr[i + arr.length / 2] : arr[i - arr.length / 2];
      return value === nextDigit ? acc + value : acc;
    }, 0);
}
