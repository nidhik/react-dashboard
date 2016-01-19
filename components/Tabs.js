var React = require('react');
var Letters = require('./Letters');
var Levels = require('./Levels');
var Words = require('./Words');


var Tabs = React.createClass({


  getInitialState: function() {
    return {
      currentTab: 0
    };
  },

  render: function() {

    var contents= [
      <Letters />,
      <Words />,
      <Levels />
    ];

    return (
      <div>
        <div className='tabs'>
          <a
            className={this.state.currentTab === 0 ? 'selected' : ''}
            onClick={this.selectTab.bind(this, 0)}>
            Letters & Sounds
          </a>
           <a
            className={this.state.currentTab === 1 ? 'selected' : ''}
            onClick={this.selectTab.bind(this, 1)}>
            Words
          </a>
           <a
            className={this.state.currentTab === 2 ? 'selected' : ''}
            onClick={this.selectTab.bind(this, 2)}>
            Trophies
          </a>
        </div>
        
        <div className='contents'>
          {contents[this.state.currentTab]}
        </div>
      </div>
    );
  },

  selectTab: function(tab) {
    this.setState({ currentTab: tab });
  }
});



module.exports = Tabs;