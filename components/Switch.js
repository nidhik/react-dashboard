var React = require('react');
var Parse = require('parse');


var Switch = React.createClass({

    render () {

        return (

            <div className="switch">
                <input id="cmn-toggle-4" className="cmn-toggle cmn-toggle-round-flat" type="checkbox" onClick= { this.props.toggle }/>
                <label htmlFor="cmn-toggle-4"></label>
            </div>

            
            );
    }
});






module.exports = Switch;