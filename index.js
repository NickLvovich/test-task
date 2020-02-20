const express = require('express');
const app = express();
const mongoose = require('mongoose')

mongoose.connect('mongodb+srv://nick:alfred278@cluster0-2sfr3.gcp.mongodb.net/test?retryWrites=true&w=majority', {
    useNewUrlParser: true
}).then(() => console.log('pajilaya baza zdes')).catch(err => console.log(err))

app.get('/', (req,res) => {
    res.send('hello ')
})

app.listen(5000);