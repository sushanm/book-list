
import { _Book } from '../../models/booklist/booklist'
import './booklist.css'
import Book from './Books/books'

const BookList = ({ books }: { books: _Book[] }) => {
    return (
        <>
            <div className="grid grid-cols-4 gap-4 py-5 px-3">
                {books.map((book, index) => (
                    <Book key={index} book={book} index={index}></Book>
                ))}
            </div>
        </>
    )
}
export default BookList