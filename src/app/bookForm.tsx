import { useState } from 'react'

export default function BookForm() {
  const [name, setName] = useState<string>('');
  const [price, setPrice] = useState<number>(0); 
  const [author, setAuthor] = useState<string>('');
  const [image, setImage] = useState<string>('');

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();   

    if (!name || !author || price <= 0) {
      alert('Please fill in all required fields and ensure a valid price.');
      return;
    }

    // Submit form data (e.g., using fetch or a form library)
    console.log('Submitting book data:', { name, price, author, image });

    setName('');
    setPrice(0);
    setAuthor('');
    setImage('');
  };

  return (
    <form onSubmit={handleSubmit}>
      
      <div className="book-form__block">
        <label className="book-form__label">Name (required)</label>
        <input
          className="book-form__input"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Book Name"
          required
        />
      </div>
      <div className="book-form__block">
        <label className="book-form__label">Price (required, number)</label>
        <input
          className="book-form__input"
          type="number"
          value={price}
          onChange={(e) => setPrice(parseFloat(e.target.value))} 
          placeholder="Book Price"
          required
        />
      </div>
      <div className="book-form__block">
        <label className="book-form__label">Author (required)</label>
        <input
          className="book-form__input"
          type="text"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
          placeholder="Book Author"
          required
        />
      </div>
      <div className="book-form__block">
        <label className="book-form__label">Image URL (optional)</label>
        <input
          className="book-form__input"
          type="file"
          value={image}
          onChange={(e) => setImage(e.target.value)}
          placeholder="Book Image URL"
        />
      </div>
      <button type="submit" className="btn">
        ADD BOOK
      </button>
    </form>
  );
}
