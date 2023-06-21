import { LinkedList } from "./modules/linkedlist.js";

let list = new LinkedList();

list.append("test1");
list.append("test2");
list.append("test3");
list.append("test4");
list.append("test5");

list.prepend("item1");

list.pop();

console.log(list);
console.log("Size is " + list.getSize());
console.log("Head is " + list.getHead());
console.log("Tail is " + list.getTail());
console.log("Index 3: " + list.at(3));
console.log("Contains test2? " + list.contains("test2"));
console.log("Contains test7? " + list.contains("test7"));

console.log(list);
console.log(list.find("item1"));
console.log(list.find("test2"));
console.log(list.find("test4"));
console.log(list.toString());

list.insertAt("test0", 0);
list.insertAt("newTest", 3);
console.log(list.toString());

list.removeAt(1);
console.log(list.toString());