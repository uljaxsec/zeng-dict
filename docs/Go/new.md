# new
new 是在 Go 语言中用于创建一个指定类型的变量，并返回该变量的指针。它的语法非常简单：new(Type)。

使用示例：
```go
var p *int
p = new(int)
fmt.Println(*p)
```

上面的这段代码创建了一个指向整型的指针 p，并在堆上分配了一片内存空间，然后将这块内存的起始地址赋值给了 p。这个操作的结果是，现在 p 中存储了一个指向 0 的整型指针，而 *p 就是指向的整型变量。在这个例子中，输出的结果就是 0。

new 可用于任何数据类型，不仅仅是基本类型，还可以用于结构体、函数等复杂类型。

使用 new 分配内存时一定要注意，分配的空间并没有被初始化过。也就是说，在使用 new 分配内存之后，这些内存空间中存储的都是随机数。如果需要被初始化的空间可以使用 make 来进行分配。

在实际编程中，因为 Go 的自动垃圾回收机制，程序员并不需要显式地释放 new 分配的内存。这意味着，一旦变量不再被使用，相应的内存将被自动回收，无需人工干预。

在 Go 语言中，如果是想创建一个初值为零值的变量，可以直接使用 var 定义：
```go
var p int // 声明并定义一个初始值为 0 的整型变量
```

使用 new 的另一个优点是可以避免使用变量的默认值。

在一些情况下，程序员可能需要在分配内存时，避免变量默认值产生的后果。这时候可以使用 new 显式地分配一块空间，而无需使用默认值。

所以，new 是 Go 语言中用于创建指针类型变量的常用函数，它可以在堆内存空间中为指定类型变量申请一块内存区域，同时返回该变量的指针。需要注意的是，我们要在使用完这些变量后注意及时释放内存空间，避免内存泄漏。