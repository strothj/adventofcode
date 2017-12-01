package main

import "testing"

var cases = []struct {
	key      string
	expected int
	combined string
}{
	{"abcdef", 609043, "abcdef609043"},
	{"pqrstuv", 1048970, "pqrstuv1048970"},
}

func TestDay4(t *testing.T) {
	// t.SkipNow()
	for _, v := range cases {
		if retv := day4(v.key); retv != v.expected {
			t.Fatalf("Test: %s Expected: %v Actual: %v\n", v.key, v.expected, retv)
		}
	}
}

func TestCombineKeyInt(t *testing.T) {
	for _, v := range cases {
		retv := combineKeyInt(v.key, v.expected)
		if retv != v.combined {
			t.Fatalf("Test: %s + %v Expected: %s Actual: %s\n", v.key, v.expected, v.combined, retv)
		}
	}
}
