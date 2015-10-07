
const React = require('react'),
      Actions = require('./Actions');

const Body = React.createClass({
    update: function (event) {
        Actions.update_body(event.target.value);
    },

    render: function () {
        return (
            <textarea placeholder="Paste your email body here"
                      value={this.props.value}
                      onChange={this.update} />
        );
    }
});

module.exports = Body;
