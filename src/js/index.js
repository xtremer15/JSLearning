// // Global app controller
import Search from "./models/Search";
/**Global State of the App
 * -Search Object
 * -Current recipe object
 * -Shopping list object
 * -Liked recipe
 */
const state = {};
const searchControl = async () => {
  //1) Get query from the view
  const query = "pizza";

  if (query) {
    //2)Create a new search object and we will add it to the state
    state.search = new Search(query);

    //3)Prepare UI for result

    //4)Search for recipes
    await state.search.getResults();

    //5)Render the result to UI
    console.log(state.search.result);
  }
};
document.querySelector(".search").addEventListener("submit", e => {
  e.preventDefault();
  searchControl();
});
