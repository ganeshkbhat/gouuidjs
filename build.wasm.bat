go build
@REM set GOOS = "js"
@REM set GOARCH = "wasm"
@REM go build -o gouuid.wasm main.go
$Env:GOOS = "js"; $Env:GOARCH = "wasm"; go build -o gouuid.wasm main.go
@REM $Env:GOOS = "js"; $Env:GOARCH = "wasm"; go build -ldflags="-w -s" -o gouuid.wasm main.go
wasm-opt gouuid.wasm --enable-bulk-memory -Oz -o gouuid-bmem.wasm
