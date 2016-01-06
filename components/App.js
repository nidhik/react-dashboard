var React = require('react');
var Parse = require('parse');
var Rollup = require('./Rollup');
var Tabs = require('./Tabs');


// Insert your app's keys here:
Parse.initialize('e8iYEssqLGYjSWWf0tInczX7nMuHQInzD1Evw3w5', 'Xiz5Fh3XpwR2sPutkvqKCwwF3V7wKKQyKQk7lXC3');


var App = React.createClass({


  getInitialState: function() {
    return {
      currentTab: 0
    };
  },

  render: function() {

    var contents= [
      <Rollup />,
     
    ];

    return (
      <div>
        <div className='menu'>
          <a
            className={this.state.currentTab === 0 ? 'selected' : ''}
            onClick={this.selectTab.bind(this, 0)}>
            Back to Overview 
          </a>
        </div>
        
        <div className='mainPanel'>
          {contents[this.state.currentTab]}
          <Tabs />
        </div>
      </div>
    );
  },

  selectTab: function(tab) {
    this.setState({ currentTab: tab });
  }
});






module.exports = App;