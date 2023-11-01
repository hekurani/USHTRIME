const express=require('express');
const app=express();
const productRouter=require('./productRouter')
const mongoose=require('mongoose');
const bodyParser = require('body-parser')
app.use(express.json());

app.use(bodyParser.urlencoded({ extended: true }))
const path = require('path');
const dotenv = require('dotenv');
const fs=require('fs');
const configPath = path.join(__dirname, 'config.env');
dotenv.config({ path: configPath });
fs.readFileSync(configPath, 'utf8');
mongoose.connect('mongodb://127.0.0.1:27017/MyStore',{ 
    useNewUrlParser: true, 
    useUnifiedTopology: true, 
  })
  .then(()=>{
    console.log("Connected")
  })
  .catch(err=>{
    console.log(err)
  })
  app.use('/api/v1/product',productRouter);
  app.listen(process.env.PORT,()=>{
    console.log(`This application is running on port ${process.env.PORT} `)
  })