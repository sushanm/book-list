import { _Book } from "../../../models/booklist/booklist"
import Image from '../Images/image';

const Book = ({ book, index }: { book: _Book, index: number }) => {
  return (<>
    <div className="books-card shadow-md">
      <div className="books-index">
        <span className="font-bold py-1 px-1">
          #{index+1}
        </span>
        
      </div>
      <div className="a-section zg-bdg-tri zg-bdg-clr-tri aok-float-left"></div>
      <h3 className="py-3">{book.title}</h3>
      <Image url={book.image} />
      <p>Some text</p>
    </div>

  </>)
}
export default Book