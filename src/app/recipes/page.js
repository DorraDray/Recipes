import Link from "next/link";
import { sql } from "@vercel/postgres";
export default async function Recipespage({ searchParams }) {
  const recipes = await sql`SELECT * FROM recipes`;
  if (searchParams.sort === "desc") {
    recipes.rows.reverse();
  }
  return (
    <div className="container mx-auto p-4">
      <h2 className="text-3xl font-bold mb-4">My Recipes</h2>
      <div className="mb-4">
        <Link className="text-blue-500 hover:underline mr-4" href="/recipes">
          Sort to normal
        </Link>
        <Link
          className="text-blue-500 hover:underline"
          href="/recipes?sort=desc"
        >
          Sort desc
        </Link>
      </div>
      {recipes.rows.map((recipe) => {
        return (
          <div className="mb-4" key={recipe.id}>
            <Link
              className="text-xl font-semibold text-blue-800 hover:underline"
              href={`/recipes/${recipe.id}`}
            >
              {recipe.name}
            </Link>
          </div>
        );
      })}
    </div>
  );
}
