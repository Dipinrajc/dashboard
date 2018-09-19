var options = {
  name: "klay",
  nodeDimensionsIncludeLabels: false, // Boolean which changes whether label dimensions are included when calculating node dimensions
  fit: true, // Whether to fit
  padding: 20, // Padding on fit
  animate: false, // Whether to transition the node positions
  animateFilter: function(node, i) {
    return true;
  }, // Whether to animate specific nodes when animation is on; non-animated nodes immediately go to their final positions
  animationDuration: 500, // Duration of animation in ms if enabled
  animationEasing: undefined, // Easing of animation if enabled
  transform: function(node, pos) {
    return pos;
  }, // A function that applies a transform to the final node position
  ready: undefined, // Callback on layoutready
  stop: undefined, // Callback on layoutstop
  klay: {
    // Following descriptions taken from http://layout.rtsys.informatik.uni-kiel.de:9444/Providedlayout.html?algorithm=de.cau.cs.kieler.klay.layered
    addUnnecessaryBendpoints: false, // Adds bend points even if an edge does not change direction.
    aspectRatio: 1.6, // The aimed aspect ratio of the drawing, that is the quotient of width by height
    borderSpacing: 20, // Minimal amount of space to be left to the border
    compactComponents: false, // Tries to further compact components (disconnected sub-graphs).
    crossingMinimization: "LAYER_SWEEP", // Strategy for crossing minimization.
    /* LAYER_SWEEP The layer sweep algorithm iterates multiple times over the layers, trying to find node orderings that minimize the number of crossings. The algorithm uses randomization to increase the odds of finding a good result. To improve its results, consider increasing the Thoroughness option, which influences the number of iterations done. The Randomization seed also influences results.
        INTERACTIVE Orders the nodes of each layer by comparing their positions before the layout algorithm was started. The idea is that the relative order of nodes as it was before layout was applied is not changed. This of course requires valid positions for all nodes to have been set on the input graph before calling the layout algorithm. The interactive layer sweep algorithm uses the Interactive Reference Point option to determine which reference point of nodes are used to compare positions. */
    cycleBreaking: "INTERACTIVE", // Strategy for cycle breaking. Cycle breaking looks for cycles in the graph and determines which edges to reverse to break the cycles. Reversed edges will end up pointing to the opposite direction of regular edges (that is, reversed edges will point left if edges usually point right).
    /* GREEDY This algorithm reverses edges greedily. The algorithm tries to avoid edges that have the Priority property set.
        INTERACTIVE The interactive algorithm tries to reverse edges that already pointed leftwards in the input graph. This requires node and port coordinates to have been set to sensible values.*/
    direction: "UNDEFINED", // Overall direction of edges: horizontal (right / left) or vertical (down / up)
    /* UNDEFINED, RIGHT, LEFT, DOWN, UP */
    edgeRouting: "ORTHOGONAL", // Defines how edges are routed (POLYLINE, ORTHOGONAL, SPLINES)
    edgeSpacingFactor: 0.5, // Factor by which the object spacing is multiplied to arrive at the minimal spacing between edges.
    feedbackEdges: false, // Whether feedback edges should be highlighted by routing around the nodes.
    fixedAlignment: "NONE", // Tells the BK node placer to use a certain alignment instead of taking the optimal result.  This option should usually be left alone.
    /* NONE Chooses the smallest layout from the four possible candidates.
        LEFTUP Chooses the left-up candidate from the four possible candidates.
        RIGHTUP Chooses the right-up candidate from the four possible candidates.
        LEFTDOWN Chooses the left-down candidate from the four possible candidates.
        RIGHTDOWN Chooses the right-down candidate from the four possible candidates.
        BALANCED Creates a balanced layout from the four possible candidates. */
    inLayerSpacingFactor: 1.0, // Factor by which the usual spacing is multiplied to determine the in-layer spacing between objects.
    layoutHierarchy: false, // Whether the selected layouter should consider the full hierarchy
    linearSegmentsDeflectionDampening: 0.3, // Dampens the movement of nodes to keep the diagram from getting too large.
    mergeEdges: false, // Edges that have no ports are merged so they touch the connected nodes at the same points.
    mergeHierarchyCrossingEdges: true, // If hierarchical layout is active, hierarchy-crossing edges use as few hierarchical ports as possible.
    nodeLayering: "NETWORK_SIMPLEX", // Strategy for node layering.
    /* NETWORK_SIMPLEX This algorithm tries to minimize the length of edges. This is the most computationally intensive algorithm. The number of iterations after which it aborts if it hasn't found a result yet can be set with the Maximal Iterations option.
        LONGEST_PATH A very simple algorithm that distributes nodes along their longest path to a sink node.
        INTERACTIVE Distributes the nodes into layers by comparing their positions before the layout algorithm was started. The idea is that the relative horizontal order of nodes as it was before layout was applied is not changed. This of course requires valid positions for all nodes to have been set on the input graph before calling the layout algorithm. The interactive node layering algorithm uses the Interactive Reference Point option to determine which reference point of nodes are used to compare positions. */
    nodePlacement: "BRANDES_KOEPF", // Strategy for Node Placement
    /* BRANDES_KOEPF Minimizes the number of edge bends at the expense of diagram size: diagrams drawn with this algorithm are usually higher than diagrams drawn with other algorithms.
        LINEAR_SEGMENTS Computes a balanced placement.
        INTERACTIVE Tries to keep the preset y coordinates of nodes from the original layout. For dummy nodes, a guess is made to infer their coordinates. Requires the other interactive phase implementations to have run as well.
        SIMPLE Minimizes the area at the expense of... well, pretty much everything else. */
    randomizationSeed: 1, // Seed used for pseudo-random number generators to control the layout algorithm; 0 means a new seed is generated
    routeSelfLoopInside: false, // Whether a self-loop is routed around or inside its node.
    separateConnectedComponents: true, // Whether each connected component should be processed separately
    spacing: 20, // Overall setting for the minimal amount of space to be left between objects
    thoroughness: 7 // How much effort should be spent to produce a nice layout..
  },
  priority: function(edge) {
    return null;
  } // Edges with a non-nil value are skipped when geedy edge cycle breaking is enabled
};

