# panic
在 Go 中，panic 是内建函数之一，它可以使程序执行过程中出现致命错误时（即无法恢复的错误）抛出一个异常。在抛出异常之后，程序会立刻停止执行，并按照逆序调用函数栈上的所有延迟函数（即 defer）。

举个例子：假设我们正在开发一个 web 应用程序，并处理了一个 HTTP 请求时出现了致命错误，比如访问了不存在的路径。为了保障应用程序的稳定性，我们会在服务器出错时打印一些错误信息，并返回一个合适的 HTTP 状态码。在 Go 中，我们可以使用 panic 函数来达到这个目的。
```go
func serveHTTP(res http.ResponseWriter, req *http.Request) {
    // ...
    if ! isValidPath(req.URL.Path) {
        panic("Invalid URL Path: " + req.URL.Path)
    }
    // ...
}
```

像这样，在程序运行过程中出现不能恢复的错误时，我们就可以使用 panic 来抛出一次运行时异常，并在所有延迟函数被调用后结束程序的执行。

当然，这并不意味着我们可以随意使用 panic 来优雅地处理错误。在实际开发过程中，我们应该尽可能避免在代码中滥用 panic，并尽量使用 Go 语言提供的错误机制和异常处理来优雅地处理错误。