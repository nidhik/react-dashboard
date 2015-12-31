var Parse = require('parse');

var ParseCloudCodeMixin = {
  /**
   * Lifecycle methods
   */

  componentWillMount: function() {
    this._subscriptions = {};
    this.data = this.data || {};

    this._pendingQueries = {};
    this._queryErrors = {};

    if (!this.loadData) {
      throw new Error('Components must declare a loadData() method.');
    }

    this._subscribe(this.props, this.state);
  },
  componentWillUpdate: function(nextProps, nextState) {
    // only subscribe if props or state changed
    if (nextProps !== this.props || nextState !== this.state) {
      this._resubscribe(nextProps, nextState);
    }
  },

  /**
   * Query-specific public methods
   */

  pendingQueries: function() {
    var pending = [];
    for (var fxnName in this._pendingQueries) {
      if (this._pendingQueries[fxnName]) {
        pending.push(fxnName);
      }
    }
    return pending;
  },
  queryErrors: function() {
    if (Object.keys(this._queryErrors).length < 1) {
      return null;
    }
    var errors = {};
    for (var e in this._queryErrors) {
      errors[e] = this._queryErrors[e];
    }
    return errors;
  },
  reloadData: function(callList) {
    this._subscribe(this.props, this.state, callList);
  },
  /**
   * Private subscription methods
   */

  _subscribe: function(props, state, optionalCallList) {
    var cloudFxns = this.loadData(props, state); //list of cloud code functions to call
    //loop over functions listed and get data for each one
    for(var fxn in cloudFxns) {
      //if we provided optionalCallList, ensure this query is in it; else, skip.
      if(optionalCallList && optionalCallList.indexOf(fxn) == -1) continue;
      
      if(cloudFxns[fxn]) {
        //wait on data
        this.data[fxn] = this.data[fxn] || cloudFxns[fxn].defaultValue;

        this._getData(fxn, cloudFxns[fxn]);
      }
    }
  },
  _resubscribe: function(props, state) {
    var cloudFxns = this.loadData(props, state); //list of cloud code functions to call

    //if propDeps and stateDeps are NOT provided (null), ALWAYS reload
    //if propDeps and stateDeps are are provided but are empty arrays, NEVER reload
    //if propDeps and stateDeps are are provided and are NOT empty arrays, reload IF deps changed
    for(var fxn in cloudFxns) {
      if(cloudFxns[fxn]) {
        this._getData(fxn, cloudFxns[fxn]);
      }
    }
  },
  _receiveData: function(name, value) {
    console.log("received value: " + JSON.stringify(value) + "for name: " + name);
    this.data[name] = value;
    delete this._pendingQueries[name];
    delete this._queryErrors[name];

    //TODO: optionally only re-render once no queries are left
    /*if(this.pendingQueries().length == 0)*/ this.forceUpdate(); //only update if all queries are finished
  },
  _receiveError: function(name, error) {
    console.log("received error: " + name  + " "+ error);
    this._queryErrors[name] = error;
    this.forceUpdate();
  },
  _getData: function(fxn, fxnObj) {
    console.log("trying to run cc function: " +fxnObj.name );
    var ccArgs = []; //args for cc function
    ccArgs.push(fxnObj.name);    //first arg is fxn name
    ccArgs.push(fxnObj.params);  //second arg is fxn parameters

    //third arg is fxn success and errors in options object
    ccArgs.push({
      success: this._receiveData.bind(this, fxn),
      error: this._receiveError.bind(this, fxn)
    });

    //call Parse.run with these arguments
    Parse.Cloud.run.apply(this, ccArgs);

    //waiting on this query
    this._pendingQueries[fxn] = true;
  }
};

module.exports = ParseCloudCodeMixin;