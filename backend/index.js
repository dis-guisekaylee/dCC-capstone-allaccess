require('dotenv').config();
const connectDb = require('./db/db');
const express = require('express');
const cors = require('cors');
const usersRouter = require('./routes/users')
const app = express();

connectDb();

app.use(cors());
app.use(express.json());
app.use(`/api/users`, usersRouter);

const port = process.env.PORT || 3013;
app.listen(port, () => {
    console.log(`Server started on port: ${port}`);
});