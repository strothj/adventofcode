/* tslint:disable:no-eval strict-boolean-expressions */

export function part1(input: string) {
  return solve(input).largest;
}

export function part2(input: string) {
  return solve(input).largestEver;
}

function solve(input: string) {
  let largestEver = 0;
  const registers = new Map<string, number>();

  // @ts-ignore
  const { get, set } = {
    get: (register: string) => registers.get(register) || 0,
    set: (register: string, value: number) => {
      registers.set(register, value);
      largestEver = value > largestEver ? value : largestEver;
    }
  };

  input
    .split("\n")
    .map(line => line.split(" "))
    .map(args => args.map((v, i) => (i !== 1 ? v : v === "inc" ? "+" : "-")))
    .map(
      ([r, op, inc, , t1, te, t2]) =>
        `if (get("${t1}") ${te} ${t2}) set("${r}", get("${r}") ${op} ${inc});`
    )
    .forEach(instruction => eval(instruction));

  return {
    largest: Array.from(registers.values()).reduce(
      (acc, val) => (val > acc ? val : acc),
      Number.MIN_SAFE_INTEGER
    ),
    largestEver
  };
}
