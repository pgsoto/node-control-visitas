const mongoose = require('mongoose');

mongoose.connect(process.env.URLDB, {
        useNewUrlParser: true,
        useCreateIndex: true
    })
    .then(db => console.log('DB is connected'))
    .catch(err => console.log(err));