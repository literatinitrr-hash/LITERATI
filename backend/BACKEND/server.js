import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();



const app = express();

app.use(cors());
app.use(express.json());

mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('MongoDB Connected'))
  .catch(err => console.error('MongoDB Error:', err));

app.use('/api/auth', import('./routes/auth'));
app.use('/api/users', import('./routes/user'));   
app.use('/api/admin', import('./routes/admin'));


app.get('/', (req, res) => {
  res.json({ msg: 'Competition Backend Running!' });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server: http://localhost:${PORT}`));