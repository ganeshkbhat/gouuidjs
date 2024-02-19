go build
$Env:GOOS = "js"; $Env:GOARCH = "wasm"; go build -o gouuid.wasm main.go
wasm-opt gouuid.wasm --enable-bulk-memory -Oz -o gouuid-bmem.wasm
