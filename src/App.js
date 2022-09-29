import './App.css';
import Title from "./components/Title.js";
import Nav from "./components/Nav.js";
import Search from "./components/Search.js";
import Recipes from "./components/Recipes.js"
import Form from "./components/Form.js";

function App() {
  return (
    <body>
        <header>
          <div className = "Title">
            <Title />
          </div>

          <div className = "navbar">
            <Nav />
          </div>

          <div className = "searchBar">
            <Search />
          </div>
        </header>
        
        <main>
          <div className="recipeDisplay">
            <Recipes />
          </div>
          <div className="recipeForm">
            <Form />
          </div>
        </main>
    </body>
    
  );
}

export default App;
