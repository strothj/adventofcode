export function part1(input: string, listLength?: number) {
  return solve(input, { listLength }).products;
}

export function part2(input: string) {
  return solve(
    input
      .split("")
      .map(c => c.charCodeAt(0).toString())
      .concat("17", "31", "73", "47", "23")
      .join(","),
    { rounds: 64 }
  ).knotHash;
}

function solve(input: string, opts: Options = {}) {
  const listLength = opts.listLength || 256;
  const rounds = opts.rounds || 1;
  let position = 0;
  let skipSize = 0;

  const list = new Array<number>(listLength);
  for (let i = 0; i < list.length; i += 1) list[i] = i;

  const wrap = (pos: number) => {
    let adjusted = pos;
    while (adjusted >= list.length) adjusted -= list.length;
    return adjusted;
  };

  const toHex = (num: number) => `${num <= 0xf ? "0" : ""}${num.toString(16)}`;

  const lengths = input.split(",").map(l => parseInt(l, 10));

  for (let j = 0; j < rounds; j += 1) {
    lengths.forEach(length => {
      for (let i = 0; i < Math.floor(length / 2); i += 1) {
        const source = wrap(position + i);
        const target = wrap(position + length - 1 - i);
        [list[source], list[target]] = [list[target], list[source]];
      }
      position = wrap(position + length + skipSize++);
    });
  }

  const denseHash: number[] = [];
  for (let j = 0; j < 16; j += 1) {
    let hash = list[j * 16];
    for (let k = 1; k < 16; k += 1) hash ^= list[j * 16 + k]; // tslint:disable-line:no-bitwise
    denseHash.push(hash);
  }
  const knotHash = denseHash.map(n => toHex(n)).join("");

  return { products: list[0] * list[1], knotHash };
}

type Options = Partial<{ listLength: number; rounds: number }>;
