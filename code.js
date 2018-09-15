var layoutOptions = {
  name: "cola",
  randomize: false,
  refresh: 4, // fast animation
  avoidOverlap: true,
  edgeLength: 250, // should be at least two times the diagonal of a block, blocks are 100x60, therefore around 2*116
  unconstrIter: 1, // unconstrained initial layout iterations
  userConstIter: 0, // initial layout iterations with user-specified constraints - we don't have any user constraints
  allConstIter: 1, // initial layout iterations with all constraints including non-overlap
  infinite: false
};

let nodes = [];
data.systems.forEach(node => {
  let nodeData = {};
  nodeData.data = {};
  nodeData.data.id = node.id;
  nodeData.data.name = node.name;
  nodeData.classes = node.type;
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

var cy = (window.cy = cytoscape({
  container: document.getElementById("cy"),
  zoom: 1,
  pan: { x: 0, y: 0 },

  // interaction options:
  minZoom: 1e-50,
  maxZoom: 1e50,
  zoomingEnabled: true,
  userZoomingEnabled: true,
  panningEnabled: false,
  userPanningEnabled: true,
  boxSelectionEnabled: false,
  selectionType: "single",
  touchTapThreshold: 8,
  desktopTapThreshold: 4,
  autolock: false,
  autoungrabify: false,
  autounselectify: false,

  // rendering options:
  headless: false,
  styleEnabled: true,
  hideEdgesOnViewport: false,
  hideLabelsOnViewport: false,
  textureOnViewport: false,
  motionBlur: false,
  motionBlurOpacity: 0.2,
  wheelSensitivity: 1,
  pixelRatio: "auto",
  layout: {
    name: "concentric", //concentric//breadthfirst
    // padding: 10
    name: "grid",
    rows: 4
  },

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
      "text-margin-y": 20,
      "text-margin-x": 20,
      "font-size": 10,
      //"margin-top": 10,
      //  padding: 50,
      color: "#0F0E0E",
      "text-rotation": "autorotate",
      tooltipText: "data(label)"
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
  }
}));

cy.on("tap", "node", function(evt) {
  var node = evt.cyTarget;
  //console.log("tapped " + node.id());
  ///  console.log("links ", node);
});

cy.on("free", "node", function(evt) {
  var node = evt.cyTarget;
  // console.log("free " + node.id());
  // console.log("cy ", cy);
});
