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

            <div className = "wrapper" style = {{position:'relative', top:60}}>
            <LevelsTable student = { this.data.students[0] } trophies = { this.data.trophies } />
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