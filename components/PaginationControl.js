var React = require('react');
var Parse = require('parse');


var PaginationControl = React.createClass({

    render(){

        var text = this.props.hasNext ? 'NEXT >' : '< BACK'
        var handler = this.props.hasNext ? this.props.handleNextPage : this.props.handlePreviousPage
        return (

            <div>

            <span onClick={ handler }> { text } </span>
            
            </div>

            );
    }
});






module.exports = PaginationControl;