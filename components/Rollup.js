var React = require('react');
var Parse = require('parse');
var Tabs = require('./Tabs');
var BarChart = require('./BarChart');
var StudentSummary = require('./StudentSummary');
var _ = require('underscore');
var ParseCloudCodeMixin = require('./ParseCloudCodeMixin');



var LevelsOverview = React.createClass({

    render() {
        return (


            <BarChart students = { this.props.students } trophies= { this.props.trophies } sections = { this.props.sections }  studentSelected = { this.studentSelected }/>


        );
    },

    studentSelected : function (student) {
        this.props.showStudentDetail(student);
    }
});

var LetterWordOverview = React.createClass({

    render() {
        var rows = [];
        this.props.students.forEach(function(student) {
            rows.push(<StudentSummary student = { student } key = { student.id } />);
        });

        return (
            <div>
                <table className="proficiencyTable center-x">
                <thead>
                <tr>
                <th><div style= {{ textAlign: 'center', padding : 30}}>Vowels</div></th>
                <th><div style= {{ textAlign: 'center', padding : 30}}>Consonants</div></th>
                <th><div style= {{ textAlign: 'center', padding : 30}}>CV</div></th>
                <th><div style= {{ textAlign: 'center', padding : 30}}>CVC</div></th>
                <th><div style= {{ textAlign: 'center', padding : 30}}>CVCC</div></th>
                <th><div style= {{ textAlign: 'center', padding : 30}}>Irreg</div></th>
                </tr>
                </thead>

                <tbody>{ rows }</tbody>
                </table>
            </div>
        );

    }
});



var Rollup = React.createClass({

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

            <div className="wrapper">
            <LevelsOverview students = { this.data.students } trophies = { this.data.trophyAppOrder.trophies } sections = { this.data.trophyAppOrder.sections } showStudentDetail = { this.props.showStudentDetail } />
            <LetterWordOverview students = { this.data.students }/>
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







module.exports = Rollup;