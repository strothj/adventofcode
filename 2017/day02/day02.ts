export function day02_part1(input: string) {
  return parseAndSort(input)
    .map(l => l[l.length - 1] - l[0])
    .reduce((acc, value) => acc + value, 0);
}

export function day02_part2(input: string) {
  return parseAndSort(input)
    .map(l =>
      l
        .map((value, index, array) => {
          for (let i = array.length - 1; i > index; i -= 1) {
            if (array[i] % value === 0) {
              return array[i] / value;
            }
          }
          return 0;
        })
        .reduce((acc, value) => (value > 0 ? value : acc), 0)
    )
    .reduce((acc, value) => acc + value, 0);
}

function parseAndSort(input: string) {
  return input.split("\n").map(l =>
    l
      .trim()
      .split(/\s/)
      .map(n => parseInt(n, 10))
      .sort((a, b) => a - b)
  );
}
