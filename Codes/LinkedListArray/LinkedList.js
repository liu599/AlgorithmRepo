/*
* Javascript 链表
*
* */
import {Chain, ChainSingle} from './Chain.js';

// 可视化输出
const printLK =  (linkedList) => {
    let cur = linkedList;
    let output = `链表为: first`;
    while(cur) {
        output += `->${cur.val}`;
        cur = cur.next;
    }
    console.log(output);
    return false;
};

class ChainCycleExtended extends Chain {
    constructor(props) {
        super(props);
        // where the cycle is;
        // If pos is -1, then there is no cycle in the linked list.
        this.CPOS = -1;
    }
    // 判断环形链表

    // 实现环形链表
    generateCycle = (pos) => {
        if (pos >= this.length || pos < 0) {
            this.CPOS = -1;
            console.error("position is not in the range");
            return false;
        }
        this.at(pos);
        this.CURR.prev = [
            this.CURR.prev,
            this.TAIL
        ];
        this.TAIL.next = this.CURR;
    };
}

class ChainSingleExtended extends ChainSingle {
    // Singly linked list
    constructor(props) {
        super(props);
        this.CPOS = -1;
    }

    // 实现环形链表
    generateCycle = (pos) => {
        if (pos >= this.length || pos < 0) {
            this.CPOS = -1;
            console.error("position is not in the range");
            return false;
        }
        this.at(pos);
        this.TAIL.next = this.CURR;
    };

    //
    // 反转链表
    //  https://leetcode.com/problems/reverse-linked-list/
    reverse = () => {
        let cur = this.HEAD;
        let prev = null;
        let nextTemp;
        while(cur) {
            nextTemp = cur.next;
            cur.next = prev;
            prev = cur;
            cur = nextTemp;
        }
        [this.CURR, this.HEAD, this.TAIL] = [this.TAIL, this.TAIL, this.HEAD];
        return prev;
    };
    //
    // 反转链表II
    // Reversed Linked List II
    // https://leetcode.com/problems/reverse-linked-list-ii/
    // Reverse a linked list from position m to n. Do it in one-pass.
    //
    // Note: 1 ≤ m ≤ n ≤ length of list.
    reverseBetween = (m, n) => {
        let head = this.HEAD;
        let i = 0;
        let firstNode = {
            val: null,
            next: null,
        };
        let tmp = null;
        let cur = firstNode;
        let reverseHead = null;
        let reverseLast = null;
        let reverseNow = null;

        firstNode.next = head;

        while (cur) {
            tmp = cur.next;
            if (i === m - 1) {
                reverseHead = cur;
            }
            if (i === m) {
                reverseLast = cur;
                reverseNow = cur;
            }
            if (i > m && i <= n) {
                cur.next = reverseNow;
                reverseNow = cur;
            }
            if (i === n) {
                reverseLast.next = tmp;
                reverseHead.next = reverseNow;
            }
            cur = tmp;
            i++;
        }
        [this.CURR, this.HEAD] = [firstNode.next, firstNode.next];
        return firstNode.next;
    };
    //
    // 链表分解1
    // 86. Partition List
    // https://leetcode.com/problems/partition-list/
    partition = (x) => {
        let head = this.HEAD;
        let node1 = {
            val: 0,
            next: null,
        };
        let node2 = {
            val: 0,
            next: null,
        };
        let now1 = node1;
        let now2 = node2;
        let now = head;
        while(now) {
            if (now.val < x) {
                now1.next = now;
                now1 = now1.next;
            } else {
                now2.next = now;
                now2 = now2.next;
            }
            now = now.next;
        }
        now1.next = node2.next;
        now2.next = null;
        return node1.next;
    };
    // 判断两个链表交叉点
    // 160 https://leetcode.com/problems/intersection-of-two-linked-lists/
    // 其实是求两个链表长度的最大公约数
    // 假设O为重复的长度， 那么取得O从两个HEAD均走完A+B+O即可。

    // 回文链表
    // 234 https://leetcode.com/problems/palindrome-linked-list/
    // 首先求得该链表的中位数（快慢指针）
    //　然后比较左右两侧的数值　->　可以利用栈的特性存储数值， 先进后出 空间复杂度为O(n/2)
    // 满足空间复杂度为O(1)的要求， 将链表后半段原地翻转，再将前半段、后半段依次比较，判断是否相等
}

