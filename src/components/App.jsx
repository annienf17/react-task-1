import "./App.css";
import { Product } from "./Product";
import { Mailbox } from "./Mailbox";
import { BookList } from "./BookList";
import { Card } from "./Card";

const favouriteBooks = [
  { id: "id-1", name: "JS for beginners" },
  { id: "id-2", name: "React basics" },
  { id: "id-3", name: "React Router overview" },
];

export default function App() {
  return (
    <>
      <h1>Best selling</h1>
      <Product
        name="Tacos With Lime"
        imgUrl="https://images.pexels.com/photos/461198/pexels-photo-461198.jpeg?dpr=2&h=480&w=640"
        price={10.99}
      />
      <Product
        name="Fries and Burger"
        imgUrl="https://images.pexels.com/photos/70497/pexels-photo-70497.jpeg?dpr=2&h=480&w=640"
        price={14.29}
      />
      <h2>Check messages </h2>
      <Mailbox
        username="Paul"
        messages={["Hello", "How are you?", "Where are you?"]}
      />
      <h2>Best books</h2>
      <BookList books={favouriteBooks} />
      <Card>
        <h2>Card title</h2>
        <p>Text between opening and closing tag</p>
      </Card>
    </>
  );
}
