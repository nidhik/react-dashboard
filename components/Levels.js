var React = require('react');
var Parse = require('parse');
var LevelsTable = require('./LevelsTable');


var studentData = [
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

var levelData = [
{name : "Level 0"},
{name : "Level 1"}
]
var Levels = React.createClass({

    render(){

        return (

            <div>

            <LevelsTable students = { studentData }  levels = { levelData } />
            
            </div>

            );
    }

});






module.exports = Levels;