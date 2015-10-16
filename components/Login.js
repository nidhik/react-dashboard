/*
 *  Copyright (c) 2015, Parse, LLC. All rights reserved.
 *
 *  You are hereby granted a non-exclusive, worldwide, royalty-free license to
 *  use, copy, modify, and distribute this software in source code or binary
 *  form for use in connection with the web services and APIs provided by Parse.
 *
 *  As with any software that integrates with the Parse platform, your use of
 *  this software is subject to the Parse Terms of Service
 *  [https://www.parse.com/about/terms]. This copyright notice shall be
 *  included in all copies or substantial portions of the software.
 *
 *  THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 *  IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 *  FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 *  AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 *  LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
 *  FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS
 *  IN THE SOFTWARE.
 *
 */
var React = require('react');
var Parse = require('parse').Parse;
var ParseReact = require('parse-react');
var ReactDOM = require('react-dom');


var Login = React.createClass({
  mixins: [ParseReact.Mixin],

  getInitialState: function() {
    return {
      error: null
    };
  },

  observe: function() {
    return {
      user: ParseReact.currentUser
    };
  },

  render: function() {
    if (this.data.user) {
      return (
        <div>
          <a className='logOut' onClick={this.logOut}>Log Out</a>
 
        </div>
      );
    }
    return (
      <div>
        <h1>Teacher Dashboard</h1>
    
        <div className='loginForm' onKeyDown={this.keyDown}>
          {
            this.state.error ?
            <div className='row centered errors'>{this.state.error}</div> :
            null
          }
          <div className='row'>
            <label htmlFor='username'>Username</label>
            <input ref='username' id='username' type='text' />
          </div>
          <div className='row'>
            <label htmlFor='password'>Password</label>
            <input ref='password' id='password' type='password' />
          </div>
          <div className='row centered'>
            <a className='button' onClick={this.submit}>Log in</a>
          </div>
        </div>
      </div>
    );
  },

  submit: function() {
    var self = this;

    var username = ReactDOM.findDOMNode(this.refs.username).value;
    var password = ReactDOM.findDOMNode(this.refs.password).value;

    if (username.length && password.length) {
      
        Parse.User.logIn(username, password).then(function() {
          self.setState({
            error: null
          });
        }, function() {
          self.setState({
            error: 'Incorrect username or password'
          });
        });

    } else {
      this.setState({
        error: 'Please enter all fields'
      });
    }
  },

  logOut: function() {
    Parse.User.logOut();
  },

  keyDown: function(e) {
    if (e.keyCode === 13) {
      this.submit();
    }
  }

});

module.exports = Login;
