function addlist() {
    var x = document.getElementById("myschedule").value;
    var para = document.createElement("p");
    var node1 = document.createTextNode(x);
    para.appendChild(node1);
    var element = document.getElementById("div1");
    element.appendChild(para);

    var shan = document.createElement("button");
    var node2 = document.createTextNode("Del");
    shan.appendChild(node2);
    element.appendChild(shan);
}
var father = document.getElementById("div1");
var delbutton = father.getElementsByTagName("button");

delbutton.onclick = function() {
    var parent = document.getElementById("div1");
    var child1 = this.previousSibling;
    var child2 = this;
    parent.removeChild(child1);
    parent.removeChild(child2);

}