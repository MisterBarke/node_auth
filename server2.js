const express = require('express');
const app = express()
const mongoose = require ('mongoose');
const path = require('path');
const Blog = require('./models/blog')
const mgdbURI = 'mongodb+srv://misterBarke:D.ACe12345678@cluster0.sgbpobr.mongodb.net/node-test?retryWrites=true&w=majority';
mongoose.connect(mgdbURI)
.then((result)=>{
  app.listen(3000, (err)=>{
    if (err) {
      console.log('something went wrong', err);
    }else{
      console.log('server listening at port 3000');
    }
  })
console.log('connected to db');
})
.catch((err)=>{
  console.log('something went wrong', err);
})


app.get('/', (req, res)=>{
  res.sendFile('./public/test.html', {root: __dirname})

})
app.get('/index', (req, res)=>{
  res.sendFile('./public/index.html', {root: __dirname})

})

app.post('/blog', (req, res)=>{
  const newBlog = new Blog({
    title: 'new Blog3',
    snippet : 'About me',
    body : 'More about my career'
  })
  newBlog.save()
  .then((result)=>{
    res.send(result)
  })
  .catch((err)=>{
    console.log('sorry boy', err);
  })
})

app.get('/all-blogs', (req, res)=>{
  Blog.find()
  .then((result)=>{
    res.send(result)
  })
  .catch((err)=>{
    console.log('sorry', err);
  })
})