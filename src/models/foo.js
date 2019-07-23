const mongoose = require('mongoose');

const fooModel = new mongoose.Schema({
    bar: {
        type: String,
        required: 'bar is required'
    }
});

const foo = mongoose.model('foo', fooModel, 'foo\'s');

module.exports = foo;