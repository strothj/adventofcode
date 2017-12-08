/* tslint:disable:no-eval strict-boolean-expressions */

export function part1(input: string) {
  return solve(input).largest;
}

export function part2(input: string) {
  return solve(input).largestEver;
}

function solve(input: string) {
  let largestEver = 0;
  // @ts-ignore
  const registers = new Map<string, number>();
  // @ts-ignore
  const get = (register: string) => registers.get(register) || 0;
  // @ts-ignore
  const set = (register: string, value: number) => {
    registers.set(register, value);
    largestEver = value > largestEver ? value : largestEver;
  };

  const instructions = input
    .split("\n")
    .map(line => line.split(" "))
    .map(
      args =>
        `if (get("${args[4]}") ${args[5]} ${args[6]}) set("${args[0]}", get("${
          args[0]
        }") ${args[1] === "inc" ? "+" : "-"} ${args[2]});`
    )
    .join("\n");

  eval(instructions);

  return {
    largest: Array.from(registers.values()).reduce(
      (acc, val) => (val > acc ? val : acc),
      Number.MIN_SAFE_INTEGER
    ),
    largestEver
  };
}
