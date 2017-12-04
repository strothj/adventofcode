export function day04_part1(input: string, sort = false) {
  return input
    .split("\n")
    .reduce(
      (acc, value) => (isValidPassphrase(value, sort) ? acc + 1 : acc),
      0
    );
}

export function day04_part2(input: string) {
  return day04_part1(input, true);
}

export function isValidPassphrase(passphrase: string, sort: boolean) {
  const set = new Set<string>();
  const words = passphrase.split(" ");
  for (let w of words) {
    w = sort
      ? w
          .split("")
          .sort()
          .join()
      : w;

    if (set.has(w)) {
      return false;
    }

    set.add(w);
  }
  return true;
}
