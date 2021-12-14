import * as React from "react";
import { Box, Typography } from "@material-ui/core";

interface BookItemProps {
  id: string;
  icon: any;
  title: string;
  author: string;
  handleClick: any;
}

const BookItem: React.FunctionComponent<BookItemProps> = ({
  id,
  icon,
  title,
  author,
  handleClick,
}) => {
  return (
    <Box display="flex" onClick={handleClick}>
      <Box>{id}</Box>
      <Box>{icon}</Box>
      <Box>
        <Typography>{title}</Typography>
        <Typography>{author}</Typography>
      </Box>
    </Box>
  );
};

export default BookItem;
