var React = require('react');

var StudentHeader = React.createClass({

    render () {

     
    
        return (
    
            <div style= {{ position: "relative", zIndex: 2, top: 20}}> 
            
                <div className="circle center-x" style= {{ position: 'relative', width: 100, height: 100, border: 'solid' }}/>
                <div className="center-x" style= {{ textAlign: 'center', fontSize: 30}}><p>{ this.props.student }</p></div>
            
            </div>
            
        );
    }
});

module.exports = StudentHeader;