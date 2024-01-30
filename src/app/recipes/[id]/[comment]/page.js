import { sql } from "@vercel/postgres";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import EditCommentButton from "@/components/EditCommentButton";

export default async function EditComment({ params }) {
  const commentResult =
    await sql`SELECT * FROM comments WHERE comments.id = ${params.comment}`;
  console.log(params.comment);
  async function handleEditComment(formData) {
    "use server";
    // get the recipe edited from our formData object
    const content = formData.get("content");

    // make our sql request edit the comment into table comments
    await sql`UPDATE comments SET content = ${content} WHERE comments.id = ${params.comment}`;
    // revalidate the path so the new item shows
    revalidatePath(`/recipes/${params.id}`);
    // take me to the home pagen
    redirect(`/recipes/${params.id}`);
  }
  return (
    <div>
      <h2 className="title">Edit Comment</h2>
      <form action={handleEditComment}>
        <label htmlFor="comment">Edit content</label>
        <input
          name="content"
          id="content"
          placeholder="content"
          defaultValue={commentResult.rows[0].comment}
          required
        />

        <EditCommentButton />
      </form>
    </div>
  );
}
