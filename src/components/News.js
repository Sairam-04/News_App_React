import React, { useState } from "react";
import { Box, Tabs, Tab } from "@mui/material";
import { Typography } from "@mui/material";
import Topic from "./Topic";
import Search from "./Search";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Link from '@mui/material/Link';
import { Grid } from '@mui/material';

const News = () => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, number) => {
    setValue(number);
  };
  return (
    <>
      <Box sx={{ width: "100%", bgcolor: "background.paper" }}>
        <BasicTabs />
      </Box>
    </>
  );
};

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export function BasicTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const topics = [
    "Top News",
    "Health",
    "Sports",
    "Politics",
    "Entertainment",
    "Technology",
    "Current Affairs",
    "Travel",
    "Weather",
  ];

  const [topicData, setTopicData] = useState();
  const [isOpen, setIsOpen] = useState(true);

  return (
    <>
      <Search setTopicData={setTopicData} setIsOpen={setIsOpen} isOpen={isOpen}/>
      {
        isOpen?<>
        <Box sx={{ width: "100%" }}>
        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
          <Tabs
            value={value}
            onChange={handleChange}
            aria-label="basic tabs example"
            scrollButtons
            allowScrollButtonsMobile
            variant="scrollable"
          >
            <Tab label="Top News" {...a11yProps(0)} />
            <Tab label="Health" {...a11yProps(1)} />
            <Tab label="Sports" {...a11yProps(2)} />
            <Tab label="Politics" {...a11yProps(3)} />
            <Tab label="Entertainment" {...a11yProps(4)} />
            <Tab label="Technology" {...a11yProps(5)} />
            <Tab label="Current Affairs" {...a11yProps(6)} />
            <Tab label="Travel" {...a11yProps(7)} />
            <Tab label="Weather" {...a11yProps(8)} />
          </Tabs>
        </Box>
        {topics.map((item, index) => {
          return (
            <>
              <TabPanel value={value} index={index}>
                <Topic topicName={item} />
              </TabPanel>
            </>
          );
        })}
      </Box>
        </>:
        <>
        
        <Grid container spacing={1}>
            {
                topicData?.articles.map((item, index) => {
                    return (
                        <>
                            <Grid item >
                            <Card sx={{ maxWidth: 345, height: '70vh' }}>
                                <CardMedia
                                    sx={{ height: 140 }}
                                    image={item.urlToImage}
                                    title={item.title}
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="div" sx={{WebkitLineClamp: 1, textOverflow: 'ellipsis'}}>
                                        {item?.title}
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary" sx={{WebkitLineClamp: 1, textOverflow: 'ellipsis'}}>
                                        {item?.description}
                                    </Typography>
                                </CardContent>
                                <CardActions>
                                    <Button size="small">
                                        <Link href={item?.url} underline="none" target="_blank" rel="noopener">
                                            Learn More
                                        </Link>
                                    </Button>
                                </CardActions>
                            </Card>
                            </Grid>
                        </>
                    )
                })
            }
            </Grid>
          
        </>
      }
    </>
  );
}

export default News;
