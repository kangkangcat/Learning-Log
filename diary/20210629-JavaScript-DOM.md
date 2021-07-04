## DOM
DOM把文档表示成一棵家谱树，由有三种DOM方法棵获取元素的节点，分别是通过元素ID、通过标签名字和通过类名字获取。
### getElementById
```document.getElementById()  ```  
getElementById方法只有一个参数，如果想获取元素id属性的值，这个id值必须放在单引号或双引号里。这个调用将返回一个对象，这个对象对应着document对象里的一个独一无二的元素。可以用typeof操作符来验证这一点。typeof操作符可以告诉我们它的操作数是一个字符串、数值、函数、布尔值还是对象。
### getElementsByTagName
getElementsByTagName方法返回一个对象数组，每个对象分别对应着文档里有着给定标签的一个元素。  
```document.getElementsByTagName(tagname)```  
这个方法也是只有一个参数的函数，它的参数是标签的名字。
### getElementsByClassName
getElementsByClassName只接受一个参数，那就是类名。
```document.getElementsByClassName(class)```  
### getAttribute
getAttribute是一个函数，它的参数是打算查询属性的名字。  
```object.getAttribute(attribute)```  
与之前介绍的方法不同getAttribute方法不属于document对象，所以不能通过document对象调用，它只能通过元素节点对象调用。例如，可与getElementsByTagName方法合用，获取每个元素的属性，如下所示：
```
var paras = document.getElementsByTagName("p");
for(var i=0; i < paras.length; i++ ){
    alert(paras[i].getAttribute("title"));
}
```

if(something)与if(something != null)完全等价。

### setAttribute
与getAttribute一样，setAttribute只能用于元素节点，setAttribute有点不同，它允许对属性节点的值进行修改。  
```object.setAttribute(attribute,value)```  
setAttribute可以创建一个属性，然后设置它的值。通过setAttribute对文档做出修改后，在通过浏览器的查看源代码选项查看源代码时看到的仍是改变之前的属性值，也就是说setAttribute的修改不会反映在文档本身的源代码中。这种表里不一的现象源自DOM的工作模式：先加载文档的静态内容，再动态刷新，动态刷新不影响文档的静态内容。DOM对页面内容进行刷新却不需要在浏览器里刷新页面。
## JavaScript图片库
## 最佳实践
## 图片库改进版