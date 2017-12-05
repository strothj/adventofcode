export function day05_part1(input: string) {
  return solve(input, () => 1);
}

export function day05_part2(input: string) {
  return solve(input, value => (value >= 3 ? -1 : 1));
}

function solve(input: string, calcOffset: (value: number) => number) {
  const instructions = input.split("\n").map(n => parseInt(n, 10));
  let steps = 0;
  let address = 0;
  while (address < instructions.length) {
    steps += 1;
    const offset = calcOffset(instructions[address]);
    instructions[address] += offset;
    address += instructions[address] - offset;
  }
  return steps;
}
