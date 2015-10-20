var React = require('react');
var Parse = require('parse');

var StudentHeading = React.createClass({
    render: function() {
    
        return (
                <th>{ '|' + this.props.student.name }</th>
         
        );
    }
});

var LevelInfo = React.createClass({
    render: function() {
    
        return (
            <td>{ this.props.level.name }</td>
        );
    }
});

var LevelRow = React.createClass({
    render: function() {
    
        return (
            <tr>
                
                { this.props.levelProgress }
            </tr>
        );
    }
});

var LevelCompleted = React.createClass({
    render: function() {
    
        return (
            <td>{ this.props.level.completed ? "|X|" : "|O|" }</td>
        );
    }
})



var LevelsTable = React.createClass({
    render: function() {
        var headings = [];
        var rows = [];
        
        this.props.students.forEach(function(student) {
            headings.push(<StudentHeading student= { student } key = {student.name} />)
           
            student.levels.forEach(function(level, index) {

                var row = rows[index]
                if (!row) {
                    row = [<LevelInfo level = {level} key = {level.name}/>];
                    rows.push(row);
                }
                row.push(<LevelCompleted level = {level} key = {level.name + '_' + student.name }/>)

            });

        });

        var progress = rows.map(function(row, index) {
            return <LevelRow levelProgress = { row } key = { index } />
        });

        return (
            <div>
            <h1> Levels Progress </h1>
            <table>
                <thead>

                <tr>
                <th/>
                {headings}
                </tr>
                </thead>
                <tbody>{progress}</tbody>
            </table>
            </div>
        );
    }
});



module.exports = LevelsTable;