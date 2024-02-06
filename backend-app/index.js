import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';

dotenv.config();

const app = express();

app.use(cors({
  origin: '*'
}))

const PORT = process.env.PORT;

app.get('/api/hello', (req, res) => {
  res.json({ message: 'Hello, World!' });
});



app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
