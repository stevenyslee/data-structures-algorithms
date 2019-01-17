/*
Given two binary trees, write a function to check if they are the same or not.
Two binary trees are considered the same if they are structurally identical and the nodes have the same value.
*/

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
var isSameTree = function(p, q) {
    if (!p && !q) {
        return true;
    }
    if ((!p || !q) || (p.val !== q.val)) {
        return false;
    }
    return isSameTree(p.left, q.left) && isSameTree(p.right, q.right);
};

var isSameTree = function(p, q) {
    let pStack = [];
    let qStack = [];
    let pNode = p;
    let qNode = q;
    while (pStack.length || qStack.length || pNode || qNode) {
        while (pNode && qNode) {
            if (pNode.val !== qNode.val) {
                return false;
            }
            pStack.push(pNode);
            qStack.push(qNode);
            pNode = pNode.left;
            qNode = qNode.left;
        }
        if ((!pNode && qNode) || (pNode && !qNode)) {
            return false;
        }
        if (pNode && qNode && pNode.val !== qNode.val) {
            return false;
        }
        pNode = pStack.pop().right;
        qNode = qStack.pop().right;
    }
    return true;
};
