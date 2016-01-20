var React = require('react');
var Parse = require('parse');
var ParseReact = require('parse-react');
var ParseCloudCodeMixin = require('./ParseCloudCodeMixin');
var Switch = require('./Switch');
var Circle = require('./Circle');


var sortAlphabetical = function(w0, w1) { 
    var a = w0.get('chars').toLowerCase();
    var b = w1.get("chars").toLowerCase();

    if (a > b) {
        return 1;
    }

    if (a < b) {
        return -1;
    }

    return 0;
}

var WordRow = React.createClass({
    render: function() {
    
        return (
            <tr> 
                <td>
                    <div style= {{ textAlign: 'center', padding : 30 }}>
                        { this.props.word.get("chars") }
                    </div>
                </td>
                <WordScore score = { this.props.score }  />
            </tr>
        );
    }
});

var WordScore = React.createClass({
    render: function() {
        
        var status = 0;
        if (this.props.score) {
            status = this.props.score.get('averageScore') >= 0.7 ? 1 : 2
        }

        return (
            <td>
                <div style= {{ textAlign: 'center', padding : 30 }}>
                    <Circle status = { status } /> 
                </div>
            </td>
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
            <table className = "proficiencyTable">
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
        var wordOrder = this.props.words.get('order').slice();

        if (!this.state.appOrder) {
            wordOrder.sort(sortAlphabetical);
        }

        return (

            <div className="wrapper">

            <Switch toggle = { this.toggle } />
            <div className="scroll-y " style = {{position:'relative', top:30}}><WordTable words = { wordOrder } scores = { this.props.scores } /></div>

            </div>

        );
    },

    toggle () {
        this.setState({appOrder: !this.state.appOrder});
    }
});

var Words = React.createClass({

    mixins: [ ParseCloudCodeMixin],
    loadData: function(props, state) {
    return {
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

            <div className="wrapper">
            <ProficencyComponent words = { this.data.words } scores = { this.data.scores } />
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






module.exports = Words;