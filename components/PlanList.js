var React = require('react');
var Parse = require('parse').Parse;
// ParseReact sits on top of your Parse singleton
var ParseReact = require('parse-react');
var ParseComponent = ParseReact.Component(React);


var PlanItem = React.createClass({
    render: function() {
        return (
            <tr>
                <td>{this.props.plan.title}</td>
                <td>{this.props.plan.subtitle}</td>
            </tr>
        );
    }
});


class PlanList extends ParseComponent {
  observe(props, state) {
    return {
      plans: new Parse.Query('TrainingPlan').equalTo('isActive', true)
    };
  }

  render() {

    var rows = [];
        
    this.data.plans.forEach(function(plan) {            
        rows.push(<PlanItem plan={ plan } key={plan.title} />);
    });
    return (
        
        // If a query is outstanding, this.props.queryPending will be true
        // We can use this to display a loading indicator
        <div className={this.pendingQueries().length ? 'plan_list _loading' : 'plan_list'}>
        <a onClick={this._refresh.bind(this)} className="refresh">Refresh</a>

            <table>
                <thead>
                <tr>
                    <th>Title</th>
                    <th>Subtitle</th>
                </tr>
                </thead>
                <tbody>{rows}</tbody>
            </table> 

        </div>
    );
  }

  _refresh() {
    this.refreshQueries('plans');
  }

}


// var PlanList = React.createClass({
//     render: function() {
//         var rows = [];
        
//         this.props.plans.forEach(function(plan) {            
//             rows.push(<PlanItem plan={ plan } key={plan.title} />);
//         });

//         return (
//             <table>
//                 <thead>
//                     <tr>
//                         <th>Title</th>
//                         <th>Subtitle</th>
//                     </tr>
//                 </thead>
//                 <tbody>{rows}</tbody>
//             </table>
//         );
//     }
// });

module.exports = PlanList