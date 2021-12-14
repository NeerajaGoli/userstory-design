import * as React from "react";
import { Box } from "@material-ui/core";

interface TabPanelProps {
  content: any;
  index: number;
  value: number;
}

const TabPanel: React.FunctionComponent<TabPanelProps> = ({
  content,
  index,
  value,
}) => {
  return index === value ? <Box>{content}</Box> : <Box />;
};

export default TabPanel;
