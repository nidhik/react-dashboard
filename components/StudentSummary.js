var React = require('react');
var Parse = require('parse');
var _ = require('underscore');
var ParseCloudCodeMixin = require('./ParseCloudCodeMixin');




var Summary = React.createClass({

    render() {

        return (

            <td><div style= {{ textAlign: 'center', padding : 30 }}>{this.props.count}</div></td>

        );
    }
});


var StudentColumn = React.createClass({

    render() {

         return (
                <td><div style= {{ textAlign: 'center', padding : 30}}>{ this.props.student.get('nickname') } </div></td> 
            );
    }
});
var StudentRow = React.createClass({

    render() {

         return (
                <tr>
                <StudentColumn student = {this.props.student} />
                <Summary category ='Vowels' count = {this.props.counts['Vowels']} />
                <Summary category ='Consonants' count = {this.props.counts['Consonants']} />
                <Summary category ='CV' count = {this.props.counts['CV']} />
                <Summary category ='CVC' count = {this.props.counts['CVC']} />
                <Summary category ='CVCC' count = {this.props.counts['CVCC']} />
                <Summary category ='Irreg' count = {this.props.counts['Irreg']} />
                </tr>
            );
    }
});

var LoadingRow = React.createClass({

    render() {

        return (

             <tr>
                    <StudentColumn student = {this.props.student} />
                  <td><div style= {{ textAlign: 'center', padding : 30}}>{ this.props.message } </div></td> 
                  <td><div style= {{ textAlign: 'center', padding : 30}}>{ this.props.message } </div></td> 
                  <td><div style= {{ textAlign: 'center', padding : 30}}>{ this.props.message } </div></td> 
                  <td><div style= {{ textAlign: 'center', padding : 30}}>{ this.props.message } </div></td> 
                  <td><div style= {{ textAlign: 'center', padding : 30}}>{ this.props.message } </div></td> 
                  <td><div style= {{ textAlign: 'center', padding : 30}}>{ this.props.message } </div></td> 
            </tr>

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
                <StudentRow counts = {this.data.counts} student= {this.props.student}/> 
            );
        }
        
        return (
            <LoadingRow message = { 'Loading...' } student= {this.props.student}/>
        );
        
    }
});




module.exports = StudentSummary;