import { sql } from "@vercel/postgres";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import DeleteRecipeButton from "../../../../components/DeleteRecipeButton";

export default async function DeleteRecipe({ params }) {
  let recipeResult =
    await sql`SELECT * FROM recipes WHERE recipes.id = ${params.id}`;
  let singleRecipe = recipeResult.rows[0];

  async function handleDeleteRecipe() {
    "use server";
    //delete the comments for this recepe
    await sql`DELETE FROM recipes_comments WHERE recipes_comments.Recipe_id = ${params.id}`;

    // make our sql request delete the recipe into table recipes
    await sql`DELETE FROM recipes WHERE recipes.id = ${params.id}`;
    // revalidate the path so the new item shows
    revalidatePath(`/recipes`);
    // take me to the home pagen
    redirect(`/recipes`);
  }
  return (
    <div className="container mx-auto p-4">
      <h2 className="text-3xl font-bold mb-4">
        Are you sure you want to delete {singleRecipe.name} Recipe
      </h2>
      <form action={handleDeleteRecipe}>
        <div className="mb-4">
          <DeleteRecipeButton />
        </div>
      </form>
    </div>
  );
}
