
const EventEmitter = require('events').EventEmitter;

const Dispatcher = require('./Dispatcher'),
      Constants = require('./Constants');

const CHANGE_EVENT = 'change';

var subject = "",
    body = "",
    flashCopied = false;

const Store = Object.assign(EventEmitter.prototype, {
    getSubject: function () {
        return subject;
    },

    getBody: function () {
        return body;
    },

    getState: function () {
        var vals = {
            subject: subject,
            body: body,
            flashCopied: flashCopied
        };

        flashCopied = false;
        return vals;
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

        case Constants.COPIED:
            flashCopied = true;
            Store.emitChange();
            break;

        default:
            // no op
    };
});

module.exports = Store;
