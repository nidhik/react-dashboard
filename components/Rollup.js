var React = require('react');
var Parse = require('parse');

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

                <div className="chart">
                  <div style={{width: 40}}>4</div>
                  <div style={{width: 80}}>8</div>
                  <div style={{width: 150}}>15</div>
                  <div style={{width: 160}}>16</div>
                  <div style={{width: 230}}>23</div>
                  <div style={{width: 420}}>42</div>
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