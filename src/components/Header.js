import Link from "next/link";

export default function Header() {
  return (
    <header className="bg-indigo-700 p-4 text-center">
      <h1 className="text-white text-4xl font-semibold mb-4">
        Welcome to my Recipes
      </h1>
      <nav>
        <Link className="text-white mx-4 hover:text-gray-300" href="/">
          Home
        </Link>
        <Link className="text-white mx-4 hover:text-gray-300" href="/about">
          About
        </Link>
        <Link className="text-white mx-4 hover:text-gray-300" href="/recipes">
          Recipes
        </Link>
        <Link
          className="text-white mx-4 hover:text-gray-300"
          href="/categories"
        >
          Categories
        </Link>
        <Link className="text-white mx-4 hover:text-gray-300" href="/contact">
          Contact
        </Link>
      </nav>
    </header>
  );
}
