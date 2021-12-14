import * as React from "react";
import { Box, TextField, Divider } from "@material-ui/core";
import BookAndAuthorItem from "../../molecules/BookAndAuthor";

interface SearchProps {}

const Search: React.FunctionComponent<SearchProps> = () => {
  const [searchTerm, setSearchTerm] = React.useState("");
  const booksFiltered = [
    { title: "book1", author: "aaa", id: "1212", icon: "url" },
    { title: "book2", author: "bbb", id: "3423", icon: "url" },
  ];
  return (
    <Box>
      <Autocomplete
        options={booksFiltered}
        sx={{ width: 300 }}
        renderInput={(props: any) => (
          <TextField {...props} placeholder="search" />
        )}
        renderOption={(props) => {
          return <Box>{...props}</Box>;
        }}
      />
    </Box>
  );
};

export default Search;
