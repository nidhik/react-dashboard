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
                merged.trophyIndex = i + 1;
                return merged;
            });

            var sections = [];
            _.each(trophies, function (t) {

                var section = _.last(sections);
                
                if(!section || t.details.categoryTitle !== section.title) {
                    // new section
                    newSection = {};
                    newSection.title = t.details.categoryTitle;
                    newSection.start = t.trophyIndex;
                    newSection.end = t.trophyIndex;
                    sections.push(newSection);
                   

                } else {
                     // update section
                    section.end = t.trophyIndex;
                }

            });

            return (

            <div className = "wrapper" style = {{position:'relative', top:60}}>
            <LevelsTable student = { this.data.students[0] } trophies = { trophies } sections = { sections }/>
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