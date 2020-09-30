const mongoose = require('mongoose');
var url = process.env.MONGODB_URI||'mongodb://127.0.0.1:27017/Tinder';


mongoose.connect(url, {
    useNewUrlParser:true,
    useCreateIndex: true,
    autoIndex: false,
    useUnifiedTopology: true 
})
.then(() => console.log('MongoDB Connected'))
.catch(err => console.log(err))
