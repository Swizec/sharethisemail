
const React = require('react');

const Store = require('./Store'),
      Subject = require('./Subject'),
      Body = require('./Body');

const ShareThisEmail = React.createClass({
    getInitialState: function () {
        return Store.getState();
    },

    componentDidMount: function () {
        Store.addChangeListener(this._onChange);
    },

    componentWillUnmount: function () {
        Store.removeChangeListener(this._onChange);
    },

    render: function () {
        return (
            <div>
                <h1>Create a Share This Email link</h1>
                <p className="lead">
                    Meant to be used in email campaigns created with Mailchimp, GetDrip, AWeber and so on.
                </p>

                <form>
                    <Subject value={this.state.subject} />
                    <Body value={this.state.body} />
                </form>
            </div>
        )
    },

    _onChange: function () {
        this.setState(Store.getState());
    }
});

module.exports = ShareThisEmail;
