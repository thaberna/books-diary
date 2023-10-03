import Item from "./Item";

export default function List({ books, setBooks }) {
  return books.length > 0 ? (
    <ul
      role="list"
      className="divide-y divide-gray-100 rounded-md border border-gray-400"
    >
      {books.map((item) => (
        <Item key={item.id} item={item} books={books} setBooks={setBooks} />
      ))}
    </ul>
  ) : (
    <p className="text-white">No hay libros en el diario.</p>
  );
}
