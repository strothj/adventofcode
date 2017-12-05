import { given, test } from "sazerac";
import { day05_part1, day05_part2 } from "./day05";
import puzzleInput from "./puzzleInput";

test(day05_part1, () => {
  given(`0
3
0
1
-3`).expect(5);
  given(puzzleInput).expect(375042);
});

test(day05_part2, () => {
  given(`0
3
0
1
-3`).expect(10);
  given(puzzleInput).expect(28707598);
});
