/*
* Javascript 链表
*
* */

function LinkedList() {
    const ListNode = function (val) {
        this.val = val;
        this.next = null;
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
    //  https://leetcode.com/problems/reverse-linked-list/
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

    // 每K组反转
    // https://leetcode.com/problems/reverse-nodes-in-k-group/
    this.reverseKGroup = (k) => {

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
nodelist.createLinkedList([1, 2, 3]);
console.log('Original List is', nodelist);
console.log('Reversed List is', nodelist.reverse());
console.log('Swap Two Adjacent Nodes(Original)', nodelist.swapTwoAdjacentNodes());
console.log('Swap Two Adjacent Nodes(Halves)', nodelist.swapTwoAdjacentNodesHalves());
console.log('Reverse K Group ', nodelist.reverseKGroup(2));
