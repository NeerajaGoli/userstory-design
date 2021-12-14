import * as React from 'react';


interface BookProps {
    bookTitle:string;
    authorName:string;
    timeToRead:number;
    bookImage:HTMLImageElement;
    onMenuClickHandler:Function;
}
 
const Book: React.FunctionComponent<BookProps> = () => {
    return ( 
        <div></div>
     );
}
 
export default Book;