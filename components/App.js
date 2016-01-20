var React = require('react');
var Parse = require('parse');
var Rollup = require('./Rollup');
var Tabs = require('./Tabs');

// Insert your app's keys here:
Parse.initialize('e8iYEssqLGYjSWWf0tInczX7nMuHQInzD1Evw3w5', 'Xiz5Fh3XpwR2sPutkvqKCwwF3V7wKKQyKQk7lXC3');


var App = React.createClass({


  getInitialState: function() {
    return {
      showDetail: false
    };
  },

  render: function() {

    
     if (this.state.showDetail) {
        return (
          <div>
            
            <div className= "menu">
            
            <a className={ this.state.currentTab === 0 ? 'selected back' : 'back'}
            onClick={this.selectTab.bind(this, 0)}>
            Back to Overview </a>

            <a className = "logout" onClick={ this.props.logOutHandler }>Log Out</a>

            </div>

            <div className='mainPanel'><Tabs /></div>

          </div>
        );
     } 

    return (
      <div>
            <div className='menu'>
             <a className = "logout" onClick={ this.props.logOutHandler }>Log Out</a>
            </div>
            
            <div className='mainPanel'>
              <Rollup showStudentDetail = { this.showStudentDetail } />
            </div>

      </div>
    );
  },

  selectTab: function(tab) {
    this.setState({ showDetail: false });
  },

  showStudentDetail: function(student) {
    this.setState({ showDetail: true, student: student });
  }

});






module.exports = App;