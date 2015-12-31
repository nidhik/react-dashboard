var React = require('react');
var Parse = require('parse');
var ParseCloudCodeMixin = require('./ParseCloudCodeMixin');


var Words = React.createClass({

    mixins: [ ParseCloudCodeMixin ],
    loadData: function(props, state) {
    return {
          MyCloudCodeData: {
            name: "getStudents",
            params: {
              myFirstParam: "foo",
              mySecondParam: "bar"
            }
          }
      }
    },

    render(){
        console.log(this.data.MyCloudCodeData);

        if (this.data.MyCloudCodeData) {
            return (

            <div>

            <h1>Detailed Word Proficency</h1>
            <h2>Number of students: {this.data.MyCloudCodeData.length} </h2>

            </div>

            );
        }

        return (

            <div>

            <h1>Detailed Word Proficency</h1>
            <span>Loading Students...</span>

            </div>

            );
        
    }

});






module.exports = Words;