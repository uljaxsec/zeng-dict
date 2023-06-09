# auto 关键字
在 C++11 中，引入了一个关键字 auto。使用 auto 关键字能够让编译器在编译时推导出变量的类型，从而使代码的可读性更好，同时也能够减少编写代码时的繁琐。

在使用 auto 关键字时，我们不需要指定变量的类型，编译器会根据等号右边的表达式推导出变量的类型。例如：
```cpp
auto i = 42;    // 推导出 i 的类型为 int
auto j = 3.14;  // 推导出 j 的类型为 double
auto c = 'a';   // 推导出 c 的类型为 char
```

在上面的例子中，我们没有显示的声明变量的类型，而是使用 auto 来推导变量的类型，编译器会根据等号右边的表达式推导出变量的类型。

使用 auto 关键字，能够让我们写出更加简洁的代码，例如在使用 STL 中的迭代器时，我们可以这样写：
```cpp
std::vector<int> vec = {1, 2, 3, 4, 5};
for (auto it = vec.begin(); it != vec.end(); ++it) {
    std::cout << *it << " ";
}
```

在上面的例子中，我们使用 auto 关键字来定义迭代器 it，使代码更加简洁，同时也更加易读。

需要注意的是，使用 auto 关键字也存在一些缺点。由于使用 auto 会让代码可读性更好，但是可能会使代码的可维护性变差。例如，我们可能看不到变量的实际类型，从而使代码难以维护。因此，我们需要在使用 auto 关键字的时候，谨慎地考虑其的使用情况。

总之，auto 关键字可以让代码更加简洁、易读，同时也能够减少编写代码时的繁琐，但是需要注意谨慎使用。