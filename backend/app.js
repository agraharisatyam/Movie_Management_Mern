const express = require('express');
const connectDB = require('./db');
const router = require('./Router/Router');
const cors = require('cors');




const app = express();
app.use(cors());

app.use(express.json());
app.use (express.urlencoded({ extended: true }));

connectDB();
app.use('/api', router);

app.listen(5000, () => {
    console.log('Server is running on port 5000');
}
);