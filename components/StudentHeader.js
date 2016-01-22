var React = require('react');
var Avatar = require('./Avatar');

var StudentHeader = React.createClass({

    render () {

     
    
        return (
    
            <div style= {{ position: "relative", zIndex: 2, top: 20}}> 
            
                <Avatar/>
                <div className="center-x" style= {{ textAlign: 'center', fontSize: 30}}><p>{ this.props.student }</p></div>
            
            </div>
            
        );
    }
});

module.exports = StudentHeader;