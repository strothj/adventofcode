import { given, test } from "sazerac";
import { part1, part2 } from "./day08";
import puzzleInput from "./puzzleInput";

const testcase = `b inc 5 if a > 1
a inc 1 if b < 5
c dec -10 if a >= 1
c inc -20 if c == 10`;

test(part1, () => {
  given(testcase).expect(1);
  given(puzzleInput).expect(4567);
});

test(part2, () => {
  given(testcase).expect(10);
  given(puzzleInput).expect(5636);
});
