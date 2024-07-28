// // import express from 'express';
// // import DBConnection from './database/db.js';
// // import router from './routes/routes.js';
// // import cors from 'cors';
// // import path from 'path';
// // const __dirname = path.resolve();
// // const app=express();

// // app.use(express.static(path.join(__dirname, '../frontend/dist')));

// // app.get('*', (req, res) => {
// //   res.sendFile(path.join(__dirname, 'frontend', 'dist', 'index.html'));
// // });

// // //middlewares
// // app.use(cors());
// // app.use(express.json());
// // app.use(express.urlencoded({extended:true}));

// // app.use('/',router);
// // DBConnection();

// // app.get('/',(req,res)=>{
// //     res.send('Hello world');
// // });

// // app.listen(8000,()=>{
// //     console.log('Server is running on port 8000');
// // });


// import express from 'express';
// import DBConnection from './database/db.js';
// import router from './routes/routes.js';
// import cors from 'cors';
// import path from 'path';
// import { fileURLToPath } from 'url';

// const __filename = fileURLToPath(import.meta.url);
// const __dirname = path.dirname(__filename);

// const app = express();

// // Middlewares
// app.use(cors());
// app.use(express.json());
// app.use(express.urlencoded({ extended: true }));

// // Static files
// app.use(express.static(path.join(__dirname, '../frontend/dist')));

// app.get('*', (req, res) => {
//   res.sendFile(path.join(__dirname, '../frontend/dist', 'index.html'));
// });

// app.use('/', router);
// DBConnection();

// app.get('/', (req, res) => {
//   res.send('Hello world');
// });

// app.listen(8000, () => {
//   console.log('Server is running on port 8000');
// });
import express from 'express';
import DBConnection from './database/db.js';
import router from './routes/routes.js';
import cors from 'cors';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();

// Middlewares
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Static files
app.use(express.static(path.join(__dirname, '../frontend/dist')));

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../frontend/dist', 'index.html'));
});

app.use('/', router);
DBConnection().catch((error) => {
  console.error('Database connection failed:', error);
  process.exit(1);
});

app.get('/', (req, res) => {
  res.send('Hello world');
});

const port = process.env.PORT || 8000;

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
