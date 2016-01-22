var React = require('react');

var Avatar = React.createClass({

    render () {

     
    
        return (
    
           <div className="circle center-x avatar" style= {{ position: 'relative', width: 100, height: 100, border: 'solid', borderSize: 1, borderColor: 'white' }}/>
            
        );
    }
});

module.exports = Avatar;