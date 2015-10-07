
const React = require('react');

const Link = React.createClass({

    build_link: function () {
        var subject = encodeURIComponent(this.props.subject),
            body = encodeURIComponent(this.props.body);

        return "mailto:?subject="+subject+"&body="+body;
    },

    render: function () {
        return (
            <p>
                Copy this link into your email: <a href={this.build_link()} target="_blank">share this email with a friend</a>
            </p>
        );
    }
});

module.exports = Link;
