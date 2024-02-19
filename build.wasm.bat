go build
set GOOS = "js"
set GOARCH = "wasm"

@REM $Env:GOOS = "js"; $Env:GOARCH = "wasm"; go build -o gouuid.wasm main.go
cmd
wasm-opt gouuid.wasm --enable-bulk-memory -Oz -o gouuid-bmem.wasm
