
const EventEmitter = require('events').EventEmitter;

const Dispatcher = require('./Dispatcher'),
      Constants = require('./Constants');

const CHANGE_EVENT = 'change';

var subject = "",
    body = "";

const Store = Object.assign(EventEmitter.prototype, {
    getSubject: function () {
        return subject;
    },

    getBody: function () {
        return body;
    },

    getState: function () {
        return {
            subject: subject,
            body: body
        };
    },

    addChangeListener: function (callback) {
        this.on(CHANGE_EVENT, callback);
    },

    removeChangeListener: function (callback) {
        this.on(CHANGE_EVENT, callback);
    },

    emitChange: function () {
        this.emit(CHANGE_EVENT);
    }
});

Dispatcher.register(function (action) {

    switch (action.actionType) {

        case Constants.UPDATE_SUBJECT:
            subject = action.subject;
            Store.emitChange();
            break;

        case Constants.UPDATE_BODY:
            body = action.body;
            Store.emitChange();
            break;

        default:
            // no op
    };
});

module.exports = Store;
