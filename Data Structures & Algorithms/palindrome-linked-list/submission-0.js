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
     * @param {ListNode} head
     * @return {boolean}
     */
    isPalindrome(head) {
        let slow =head, fast = head;

        while(fast && fast.next){
            fast = fast.next.next;
            slow = slow.next;
        }

        let prev = null;
        while(slow){
            let tmp = slow.next;
            slow.next = prev;
            prev = slow;
            slow = tmp;
        }

        let left = head, right = prev;

        while(right){
            if(left.val !== right.val){
                return false;
            }

            left = left.next;
            right = right.next;
        }

        return true;
    }
}
