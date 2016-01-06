var React = require('react');
var Parse = require('parse');



var BarLabel = React.createClass({
    render () {
        return (
            <div className="chartLabel"><span>{this.props.name}</span></div>
        );
    }
});

var Bar = React.createClass({
    
    render () {
        return (

         <div>
            <BarLabel name = {this.props.name} />
            <div className="chart" style={{width: this.props.progress * 10}}> { this.props.progress }</div>
         </div>

        );
    }

});

var BarChart = React.createClass({
    render () {

        return (
            <div>
                <Bar name= { "Michael" } progress = { 4 }  />
                <Bar name= { "Allison" } progress = { 8 }  />
                <Bar name= { "Erin" } progress = { 15 }  />
                <Bar name= { "Nidhi" } progress = { 16 }  />
                <Bar name= { "Joanne" } progress = { 23 }  />
                <Bar name= { "Beth" } progress = { 42 }  />
            </div>

        );
    }
});

var Rollup = React.createClass({

    render(){

        return (

            <div>
              <BarChart />
            </div>

        );
    },

 

});






module.exports = Rollup;