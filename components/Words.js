var React = require('react');
var Parse = require('parse');
var ParseReact = require('parse-react');
var ParseCloudCodeMixin = require('./ParseCloudCodeMixin');


var Words = React.createClass({

    mixins: [ ParseCloudCodeMixin, ParseReact.Mixin],
    loadData: function(props, state) {
    return {
          students: {
            name: "getStudents",
            params: {}
          },
          scores: {
            name: "getScores",
            params: {
                studentId: "WnHpzJedMu", 
                contentListId: "ddbUcAu0AD"
            }
          }
      }
    },
    observe: function() {

        return {
          contentList: (new Parse.Query('ContentList')).equalTo('objectId', 'ddbUcAu0AD')
        };
    },

    render(){
        
        return (

            <div>

            <h1>Detailed Word Proficency</h1>
            { this.data.students ? <h2> Number of students: {this.data.students.length} </h2> : <span>Loading Students...</span> }
            { this.data.contentList.length > 0 ? <h2> Number of words: { this.data.contentList[0].order.length } </h2> : <span>Loading Words...</span> }

            </div>

            );
        
    }

});






module.exports = Words;