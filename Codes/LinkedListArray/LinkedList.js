/*
* https://leetcode.com/problems/reverse-linked-list/
*
* */

function LinkedList() {
    const ListNode = function (val) {
        this.val = val;
        this.next = null;
    };
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
    };

    this.reverse = function () {
        let data = JSON.parse(JSON.stringify(this.head));
        let prev = null;
        let current = data;
        console.log(data, 'current');
        let nextTemp;
        while (current !== null) {
            nextTemp = current.next;
            current.next = prev;
            prev = current;
            current = nextTemp;
        }
        return prev;
    }
}

let nodelist = new LinkedList();
nodelist.createLinkedList([1, 2, 3, 4, 5]);
console.log('Original List is', nodelist);
console.log('Reversed List is', nodelist.reverse());