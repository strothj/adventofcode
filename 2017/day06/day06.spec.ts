import { given, test } from "sazerac";
import { part1, part2 } from "./day06";

const puzzleInput = "2\t8\t8\t5\t4\t2\t3\t1\t5\t5\t1\t2\t15\t13\t5\t14";

test(part1, () => {
  given("0\t2\t7\t0").expect(5);
  given(puzzleInput).expect(3156);
});

test(part2, () => {
  given("0\t2\t7\t0").expect(4);
  given(puzzleInput).expect(1610);
});
