import { useEffect, useState } from "react";
import List from "./components/List";
import Form from "./components/Form";

export default function App() {
  const [book, setBook] = useState("");
  const [books, setBooks] = useState(() => {
    return JSON.parse(localStorage.getItem("books")) || [];
  });

  useEffect(() => {
    localStorage.setItem("books", JSON.stringify(books));
  }, [books]);

  const handleSubmit = (e) => {
    e.preventDefault();

    setBooks((prev) => [
      ...prev,
      {
        id: books.length + 1,
        title: book,
        fav: false,
      },
    ]);

    setBook("");
  };

  return (
    <main className="bg-gray-900 h-screen py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h1 className="text-3xl font-bold tracking-tight text-white sm:text-6xl">
            📚 Books<span className="font-extralight">Diary</span>
          </h1>
          <h2 className="mt-2 text-xl leading-8 text-gray-300">
            Historial de libros leídos.
          </h2>
          <Form book={book} setBook={setBook} handleSubmit={handleSubmit} />
          <div className="mt-10">
            <List books={books} setBooks={setBooks} />
          </div>
        </div>
      </div>
    </main>
  );
}