var layoutOptions = {
  // name: "concentric", //concentric//breadthfirst
  // padding: 10
  name: "grid",
  rows: 4,
  // name: "cola",
  // flow: { axis: "y", minSeparation: 40 },
  //avoidOverlap: true,

  //name: "dagre",
  //rankdir: "RL",

  //  name: "cose-bilkent",
  // name: "klay",
  //animate: false

  name: "klay",
  nodeDimensionsIncludeLabels: false, // Boolean which changes whether label dimensions are included when calculating node dimensions
  fit: true, // Whether to fit
  padding: 20, // Padding on fit
  animate: false, // Whether to transition the node positions
  animateFilter: function(node, i) {
    return true;
  }, // Whether to animate specific nodes when animation is on; non-animated nodes immediately go to their final positions
  animationDuration: 500, // Duration of animation in ms if enabled
  animationEasing: undefined, // Easing of animation if enabled
  transform: function(node, pos) {
    return pos;
  }, // A function that applies a transform to the final node position
  ready: undefined, // Callback on layoutready
  stop: undefined, // Callback on layoutstop
  klay: {
    // Following descriptions taken from http://layout.rtsys.informatik.uni-kiel.de:9444/Providedlayout.html?algorithm=de.cau.cs.kieler.klay.layered
    addUnnecessaryBendpoints: false, // Adds bend points even if an edge does not change direction.
    aspectRatio: 1.6, // The aimed aspect ratio of the drawing, that is the quotient of width by height
    borderSpacing: 100, // Minimal amount of space to be left to the border
    compactComponents: false, // Tries to further compact components (disconnected sub-graphs).
    crossingMinimization: "LAYER_SWEEP", // Strategy for crossing minimization.
    /* LAYER_SWEEP The layer sweep algorithm iterates multiple times over the layers, trying to find node orderings that minimize the number of crossings. The algorithm uses randomization to increase the odds of finding a good result. To improve its results, consider increasing the Thoroughness option, which influences the number of iterations done. The Randomization seed also influences results.
        INTERACTIVE Orders the nodes of each layer by comparing their positions before the layout algorithm was started. The idea is that the relative order of nodes as it was before layout was applied is not changed. This of course requires valid positions for all nodes to have been set on the input graph before calling the layout algorithm. The interactive layer sweep algorithm uses the Interactive Reference Point option to determine which reference point of nodes are used to compare positions. */
    cycleBreaking: "GREEDY", // Strategy for cycle breaking. Cycle breaking looks for cycles in the graph and determines which edges to reverse to break the cycles. Reversed edges will end up pointing to the opposite direction of regular edges (that is, reversed edges will point left if edges usually point right).
    /* GREEDY This algorithm reverses edges greedily. The algorithm tries to avoid edges that have the Priority property set.
        INTERACTIVE The interactive algorithm tries to reverse edges that already pointed leftwards in the input graph. This requires node and port coordinates to have been set to sensible values.*/
    direction: "UP", // Overall direction of edges: horizontal (right / left) or vertical (down / up)
    /* UNDEFINED, RIGHT, LEFT, DOWN, UP */
    edgeRouting: "ORTHOGONAL", // Defines how edges are routed (POLYLINE, ORTHOGONAL, SPLINES)
    edgeSpacingFactor: 0.4, // Factor by which the object spacing is multiplied to arrive at the minimal spacing between edges.
    feedbackEdges: true, // Whether feedback edges should be highlighted by routing around the nodes.
    fixedAlignment: "NONE", // Tells the BK node placer to use a certain alignment instead of taking the optimal result.  This option should usually be left alone.
    /* NONE Chooses the smallest layout from the four possible candidates.
        LEFTUP Chooses the left-up candidate from the four possible candidates.
        RIGHTUP Chooses the right-up candidate from the four possible candidates.
        LEFTDOWN Chooses the left-down candidate from the four possible candidates.
        RIGHTDOWN Chooses the right-down candidate from the four possible candidates.
        BALANCED Creates a balanced layout from the four possible candidates. */
    inLayerSpacingFactor: 5.0, // Factor by which the usual spacing is multiplied to determine the in-layer spacing between objects.
    layoutHierarchy: false, // Whether the selected layouter should consider the full hierarchy
    linearSegmentsDeflectionDampening: 0, // Dampens the movement of nodes to keep the diagram from getting too large.
    mergeEdges: false, // Edges that have no ports are merged so they touch the connected nodes at the same points.
    mergeHierarchyCrossingEdges: false, // If hierarchical layout is active, hierarchy-crossing edges use as few hierarchical ports as possible.
    nodeLayering: "INTERACTIVE", // Strategy for node layering.
    /* NETWORK_SIMPLEX This algorithm tries to minimize the length of edges. This is the most computationally intensive algorithm. The number of iterations after which it aborts if it hasn't found a result yet can be set with the Maximal Iterations option.
        LONGEST_PATH A very simple algorithm that distributes nodes along their longest path to a sink node.
        INTERACTIVE Distributes the nodes into layers by comparing their positions before the layout algorithm was started. The idea is that the relative horizontal order of nodes as it was before layout was applied is not changed. This of course requires valid positions for all nodes to have been set on the input graph before calling the layout algorithm. The interactive node layering algorithm uses the Interactive Reference Point option to determine which reference point of nodes are used to compare positions. */
    nodePlacement: "BRANDES_KOEPF", // Strategy for Node Placement
    /* BRANDES_KOEPF Minimizes the number of edge bends at the expense of diagram size: diagrams drawn with this algorithm are usually higher than diagrams drawn with other algorithms.
        LINEAR_SEGMENTS Computes a balanced placement.
        INTERACTIVE Tries to keep the preset y coordinates of nodes from the original layout. For dummy nodes, a guess is made to infer their coordinates. Requires the other interactive phase implementations to have run as well.
        SIMPLE Minimizes the area at the expense of... well, pretty much everything else. */
    randomizationSeed: 1, // Seed used for pseudo-random number generators to control the layout algorithm; 0 means a new seed is generated
    routeSelfLoopInside: false, // Whether a self-loop is routed around or inside its node.
    separateConnectedComponents: true, // Whether each connected component should be processed separately
    spacing: 20, // Overall setting for the minimal amount of space to be left between objects
    thoroughness: 10 // How much effort should be spent to produce a nice layout..
  },
  priority: function(edge) {
    return null;
  } // Edges with a non-nil value are skipped when geedy edge cycle breaking is enabled
};

