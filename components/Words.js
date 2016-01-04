var React = require('react');
var Parse = require('parse');
var ParseReact = require('parse-react');
var ParseCloudCodeMixin = require('./ParseCloudCodeMixin');


var WordRow = React.createClass({
    render: function() {
    
        return (
            <tr> 
                <td>{ this.props.word.get("chars") }</td>
                <WordScore score = { this.props.score }  />
            </tr>
        );
    }
});

var WordScore = React.createClass({
    render: function() {
    
        return (
            <td>{ this.props.score ? this.props.score.get('averageScore') : "n/a" }</td>
        );
    }
});

var WordTable = React.createClass({
    render: function() {

        var rows = [];
        var that = this;
        this.props.words.forEach(function(word) {
           rows.push(<WordRow word = { word } score = { that.props.scores[ word.id ] } key = { word.id } />);
        });


        return (
            <div>
            <table>
                <tbody>{ rows }</tbody>
            </table>
            </div>
        );
    }
});


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

    render () {
        if (this.data.words && this.data.scores) {

            return (

            <div>

            <h1>Detailed Word Proficency</h1>
            <h2> Number of students: { this.data.students.length } </h2>
            <h2> Number of words: { this.data.words.get('order').length } </h2> 

            <WordTable words = { this.data.words.get('order') } scores = { this.data.scores } />
            

            </div>

            );
        }
        
        return (

            <div>
            <h1>Detailed Word Proficency</h1>
            <span>Loading Students...</span> 
            <span>Loading Words...</span> 
            </div>

            );
        
    }

});






module.exports = Words;