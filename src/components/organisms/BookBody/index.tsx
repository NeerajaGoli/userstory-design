import * as React from "react";
import { Grid, Typography, Button, Box, Modal } from "@material-ui/core";
import BookTitleChip from "../../molecules/BookTitleChip";
import TabsBar from "../../molecules/TabsBar";
import TabPanel from "../../molecules/TabPanel";

interface BookBodyProps {}

const BookBody: React.FunctionComponent<BookBodyProps> = () => {
  const [openModal, setOpenModal] = React.useState(false);
  const handleKindle = () => {
    setOpenModal(true);
  };
  const [response, setResponse] = React.useState();
  const handleSetup = () => {
    //api
    setResponse("data");
  };
  const [tabIndex, setTabIndex] = React.useState(0);
  const tabs = ["explore by cateogry", "see recently added", "popular"];
  return (
    <>
      <Grid>
        <Grid item>
          <Typography>title</Typography>
          <Typography>description</Typography>
          <BookTitleChip title="time" categoryIcon="icon"></BookTitleChip>
          <BookTitleChip title="time" categoryIcon="icon"></BookTitleChip>
        </Grid>
        <Grid item>
          <Box>
            <Button>Readnow</Button>
            <Button startIcon={icon}>Add to cart</Button>
            <Box onClick={handleKindle}>
              <Typography>send to kindle</Typography>
              <ArrowIcon />
            </Box>
          </Box>
        </Grid>
        <Grid item>
          <TabsBar tabs={tabs} handleChange={setTabIndex} value={tabIndex} />

          {tabs.map((tab, index) => (
            <TabPanel
              key={index}
              value={tabIndex}
              index={index}
              content={"tab content"}
            />
          ))}
        </Grid>
      </Grid>
      <Modal open={openModal} title="set up your kindle">
        {response ? (
          <>
            <Typography>body of modal</Typography>
            <Button onClick={handleSetup}>Add email</Button>
          </>
        ) : (
          <>
            success body of modal
            <Button onClick={history.push("/book_url")}>Continue reading</Button>
          </>
        )}
      </Modal>
    </>
  );
};

export default BookBody;
