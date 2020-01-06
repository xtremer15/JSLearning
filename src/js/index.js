// // Global app controller
import axios from "axios";
//https://forkify-api.herokuapp.com/api/search?

async function getResult(query) {
  const result = await axios(
    `https://forkify-api.herokuapp.com/api/search?q=${query}`
  );
  const recipe = result.data.recipe;
  console.log(recipe);
}

getResult("pizza");
