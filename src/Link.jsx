
const React = require('react'),
      toMarkdown = require('to-markdown'),
      Actions = require('./Actions');


function copyToClipboard(text) {
    var copyElement = document.createElement('input');

    copyElement.setAttribute('type', 'text');
    copyElement.setAttribute('value', text);

    copyElement = document.body.appendChild(copyElement);
    copyElement.select();

    try {
	document.execCommand('copy');
    } catch (e) {
	copyElement.remove();
	console.log("document.execCommand('copy'); is not supported");
	prompt('Copy the text below. (ctrl c, enter)', text);
    } finally {
	if (typeof e == 'undefined') {
	    copyElement.remove();
            return true;
	}
    }
}

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

    copy: function () {
        var text = this.build_link();

        if (copyToClipboard(text)) {
            Actions.copied();
        }
    },

    componentDidUpdate: function () {
        if (this.props.flashCopied) {
            $(React.findDOMNode(this.refs.copied)).fadeOut(1000);
        }
    },

    render: function () {
        return (
            <p>
                You're done! This is the link: <a href={this.build_link()} target="_blank">Share with a friend</a>
                <br />
                <a className="btn btn-success"
                   ref="copyButton"
                   onClick={this.copy}>
                    Copy to Clipboard
                </a>
            {(() => {
                if (this.props.flashCopied) {
                    return (<span ref="copied">&nbsp;Copied to clipboard!</span>)
                }
            })()}
            </p>
        );
    }
});

module.exports = Link;
