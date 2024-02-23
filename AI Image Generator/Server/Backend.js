const express = require('express');
const bodyParser = require('body-parser');
const imageRoutes = require('./Routes/ImagesRoutes');

const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(bodyParser.json());
app.use(cors());

app.post('/api/images', imageRoutes);

// Start server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

// // server.js
// const express = require('express');
// const mongoose = require('mongoose');
// const bodyParser = require('body-parser');
// const cors = require('cors');

// const app = express();
// const PORT = process.env.PORT || 5000;

// // Middleware
// app.use(bodyParser.json());
// app.use(cors());

// // Connect to MongoDB
// mongoose.connect('https:localhost:27017/blogDB', { useNewUrlParser: true, useUnifiedTopology: true });

// const db = mongoose.connection;
// db.once('open', () => {
//     console.log('Connected to MongoDB database');
// });

// // Routes
// const blogRoutes = require('./routes/blogRoutes');
// app.use('/blogs', blogRoutes);

// // Start server
// app.listen(PORT, () => {
//     console.log(`Server is running on port ${PORT}`);
// });