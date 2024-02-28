import express from 'express';
import routes from './routes';
import cors from 'cors';

const app = express();
app.use(express.json()); // Middleware for parsing JSON bodies

app.use(cors()); // Enable CORS for all requests

// Use the routes
app.use('/api', routes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
