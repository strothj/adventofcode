import { given, test } from "sazerac";
import { part1, part2 } from "./day09";
import puzzleInput from "./puzzleInput";

test(part1, () => {
  given("{<<<<>}").expect(1);
  given("{}").expect(1);
  given("{{{}}}").expect(6);
  given("{{},{}}").expect(5);
  given("{{{},{},{{}}}}").expect(16);
  given("{<a>,<a>,<a>,<a>}").expect(1);
  given("{{<ab>},{<ab>},{<ab>},{<ab>}}").expect(9);
  given("{{<!!>},{<!!>},{<!!>},{<!!>}}").expect(9);
  given("{{<a!>},{<a!>},{<a!>},{<ab>}}").expect(3);
  given(puzzleInput).expect(11846);
});

test(part2, () => {
  given("{<>}").expect(0);
  given("{<random characters>}").expect(17);
  given(puzzleInput).expect(6285);
});
