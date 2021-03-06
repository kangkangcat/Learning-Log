# 学习笔记
## 第十节：div与span
### div
div可以将页面划分为逻辑区或逻辑分组，相当于一个容器，可以把元素一同放在这个容器里。在页面中要使用div可以助于分解逻辑区，从而使结构清晰便于指定样式，但滥用的话会使得页面变得复杂没有更多好处。  
  
&lt;div&gt;可以放在类里，也可以给它。指定一个唯一id。&lt;div&gt;的默认内边距是0。

### width
width属性只指定内容区的宽度。盒子的整个宽度需要将内容区的宽度加上左右内边距、左右外边距以及两边边框的宽度。  
  
元素的高度一般是默认的，如果调整宽度，浏览器会让内容区在垂直方向上延伸，一般的不指定元素高度。

### text-align
text-align属性会对块元素中的所有内联内容对齐。因此，在&lt;div&gt;块元素中设置了这个属性，它的所有内联内容都会居中。如果直接在内联元素上使用则不起作用。

### 子孙选择器
子孙选择器可以告诉CSS我们只想选择某些元素的子孙元素，就像指定遗产给某个子女。
写法如下
``` 
div h2 {
    color: blank;
}
```
div是父元素，h2是子孙元素，之间有一个空格。
``` 
#idname h2 {
    color: blank;
}
```
子孙选择器会选择一个元素中嵌套的所有指定元素，不论它嵌套得有多深。而选择直接孩子可以用下面这种方法：
```
例如：“#idname>h2”
```
这样只有当h2是该元素的直接孩子时才会选择这个h2。
  
  当需要更复杂的选择，比如要选择一个&lt;h2&gt;，要求它是一个&lt;blockquote&gt;的孩子，且要求&lt;blockquote&gt;必须在idname里面。这时就可以使用更多的子孙选择器，如下：
```
#idname blockquote h2 {
    color： blue；
}
```
### line-height
line-height属性有一点特殊，可以对它直接使用一个数，如果使用数1，则表示各个元素的行高是自己字体大小本身的一倍。
```
#idname {
    line-height: 1;
}
```
### 快捷方式 
* 指定内外边距
  ```
  padding：0px 20px 30px 40px; 
  ```
  记忆：上右下左逆时针。四个相同简写；两两相同也简写，先上下后左右。
  ```
  margin：20px;  

  margin: 20px 0px;
  ```
* 边框属性  

  ```border:thin oil #007e1e;```  
  边框简写更为灵活，可以按照喜欢的顺序来。
* 背景简写  
  
  ```beckground: white url(images/cocktail.gif) repeat-x;```  
  类似边框，简写可以采用任何顺序。
### span
&lt;div&gt;允许为块级内容创建逻辑划分，&lt;span&gt;元素 则采用类似的方式建立内联内容的逻辑分组。  
  
内联元素的内外边距和块元素有所不同，如果一个内联元素四周都增加外边距，只能看到左边和右边增加了空间；对内联元素的上下边增加内边距但这个内边距不会影响包围它的其他内联元素的间距，所以内边距会和其他内联元素重叠。 *图像例外。*
  
图像与其他内联元素稍有不同，图像的宽度、内边距和外边距属性都表现得更像是块元素的相应属性。
### 伪类
在样式方面，链接的表现稍有不同，&lt;a&gt;元素的样式会根据它的状态改变。点击过的，没点击过的，悬停的，都有其各自的样式。
```
a:link {
color: green;
}

a:visited {
    color: red;
}

a:hover {
    color: yellow;
}
```
注意选择器中没有空格。  
  
这里使用到了伪类，a:link允许指定样式，就像是类一样，但并没有在HTML中真正输入这些伪类。比如对于&lt;a&gt;元素，浏览器会仔细检查所有的&lt;a&gt;元素，把它们增加到正确的伪类里。浏览器会根据历史记录知道访问过哪些元素。

### 层叠
来自多个样式表的样式都层叠在页面上，对各个元素会应用最特定发的样式。

作者的样式、读者样式、浏览器默认样式。读者样式可能会覆盖一个样式，他只需将属性声明放置最后一个“！importtant”
```
h1 {
    font-siize: 200%
    !important;
}
```
在完成特定性排序时，并不会对所有规则进行重排，每次排序是对之前所做工作的进一步完善。 
  
  首先，按作者、读者、浏览器的顺序对规则排序。然后在各个类别中，再按特定性排序（选择性包含id？包含类或伪类？包含元素名？），对于有相同特定性的元素，则根据样式表中的顺序再进行排序。   
    
如果在层叠的所有规则中都没有找到匹配的属性，就要使用继承。

## 第十一节：布局与定位
### 流
块元素从上向下流，各元素之间有一个换行；内联元素在水平方向上会相互挨着，总体上会从左上方流向右下方。内联元素在水平方向上相互挨着摆放，文本是内联元素的一种特殊情况。  
  
但浏览器**并排**放置两个内联元素时，浏览器会考虑它们的外边距。元素之间的空间为两外边距之和。  
  
浏览器**上下**放置两个块元素时，它会把共同的外边距折叠一起。折叠的外边距高度是最大的外边距高度。

元素嵌套在另一个元素里，如果外面的那个元素有边框，两个元素的外边距就不会碰到一起，它们就不会折叠。但如果去掉边框，两个外边距就会折叠。
### float
float属性首先尽可能远的**向左**或**向右**浮动一个元素。然后它**下面**的所有内容会绕流这个元素。
* 浮动元素  
    
  为浮动元素指定id，所有浮动元素都有一个要求，就是必须有一个宽度，因此指定一个宽度。再来增加float属性,float属性可以设置为right或者left。
  ```
  #fudong {
     width: 200px;
     float: right；
  }
  ```
* 浮动元素的外边距不会发生折叠，与流入页面的块元素不同，浮动元素只是浮在页面上，浮动元素的外边距不会碰到正常流中元素的外边距。
* 内联元素会留意浮动元素的边界，而块元素会正常流向页面。
    



