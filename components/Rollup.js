var React = require('react');
var Parse = require('parse');
var Tabs = require('./Tabs');
var BarChart = require('./BarChart');
var StudentSummary = require('./StudentSummary');
var _ = require('underscore');
var ParseCloudCodeMixin = require('./ParseCloudCodeMixin');



var Overview = React.createClass({

    render() {
        return (

            <div>
              <BarChart students = { this.props.students } trophies= { this.props.trophies } sections = { this.props.sections }  studentSelected = { this.studentSelected }/>
            </div>

        );
    },

    studentSelected : function (student) {
        this.props.showStudentDetail(student);
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
            <Overview students = { this.data.students } trophies = { this.data.trophyAppOrder.trophies } sections = { this.data.trophyAppOrder.sections } showStudentDetail = { this.props.showStudentDetail } />

            <StudentSummary student = { this.data.students[0] } />

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