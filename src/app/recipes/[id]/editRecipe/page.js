import { sql } from "@vercel/postgres";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import EditRecipeButton from "../../../../components/EditRecipeButton";
// import "./addcat.css";
export default async function EditRecipe({ params }) {
  const categoriesResult = await sql`SELECT * FROM categories`;
  //get the recipe to delete to fill the form
  let recipeResult =
    await sql`SELECT * FROM recipes WHERE recipes.id = ${params.id}`;
  let singleRecipe = recipeResult.rows[0];
  console.log(recipeResult.rows[0]);
  async function handleEditRecipe(formData) {
    "use server";
    // get the recipe edited from our formData object
    const name = formData.get("name");
    const category_id = formData.get("category_id");
    const recipe = formData.get("recipe");
    const like_count = formData.get("like_count");
    //get the list of categories
    // const categories = categoriesResult.rows[0];
    // make our sql request edit the recipe into table recipes
    await sql`UPDATE recipes SET name = ${name}, recipe = ${recipe}, category_id = ${category_id} WHERE recipes.id = ${params.id}`;
    // revalidate the path so the new item shows
    revalidatePath(`/recipes`);
    // take me to the home pagen
    redirect(`/recipes`);
  }
  return (
    <div className="container mx-auto p-4">
      <h2 className="text-3xl font-bold mb-4">Edit Recipe</h2>
      <form action={handleEditRecipe} className="max-w-md">
        <div className="mb-4">
          <label
            htmlFor="recipe"
            className="block text-sm font-medium text-gray-700"
          >
            Edit Name
          </label>
          <input
            name="name"
            id="name"
            placeholder="name"
            defaultValue={singleRecipe.name}
            required
            className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-300"
          />
        </div>

        <div className="mb-4">
          <label
            htmlFor="recipe"
            className="block text-sm font-medium text-gray-700"
          >
            Edit Recipe
          </label>

          <input
            name="recipe"
            id="recipee"
            placeholder="recipe"
            defaultValue={singleRecipe.recipe}
            required
            className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-300"
          />
        </div>

        <div className="mb-4">
          <label
            htmlFor="Select a category:"
            className="block text-sm font-medium text-gray-700"
          >
            Select a category:
          </label>
          <select
            name="category_id"
            defaultValue={singleRecipe.category_id}
            required
            id="categorySelector"
            className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-300"
          >
            {categoriesResult.rows.map((category) => (
              <option key={category.id} value={category.id}>
                {category.name}
              </option>
            ))}
          </select>
        </div>
        <EditRecipeButton />
      </form>
    </div>
  );
}
