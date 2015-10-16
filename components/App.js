var React = require('react');
var Parse = require('parse');
var Rollup = require('./Rollup');
var Letters = require('./Letters');
var Levels = require('./Levels');
var Words = require('./Words');


// Insert your app's keys here:
Parse.initialize('FFJr6PNAxs4foMv28qaqvcVNpmvWQkbAUxP8iQI9', 'TIdBCZSzADZVMml0xJ10sWqHbjmX3gtuqdQ5d5DZ');

var contents = [
  <Rollup />,
  <Levels />,
  <Letters />,
  <Words />

];

var App = React.createClass({
  getInitialState: function() {
    return {
      currentTab: 0
    };
  },

  render: function() {
    return (
      <div>
        <div className='menu'>
          <a
            className={this.state.currentTab === 0 ? 'selected' : ''}
            onClick={this.selectTab.bind(this, 0)}>
            Overview 
          </a>
          <a
            className={this.state.currentTab === 1 ? 'selected' : ''}
            onClick={this.selectTab.bind(this, 1)}>
            Levels 
          </a>
           <a
            className={this.state.currentTab === 2 ? 'selected' : ''}
            onClick={this.selectTab.bind(this, 2)}>
            Letters
          </a>
           <a
            className={this.state.currentTab === 3 ? 'selected' : ''}
            onClick={this.selectTab.bind(this, 3)}>
            Words 
          </a>
        </div>
        
        <div className='mainPanel'>
          {contents[this.state.currentTab]}
        </div>
      </div>
    );
  },

  selectTab: function(tab) {
    this.setState({ currentTab: tab });
  }
});






module.exports = App;