//require the library
const mongoose = require('mongoose');

//connect to the database
mongoose.connect('mongodb://0.0.0.0:27017/UsersDB', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => { 
    console.log('connection successful');
}).catch((e) => {
    console.log("no connection");
})