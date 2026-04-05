const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const { MongoClient } = require('mongodb');

const app = express();
const port = 3000;
const uri = 'mongodb://admin:secret@localhost:27017/';

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Routes
app.get('/', (req, res) => {
  res.render('login');
});

app.post('/login', async (req, res) => {
  try {
    const { email, password } = req.body;
    const client = new MongoClient(uri);
    
    await client.connect();
    const db = client.db('useraccount');
    const users = db.collection('users');
    
    // Check if user exists
    const existingUser = await users.findOne({ email });
    
    if (existingUser) {
      await client.close();
      return res.send(`Welcome back, ${email}!`);
    }
    
    // Create new user
    await users.insertOne({ email, password });
    await client.close();
    
    res.send(`Welcome, ${email}! Account created and saved.`);
  } catch (error) {
    console.error('DB Error:', error);
    res.status(500).send('Server error. Check MongoDB connection.');
  }
});

// Start server
app.listen(port, () => {
  console.log(`🚀 Server running at http://localhost:${port}`);
  console.log('🐳 MongoDB: docker compose up -d');
  console.log('📊 Mongo Express: http://localhost:8081');
});

