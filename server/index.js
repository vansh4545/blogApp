import express from "express";
import dotenv from 'dotenv';

import cors from 'cors';
import bodyParser from "body-parser";
import Connection from "./database/db.js";
import Router from "./routes/route.js";

dotenv.config();
const app =express();
app.use(bodyParser.json({extended:true}))

app.use(cors());
app.use(bodyParser.json({extended:true}))
app.use(bodyParser.urlencoded({extended:true}))
app.use('/',Router);
// app.use('/user',Router)
const Port = 8000;
app.listen(Port, ()=> console.log(`Server is successfully running on pt ${Port}`));
const USERNAME = process.env.DB_USERNAME;
const PASSWORD= process.env.DB_PASSWORD;
Connection(USERNAME,PASSWORD);
// const express= require('express');
// const app=express();
// const DB='mongodb+srv://vanshgupta4545:25July2003@cluster0.pvitbtz.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0';