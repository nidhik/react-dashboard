var React = require('react');
var Parse = require('parse');
var ChartistGraph = require('react-chartist')

var simpleChartData = {
  labels: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
  series: [
    [5, 4, 3, 7, 5, 10, 3],
    [3, 2, 9, 5, 4, 6, 4]
  ]
}

var myOptions = {
  seriesBarDistance: 10,
  reverseData: true,
  horizontalBars: true,
  axisY: {
    offset: 70
  }
}


var Rollup = React.createClass({

    render(){

        return (

            <div>

            <div>
                <ChartistGraph data={simpleChartData} options = {myOptions} type={'Bar'} />
               
      
            </div>
            <div>Summary Letter Progress</div>
            <div>Summary Word Progress</div>

            </div>

            );
    }

});






module.exports = Rollup;