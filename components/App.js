var React = require('react');
var Parse = require('parse');
var Login = require('./Login')

// Insert your app's keys here:
Parse.initialize('FFJr6PNAxs4foMv28qaqvcVNpmvWQkbAUxP8iQI9', 'TIdBCZSzADZVMml0xJ10sWqHbjmX3gtuqdQ5d5DZ');

var App = React.createClass({

    render(){

        return (

            <div>

            <Login />

            </div>

            // <CurrentLocation address={this.state.currentAddress} 
            // favorite={this.isAddressInFavorites(this.state.currentAddress)} 
            // onFavoriteToggle={this.toggleFavorite} />

            // <LocationList locations={this.state.favorites} activeLocationAddress={this.state.currentAddress} 
            // onClick={this.searchForAddress} />
            );
    }

});






module.exports = App;