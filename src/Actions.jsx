
const Dispatcher = require('./Dispatcher'),
      Constants = require('./Constants');

const Actions = {
    update_subject: function (subject) {
        Dispatcher.dispatch({
            actionType: Constants.UPDATE_SUBJECT,
            subject: subject
        });
    },

    update_body: function (body) {
        Dispatcher.dispatch({
            actionType: Constants.UPDATE_BODY,
            body: body
        });
    },

    copied: function () {
        Dispatcher.dispatch({
            actionType: Constants.COPIED
        });
    }
};

module.exports = Actions;
