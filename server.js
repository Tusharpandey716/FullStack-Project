// server.js
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// MongoDB connection
mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.log(err));

// Recipe Schema
const recipeSchema = new mongoose.Schema({
    title: String,
    ingredients: String,
    instructions: String,
    prep_time: String,
    nutrition: String,
});

const Recipe = mongoose.model('Recipe', recipeSchema);

// Routes
app.get('/api/recipes', async (req, res) => {
    const recipes = await Recipe.find();
    res.json(recipes);
});

app.post('/api/recipes', async (req, res) => {
    const newRecipe = new Recipe(req.body);
    await newRecipe.save();
    res.json(newRecipe);
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});