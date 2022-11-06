
const mongoose = require('mongoose');
const port = 8080
const app = require('./app');
mongoose.connect("mongodb+srv://Anantha:Anantha@cluster0.moslkoe.mongodb.net/?retryWrites=true&w=majority", {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

mongoose.connection.once('open', () => {
    console.log('connection established')
}).on('connectionError', (err) => {
    console.log(err);
})

app.listen(port, () => console.log(`App listening on port ${port}!`));