function LinkedList() {
    const ListNode = function (val) {
        this.val = val;
        // 单向链表只有一个后继指针
        this.next = null;
        // 双向链表
        this.prev = null;
        // 如果是-1代表最后一个节点
        // this.pos = -1;
    };
    this.head = null;

    this.createLinkedList = valArray => {
        valArray.forEach(val => {
            this.append(val);
        })
    };

    this.append = val => {
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

    //  反转链表

    this.reverse = () => {
        let head = JSON.parse(JSON.stringify(this.head));
        let prev = null;
        let current = head;
        let nextTemp;
        while (current !== null) {
            nextTemp = current.next;
            current.next = prev;
            prev = current;
            current = nextTemp;
        }
        return prev;
    };

    // Reversed Linked List II
    // https://leetcode.com/problems/reverse-linked-list-ii/
    // Reverse a linked list from position m to n. Do it in one-pass.
    //
    // Note: 1 ≤ m ≤ n ≤ length of list.
    this.reverseRange = (m, n) => {
        let head = JSON.parse(JSON.stringify(this.head));
        let tmp = null;
        let firstNode = new ListNode([null]);
        let cur = firstNode;
        let reverseLast = null;
        let reverseHead = null;
        let reverseNow = null;
        let i = 0;

        firstNode.next = head;

        while (cur) {
            tmp = cur.next;
            if (i === m - 1) {
                reverseHead = cur;
            }
            if (i === m) {
                reverseLast = cur;
                reverseNow = cur;
            }
            if (i > m && i <= n) {
                cur.next = reverseNow;
                reverseNow = cur;
            }
            if (i === n) {
                reverseLast.next = tmp;
                reverseHead.next = reverseNow;
            }

            cur = tmp;
            i++;
        }

        return firstNode.next;
    };

    // 每K组反转
    // https://leetcode.com/problems/reverse-nodes-in-k-group/
    this.reverseKGroup = (head, k) => {
        // let head = JSON.parse(JSON.stringify(this.head));
        if (!head || k < 2) return head;

        let count = 0;
        let tmp = null;
        let reverseHead = head;
        let reverseLast = head;


        while (reverseHead && count < k) {
            reverseHead = reverseHead.next;
            count += 1;
        }

        if (count === k) {
            reverseHead = this.reverseKGroup(reverseHead, k);
            while (count -- > 0) {
                tmp = reverseLast.next;
                reverseLast.next = reverseHead;
                reverseHead = reverseLast;
                reverseLast = tmp;
            }
            reverseLast = reverseHead;
        }

        return reverseLast;
    };


    // 交换相邻节点（传统方法）
    // https://leetcode.com/problems/swap-nodes-in-pairs/
    this.swapTwoAdjacentNodes = () => {
        let head = JSON.parse(JSON.stringify(this.head));
        let firstNode = new ListNode(null);
        firstNode.next = head;
        let cur = head;
        let prev = firstNode;
        let nextTemp;

        while(prev.next !== null && prev.next.next !== null) {
            nextTemp = cur.next.next;
            cur.next.next = cur;
            prev.next = cur.next;
            cur.next = nextTemp;

            prev = cur;
            cur = cur.next;
        }
        return firstNode.next;
    };

    // 交换相邻节点（二分）
    this.swapTwoAdjacentNodesHalves = () => {
        let head = JSON.parse(JSON.stringify(this.head));
        if (head == null) {
            return null;
        }

        let mid = head;
        let left = null;
        let right = head.next;
        let h = head;

        while (right !== null && mid !==null) {
            if (left != null) {
                left.next = right;
            } else {
                h = right;
            }
            mid.next = right.next;
            right.next = mid;

            left = mid;
            mid = mid === null ? null : mid.next;
            right = mid === null ? null : mid.next;
        }
        return h;
    };

    // 判断是否有环
    // 1. 硬做（一定时间内不出现nil)
    // 2. SET集合判重 O（n, 1）
    // 3. 快慢指针 无环指针永远不能相遇。 O(n)
    // https://leetcode.com/problems/linked-list-cycle/
    this.judgeCycle2 = head => {
        if(head == null || head.next == null){
            return false;
        }
        let node = head;
        while(node != null ){
            if(node.flag){
                return true;
            }
            node.flag = true;
            node = node.next;
        }
        return false;
    };

    this.judgeCycle3 = (head) => {
        if(head === null || head.next === null){
            return false;
        }

        let slow = head.next;
        let fast = head.next.next;
        if(fast === null){
            return false;
        }

        while(slow !== fast){
            if(fast.next === null){
                return false;
            }
            slow = slow.next;
            fast = fast.next.next;

            if(slow === null || fast === null){
                return false;
            }
        }
        return true;
    };

    // 输出环的位置。
    // 1. 集合： 很简单， 重复那点直接输出即可
    // 2. 快慢指针： 首先先相遇， 然后让某一指针指向头节点， 两者以1步长继续走， 直到相遇，相遇即为环的起点。
    // 3. 另一个应用是求链表是否存在环的变式，如给定两个链表A和B，判断两个链表是否相交，解决方法就是将A链表尾节点指向头结点形成一个环，检测B链表是否存在环，如果存在，则两个链表相交，而检测出来的依赖环入口即为相交的第一个点。
    // 求有序链表中求出其中位数，这种问题也是设置快慢指针，当快指针到底链表尾部的时候，慢指针刚好指向链表中间的结点。
    //
    // ---------------------
    // 作者：will_duan
    // 来源：CSDN
    // 原文：https://blog.csdn.net/willduan1/article/details/50938210
    // 版权声明：本文为博主原创文章，转载请附上博文链接！
    // https://leetcode.com/problems/linked-list-cycle-ii/
    this.outputCyclePos = head => {
        if(head === null || head.next === null){
            return null;
        }
        let node = head;
        while(node !== null ){
            if(node.flag){
                return node;
            }
            node.flag = true;
            node = node.next;
        }
        return null;
    }
}

let nodelist = new LinkedList();
nodelist.createLinkedList([1, 2, 3, 4, 5, 6]);
console.log('Original List is', nodelist);
console.log('Reversed List is', nodelist.reverse());
console.log('Swap Two Adjacent Nodes(Original)', nodelist.swapTwoAdjacentNodes());
console.log('Swap Two Adjacent Nodes(Halves)', nodelist.swapTwoAdjacentNodesHalves());
console.log('Reverse Range', nodelist.reverseRange(1,3));
console.log('Reverse K Group ', nodelist.reverseKGroup(nodelist.head, 2));

let chain = new ChainSingleExtended([1, 2, 3, 4, 5, 6, 7, 2, 2, 2]);
// chain.generateCycle(2);
console.log(chain);
// console.log(chain.reverse());
// console.log(chain.reverseBetween(3, 6));
console.log(printLK(chain.partition(3)));