import { given, test } from "sazerac";
import { day04_part1, day04_part2, isValidPassphrase } from "./day04";
import puzzleInput from "./puzzleInput";

const isValidPassphraseNoAnagrams = (input: string) =>
  isValidPassphrase(input, true);

test(isValidPassphrase, () => {
  given("aa bb cc dd ee").expect(true);
  given("aa bb cc dd aa").expect(false);
  given("aa bb cc dd aaa").expect(true);
});

test(isValidPassphraseNoAnagrams, () => {
  given("abcde fghij").expect(true);
  given("abcde xyz ecdab").expect(false);
  given("a ab abc abd abf abj").expect(true);
  given("iiii oiii ooii oooi oooo").expect(true);
  given("oiii ioii iioi iiio").expect(false);
});

test(day04_part1, () => {
  given(`aa bb cc dd ee
aa bb cc dd aa
aa bb cc dd aaa`).expect(2);
  given(puzzleInput).expect(383);
});

test(day04_part2, () => {
  given(`abcde fghij
abcde xyz ecdab
a ab abc abd abf abj
iiii oiii ooii oooi oooo
oiii ioii iioi iiio`).expect(3);
  given(puzzleInput).expect(265);
});
