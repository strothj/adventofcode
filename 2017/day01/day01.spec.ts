import { given, test } from "sazerac";
import day01 from "./day01";

test(day01, () => {
  given("1122").expect(3);
  given("1111").expect(4);
  given("1234").expect(0);
  given("91212129").expect(9);
});
