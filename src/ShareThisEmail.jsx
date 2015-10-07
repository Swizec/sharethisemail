
const React = require('react');

const Store = require('./Store'),
      Subject = require('./Subject'),
      Body = require('./Body'),
      Link = require('./Link');

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
                <form className="col-md-8">
                    <Subject value={this.state.subject} />
                    <Body value={this.state.body} />
                    <Link subject={this.state.subject}
                          body={this.state.body} />
                </form>
            </div>
        )
    },

    _onChange: function () {
        this.setState(Store.getState());
    }
});

module.exports = ShareThisEmail;
