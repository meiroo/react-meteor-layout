/* global ReactMeteorData */
import React, {Component} from 'react';
import reactMixin from 'react-mixin';
import BlazeTemplate from './BlazeTemplate';
import MLayout from './MLayout';
import PageNav from './PageNav';
import {Users, Posts} from 'collections';

import './App.css';

import 'react/addons';

import name from './data';

Meteor.call('sayHello', function(err, res) {
  console.log(res);
});

@reactMixin.decorate(ReactMeteorData)
export default class App extends Component {
  getMeteorData() {
    return {
      users: Users.find().fetch()
    };
  }

  render() {
    console.log(name);

    let userCount = Users.find().fetch().length;
    let postsCount = Posts.find().fetch().length;
    return (
      <div className="App">
        <PageNav />
        <MLayout />
      </div>
    );
  }
}
