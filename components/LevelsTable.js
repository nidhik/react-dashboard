var React = require('react');
var Parse = require('parse');

var TrophyRow = React.createClass({
    render () {
    
        return (
            <tr style={ this.props.isCurrent ? {borderStyle: "double"} : {borderStyle: "solid"}}> 
                
                <td>
                    
                    <div className = "trophy">
                        <img src='/assets/student_trophy_2x.png' alt="trophy"/>
                        <div className = "trophyGraphic" dangerouslySetInnerHTML={this.createMarkup()}></div>
                        
                    </div>

        
                     <div style= {{ textAlign: 'center' }} > { this.props.index  + 1}. { this.props.details["trophyTitle"] }</div>
                </td>

               
              
             
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
        var trophyDetails = this.props.trophies.get("trophyDetails");

        this.props.trophies.get("order").forEach(function(trophy, index) {
           rows.push(<TrophyRow trophy = { trophy } details = { trophyDetails[index] } isCurrent = { trophy['id'] == currentTrophy } index = { index } key = { trophy.id } />);
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