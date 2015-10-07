
const React = require('react'),
      Actions = require('./Actions');

const Subject = React.createClass({
    update: function (event) {
        Actions.update_subject(event.target.value);
    },

    render: function () {
        return (
            <input type="text"
                   placeholder="Paste your subject line"
                   value={this.props.value}
                   onChange={this.update} />
        );
    }
});

module.exports = Subject;
