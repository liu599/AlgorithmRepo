/**
 * Definition for Chain(Linked List).
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 *     this.prev = null;
 * }
 */

export class Chain {

    constructor (data = []) {
        this.TAIL = null;
        this.HEAD = null;
        this.CURR = null;
        this.length = 0;
        this.push(...data);
    }

    /**
     * @param {object} val
     * @return {ListNode}
     */
    // 产生链表节点数据
    generateNode = (val) => (
        {
            val,
            next: null,
            prev: null,
        }
    );

    // 设置头部
    setHead = (node = null) => {
        this.HEAD = node;
    };

    // 设置尾部
    setTail = (node = null) => {
        this.TAIL = node;
        this.HEAD === null && this.setHead(node) & this.setCurrentPointer(node);
    };

    // 设置当前节点
    setCurrentPointer = (node = this.HEAD) => {
        this.CURR =  node;
    };

    // 返回链表中的某一项
    at = (index = 0) => {
        if(index < 0 || index >= this.length) {
            console.error('Illegal position');
            return false;
        }
        this.setCurrentPointer();
        while (index -- > 0) {
            this.CURR = this.CURR.next;
        }
        this.setCurrentPointer(this.CURR);
        return this.CURR.val;
    };

    // 在链表尾部添加节点。
    push = (...data) => {
        data.forEach(val => {
            let node = this.generateNode(val);
            let TAIL = this.TAIL;
            if(null !== TAIL) {
                [TAIL['next'], node['prev']] = [node, TAIL];
            }
            this.setTail(node);
            this.length += 1;
        })
    };

    // 克隆链表
    clone = () => {
        let cp = new this.constructor();
        for(let data of this) {
            cp.push(data);
        }
        return cp;
    };
}

export class ChainSingle {
    constructor(data = []) {
        this.TAIL = null;
        this.HEAD = null;
        this.CURR = null;
        this.length = 0;
        this.push(...data);
        return this;
    }
    // 产生链表节点数据
    generateNode = (val) => (
        {
            val,
            next: null,
        }
    );

    // 设置头部
    setHead = (node = null) => {
        this.HEAD = node;
    };

    // 设置尾部
    setTail = (node = null) => {
        this.TAIL = node;
        this.HEAD === null && this.setHead(node) & this.setCurrentPointer(node);
    };

    // 返回链表中的某一项
    at = (index = 0) => {
        if(index < 0 || index >= this.length) {
            console.error('Illegal position');
            return false;
        }
        this.setCurrentPointer();
        while (index -- > 0) {
            this.CURR = this.CURR.next;
        }
        this.setCurrentPointer(this.CURR);
        return this.CURR.val;
    };

    // 设置当前节点
    setCurrentPointer = (node = this.HEAD) => {
        this.CURR =  node;
    };

    // 在链表尾部添加节点。
    push = (...data) => {
        data.forEach(val => {
            let node = this.generateNode(val);
            let TAIL = this.TAIL;
            if(null !== TAIL) {
                TAIL['next'] = node;
            }
            this.setTail(node);
            this.length += 1;
        });
        return this;
    };
}
