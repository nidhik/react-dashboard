var React = require('react');
var Parse = require('parse');
var ParseReact = require('parse-react');
var ParseCloudCodeMixin = require('./ParseCloudCodeMixin');


var Words = React.createClass({

    mixins: [ ParseCloudCodeMixin],
    loadData: function(props, state) {
    return {
          students: {
            name: "getStudents",
            params: {}
          },
          scores: {
            name: "getScores",
            params: {
                studentId: "WnHpzJedMu"
            }
          },
          words: {
            name: "getWords",
            params: {}
          },

      }
    },

    render(){
        if (this.data.words) {
            console.log(this.data.words)
        }
        
        return (

            <div>

            <h1>Detailed Word Proficency</h1>
            { this.data.students ? <h2> Number of students: {this.data.students.length} </h2> : <span>Loading Students...</span> }
            { this.data.words? <h2> Number of words: { this.data.words.get('order').length } </h2> : <span>Loading Words...</span> }

            </div>

            );
        
    }

});






module.exports = Words;