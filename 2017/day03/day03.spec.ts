import { given, test } from "sazerac";
import { day03_part1, day03_part2 } from "./day03";

test(day03_part1, () => {
  given(1).expect(0);
  given(12).expect(3);
  given(23).expect(2);
  given(361527).expect(326);
});

test(day03_part2, () => {
  given(361527).expect(363010);
});
