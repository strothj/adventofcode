export function part1(input: string) {
  return solve(input).cycles;
}

export function part2(input: string) {
  return solve(input).since;
}

function solve(input: string) {
  const banks = input.split("\t").map(n => parseInt(n, 10));
  const seen = new Map<string, number>();

  let cycles = 1;
  do {
    redistribute(banks);

    const state = banks.join();
    if (seen.has(state)) {
      return { cycles, since: seen.get(state)! };
    }
    seen.set(state, 0);

    cycles += 1;
    seen.forEach((value, key) => seen.set(key, value + 1));
  } while (true);
}

function redistribute(banks: number[]) {
  const max = banks.reduce((acc, val, i, arr) => (val > arr[acc] ? i : acc), 0);
  let dist = banks[max];
  banks[max] = 0;

  for (let i = nextIndex(banks, max); dist > 0; i = nextIndex(banks, i)) {
    banks[i] += 1;
    dist -= 1;
  }
}

function nextIndex(banks: number[], currentIndex: number) {
  return currentIndex + 1 < banks.length ? currentIndex + 1 : 0;
}
