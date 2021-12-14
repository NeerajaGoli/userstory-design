import * as React from "react";
import { Box, Dialog, Divider } from "@material-ui/core";
import BookTitleChip from "../../molecules/BookTitleChip";
import TabsBar from "../../molecules/TabsBar";
import TabPanel from "../../molecules/TabPanel";

interface ExploreTabProps {}

const ExploreTab: React.FunctionComponent<ExploreTabProps> = () => {
  const [showDialog, setShowDialog] = React.useState(false);
  const [tabIndex, setTabIndex] = React.useState(0);
  // const booksbycategory=fetch("url");
  const tabs = ["explore by cateogry", "see recently added", "popular"];
  const booksbycategory = [{ title: "asadfasd", icon: "asd" }];
  return (
    <div>
      <div onClick={() => setShowDialog(!showDialog)}>Explore</div>
      <TabsBar tabs={tabs} handleChange={setTabIndex} value={tabIndex} />
      <Divider/>
      <Dialog open={showDialog}>
        {tabs.map((tab, index) => (
          <TabPanel
            key={index}
            value={tabIndex}
            index={index}
            content={booksbycategory.map((book) => (
              <BookTitleChip title={book.title} categoryIcon={book.icon} />
            ))}
          />
        ))}
      </Dialog>
    </div>
  );
};

export default ExploreTab;
