var React = require('react');

var Circle = React.createClass({

    render () {

        var statuses = [
          "circle not-available",
          "circle needs-help",
          "circle good"
        ]
    
        return (
    
            <div style= {{ padding : 30 }}> <div className={ statuses[this.props.status] } />
            </div>
            
        );
    }
});

module.exports = Circle;