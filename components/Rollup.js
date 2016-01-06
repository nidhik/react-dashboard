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
            <div className="chartBar" style={{width: this.props.progress * 10}} data-bar-label="Trophy 1"> { this.props.progress }</div>
         </div>

        );
    }

});

var FancyGraph = React.createClass({
    render() {
        return (
            <div className="graph_fancy" data-x-label="Months" data-y-label="Percent (%)">
                    <span className="bar"></span>

                    <span className="bar" style={{height: 40}} data-bar-label="Jan" data-bar-value="66%"></span>
                    <span className="bar" style={{height: 80}} data-bar-label="Jan" data-bar-value="66%"></span>
                    <span className="bar" style={{height: 150}} data-bar-label="Jan" data-bar-value="66%"></span>
                    
                </div>
            );
    }
})

var BarChart = React.createClass({
    render () {

        return (
            <div >
                <Bar name= { "Michael" } progress = { 4 }  />
                <Bar name= { "Allison" } progress = { 8 }  />
                <Bar name= { "Erin" } progress = { 15 }  />
                <Bar name= { "Nidhi" } progress = { 16 }  />
                <Bar name= { "Joanne" } progress = { 23 }  />
                <Bar name= { "Beth" } progress = { 42 }  />

                <BarLabel name = "" />
                <span className="xaxis rotate">Trophy 1</span>
                 <span className="xaxis rotate">Trophy 2</span>
                 <span className="xaxis rotate">Trophy 3</span>
                 <span className="xaxis rotate">Trophy 4</span>
                 <span className="xaxis rotate">Trophy 5</span>
                
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