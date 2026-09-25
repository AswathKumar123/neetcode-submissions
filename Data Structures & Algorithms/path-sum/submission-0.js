/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     constructor(val = 0, left = null, right = null) {
 *         this.val = val;
 *         this.left = left;
 *         this.right = right;
 *     }
 * }
 */
class Solution {
    /**
     * @param {TreeNode} root
     * @param {number} targetSum
     * @return {boolean}
     */
    hasPathSum(root, targetSum) {
       return this.preOrder(root, 0, targetSum);

    }

    preOrder(node, SumTillParent, targetSum){
        if(node ===null){
            return false;
        }
        let sumTillMe = SumTillParent + node.val;


            if(sumTillMe === targetSum && node.left === null && node.right === null){
                return true;
            }

            return (this.preOrder(node.left, sumTillMe, targetSum) ||    this.preOrder(node.right, sumTillMe, targetSum));
    }
}
