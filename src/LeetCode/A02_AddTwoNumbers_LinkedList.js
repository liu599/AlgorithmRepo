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
var append = function(val, head) {
  let node = new ListNode(val);
  let current;
  if(head === null) {
    head = node;
  }else{
    current = head;
    while(current.next){
      current = current.next;
    }
    current.next = node;
  }
  return head;
}
var addTwoNumbers = function(l1, l2) {
  let p = null;
  let carry = 0;
  while(l1!==null || l2!==null || carry !== 0){
    let t1 = l1 === null ? 0 : l1.val;
    let t2 = l2 === null ? 0 : l2.val;
    let digit = (t1 + t2) % 10 + carry;
    p = append(digit % 10, p);
    carry = ((t1 + t2) >= 10 || digit >= 10) ? 1 : 0;
    if(l1 !== null) l1 = l1.next;
    if(l2 !== null) l2 = l2.next;
  }
  return p;
};
