var React = require('react');
var Parse = require('parse');
var LevelsTable = require('./LevelsTable');
var ParseCloudCodeMixin = require('./ParseCloudCodeMixin');



var Levels = React.createClass({

    mixins: [ ParseCloudCodeMixin],
    loadData: function(props, state) {
    return {
          students: {
            name: "getStudents",
            params: {}
          },
          trophies: {
            name: "getTrophies",
            params: {}
          }
      }
    },

    render () {
        if (this.data.students && this.data.trophies) {

            return (

            <div>
            <LevelsTable student = { this.data.students[0] } trophies = { this.data.trophies.get("order") } />
            </div>

            );
        }
        
        return (

            <div>
            <span>Loading ...</span> 
            </div>

            );
        
    },
    

});






module.exports = Levels;