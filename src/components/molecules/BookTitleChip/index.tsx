import * as React from "react";

interface BookTitleChipProps {
  categoryIcon?: any;
  title?: string;
  handleClick?: any;
}

const BookTitleChip: React.FunctionComponent<BookTitleChipProps> = ({
  categoryIcon,
  title,
  handleClick,
}) => {
  return (
    <div onClick={handleClick}>
      {categoryIcon}
      <div>{title}</div>
    </div>
  );
};

export default BookTitleChip;
