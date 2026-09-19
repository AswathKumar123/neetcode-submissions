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
     * @param {ListNode} headA
     * @param {ListNode} headB
     * @return {ListNode}
     */
    getIntersectionNode(headA, headB) {

        let nodeSet = new Set();

        let cur = headA;

        while(cur){
            nodeSet.add(cur);
            cur = cur.next;
        }

        cur = headB;

        while(cur){
            if(nodeSet.has(cur)){
                return cur;
            }

            cur = cur.next;
        }

        return null;
    }
}
