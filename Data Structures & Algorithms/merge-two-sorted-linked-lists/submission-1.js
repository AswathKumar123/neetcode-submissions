/**
 * Definition for singly-linked list.
 * class ListNode {
 *     constructor(val = 0, next = null) {
 *         this.val = val;
 *         this.next = next;
 *     }
 * }
 */

class Solution {
    /**
     * @param {ListNode} list1
     * @param {ListNode} list2
     * @return {ListNode}
     */
    mergeTwoLists(list1, list2) {

    let first = list1;
    let second = list2;

    let head= null;
    let tail = null;

    while(first !==null || second !== null){
        let nodeToCopy = null;

        if(first !==null && second !==null){
            if(first.val < second.val){
                nodeToCopy = first;
                first = first.next;
            } else {
                nodeToCopy = second;
                second = second.next;
            }
        } else if(first !==null){
            nodeToCopy = first;
            first = first.next;
        } else {
            nodeToCopy = second;
            second = second.next;
        }

        let obj = this.addToList(head, tail, nodeToCopy);

        head = obj.head;
        tail = obj.tail;
    }

    return head;
   
}

addToList(head, tail, nodeToCopy){
    let node = new ListNode(nodeToCopy.val);

     if (head === null) {
        head = node;
        tail = node;
    } else {
        tail.next = node;
        tail = node;
    }

    return { head, tail };
}
}
