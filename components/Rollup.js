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

                <div>
               
                 <div><div className="chartLabel"><span>Michael</span></div><div className="chart" style={{width: 40}}>4</div></div>
                 <div><span className="chartLabel">Allison</span><div className="chart" style={{width: 80}}>8</div></div>
                 <div><span className="chartLabel">Erin</span><div className="chart" style={{width: 150}}>15</div></div>
                 <div><span className="chartLabel">Nidhi</span><div className="chart" style={{width: 160}}>16</div></div>
                 <div><span className="chartLabel">Joanne</span><div className="chart" style={{width: 230}}>23</div></div>
                 <div><span className="chartLabel">Beth</span><div className="chart" style={{width: 420}}>42</div></div>

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