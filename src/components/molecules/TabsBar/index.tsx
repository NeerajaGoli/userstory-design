import * as React from "react";
import { Box, Typography } from "@material-ui/core";

interface TabsBarProps {
  tabs: any;
  handleChange: any;
  value: number;
}

const TabsBar: React.FunctionComponent<TabsBarProps> = ({
  tabs,
  handleChange,
  value,
}) => {
  return (
    <Box>
      {tabs.map((tab: any) => (
        <Typography>{tab}</Typography>
      ))}
    </Box>
  );
};

export default TabsBar;
