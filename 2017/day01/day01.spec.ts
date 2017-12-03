import { given, test } from "sazerac";
import { day01_part1, day01_part2 } from "./day01";
import puzzleInput from "./puzzleInput";

test(day01_part1, () => {
  given("1122").expect(3);
  given("1111").expect(4);
  given("1234").expect(0);
  given("91212129").expect(9);
  given(puzzleInput).expect(1251);
});

test(day01_part2, () => {
  given("1212").expect(6);
  given("1221").expect(0);
  given("123425").expect(4);
  given("123123").expect(12);
  given("12131415").expect(4);
  given(puzzleInput).expect(1244);
});
