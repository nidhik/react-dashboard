var React = require('react');

var Circle = React.createClass({

    render () {

        var statuses = [
          "circle not-available indicator",
          "circle needs-help indicator",
          "circle good indicator"
        ]
    
        return (
    
            <div style= {{ padding : 30 }}> <div className={ statuses[this.props.status] } />
            </div>
            
        );
    }
});

module.exports = Circle;