import { Node } from "./node.js";

export class LinkedList {
    constructor() {
        this.head = null;
        this.size = 0;
    }

    append(value) {
        let node = new Node(value);
        let current;

        if (!this.head) {
            this.head = node;
        } else {
            current = this.head;

            // loop through the list and re-assign current
            while (current.nextNode) {
                current = current.nextNode;
            }

            current.nextNode = node;
        }

        this.size++;
    }

    prepend(value) {
        this.head = new Node(value, this.head);
    }

    getSize() {
        return this.size;
    }

    getHead() {
        return this.head.value;
    }

    getTail() {
        let current = this.head;

        while (current.nextNode) {
            current = current.nextNode;
        }

        return current.value;
    }
}