import express from 'express';
import path from 'path';
import DBConnection from './database/db.js';
import router from './routes/routes.js';
import cors from 'cors';

const app = express();
const __dirname = path.resolve();

// Middlewares
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Serve static files from the React app
app.use(express.static(path.join(__dirname, 'frontend/build')));

// API Routes
app.use('/', router);

// Connect to the database
DBConnection();

// Serve the React app for any unknown routes
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'frontend/build', 'index.html'));
});

// Start the server
const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
