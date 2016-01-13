import React, {Component} from 'react';
import ReactGridLayout from 'react-grid-layout';
var { Button, ButtonGroup, Container, Dropdown, Table } = require('elemental');
var ResponsiveReactGridLayout = require('react-grid-layout').Responsive;


export default class MLayout extends Component {

  constructor(props) {
    super(props);
    this.state = {
      newCounter: 0,
      items: [0, 1, 2, 3, 4].map(function (i, key, list) {
          return { i: i, x: i * 2, y: 0, w: 2, h: 2, add: i === list.length - 1 };
        }),
    };

    // Bind callback methods to make `this` the correct context.
    this.initItems();
  }

  initItems() {
      console.log('adding', 'n' + this.state.newCounter);
      this.setState({
        // Add a new item. It must have a unique key!
        items: this.state.items.concat({
          i: 'n' + this.state.newCounter,
          x: this.state.items.length * 2 % (this.state.cols || 12),
          y: Infinity, // puts it at the bottom
          w: 2,
          h: 2
        }),
        // Increment the counter to ensure key is always unique.
        newCounter: this.state.newCounter + 1
      });
    }




  //render methods get tags from item type
  static fromItemToTags(item){
    if(!item)
      return null;

    if(item.i === 0){
      return <div key={item.i}><Button size="lg">Large Button</Button></div>;
    }
    else{
      return <div key={item.i}>353453451</div>;
    }
  }




  render() {
    var layout_grid = [];

    this.state.items.map(function (item) {
      layout_grid.push(item);
    });

    return (
        <ReactGridLayout className="layout" layout={layout_grid} isDraggable={true}
        isResizable={true} autoSize={true} cols={30} rowHeight={60}>
          {
            this.state.items.map(function (item) {
              return MLayout.fromItemToTags(item);
            })
          }
          
        </ReactGridLayout>
    );
  }
}