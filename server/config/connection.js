const mongoose = require('mongoose');


mongoose.connect(
  process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/cocktailDB',
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);
mongoose.connection.on('connected', () => {
  console.log('Mongoose connected to Atlas');
});

mongoose.connection.on('error', (err) => {
  console.log('Mongoose connection error:', err);
});

mongoose.connection.on('disconnected', () => {
  console.log('Mongoose disconnected');
});


module.exports = mongoose.connection;
