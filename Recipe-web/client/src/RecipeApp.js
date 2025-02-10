import React, { useState, useEffect } from 'react';
import axios from 'axios';

const RecipeApp = () => {
    const [recipes, setRecipes] = useState([]);
    const [title, setTitle] = useState('');
    const [ingredients, setIngredients] = useState('');
    const [instructions, setInstructions] = useState('');
    const [prep_time, setPrepTime] = useState('');
    const [nutrition, setNutrition] = useState('');

    useEffect(() => {
        const fetchRecipes = async () => {
            const response = await axios.get('http://localhost:5000/api/recipes');
            setRecipes(response.data);
        };
        fetchRecipes();
    }, []);

    const addRecipe = async (e) => {
        e.preventDefault();
        const newRecipe = { title, ingredients, instructions, prep_time, nutrition };
        await axios.post('http://localhost:5000/api/recipes', newRecipe);
        setRecipes([...recipes, newRecipe]);
        setTitle('');
        setIngredients('');
        setInstructions('');
        setPrepTime('');
        setNutrition('');
    };

    return (
        <div className="recipe-app">
            <h2 className="text-center mb-4">Add a New Recipe</h2>
            <form onSubmit={addRecipe} className="mb-4">
                <div className="form-group">
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Title"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        required
                    />
                </div>
                <div className="form-group">
                    <textarea
                        className="form-control"
                        placeholder="Ingredients"
                        value={ingredients}
                        onChange={(e) => setIngredients(e.target.value)}
                        required
                    />
                </div>
                <div className="form-group">
                    <textarea
                        className="form-control"
                        placeholder="Instructions"
                        value={instructions}
                        onChange={(e) => setInstructions(e.target.value)}
                        required
                    />
                </div>
                <div className="form-group">
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Preparation Time"
                        value={prep_time}
                        onChange={(e) => setPrepTime(e.target.value)}
                        required
                    />
                </div>
                <div className="form-group">
                    <textarea
                        className="form-control"
                        placeholder="Nutritional Information"
                        value={nutrition}
                        onChange={(e) => setNutrition(e.target.value)}
                    />
                </div>
                <button type="submit" className="btn btn-primary">Add Recipe</button>
            </form>

            <h2 className="text-center mb-4">Recipe List</h2>
            <div className="row">
                {recipes.map((recipe) => (
                    <div className="col-md-4 mb-4" key={recipe._id}>
                        <div className="card">
                            <div className="card-body">
                                <h5 className="card-title">{recipe.title}</h5>
                                <p className="card-text"><strong>Ingredients:</strong> {recipe.ingredients}</p>
                                <p className="card-text"><strong>Instructions:</strong> {recipe.instructions}</p>
                                <p className="card-text"><strong>Preparation Time:</strong> {recipe.prep_time}</p>
                                <p className="card-text"><strong>Nutritional Information:</strong> {recipe.nutrition}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default RecipeApp;