var React = require('react');
var Parse = require('parse');
var Tabs = require('./Tabs');
var _ = require('underscore');
var ParseCloudCodeMixin = require('./ParseCloudCodeMixin');


var BarLabel = React.createClass({
    render () {
        return (
            <div className="chartLabel"><span>{this.props.name}</span></div>
        );
    }
});

var Bar = React.createClass({
    
    render () {
        return (

         <div>
            <BarLabel name = {this.props.name} />
            <div className="chartBar" style={{width: this.props.progress * 10}} onClick={ this.selectBar } > { this.props.progress }</div>
         </div>

        );
    },

    selectBar () {
        this.props.handleBarSelected();
    }

});

var XAxisIncrement = React.createClass({
    render () {
            return (

             <span className="xaxis_label">{this.props.title}</span>

            );
        }
});

var XAxis = React.createClass({
    render () {
            return (
            <div className="xaxis">
            <BarLabel name = "" />
            <XAxisIncrement title = "2-letter words" />
            <XAxisIncrement title = "3-letter words" />
            <XAxisIncrement title = "Words ending in t " />
            <XAxisIncrement title = "Words starting with ..." />
            <XAxisIncrement title = "Doubled Consonants" />
            </div>
            );
        }
});
var BarChart = React.createClass({
    render () {

        var that = this;

        var trophiesById = _.groupBy(this.props.trophies, 'id');

        console.log(trophiesById);

        var bars = _.map(this.props.students, function(student, i) {
            
            var name = student.get('nickname');
            var currentLevel = student.get("studentSkills").get("currentLevel");
            
            var currentTrophy;
            if (currentLevel) {
                currentTrophy = trophiesById[currentLevel.id][0];
            } 

            var progress =  currentTrophy ? currentTrophy.trophyIndex : 0;

            console.log(name + ": " + progress);

            return <Bar name= { name } progress = { progress }  handleBarSelected = { that.handleBarSelected.bind(that, name) } key = {student.id}/>
        });
        return (
            <div >
                { bars }
                <XAxis />
            </div>

        );
    },

    handleBarSelected : function (student) {
        console.log(student + " selected");
        this.props.studentSelected(student);
    }
});

var Overview = React.createClass({

    render() {
        return (

            <div>
              <BarChart students = { this.props.students } trophies= { this.props.trophies } studentSelected = { this.studentSelected }/>
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