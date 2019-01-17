var root = document.getElementById('root');

var dfs = function(r, level) {
    console.log(r, level);
    let children = r.children;
    for(let i = 0; i < children.length; i++) {
        dfs(children[i], level + 1);
    }
}

var bfs = function(r) {
    let queue = [[r, 0]];
    while (queue.length) {
        let [node, level] = queue.shift(); 
        console.log(node, level);
        for (let i = 0; i < node.children.length; i++) {
            queue.push([node.children[i], level + 1]);
        }
    }
}

dfs(root, 0);
bfs(root);
