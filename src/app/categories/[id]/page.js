import { sql } from "@vercel/postgres";
import Link from "next/link";
export default async function CategorieRecipe({ params }) {
  const recipes =
    await sql`SELECT * FROM recipes WHERE Category_id = ${params.id}`;
  console.log(recipes);
  return (
    <div className="container mx-auto p-4">
      <h2 className="text-3xl font-bold mb-4">{params.name}</h2>

      {recipes.rows.map((recipe) => {
        return (
          <div key={recipe.id} className="mb-4">
            <Link
              href={`/recipes/${recipe.id}`}
              className="text-xl font-semibold text-blue-800 hover:underline"
            >
              {recipe.name}
            </Link>
          </div>
        );
      })}
    </div>
  );
}
