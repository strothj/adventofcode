import { given, test } from "sazerac";
import { day02_part1, day02_part2 } from "./day02";
import puzzleInput from "./puzzleInput";

test(day02_part1, () => {
  given(`5 1 9 5
         7 5 3
         2 4 6 8`).expect(18);
  given(puzzleInput).expect(51139);
});

test(day02_part2, () => {
  given(`5 9 2 8
         9 4 7 3
         3 8 6 5`).expect(9);
  given(puzzleInput).expect(272);
});
