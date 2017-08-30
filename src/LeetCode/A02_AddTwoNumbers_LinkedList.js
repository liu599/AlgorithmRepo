/**
 * You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order and each of their nodes contain a single digit. Add the two numbers and return it as a linked list. You may assume the two numbers do not contain any leading zero, except the number 0 itself.
 * Input: (2 -> 4 -> 3) + (5 -> 6 -> 4)
 * Output: 7 -> 0 -> 8
 * (465 + 342 = 807)
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 * @classified {LinkedList}
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
function ListNode(val) {
  this.val = val;
  this.next = null;
}
let append = function(val, linkedlist) {
  let node = new ListNode(val);
  if(linkedlist === null) {
    linkedlist = node;
  }else{
    while(linkedlist.next){
      linkedlist = linkedlist.next;
    }
    linkedlist.next = node;
  }
};
let addTwoNumbers = function(l1, l2) {
  let sumLinkedList = null;
  let elem = l1;
  let elem2 = l2;
  while (elem !== null) {
    append((elem.val + elem2.val) % 10, sumLinkedList);
    elem = elem.next;
    elem2 = elem2.next;
  }
  return sumLinkedList;
};
