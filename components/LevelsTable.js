var React = require('react');
var Parse = require('parse');

var TrophyRow = React.createClass({
    render () {
    
        return (
            <tr style={{borderStyle: "outset"}}> 
                <td dangerouslySetInnerHTML={this.createMarkup()} />

            </tr>
        );
    },

    createMarkup () {
        return {__html: this.props.trophy["customTitle"] }; 
    }
});




var LevelsTable = React.createClass({
    render: function() {

        var rows = [];
        var that = this;
        this.props.trophies.forEach(function(trophy) {
           rows.push(<TrophyRow trophy = { trophy } key = { trophy.id } />);
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