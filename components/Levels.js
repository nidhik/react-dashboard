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
          trophies: {
            name: "getTrophies",
            params: {}
          }
      }
    },

    render () {
        if (this.data.students && this.data.trophies) {

            var trophyDetails = this.data.trophies.get("trophyDetails");
            var trophyOrder = this.data.trophies.get("order");

            var trophies = _.map(trophyOrder, function (t, i) {
                var merged = t;
                merged.details = trophyDetails[i];
                return merged;
            });

            return (

            <div className = "wrapper" style = {{position:'relative', top:60}}>
            <LevelsTable student = { this.data.students[0] } trophies = { trophies } />
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