import React from 'react';
import RecipeApp from './RecipeApp'; // Import the RecipeApp component
import './App.css'; // Import your CSS file for additional styling

const App = () => {
    return (
        <div className="App">
            <header className="bg-primary text-white text-center py-4">
                <h1>Recipe Application</h1>
                <p className="lead">Discover, Create, and Share Delicious Recipes</p>
            </header>
            <main className="container mt-4">
                <RecipeApp /> {/* Render the RecipeApp component */}
            </main>
            <footer className="bg-light text-center py-3">
                <p>&copy; {new Date().getFullYear()} Recipe App. All rights reserved.</p>
            </footer>
        </div>
    );
};

export default App;