import React, {Component} from 'react';
import ReactGridLayout from 'react-grid-layout';
var ResponsiveReactGridLayout = require('react-grid-layout').Responsive;
import Avatar from 'material-ui/lib/avatar';
import List from 'material-ui/lib/lists/list';
import ListItem from 'material-ui/lib/lists/list-item';
import FlatButton from 'material-ui/lib/flat-button';
import FontIcon from 'material-ui/lib/font-icon';
import RaisedButton from 'material-ui/lib/raised-button';
import FloatingActionButton from 'material-ui/lib/floating-action-button';

export default class MLayout extends Component {

    render() {
      var layout_grid = [{x: 1, y: 1, w: 2, h: 2, i:1},{x: 1, y: 1, w: 3, h: 2, i:2},{x: 1, y: 1, w: 2, h: 3, i:3},{x: 1, y: 1, w: 3, h: 3, i:4}];
      return (
          <ReactGridLayout className="layout" layout={layout_grid} isDraggable={true}
          isResizable={true} autoSize={true} cols={30} rowHeight={60}>
            <div key={1}>353453451</div>
            <div key={2}>2sdfsdfsd</div>
            <div key={3}>3</div>
            <div key={4}>
            <RaisedButton label="Secondary" secondary={true} />
            </div>
          </ReactGridLayout>
      );
    }
}