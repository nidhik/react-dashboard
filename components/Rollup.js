var React = require('react');
var Parse = require('parse');
var ChartistGraph = require('react-chartist')

var simpleChartData = {
  labels: ['Michael', 'Allison', 'Nidhi', 'Erin', 'Elizabeth', 'Keenan', 'Sandra'],
  series: [
    [5, 4, 3, 7, 5, 10, 3]
  ]
}

var myOptions = {
  seriesBarDistance: 10,
  horizontalBars: true,
  axisX: {
    scaleMinSpace: 100
  }
}


var Rollup = React.createClass({

    render(){

        return (

            <div>
                <a onClick={this.selectDetail.bind(this, 1)}>
                    Show Details
                </a>

            <div>
                <ChartistGraph data={simpleChartData} options = {myOptions} type={'Bar'} />
            </div>
            <div>
            Summary Letter Progress
            <a onClick={this.selectDetail.bind(this, 2)}>
                    Show Details
            </a>
            </div>
            <div>
            Summary Word Progress
            <a onClick={this.selectDetail.bind(this, 3)}>
                    Show Details
                </a>
            </div>

            </div>

            );
    },

    selectDetail: function(tab) {
        this.props.handleDetailSelected(tab);
    }

});






module.exports = Rollup;