let nodes = [];
data.systems.forEach(node => {
  let nodeData = {};
  nodeData.data = {};
  nodeData.data.id = node.id;
  nodeData.data.name = node.name;
  nodeData.classes = node.type;
  nodeData.group = "nodes";
  nodeData.position = { x: getRandomInt(0, 1000), y: getRandomInt(0, 1000) };
  nodes.push(nodeData);
});

let edges = [];
data.systemlinks.forEach(edge => {
  let edgeData = {};
  edgeData.data = {};
  edgeData.data.source = edge.source;
  edgeData.data.target = edge.target;
  edgeData.data.label = edge.label;
  edgeData.data.status = edge.status;
  edgeData.classes = edge.type;
  edgeData.classes += " " + edge.status;
  edges.push(edgeData);
});

console.log(edges);

console.log(nodes);
var cy = (window.cy = cytoscape({
  container: document.getElementById("cy"),
  /*   zoom: 1,
  pan: { x: 0, y: 0 },

  // interaction options:
  minZoom: 1e-50,
  maxZoom: 1e50,  
  zoomingEnabled: true, 
  userZoomingEnabled: true,*/
  panningEnabled: false,
  selectionType:
    "single" /* 
  userPanningEnabled: true,
  boxSelectionEnabled: true,
  touchTapThreshold: 8,
  desktopTapThreshold: 4,
  autolock: false,
  autoungrabify: false,
  autounselectify: false, */,

  // rendering options:
  /* 
  headless: false,
  styleEnabled: true,
  hideEdgesOnViewport: false,
  hideLabelsOnViewport: false,
  textureOnViewport: false,
  motionBlur: false,
  motionBlurOpacity: 0.2,
  wheelSensitivity: 1,
  pixelRatio: "auto", */
  layout: layoutOptions,

  style: cytoscape
    .stylesheet()
    .selector("node")
    .css({
      shape: "rectangle", //"data(faveShape)",
      width: "230px", //mapData(weight, 40, 80, 20, 60)",
      // height: "100px", //mapData(weight, 40, 80, 20, 60)",
      content: "data(name)",
      "text-valign": "center",
      "text-outline-width": 2,
      //"text-outline-color": "data(faveColor)",
      // "background-color": "data(faveColor)",
      color: "#000",
      "font-size": 13
    })
    .selector(":selected")
    .css({
      "border-width": 3,
      "border-color": "#333"
    })
    .selector(".local")
    .css({
      "background-color": "blue",
      "background-opacity": "0.3",
      width: "150px",
      shape: "rectangle"
    })
    .selector("node.external")
    .css({
      "border-width": 3,
      "border-color": "#b1c6d6",
      //"border-style": "dashed",
      "background-color": "white",
      //  color: "#000",
      "text-outline-width": 0,
      width: "180px",
      height: "25px"
    })
    .selector("node.sub")
    .css({
      "border-width": 3,
      "border-color": "#535de8",
      //"border-style": "dashed",
      "background-color": "white",
      //   color: "#535de8",
      "text-outline-width": 0
    })
    .selector("node.cloud")
    .css({
      //"border-width": 3,
      //"border-color": "#b1c6d6",
      //"border-style": "dashed",
      "background-color": "#555ee0",
      // color: "#000",
      "text-outline-width": 0,
      height: "80px"
    })
    .selector("node.onpremise")
    .css({
      //"border-width": 3,
      //"border-color": "#b1c6d6",
      //"border-style": "dashed",
      "background-color": "#555ee0",
      //  color: "#000",
      "text-outline-width": 0
    })
    .selector("node.hidden")
    .css({
      //"border-width": 3,
      //"border-color": "#b1c6d6",
      //"border-style": "dashed",
      "background-color": "#555ee0",
      color: "#000",
      "text-outline-width": 0,
      display: "none"
    })
    .selector("edge")
    .css({
      "curve-style": "bezier",
      // "edge-distances": "node-position",
      opacity: 0.666,
      //  width: "mapData(strength, 70, 100, 2, 6)",
      "target-arrow-shape": "triangle",
      // "source-arrow-shape": "circle",
      // "line-color": "data(faveColor)",
      // "source-arrow-color": "data(faveColor)",
      //  "target-arrow-color": "data(faveColor)",
      //"text-margin-y": 10,
      content: "data(label)",
      "text-margin-y": 10,
      "text-margin-x": 10,
      "font-size": 10,
      color: "#0F0E0E",
      "edge-text-rotation": "autorotate",
      "text-events": "yes",
      "text-valign": "center",
      "text-halign": "center",
      "text-max-width": 200,
      "text-wrap": "ellipsis"
    })
    .selector("edge.dashed")
    .css({
      "line-style": "dashed",
      "target-arrow-shape": "triangle"
    })
    .selector("edge.dotted")
    .css({
      "line-style": "dotted",
      "target-arrow-shape": "triangle"
    })
    .selector(".faded")
    .css({
      //  opacity: 0.25
      // "text-opacity": 0
    })
    .selector("edge.existing")
    .css({
      "line-color": "grey",
      "source-arrow-color": "grey",
      "target-arrow-color": "grey"
    })
    .selector("edge.pointtopoint")
    .css({
      "line-color": "#F5AF0E",
      "source-arrow-color": "yellow",
      "target-arrow-color": "yellow"
    })
    .selector("edge.nearrealtime")
    .css({
      "line-color": "green",
      "source-arrow-color": "green",
      "target-arrow-color": "green",
      "line-style": "dashed"
    })
    .selector("edge.realtime")
    .css({
      "line-color": "blue",
      "source-arrow-color": "blue",
      "target-arrow-color": "blue"
    })
    .selector("edge.batch")
    .css({
      "line-color": "orange",
      "source-arrow-color": "orange",
      "target-arrow-color": "orange",
      "line-style": "dashed"
    })
    .selector("edge.active")
    .css({
      // content: "data(status)"
      color: "#50DC1F",
      opacity: 1
    })
    .selector("edge.failure")
    .css({
      // content: "data(status)"
      color: "#F72F07",
      opacity: 1
    })
    .selector("edge.warning")
    .css({
      // content: "data(status)"
      color: "#EBB519",
      opacity: 1
    }),
  elements: {
    nodes: nodes,
    edges: edges
  },
  ready: function() {
    window.cy = this;
    qtip();
  }
}));

cy.on("tap", "node", function(evt) {
  var node = evt.cyTarget;
});

cy.on("free", "node", function(evt) {
  var node = evt.cyTarget;
});

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function qtip() {
  console.log("Qtip Initialized");
  // just use the regular qtip api but on cy elements
  cy.edges().qtip({
    content: {
      title: function() {
        return this.data("label");
      },
      text: function() {
        return " Status is " + this.data("status");
      },
      button: "Close"
    },
    position: {
      my: "top center",
      at: "bottom center"
    },
    style: {
      classes: "qtip-rounded qtip-shadow",
      // width: 600,
      tip: {
        width: 16,
        height: 8
      }
    }
  });
}

function reRender() {
  console.log("render");
  let cyLayout = cy.layout(options);
  cyLayout.run();
}
