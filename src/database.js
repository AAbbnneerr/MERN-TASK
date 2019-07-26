const mongoose = require ('mongoose');
const URI = 'mongodb://localhost/mern-task'
mongoose.connect(URI)
    .then(db => console.log('DB is conected'))
    .catch