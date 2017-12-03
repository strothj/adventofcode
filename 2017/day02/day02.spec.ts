import { given, test } from "sazerac";
import { day02_part1 } from "./day02";

test(day02_part1, () => {
  given(`5 1 9 5
         7 5 3
         2 4 6 8`).expect(18);
});
