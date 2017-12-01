package main

import "testing"

var cases = []struct {
	input    string
	expected int
}{
	{">", 2},
	{"^>v<", 4},
	{"^v^v^v^v^v", 2},
}

func TestDay3(t *testing.T) {
	for _, c := range cases {
		retv := Day3(c.input)
		if retv != c.expected {
			t.Fatalf("Test: %s Expected: %v Actual: %v\n", c.input, c.expected, retv)
		}
	}
}
