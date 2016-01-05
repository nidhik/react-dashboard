var React = require('react');
var Parse = require('parse');

var TrophyRow = React.createClass({
    render () {
    
        return (
            <tr style={ this.props.isCurrent ? {borderStyle: "double"} : {borderStyle: "solid"}}> 
                <td>{ this.props.index }. </td> <td/> <td dangerouslySetInnerHTML={this.createMarkup()} />

            </tr>
        );
    },

    createMarkup () {
        return {__html: this.props.trophy["customTitle"] }; 
    }
});




var LevelsTable = React.createClass({
    render: function() {

        var currentTrophy = this.props.student.get("studentSkills").get("currentLevel")["id"];

        var rows = [];
        var that = this;
        this.props.trophies.forEach(function(trophy, index) {
           rows.push(<TrophyRow trophy = { trophy } isCurrent = { trophy['id'] == currentTrophy } index = { index } key = { trophy.id } />);
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



module.exports = LevelsTable;