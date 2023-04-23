# CSS3新特性
CSS3 是 CSS 技术的升级版，它引入了许多新的特性和功能，使得开发者可以更加轻松地实现一些复杂的效果和布局。下面我们就来了解一下其中几个新特性：

## 1. Border-Radius
Border-Radius 是一个用于设置边框圆角的属性。在 CSS3 之前，我们只能通过背景图片或其他技巧来实现边框圆角的效果。而现在，我们只需要设置一个 border-radius 属性即可快速实现边框圆角效果，使得页面看起来更加美观。

举个例子，我们可以通过以下代码来实现一个圆形的图片：
```css
img {
  border-radius: 50%;
}
```

## 2. Box-Shadow
Box-Shadow 是一个用于设置盒子阴影的属性。通过设置该属性，我们可以使盒子看起来更加立体，同时还可以为盒子添加一些特效，比如发光、投影等。

举个例子，我们可以通过以下代码来实现一个带有投影效果的盒子：
```css
div {
  box-shadow: 2px 2px 4px #aaa;
}
```

## 3. Text-Shadow
Text-Shadow 是一个用于设置文字阴影的属性。通过设置该属性，我们可以为文字添加一些特效，比如发光、投影等。

举个例子，我们可以通过以下代码来实现一个带有文字投影效果的标题：
```css
h1 {
  text-shadow: 2px 2px 4px #aaa;
}
```

## 4. Transition
Transition 是一个用于设置 CSS 属性过渡效果的属性。通过设置该属性，我们可以为某一个属性设置过渡效果，使得该属性在发生变化时，能够平滑地过渡到新的属性值，从而实现比较流畅的动画效果。

举个例子，我们可以通过以下代码来实现一个带有过渡效果的按钮：
```css
button {
  background-color: #fff;
  transition: background-color 0.5s ease;
}

button:hover {
  background-color: #aaa;
}
```

## 5. Flexbox
Flexbox 是一个用于弹性布局的 CSS 模块，它使得我们能够更加容易地实现灵活的布局方式。通过设置该属性，我们可以使得子元素按照我们所希望的比例进行排列，同时还能够进行折行、排序等操作。

举个例子，我们可以通过以下代码来实现一列等高的三列布局：
```css
.container {
  display: flex;
}

.item {
  flex: 1;
  height: 200px;
}
```

以上就是 CSS3 新特性的一些介绍，CSS3 还有许多其他的新特性和功能，值得我们去深入学习和掌握。