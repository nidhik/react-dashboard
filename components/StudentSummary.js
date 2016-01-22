var React = require('react');
var Parse = require('parse');
var _ = require('underscore');
var ParseCloudCodeMixin = require('./ParseCloudCodeMixin');



var LetterWordSummary = React.createClass({

    render() {

        return (

            <div>
              <span>{'Vowels: ' + this.props.counts['Vowels'] + ' '}</span>
              <span>{'Consonants: ' + this.props.counts['Consonants'] + ' '}</span>
              <span>{'Irreg: ' + this.props.counts['Irreg'] + ' '}</span>
              <span>{'CV: ' + this.props.counts['CV'] + ' '}</span>
              <span>{'CVC: ' + this.props.counts['CVC'] + ' '}</span>
              <span>{'CVCC: ' + this.props.counts['CVCC'] + ' '}</span>
            </div>

        );
    }
});



var StudentSummary = React.createClass({

    mixins: [ ParseCloudCodeMixin],
    loadData: function(props, state) {
    return {
          counts: {
            name: "getScoreCount",
            params: {studentId: this.props.student.id}
          }
      }
    },

    render () {
        if (this.data.counts) {

            return (

            <div className="wrapper">
                <LetterWordSummary counts = { this.data.counts } />
            </div>

            );
        }
        
        return (

            <div>
            <span>Loading ...</span> 
            </div>

            );
        
    }
});




module.exports = StudentSummary;