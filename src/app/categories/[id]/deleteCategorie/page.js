import { sql } from "@vercel/postgres";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import DeleteCategorieButton from "../../../../components/DeleteCategorieButton";

export default async function DeleteCategorie({ params }) {
  let categorieResult =
    await sql`SELECT * FROM categories WHERE categories.id = ${params.id}`;
  let singleCategorie = categorieResult.rows[0];

  let recipeResult =
    await sql`SELECT * FROM recipes WHERE recipes.Category_id = ${params.id}`;
  let recipes = recipeResult.rows;
  async function handleDeleteCategorie() {
    "use server";
    for (let i = 0; i < recipes.length; i++) {
      await sql`DELETE FROM recipes_comments WHERE recipes_comments.Recipe_id = ${recipes[i].id}`;
    }
    // {recepeResult.rows.map((recipe) => {
    //   return (
    //     await sql`DELETE FROM comments WHERE recipes_comments.Recipe_id = ${recipe.id}`)});
    // delete the recepes from table recepes with the categorie to be deleted
    await sql`DELETE FROM recipes WHERE recipes.Category_id = ${params.id}`;
    // make our sql request delete the recipe into table recipes
    await sql`DELETE FROM categories WHERE categories.id = ${params.id}`;
    // revalidate the path so the new item shows
    revalidatePath(`/categories`);
    // take me to the home pagen
    redirect(`/categories`);
  }
  return (
    <div className="container mx-auto p-4">
      <h2 className="text-3xl font-bold mb-4">
        Are you sure you want to delete {singleCategorie.name}
      </h2>
      <form action={handleDeleteCategorie}>
        <div className="mb-4">
          <DeleteCategorieButton />
        </div>
      </form>
    </div>
  );
}
