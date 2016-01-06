var React = require('react');
var Parse = require('parse');
var Tabs = require('./Tabs');

var FancyGraph = React.createClass({
    render() {
        return (
            <div className="graph_fancy" data-x-label="Months" data-y-label="Percent (%)">
                    <span className="bar"></span>
                    <span className="bar" style={{height: 40}} data-bar-label="Jan" data-bar-value="66%"></span>
                    <span className="bar" style={{height: 80}} data-bar-label="Jan" data-bar-value="66%"></span>
                    <span className="bar" style={{height: 150}} data-bar-label="Jan" data-bar-value="66%"></span>
                    
                </div>
            );
    }
});

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

             <span className="xaxis_label rotate">{this.props.title}</span>

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

        return (
            <div >
                <Bar name= { "Michael" } progress = { 4 }  handleBarSelected = { this.handleBarSelected.bind(this, "Michael") }/>
                <Bar name= { "Allison" } progress = { 8 }  handleBarSelected = { this.handleBarSelected.bind(this, "Allison") }/>
                <Bar name= { "Erin" } progress = { 15 }  handleBarSelected = { this.handleBarSelected.bind(this, "Erin") }/>
                <Bar name= { "Nidhi" } progress = { 16 }  handleBarSelected = { this.handleBarSelected.bind(this, "Nidhi") }/>
                <Bar name= { "Joanne" } progress = { 23 }  handleBarSelected = { this.handleBarSelected.bind(this, "Joanne") }/>
                <Bar name= { "Beth" } progress = { 42 }  handleBarSelected = { this.handleBarSelected.bind(this, "Beth") }/>

                <XAxis />
            </div>

        );
    },

    handleBarSelected : function (student) {
        console.log(student + " selected");
        this.props.studentSelected(student);
    }
});

var Rollup = React.createClass({

    render() {
        return (

            <div>
              <BarChart studentSelected = { this.studentSelected }/>
            </div>

        );
    },

    studentSelected : function (student) {
        this.props.showStudentDetail(student);
    }
});






module.exports = Rollup;