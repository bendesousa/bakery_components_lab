const Form = () => {
    return (
        <div className="recipeForm">
            <h2>Submit a Recipe</h2>
            <form>
                <label for="recipeName" > Recipe Name:</label><br></br>
                <input type="text" id="recipeName" name="recipeName"></input><br></br>
                <label for="ingredients" > Ingredients:</label><br></br>
                <input type="text" id="ingredients" name="ingredients"></input><br></br>
            </form>
            <input type="checkbox" id="vegan" name="vegan" value="Vegan"></input>
            <label for="vegan">Vegan</label><br></br>
            <input type="submit" value="Submit"></input>
        </div>
    )
};

export default Form;