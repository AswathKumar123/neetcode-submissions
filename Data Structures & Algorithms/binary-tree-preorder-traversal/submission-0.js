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
     * @return {number[]}
     */
    preorderTraversal(root) {
        let res =[];

        const PreOrder = (node) => {
            if(!node) return;
            res.push(node.val);
            PreOrder(node.left);
            PreOrder(node.right);
        }

        PreOrder(root);
        return res;
    }
}
