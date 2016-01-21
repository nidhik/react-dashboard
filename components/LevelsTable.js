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

     handleScroll() {
        var me = ReactDOM.findDOMNode(this);
        var row = ReactDOM.findDOMNode(this.refs.currentTrophy);
        console.log("scrolled: " + me.scrollTop);
        console.log("current trophy row offset: " + row.offsetTop);
    },

    componentDidMount() {
        var me = ReactDOM.findDOMNode(this);
        var row = ReactDOM.findDOMNode(this.refs.currentTrophy);
        console.log("initial  " + me.scrollTop);
        console.log(" initial current trophy row offset: " + row.offsetTop);
        me.scrollTop = row.offsetTop;
    },

    render: function() {

        var rows = [];
        var that = this;
        var trophyDetails = this.props.trophies.get("trophyDetails");

        var currentTrophy = this.props.student.get("studentSkills").get("currentLevel");
        console.log(currentTrophy);

        var currentTrophyIndex = currentTrophy ? _.indexOf(_.pluck(this.props.trophies.get("order"), 'id'), currentTrophy["id"]) : 0;

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
            <div className="scroll-y" onScroll= {this.handleScroll}>
            <table>
                <tbody>{ rows }</tbody>
            </table>
            </div>
        );
    }
});



module.exports = LevelsTable;