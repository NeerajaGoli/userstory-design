import * as React from "react";
import { Box, TextField, Divider } from "@material-ui/core";
import BookItem from "../../molecules/BookItem";

interface SearchProps {}

const Search: React.FunctionComponent<SearchProps> = () => {
  const [searchTerm, setSearchTerm] = React.useState("");
  const booksFiltered = [
    { title: "book1", author: "aaa", id: "1212", icon: "url" },
    { title: "book2", author: "bbb", id: "3423", icon: "url" },
  ];
  return (
    <Box>
      <TextField
        onChange={(e) => setSearchTerm(e.target.value)}
        value={searchTerm}
      ></TextField>
      {booksFiltered.map((book) => (
        <>
          <BookItem
            title={book.title}
            author={book.author}
            icon={book.icon}
            id={book.id}
            handleClick={() => {}}
          />
          <Divider />
        </>
      ))}
    </Box>
  );
};

export default Search;
