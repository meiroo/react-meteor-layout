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
        return (
            <ReactGridLayout className="layout" isDraggable={true}
            isResizable={true} autoSize={false}>
              <div key={1}>1</div>
              <div key={2}>2</div>
              <div key={3}>3</div>
              <div key={4}>
              <RaisedButton label="Secondary" secondary={true} />
              </div>
            </ReactGridLayout>
        );
    }
}