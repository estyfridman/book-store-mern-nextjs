"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import { IBook } from "@/lib/models/models";
//import { useStore } from "@/store/useUserStore";
import { useCartStore } from "@/store/useCartStore";

function BooksPage() {
  const [booksData, setBooksData] = useState<IBook[]>([]);
  //const { count, increase, decrease } = useStore((state) => state);
  const { items, addToCart, removeFromCart } = useCartStore((state) => state);

  useEffect(() => {
    const fetchBooks = async () => {
      const response = await fetch("/api");
      const data = await response.json();
      setBooksData(data);
    };

    fetchBooks();
  }, []);

  return (
    <div className="flex justify-center align-middle mt-36 ml-4">
      {/* <div>
        <button onClick={increase} className="border border-pink-500 p-1.5 font-medium rounded-md m-4">
          Increase
        </button>
        <div className="border border-pink-500 rounded-full h-12 text-center">
        {count}
        </div>
        <button onClick={decrease} className="border border-pink-500 p-1.5 font-medium rounded-md m-4">
          Decrease
        </button>
      </div> */}
      <div>
        {booksData.map((book) => (
          <div key={book.id} className="bg-sky-200 m-4 p-6">
            <h2>{book.title}</h2>
            <p>Price: {book.price}</p>
            <Image src={book.img} alt={book.title} width={50} height={70} />
            
            <button onClick={()=> addToCart(book.id, book.price, book.title)} className="border border-pink-500 p-1.5 font-medium rounded-md m-4">
              addToCart
            </button>
        
            <div className="border border-pink-500 rounded-full h-6 text-center">
        <p>quantity: {items.find((item) => item.bookId === book.id)?.quantity || 0}</p>
          </div>

          <button onClick={()=>removeFromCart(book.id)} className="border border-pink-500 p-1.5 font-medium rounded-md m-4">
        removeFromCart
        </button>   
        </div>
        ))}
      </div>
    </div>
  );
}

export default BooksPage;
