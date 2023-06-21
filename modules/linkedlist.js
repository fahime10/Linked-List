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

    at(index) {
        if (index < 0) {
            return null;
        } else {
            let current = this.head;
            
            while (index > 0) {
                current = current.nextNode;
                index--;
            }

            return current.value;
        }
    }

    pop() {
        let current = this.head;

        while (current.nextNode.nextNode) {
            current = current.nextNode;
        }

        current.nextNode = null;
        this.size--;
    }

    contains(value) {
        let current = this.head;
        let result = false;

        while (current.nextNode) {
            if (current.value === value) {
                result = true;
                return result;
            }

            current = current.nextNode;
        }

        return result;
    }

    find(value) {
        let current = this.head;
        let index = 0;

        while (current.nextNode) {
            if (current.value === value) {
                return index;
            } else {
                index++;
                current = current.nextNode;
            }
        }

        if (current.value !== value) {
            return null;
        } else {
            return index;
        }
    }

    toString() {
        let current = this.head;
        let string = "";

        while (current.nextNode) {
            string += `( ${current.value} ) -> `;
            current = current.nextNode;
        }

        string += `( ${current.value} ) -> `;
        string += " null ";

        return string;
    }

    insertAt(value, index) {
        if (value === "" || index < 0 || index > this.size) {
            return;
        }

        if (index === 0) {
            this.prepend(value);
            this.size++;
            return;
        }

        let node = new Node(value);
        let current = this.head;
        let temp = current;
        let count = 0;

        while (count <= index) {
            temp = current;
            count++;

            current = current.nextNode;
        }

        node.nextNode = current;
        temp.nextNode = node;

        this.size++;
    }

    removeAt(index) {
        if (index < 0 || index > this.size) {
            return;
        }

        let current = this.head;
        let temp;
        let count = 0;

        if (index === 0) {
            this.head = current.nextNode;
        }

        while (count < index) {
            count++;
            temp = current;
            current = current.nextNode;
        }

        temp.nextNode = current.nextNode;

        this.size--;
    }
}