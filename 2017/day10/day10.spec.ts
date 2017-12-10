import { given, test } from "sazerac";
import { part1, part2 } from "./day10";

const puzzleInput = "106,118,236,1,130,0,235,254,59,205,2,87,129,25,255,118";

test(part1, () => {
  given("3,4,1,5", 5).expect(12);
  given(puzzleInput).expect(6909);
});

test(part2, () => {
  given("1,2,3").expect("3efbe78a8d82f29979031a4aa0b16a9d");
  given("").expect("a2582a3a0e66e6e86e3812dcb672a272");
  given("AoC 2017").expect("33efeb34ea91902bb2f59c9920caa6cd");
  given("1,2,4").expect("63960835bcdc130f0b66d7ff4f6a5a8e");
  given(puzzleInput).expect("9d5f4561367d379cfbf04f8c471c0095");
});
