import React from 'react';
import './App.css';
import BookList from './components/BookList/booklist';
import { _Book } from './models/booklist/booklist';

function App() {
  const listOfBooks:_Book[]=[
    {author:'Morgan Housel', title:'The Psychology of Money',image:'https://images-eu.ssl-images-amazon.com/images/I/71g2ednj0JL._AC_UL900_SR900,600_.jpg' },
        {author:'James Clear', title:'Atomic Habits: the life-changing million-copy',image:'https://images-eu.ssl-images-amazon.com/images/I/91bYsX41DVL._AC_UL900_SR900,600_.jpg' },
        {author:'Nikhil Kr Gupta', title:'BlackBook of English Vocabulary March 2023',image:'https://images-eu.ssl-images-amazon.com/images/I/81uL5oJmQxL._AC_UL900_SR900,600_.jpg' },
        {author:'Gaur Gopal Das', title:'Energize Your Mind: Learn the Art of Mastering',image:'https://images-eu.ssl-images-amazon.com/images/I/71B4h-dSVzL._AC_UL900_SR900,600_.jpg' },
        {author:'Robert Greene', title:'THE 48 LAWS OF POWER',image:'https://images-eu.ssl-images-amazon.com/images/I/411yaMigwbL._AC_UL900_SR900,600_.jpg' },
        {author:'Akshat Gupta', title:'The Hidden Hindu: ScienceFiction meets Indian',image:'https://images-eu.ssl-images-amazon.com/images/I/81ZI8RyyynL._AC_UL900_SR900,600_.jpg' },
  ]

  return (
    <div className="App">
      <BookList books={listOfBooks}/>
    </div>
  );
}

export default App;
