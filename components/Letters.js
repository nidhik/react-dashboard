var React = require('react');
var Parse = require('parse');
var ParseReact = require('parse-react');
var ParseCloudCodeMixin = require('./ParseCloudCodeMixin');
var Switch = require('./Switch');
var Circle = require('./Circle');
var Indicator = require('./Indicator');
var _ = require("underscore");


var sortAlphabetical = function(p0, p1) { 
    var a = p0.get('chars').toLowerCase();
    var b = p1.get("chars").toLowerCase();

    if (a > b) {
        return 1;
    }

    if (a < b) {
        return -1;
    }

    return 0;
}

var PhonRow = React.createClass({
    render: function() {
    
        return (
            <tr> 
                <td>
                    <div style= {{ textAlign: 'center', padding : 30 }}>
                        { this.props.phoneme.get("chars") }
                    </div>
                </td>
                <PhonScore score = { this.props.score }  />
            </tr>
        );
    }
});


var PhonScore = React.createClass({
    render: function() {
        
        var status = 0;
        if (this.props.score) {
            status = this.props.score.get('averageScore') >= 0.7 ? 1 : 2
        }

        return (
            <td>
                <div style= {{ padding : 30 }}>
                    <Indicator status = { status } /> 
                </div>
            </td>

        );
    }
});

var PhonTable = React.createClass({
    render: function() {

        var rows = [];
        var that = this;
        this.props.phonemes.forEach(function(phoneme) {
            rows.push(<PhonRow phoneme = { phoneme } score = { that.props.scores[ phoneme.id ] } key = { phoneme.id } />);
        });


        return (
            <div>
            <table className = "proficiencyTable center-x">
                <tbody>{ rows }</tbody>
            </table>
            </div>
        );
    }
});

var ProficencyComponent = React.createClass({
    getInitialState () {
        return {appOrder: true};
    },

    render () {
        var phonAppOrder = this.props.phonemes.slice();
        var phonOrder = [];

        _.each(phonAppOrder, function(p) {
            if (p) phonOrder.push(p);
        });

        if (!this.state.appOrder) {
            phonOrder.sort(sortAlphabetical);
        }

        return (

            <div className="wrapper">

            <Switch toggle = { this.toggle } />
            <div className="scroll-y" style = {{position:'relative', top:30}}><PhonTable phonemes = { phonOrder } scores = { this.props.scores } /></div>
            </div>

        );
    },

    toggle () {
        this.setState({appOrder: !this.state.appOrder});
    }
});

var Letters = React.createClass({

    mixins: [ ParseCloudCodeMixin],
    loadData: function(props, state) {
    return {
          scores: {
            name: "getScores",
            params: {
                studentId: this.props.student.id,
                scoreType: "phonemes"
            }
          },
          phonemes: {
            name: "getPhonemes",
            params: {}
          },

      }
    },

    render () {
        if (this.data.phonemes && this.data.scores) {

            return (

            <div className="wrapper">
            <ProficencyComponent phonemes = { this.data.phonemes} scores = { this.data.scores } />
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






module.exports = Letters;