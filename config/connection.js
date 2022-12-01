const mongoose = require('mongoose');

mongoose.connect(process.env.MONGODB_URI || 'mongodb://127.0.01:27017/socialmedia', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

module.exports = mongoose.connection;