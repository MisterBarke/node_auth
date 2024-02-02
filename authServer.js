const express = require('express');
const app = express();
const mongoose = require ('mongoose');
const {log} = require("mercedlogger");
const authRoutes = require ('./routes/authRoute')
const cookieParser = require('cookie-parser');
const { requireAuth } = require('./middleware/authmiddleware');

app.use(cookieParser())
app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use(express.json())
const mgdbURI = 'mongodb+srv://misterBarke:D.ACe12345678@cluster0.sgbpobr.mongodb.net/node-test?retryWrites=true&w=majority';
mongoose.connect(mgdbURI)
.then((result)=>
    {
        app.listen(3000);
        log.green('Your Server is Listening')
    })
.catch((err)=>log.red('Sorry not connected', err))

app.get('/home', requireAuth, (req, res)=>{res.render('home')})
app.get('/accueil', requireAuth, (req, res)=>{res.render('accueil')})
app.use(authRoutes)

