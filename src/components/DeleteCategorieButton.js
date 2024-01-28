"use client";
import { useFormStatus } from "react-dom";
import { motion } from "framer-motion";

export default function DeleteCategorieButton() {
  const { pending } = useFormStatus();
  const buttonVariants = {
    initial: { opacity: 1, scale: 1 },
    animate: { opacity: 1, scale: 1.05 },
    disabled: { opacity: 0.5, scale: 1 },
  };
  return (
    <motion.button disabled={pending} className={pending ? "disabled" : ""}>
      {pending ? "Deleting your Categorie" : "Confirm Delete Categorie"}
    </motion.button>
  );
}
