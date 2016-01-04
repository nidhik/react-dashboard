var React = require('react');
var Parse = require('parse');


var Switch = React.createClass({

    getInitialState() {
        return { appOrder: 1 };
    },

    render() {

        var handler = this.props.appOrder ? this.props.handleAppOrderSort : this.props.handleAlphabeticalSort;
        return (

            <div className="switch">
                <input id="cmn-toggle-4" className="cmn-toggle cmn-toggle-round-flat" type="checkbox"/>
                <label htmlFor="cmn-toggle-4"></label>
            </div>

            
            );
    }
});






module.exports = Switch;