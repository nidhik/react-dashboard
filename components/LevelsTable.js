var React = require('react');
var Parse = require('parse');
var Circle = require('./Circle');
var _ = require('underscore');
var ReactDOM = require('react-dom');

var TrophyHeaderRow = React.createClass({

   
    render () {

        return (
            <tr className="trophyHeaderRow" style={{ borderStyle: "solid" }}> 
                
                <td>
                    
                    <div className = "trophyCategory" style= {{ textAlign: 'center' ,padding: 20}}>
                       <b>{ this.props.title }</b>
                    </div>
                </td>

               <td/>
                <td> 
                    <div style= {{ textAlign: 'center', padding: 20}} >
                    <b>{ this.props.start != this.props.end ? "Trophies " + this.props.start + " - " + this.props.end : "Trophy " + this.props.start }</b>
                    </div>

                </td>
            </tr>
        );
    }
});

var TrophyRow = React.createClass({
   
    render () {
    
        var details = this.props.trophy.details;

        return (
            <tr className="trophyRow" style={ this.props.isCurrent ? {borderStyle: "double", borderColor: 'green'} : {borderStyle: "solid"}}> 
                
                <td>
                    
                    <div className = "trophy">
                        <img src='/assets/student_trophy_2x.png' alt="trophy"/>
                        <div className = "trophyGraphic" dangerouslySetInnerHTML={this.createMarkup()}></div>
                        
                    </div>

        
                     <div style= {{ textAlign: 'center' }} > { this.props.trophy.trophyIndex }. { details.trophyTitle }</div>
                </td>

               
                <td> 
                    <div style= {{ textAlign: 'center', padding : 30 }} >
                    { details.trophyWords.join(", ")  }
                    </div>
                </td>

                <td>
                   <div style = {{padding: 30}}><Circle status = {this.props.isComplete ? 2 : 0 }/></div>
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
        // console.log("scrolled: " + me.scrollTop);
        // console.log("current trophy row offset: " + row.offsetTop);
    },

    componentDidMount() {
        var me = ReactDOM.findDOMNode(this);
        var row = ReactDOM.findDOMNode(this.refs.currentTrophy);
        console.log("initial  " + me.scrollTop);
        console.log(" initial current trophy row offset: " + row.offsetTop);
     //   me.scrollTop = row.offsetTop;
    },

    render: function() {

        var rows = [];
        var that = this;

        var currentTrophy = this.props.student.get("studentSkills").get("currentLevel");
        var currentTrophyIndex = currentTrophy ? currentTrophy.trophyIndex : 1;

        var that = this;
        this.props.sections.forEach(function(section) {
            rows.push(<TrophyHeaderRow title = { section.title } start = { section.start } end = { section.end } key = {section.title}/>);

            _.each(_.range(section.start, section.end + 1), function (trophyIndex) {

                var trophy = that.props.trophies[trophyIndex - 1];

                rows.push(<TrophyRow 
                ref={ trophy.trophyIndex == currentTrophyIndex  ? "currentTrophy" : undefined } 
                trophy = { trophy } 
                isCurrent = { trophy.trophyIndex == currentTrophyIndex }  
                isComplete = { trophy.trophyIndex < currentTrophyIndex } 
                key = { trophy.id } />);
            });
        });


        return (
            <div className="scroll-y" onScroll= {this.handleScroll}>
            <table className= "center-x">
                <tbody>{ rows }</tbody>
            </table>
            </div>
        );
    }
});



module.exports = LevelsTable;