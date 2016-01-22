var React = require('react');
var Parse = require('parse');
var LevelsTable = require('./LevelsTable');
var ParseCloudCodeMixin = require('./ParseCloudCodeMixin');
var _ = require('underscore');



var Levels = React.createClass({

    mixins: [ ParseCloudCodeMixin],
    loadData: function(props, state) {
    return {
          students: {
            name: "getStudents",
            params: {}
          },
          trophyAppOrder: {
            name: "getTrophies",
            params: {}
          }
      }
    },

    render () {
        if (this.data.students && this.data.trophyAppOrder) {

            return (

            <div className = "wrapper" style = {{position:'relative', top:60}}>
            <LevelsTable student = { this.data.students[0] } trophies = { this.data.trophyAppOrder.trophies } sections = { this.data.trophyAppOrder.sections }/>
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