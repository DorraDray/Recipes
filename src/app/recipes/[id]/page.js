import { sql } from "@vercel/postgres";
import Link from "next/link";
export default async function SingleRecipePage({ params }) {
  const recipeResult =
    await sql`SELECT * FROM recipes WHERE recipes.id = ${params.id}`;
  const commentsResult = await sql`SELECT * FROM comments
    JOIN recipes_comments ON comments.id = recipes_comments.comment_id
    JOIN recipes ON recipes_comments.recipe_id = recipes.id
    WHERE recipes.id = ${params.id}`;

  const singleRecipe = recipeResult.rows[0];

  const recipeId = singleRecipe.id;
  return (
    <div className="container mx-auto p-4">
      <h2 className="text-3xl font-bold mb-4">{singleRecipe.name}</h2>
      <p className="mb-4">{singleRecipe.recipe}</p>
      <div className="flex space-x-4 mb-4">
        <Link
          className="text-blue-500 hover:underline"
          href={`/recipes/${params.id}/addComment`}
        >
          Comment
        </Link>
        <Link
          className="text-blue-500 hover:underline"
          href={`/recipes/${params.id}/editRecipe`}
        >
          Edit
        </Link>
        <Link
          className="text-blue-500 hover:underline"
          href={`/recipes/${params.id}/deleteRecipe`}
        >
          Delete
        </Link>
      </div>
      {commentsResult.rows.map((comment) => (
        <div key={comment.id + comment.content} className="mb-4">
          <p className="text-gray-600">{comment.content}</p>
          <Link href={`/recipes/${params.id}/${comment.id}`}>Edit</Link>
          {console.log(comment)}
        </div>
      ))}
    </div>
  );
}
