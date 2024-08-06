import express from 'express';
import DBConnection from './database/db.js';
import router from './routes/routes.js';
import cors from 'cors';
import path from 'path';

const __dirname = path.resolve();

const app=express();

app.use(express.static(path.join(__dirname, '/frontend/dist')));

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'frontend', 'dist', 'index.html'));
});




//middlewares
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.use('/',router);
DBConnection();

// app.get('/',(req,res)=>{
//     res.send('Hello world');
// });

app.listen(8000,()=>{
    console.log('Server is running on port 8000');
});

