/*
* https://leetcode.com/problems/reverse-linked-list/
*
* */

function LinkedList() {
    const ListNode = function (val) {
        this.val = val;
        this.next = null;
    };
    this.length = 0;
    this.head = null;

    this.createLinkedList = function(valArray) {
        valArray.forEach(val => {
            this.append(val);
        })
    };

    this.append = function (val) {
        const node = new ListNode(val);
        let current;
        if (this.head === null) {
            this.head = node;
        } else {
            current = this.head;
            while (current.next) {
                current = current.next;
            }
            current.next = node;
        }
        this.length += 1;
    };

    this.reverse = function (head) {
        let data = JSON.parse(JSON.stringify(this.head));
        let prev = null, node = new LinkedList();
        node.append(this.head.val);
        while (data.next) {
            node.next = prev;
            prev = data.next;
        }
    }
}

let nodelist = new LinkedList();
nodelist.createLinkedList([1, 2, 3, 4, 5]);
console.log(nodelist);