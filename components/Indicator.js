var React = require('react');
var Circle = require('./Circle');

var Indicator = React.createClass({

    render () {

        var text = ["n/a", "NEEDS HELP", "GOOD"]
    
        return (
            <div>
            <div style= {{ float:'left'}}><Circle status = {this.props.status} /> </div>
            <div style = {{marginLeft: 60, height: 30}} ><div style= {{ textAlign: 'center', marginTop: 15}}>{text[this.props.status]}</div> </div>

           
            </div>
        );
    }
});

module.exports = Indicator;
