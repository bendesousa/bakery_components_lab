const Recipes = () => {
    const cakes = [
        {
            cakeName: "Lemon Drizzle",
            ingredients: ["eggs", "butter", "lemon  zest", "sugar", "self-raising flour"],
            rating: 5
        },
        {
            cakeName: "Tea Loaf",
            ingredients: ["eggs", "oil", "dried fruit", "sugar", "self-raising flour", "strong tea"],
            rating: 3
        },
        {
            cakeName: "Brownie",
            ingredients: ["chocolate", "eggs", "flour", "butter", "walnuts"],
            rating: 4
        },
        {
            cakeName: "Carrot Cake",
            ingredients: ["carrots", "walnuts", "oil", "cream cheese", "flour", "sugar"],
            rating: 5
        }
    ]

    const avgRating = () =>{
        let total = 0
        for(let i = 0; i < cakes.length; i++){
            total += cakes.rating[i];
        }
        return total / cakes.length;
    }
   
    return (
        <section className="recipeDisplay">
             <div>
                <h2 className = "greeting">Welcome to The Bakery</h2>
            </div>
            <div className = "cake">
                <img src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/cake-recipes-made-from-scratch-1645566207.jpeg" alt= "A good looking cake"></img>
            </div>
            <div className="recipeList">
                {
                    cakes.map((cake, index) => {
                        return(
                            <>
                            <h3 key={index}>{cake.cakeName}</h3>
                            <ul>
                                {cake.ingredients.map((ingredient, index) => {
                                    return(
                                        <li key={index}>{ingredient}</li>
                                    )
                                })}
                            </ul>
                            </>
                            
                        )
                    })
                } 
            </div>
            <div>

            </div>
        </section>
       
    )
};

export default Recipes;