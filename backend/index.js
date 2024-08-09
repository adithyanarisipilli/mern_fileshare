import express from 'express';
import DBConnection from './database/db.js';
import router from './routes/routes.js';
import cors from 'cors';
import path from 'path';

const __dirname = path.resolve();
const app = express();

//middlewares
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/', router);
DBConnection();

app.get('/', (req, res) => {
    res.send('Hello world');
});

// Use the environment variable PORT or default to 8000 if not available
const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
