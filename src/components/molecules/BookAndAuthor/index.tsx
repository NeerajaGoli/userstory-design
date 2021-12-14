import * as React from "react";
import { Box, Typography } from "@material-ui/core";

interface BookAndAuthorItemProps {
  title: string;
  author: string;
  handleClick: any;
}

const BookAndAuthorItem: React.FunctionComponent<BookAndAuthorItemProps> = ({
  title,
  author,
  handleClick,
}) => {
  return (
    <Box display="flex" onClick={handleClick}>
      <Typography>{title}</Typography>
      <Typography>{author}</Typography>
    </Box>
  );
};

export default BookAndAuthorItem;
