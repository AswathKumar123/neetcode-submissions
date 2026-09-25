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
     * @return {number[][]}
     */
    levelOrder(root) {
        let res =[];

        let queue = new Queue();

        if(root === null){ return res};

        queue.enqueue({node:root, level: 1});

        while(queue.size() > 0){
            let {node, level} = queue.front();
            queue.dequeue();

            if(res.length < level){
                res.push([]);
            }

            res[res.length -1].push(node.val);

            if(node.left !== null){
                queue.enqueue({node: node.left, level: level+1});
            }

            if(node.right !==null){
                queue.enqueue({node: node.right, level: level+1});
            }
        }

        return res;
    }
}
