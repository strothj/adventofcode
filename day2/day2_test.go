package main

import "testing"

var cases = []struct {
	l, w, h  int
	expected int
}{
	{2, 3, 4, 58},
	{1, 1, 10, 43},
}

func TestDay2(t *testing.T) {
	for _, c := range cases {
		retv := Day2(c.l, c.w, c.h)
		if retv != c.expected {
			t.Fatalf("Test: %vx%vx%v Expected: %v Actual: %v", c.l, c.w, c.h, c.expected, retv)
		}
	}
}
