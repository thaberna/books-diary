import { StarIcon } from "@heroicons/react/20/solid";

export default function Item({ item, books, setBooks }) {
  const { id, title, fav } = item;

  const handleFav = (id) => {
    const bookList = [...books];
    bookList.map((element) => {
      if (element.id === id) element.fav = !element.fav;
    });

    setBooks(bookList);
  };

  return (
    <li className="flex items-center justify-between py-4 pl-4 pr-5 text-sm leading-6">
      <div className="flex w-0 space-x-2 flex-1 items-center">
        {fav && (
          <StarIcon
            className="h-5 w-5 flex-shrink-0 text-amber-300"
            aria-hidden="true"
          />
        )}
        <span className="text-white font-medium">{title}</span>
      </div>
      <div className="ml-4 flex-shrink-0">
        <a
          href="#"
          onClick={() => handleFav(id)}
          className="font-normal text-indigo-400 hover:text-indigo-500"
        >
          Favorito
        </a>
      </div>
    </li>
  );
}
