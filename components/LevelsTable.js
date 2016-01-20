var React = require('react');
var Parse = require('parse');
var Circle = require('./Circle');
var _ = require('underscore');
var ReactDOM = require('react-dom');

var TrophyRow = React.createClass({

   
    render () {
    
        return (
            <tr className="trophyRow" style={ this.props.isCurrent ? {borderStyle: "double"} : {borderStyle: "solid"}}> 
                
                <td>
                    
                    <div className = "trophy">
                        <img src='/assets/student_trophy_2x.png' alt="trophy"/>
                        <div className = "trophyGraphic" dangerouslySetInnerHTML={this.createMarkup()}></div>
                        
                    </div>

        
                     <div style= {{ textAlign: 'center' }} > { this.props.index  + 1}. { this.props.details["trophyTitle"] }</div>
                </td>

               
                <td> 
                    <div style= {{ textAlign: 'center', padding : 30 }} >
                    { this.props.details.trophyWords.join(", ") }
                    </div>
                </td>

                <td>
                   <Circle status = {this.props.isComplete ? 2 : 0 }/>
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

        var rows = [];
        var that = this;
        var trophyDetails = this.props.trophies.get("trophyDetails");

        var currentTrophy = this.props.student.get("studentSkills").get("currentLevel");
        var currentTrophyIndex = _.indexOf(_.pluck(this.props.trophies.get("order"), 'id'), currentTrophy["id"]);

        this.props.trophies.get("order").forEach(function(trophy, index) {
            
            rows.push(<TrophyRow 
                ref={ index == currentTrophyIndex  ? "currentTrophy" : undefined } 
                trophy = { trophy } 
                details = { trophyDetails[index] } 
                isCurrent = { index == currentTrophyIndex }  
                isComplete = { index < currentTrophyIndex } 
                index = { index } 
                key = { trophy.id } />);
        });


        return (
            <div style= {{ padding : 30 }}>
            <table>
                <tbody>{ rows }</tbody>
            </table>
            </div>
        );
    }
});



module.exports = LevelsTable;