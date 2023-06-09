# Pooling
在机器学习中，池化是一种降采样技术，它通过将图像在宽度、高度和/或深度方向上的尺寸减小，从而减少参数和计算量。

例如，假设我们有一张 6 × 6 × 3 的图像（6 表示宽度和高度，3 表示通道数）。我们要应用 2 × 2 的最大池化，在不改变通道数量的情况下将图像大小减少一半。在这种情况下，结果将是一个 3 × 3 × 3 的特征映射，其中每个元素是像素块的最大值。

池化通常用于卷积神经网络（CNN）中，因为 CNN 中的层可以稍微改变图像中的特征尺寸，使一定程度上的图片变化对网络较为鲁棒。同时，池化可以在一定程度上减少计算量，防止过拟合。