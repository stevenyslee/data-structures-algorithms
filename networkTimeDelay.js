// Network Delay Time

// There are N network nodes, labelled 1 to N.

// Given times, a list of travel times as directed edges times[i] = (u, v, w), where u is the source node, v is the target node, and w is the time it takes for a signal to travel from source to target.

// Now, we send a signal from a certain node K. How long will it take for all nodes to receive the signal? If it is impossible, return -1.

// Note:
// N will be in the range [1, 100].
// K will be in the range [1, N].
// The length of times will be in the range [1, 6000].
// All edges times[i] = (u, v, w) will have 1 <= u, v <= N and 1 <= w <= 100.

/**
 * @param {number[][]} times
 * @param {number} N
 * @param {number} K
 * @return {number}
 */

 // DFS approach
var networkDelayTime = function(times, N, K) {
    let list = {};
    for (let i = 0; i < times.length; i++) {
        let src = times[i][0];
        let tuplet = times[i].slice(1);
        if (!list[src]) {
            list[src] = [tuplet];
        } else {
            list[src].push(tuplet);
        }
    }
    let nodes = new Array(N + 1);
    for (let i = 1; i <= N; i++) {
        nodes[i] = Number.MAX_VALUE;
    }
    const traverse = (node, time) => {
        if (nodes[node] > time) {
            nodes[node] = time;
        } else {
            return;
        }
        if (!list[node]) {
            return;
        }
        for (let i = 0; i < list[node].length; i++) {
            traverse(list[node][i][0], time + list[node][i][1]);
        }
    }
    traverse(K, 0);
    let answer = 0;
    for (let i = 1; i < nodes.length; i++) {
        if (nodes[i] === Number.MAX_VALUE) {
            return -1;
        } else {
            answer = Math.max(answer, nodes[i]);
        }
    }
    return answer;
};
