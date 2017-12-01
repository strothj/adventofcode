package main

import "testing"

var cases = []struct {
	input    string
	expected int
}{
	{"(())", 0}, {"()()", 0},
	{"(((", 3}, {"(()(()(", 3},
	{"))(((((", 3},
	{"())", -1}, {"))(", -1},
	{")))", -3}, {")())())", -3},
}

func TestDay1(t *testing.T) {
	for _, c := range cases {
		retv := Day1(c.input)
		if retv != c.expected {
			t.Fatalf("Test: %s Expected: %v Was: %v\n", c.input, c.expected, retv)
		}
	}
}
