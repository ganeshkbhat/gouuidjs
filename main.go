package main

import (
	"fmt"
	"github.com/google/uuid"
	"os"
	"strings"
)

func GetUUID(args []string) string {
	total_args := len(os.Args[1:])
	if total_args > 0 {
		v := strings.ToLower(args[1])
		switch v {
		case "v7":
			id, err := uuid.NewV7()
			if err != nil {
				panic(err)
			}
			return id.String()
		case "v6":
			id, err := uuid.NewV6()
			if err != nil {
				panic(err)
			}
			return id.String()
		default:
			id := uuid.New()
			return id.String()
		}
	} else {
		id := uuid.New()
		return id.String()
	}
}

func main() {
	args := os.Args
	uuidstr := GetUUID(args)
	fmt.Println(uuidstr)
}

// 	if args[1] == "v7" || args[1] == "V7" {
// 		id, err := uuid.NewV7()
// 		if err != nil {
// 			panic(err)
// 		}
// 		fmt.Println(id.String())
// 	} else if args[1] == "v6" || args[1] == "V6" {
// 		id, err := uuid.NewV7()
// 		if err != nil {
// 			panic(err)
// 		}
// 		return id.String()
// 	}
// } else {
// 	id := uuid.New()
// 	return id.String()
// }

// https://github.com/WebAssembly/binaryen
