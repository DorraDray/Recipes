import { sql } from "@vercel/postgres";
import Link from "next/link";
export default async function Categorie() {
  const categorieResult = await sql`SELECT * FROM categories`;

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-3xl font-bold mb-4">Recipe Categorie</h2>
      {categorieResult.rows.map((categorie) => {
        return (
          <div key={categorie.id} className="mb-4">
            <Link
              href={`/categories/${categorie.id}`}
              className="text-xl font-semibold text-blue-800 hover:underline"
            >
              {categorie.name}
            </Link>
            <Link
              href={`/categories/${categorie.id}/deleteCategorie`}
              className="text-red-500 hover:underline ml-4"
            >
              Delete
            </Link>
          </div>
        );
      })}
    </div>
  );
}
