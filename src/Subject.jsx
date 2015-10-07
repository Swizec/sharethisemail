
const React = require('react'),
      Actions = require('./Actions');

const Subject = React.createClass({
    update: function (event) {
        Actions.update_subject(event.target.value);
    },

    render: function () {
        return (
            <div className="form-group">
                <label htmlFor="subject">Subject:</label>
                <input type="text"
                       className="form-control"
                       id="subject"
                       placeholder="Paste your subject line"
                       value={this.props.value}
                       onChange={this.update} />
                <p className="help-block">This will become the prefilled subject line.</p>
            </div>
        );
    }
});

module.exports = Subject;
