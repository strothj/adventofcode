package main

import (
	"crypto/md5"
	"encoding/hex"
	"fmt"
	"strconv"
)

func main() {
	fmt.Println(day4(input))
}

func day4(key string) int {
	var n int
	var f bool

	for {
		hasher := md5.New()
		k := combineKeyInt(key, n)
		hasher.Write([]byte(k))
		hash := hex.EncodeToString(hasher.Sum(nil))
		f = true
		for i := 0; i < 5; i++ {
			if hash[i] != '0' {
				f = false
				break
			}
		}
		if f {
			return n
		}
		n++
	}
}

func combineKeyInt(key string, num int) string {
	return key + strconv.Itoa(num)
}

const input = "iwrupvqb"
