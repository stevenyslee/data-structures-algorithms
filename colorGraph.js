// Given an undirected graph ↴ with maximum degree ↴ DD, find a graph coloring ↴ using at most D+1D+1 colors.

function colorGraph(graph, colors) {
  graph.forEach((node) => {
    let illegalColors = new Set();
    node.neighbors.forEach((color) => {
      if (color !== null) {
        illegalColors.add(color);
      }
    });
    for (let i = 0; i < colors.length; i++) {
      if (!illegalColors.has(colors[i])) {
        node.color = colors[i];
        break;
      }
    }
  });
  return graph;
}
