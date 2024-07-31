const mongoose = require ('mongoose');
const config = require('config');
//config .get works on the environment variable
mongoose.connect(`mongodb+srv://laxwaniboy47:Yash@1041044747@cluster0.o1oinsr.mongodb.net/test_react_native`) //ye apne local host wale mongo se connect hota hai
.then(() => {
    console.log('MongoDB connected successfully');
  })
  .catch((err) => {
    console.log('MongoDB connection error:', err);
  });

  // to setup environment variable 
  module.exports = mongoose.connection;