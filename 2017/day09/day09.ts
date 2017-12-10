export function part1(input: string) {
  return solve(input).totalScore;
}

export function part2(input: string) {
  return solve(input).totalGarbage;
}

function solve(input: string) {
  let totalScore = 0;
  let totalGarbage = 0;

  const processGroup = (score: number, subgroups: ((s: number) => void)[]) => {
    totalScore += score;
    subgroups.forEach(s => s(score + 1));
  };
  processGroup(0, []); // Suppress unused variable TypeScript error

  const instructions = (() => {
    const exprs = ["processGroup(1, ["];
    let collectingGarbage = false;

    for (let i = 1; i < input.length; i += 1) {
      const char = input.charAt(i);
      if (char === "!") {
        i += 1;
        continue;
      }

      if (collectingGarbage) totalGarbage++;

      switch (char) {
        case "<":
          if (collectingGarbage) break;
          collectingGarbage = true;
          exprs.push("/*");
          break;
        case ">":
          collectingGarbage = false;
          totalGarbage--;
          exprs.push("*/");
          break;
        case "{":
          exprs.push("score => processGroup(score, [");
          break;
        case "}":
          exprs.push("]),");
          break;
      }
    }

    // Remove trailing comma
    exprs[exprs.length - 1] = exprs[exprs.length - 1].slice(0, -1);
    return exprs.join("");
  })();

  eval(instructions); // tslint:disable-line:no-eval

  return { totalScore, totalGarbage };
}
