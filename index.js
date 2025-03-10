import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';

const app = express();
const PORT = 3000;

// Resolve __dirname in ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Middleware
app.use(express.json()); // Replaces bodyParser.json()
app.use(express.static('public')); // Serve frontend files

// Routes
app.get('/', (req, res) => res.sendFile(path.join(__dirname, 'public', 'index.html')));

// Server Start
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));