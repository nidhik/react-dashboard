var Parse = require('parse');

var ParseCloudCodeMixin = {
  /**
   * Lifecycle methods
   */

  componentWillMount: function() {
    this._subscriptions = {};
    this.data = this.data || {};

    this._pendingCalls = {};
    this._callErrors = {};

    if (!this.loadData) {
      throw new Error('Components must declare a loadData() method.');
    }

    this._subscribeToCall(this.props, this.state);
  },
  componentWillUpdate: function(nextProps, nextState) {
    // only subscribe if props or state changed
    if (nextProps !== this.props || nextState !== this.state) {
      this._reSubscribeToCall(nextProps, nextState);
    }
  },

  /**
   * Query-specific public methods
   */

  pendingCalls: function() {
    var pending = [];
    for (var fxnName in this._pendingCalls) {
      if (this._pendingCalls[fxnName]) {
        pending.push(fxnName);
      }
    }
    return pending;
  },
  callErrors: function() {
    if (Object.keys(this._callErrors).length < 1) {
      return null;
    }
    var errors = {};
    for (var e in this._callErrors) {
      errors[e] = this._callErrors[e];
    }
    return errors;
  },
  reloadData: function(callList) {
    this._subscribeToCall(this.props, this.state, callList);
  },
  /**
   * Private subscription methods
   */

  _subscribeToCall: function(props, state, optionalCallList) {
    var cloudFxns = this.loadData(props, state); //list of cloud code functions to call
    //loop over functions listed and get data for each one
    for(var fxn in cloudFxns) {
      //if we provided optionalCallList, ensure this query is in it; else, skip.
      if(optionalCallList && optionalCallList.indexOf(fxn) == -1) continue;
      
      if(cloudFxns[fxn]) {
        //wait on data
        this.data[fxn] = this.data[fxn] || cloudFxns[fxn].defaultValue;

        this.__getDataFromCall(fxn, cloudFxns[fxn]);
      }
    }
  },
  _reSubscribeToCall: function(props, state) {
    var cloudFxns = this.loadData(props, state); //list of cloud code functions to call

    //if propDeps and stateDeps are NOT provided (null), ALWAYS reload
    //if propDeps and stateDeps are are provided but are empty arrays, NEVER reload
    //if propDeps and stateDeps are are provided and are NOT empty arrays, reload IF deps changed
    for(var fxn in cloudFxns) {
      if(cloudFxns[fxn]) {
        this.__getDataFromCall(fxn, cloudFxns[fxn]);
      }
    }
  },
  _receiveDataFromCall: function(name, value) {
    console.log("received value: " + JSON.stringify(value) + "for name: " + name);
    this.data[name] = value;
    delete this._pendingCalls[name];
    delete this._callErrors[name];

    //TODO: optionally only re-render once no queries are left
    /*if(this.pendingCalls().length == 0)*/ this.forceUpdate(); //only update if all queries are finished
  },
  _receiveErrorFromCall: function(name, error) {
    console.log("received error: " + name  + " "+ error);
    this._callErrors[name] = error;
    this.forceUpdate();
  },
  __getDataFromCall: function(fxn, fxnObj) {
    console.log("trying to run cc function: " +fxnObj.name );
    var ccArgs = []; //args for cc function
    ccArgs.push(fxnObj.name);    //first arg is fxn name
    ccArgs.push(fxnObj.params);  //second arg is fxn parameters

    //third arg is fxn success and errors in options object
    ccArgs.push({
      success: this._receiveDataFromCall.bind(this, fxn),
      error: this._receiveErrorFromCall.bind(this, fxn)
    });

    //call Parse.run with these arguments
    Parse.Cloud.run.apply(this, ccArgs);

    //waiting on this query
    this._pendingCalls[fxn] = true;
  }
};

module.exports = ParseCloudCodeMixin;