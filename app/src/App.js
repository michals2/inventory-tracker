import React, { Component } from 'react';
import { sankey as d3Sankey } from 'd3-sankey';

const data = {
  "nodes": [
    {
      "name": "All referred patients",
      "id": 0
    },
    {
      "name": "First consult outpatient clinic",
      "id": 1
    },
    {
      "name": "No OR-receipt",
      "id": 2
    },
    {
      "name": "OR-receipt",
      "id": 3
    },
    {
      "name": "No surgery",
      "id": 4
    },
    {
      "name": "Start surgery",
      "id": 5
    },
    {
      "name": "Emergency",
      "id": 6
    },
    {
      "name": "No emergency",
      "id": 7
    }
  ],
  "links": [
    {
      "source": 0,
      "target": 1,
      "value": 1,
      "label": 1
    },
    {
      "source": 1,
      "target": 2,
      "value": 0.64,
      "label": 0.64
    },    
    {
      "source": 1,
      "target": 3,
      "value": 0.36,
      "label": 0.36
    },
    {
      "source": 3,
      "target": 4,
      "value": 0.1188,
      "label": 0.33
    },
    {
      "source": 3,
      "target": 5,
      "value": 0.2412,
      "label": 0.67
    },
    {
      "source": 5,
      "target": 6,
      "value": 0.038592,
      "label": 0.16
    },
    {
      "source": 5,
      "target": 7,
      "value": 0.20260799999999998,
      "label": 0.84
    }
  ]
}

const sankey = 
  d3Sankey().
  nodeWidth(15).
  nodePadding(10).
  size([100, 100]);

const path = sankey.links();

sankey
  .nodes(data.nodes)
  .links(data.links);

console.log(path(data.links[0]))

class App extends Component {
  render() {
    return (
      <div className="App">
        hey
      </div>
    );
  }
}

export default App;
