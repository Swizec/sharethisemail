
const React = require('react'),
      toMarkdown = require('to-markdown');

const Link = React.createClass({

    build_link: function () {
        var subject = encodeURIComponent(this.props.subject),
            body = encodeURIComponent(
                toMarkdown(
                    this.props.body.replace(/(?:\r\n|\r|\n)/g, '<br />')
                )
            );

        return "mailto:?subject="+subject+"&body="+body;
    },

    render: function () {
        return (
            <p>
                You're done! Copy this into your email: <a href={this.build_link()} target="_blank">Email this to a friend</a>
            </p>
        );
    }
});

module.exports = Link;
