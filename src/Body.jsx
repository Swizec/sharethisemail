
const React = require('react'),
      Actions = require('./Actions');

const Body = React.createClass({
    update: function (event) {
        Actions.update_body(event.target.value);
    },

    render: function () {
        return (
            <div className="form-group">
                <label htmlFor="body">Email Body:</label>
                <textarea id="body"
                          style={{height: "300px"}}
                          className="form-control"
                          placeholder="Paste your email body here. HTML is fine, we'll convert it to a text-only format."
                          value={this.props.value}
                          onChange={this.update} />
                <p className="help-block">This will become the prefilled body.</p>
            </div>
        );
    }
});

module.exports = Body;
