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
     * @return {number}
     */
    diameterOfBinaryTree(root) {
        let {first, second} = this.f(root);
        return first;
    }

    f(node){
        if(node === null) {
            return {first: 0, second: 0};
        }
        let left = this.f(node.left);
        let right = this.f(node.right);

        let height = Math.max(left.second, right.second) +1;
        let diameter = Math.max(Math.max(left.first, right.first), (left.second + right.second));

        return { first: diameter, second: height};

    }
}
