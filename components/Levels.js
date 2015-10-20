var React = require('react');
var Parse = require('parse');
var LevelsTable = require('./LevelsTable');
var PaginationControl = require ('./PaginationControl');

var studentData0 = [
{
    name: "Allison Wonderland", 
    levels : [{name : "Level 0", completed : true}, {name : "Level 1", completed : false}]
},
{
    name: "Bessie Ames", 
    levels : [{name : "Level 0", completed : true}, {name : "Level 1", completed : true}]
},
{
    name: "Mike Finn", 
    levels : [{name : "Level 0", completed : false}, {name : "Level 1", completed : false}]
}
];

var studentData1 = [
{
    name: "Nidhi Kulkarni", 
    levels : [{name : "Level 0", completed : true}, {name : "Level 1", completed : true}]
},
{
    name: "Erin Parker", 
    levels : [{name : "Level 0", completed : false}, {name : "Level 1", completed : true}]
},
{
    name: "Kanitha Sok", 
    levels : [{name : "Level 0", completed : true}, {name : "Level 1", completed : false}]
}
];

var data = [studentData0, studentData1];

var Levels = React.createClass({

    getInitialState: function() {
        return {
          currentPage: 0,
          hasNext: true
        };
    },

    render(){

        return (

            <div>

            <LevelsTable students = {data[this.state.currentPage]} />
            <PaginationControl handleNextPage = { this.getNextPage } handlePreviousPage = { this.getPreviousPage } hasNext = {this.state.hasNext}/>
            
            </div>

            );
    },
    getNextPage() {
        var nextPage = this.state.currentPage + 1;
        if (nextPage >= data.length - 1) {
            this.setState({ hasNext:  false, currentPage: data.length -1 });
            return;
        }
        this.setState({ hasNext:  true, currentPage:  nextPage});

    },
    getPreviousPage() {
        var page = this.state.currentPage - 1;
         if (page <= 0) {
            this.setState({ hasNext:  true, currentPage: 0});
            return;
        }
        this.setState({ hasNext:  true, currentPage:  page});
    }

});






module.exports = Levels;