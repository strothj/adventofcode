import { given, test } from "sazerac";
import { part1, part2 } from "./day07";
import puzzleInput from "./puzzleInput";

const testcase = `pbga (66)
xhth (57)
ebii (61)
havc (66)
ktlj (57)
fwft (72) -> ktlj, cntj, xhth
qoyq (66)
padx (45) -> pbga, havc, qoyq
tknk (41) -> ugml, padx, fwft
jptl (61)
ugml (68) -> gyxo, ebii, jptl
gyxo (61)
cntj (57)`;

test(part1, () => {
  given(testcase).expect("tknk");
  given(puzzleInput).expect("qibuqqg");
});

test(part2, () => {
  given(testcase).expect(60);
  given(puzzleInput).expect(1079);
});
