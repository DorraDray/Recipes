"use client";
import { useFormStatus } from "react-dom";

export default function EditRecipeButton() {
  const { pending } = useFormStatus();

  return (
    <button disabled={pending} className={pending ? "disabled" : ""}>
      {pending ? "Editing your Recipe" : "Edit Recipe"}
    </button>
  );
}
