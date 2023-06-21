import { LinkedList } from "./modules/linkedlist.js";

let list = new LinkedList();

list.append("test1");
list.append("test2");
list.append("test3");
list.append("test4");
list.append("test5");

list.prepend("item1");

console.log(list);
console.log("Size is " + list.getSize());
console.log("Head is " + list.getHead());
console.log("Tail is " + list.getTail());