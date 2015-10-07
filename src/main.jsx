
const React = require('react'),
      ShareThisEmail = require('./ShareThisEmail');

var rootInstance = React.render(
    <ShareThisEmail />,
    document.querySelectorAll('.the-form')[0]
);

if (module.hot) {
    require('react-hot-loader/Injection').RootInstanceProvider.injectProvider({
        getRootInstances: function () {
            // Help React Hot Loader figure out the root component instances on the page:
            return [rootInstance];
        }
    });
}
