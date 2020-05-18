require('dotenv').config();

const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const PORT = process.env.PORT || 3000;

//body-parse
app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

//folder public
app.use(express.static('public'));

//route api
app.use('/api/user', require('./api/route/use.route'));

//connect to Cluster MongoDB Atlas
mongoose.connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(_ => console.log('Database connected!'))
    .then(_ => start(PORT))
    .catch(({ message }) => console.log(message));

function start(PORT) {
    app.listen(PORT, () => {
        console.log(`App is listening at ${PORT}`)
    });
}