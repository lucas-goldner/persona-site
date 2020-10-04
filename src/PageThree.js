import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import {
  Typography,
  Grid,
  Tab,
  Tabs,
  GridList,
  GridListTile,
  GridListTileBar,
  IconButton,
  Box,
} from "@material-ui/core";
import PlayCircleOutlineIcon from "@material-ui/icons/PlayCircleOutline";
import ShareIcon from "@material-ui/icons/Share";

const StyledTabs = withStyles({
  indicator: {
    display: "flex",
    justifyContent: "center",
    backgroundColor: "transparent",
    "& > span": {
      maxWidth: 40,
      width: "100%",
      backgroundColor: "#ee4c7c",
    },
  },
})((props) => <Tabs {...props} TabIndicatorProps={{ children: <span /> }} />);

const StyledTab = withStyles((theme) => ({
  root: {
    textTransform: "none",
    color: "#fff",
    fontWeight: theme.typography.fontWeightRegular,
    fontSize: theme.typography.pxToRem(15),
    marginRight: theme.spacing(1),
    "&:focus": {
      opacity: 1,
    },
  },
}))((props) => <Tab disableRipple {...props} />);

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-around",
    overflow: "hidden",
    backgroundColor: theme.palette.background.paper,
  },
  padding: {
    padding: theme.spacing(3),
  },
  gridList: {
    flexWrap: "nowrap",
    transform: "translateZ(0)",
    background: "#e3afbc",
  },
  title: {
    color: theme.palette.primary.light,
  },
  titleBar: {
    background:
      "linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)",
  },
}));

const BG = styled.div`
  background-color: #e3afbc;
  font-family: "Roboto !important";
`;

const JStileData = [
  {
    img: "./JSPicOne.png",
    title: "Persona(l) Website",
    link: "https://persona-site.vercel.app/",
  },
  {
    img: "./JSPicTwo.png",
    title: "Demon Summoning Program",
    link: "https://demon-program.vercel.app/",
  },
];

const CPlusPlustileData = [
  {
    img: "./CPlusPlusOne.jpeg",
    title: "Ace Deuce V2.4",
    link: "http://www.mediafire.com/file/5d2j2918e92xhub/ACE_DEUCE_v0.2.4.zip/file",
  },
  {
    img: "./CPlusPlusTwo.jpeg",
    title: "Ace Deuce Mobile V0.2.1",
    link: "http://www.mediafire.com/file/6fh3jzb8fbwbzf9/AceDeuce_v0.2.1.apk/file",
  },
];

function TabPanel({ children, value, index, ...other }) {
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

function PageThree() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <>
      <BG>
        <Grid container justify="center" direction="column" id="projects">
          <Grid item xs={12}>
            <Typography variant={"h2"}>Projects</Typography>
          </Grid>
          <Grid item xs={12}>
            <div class="content">
              <div class="line"></div>
            </div>
          </Grid>
          <Grid item>
            <div>
              <StyledTabs
                value={value}
                onChange={handleChange}
                aria-label="Project Selection"
                variant="fullWidth"
              >
                <StyledTab label="All" index={0} />
                <StyledTab label="JavaScript" index={1} />
                <StyledTab label="C++" index={2} />
                <StyledTab label="Java" index={3} />
              </StyledTabs>
              <TabPanel value={value} index={0}>
                Item One
              </TabPanel>
              <TabPanel value={value} index={1}>
                <div className={classes.root}>
                  <GridList className={classes.gridList} cols={2.5}>
                    {JStileData.map((tile) => (
                      <GridListTile key={tile.img}>
                        <img src={tile.img} alt={tile.title} />
                        <GridListTileBar
                          title={tile.title}
                          classes={{
                            root: classes.titleBar,
                            title: classes.title,
                          }}
                          actionIcon={
                            <a href={tile.link} target="_blank">
                              <IconButton aria-label={`star ${tile.title}`}>
                                <PlayCircleOutlineIcon
                                  className={classes.title}
                                />
                              </IconButton>
                            </a>
                          }
                        />
                      </GridListTile>
                    ))}
                  </GridList>
                </div>
              </TabPanel>
              <TabPanel value={value} index={2}>
                <div className={classes.root}>
                  <GridList className={classes.gridList} cols={2.5}>
                    {CPlusPlustileData.map((tile) => (
                      <GridListTile key={tile.img}>
                        <img src={tile.img} alt={tile.title} />
                        <GridListTileBar
                          title={tile.title}
                          classes={{
                            root: classes.titleBar,
                            title: classes.title,
                          }}
                          actionIcon={
                            <a href={tile.link} target="_blank">
                              <IconButton aria-label={`star ${tile.title}`}>
                                <PlayCircleOutlineIcon
                                  className={classes.title}
                                />
                              </IconButton>
                            </a>
                          }
                        />
                      </GridListTile>
                    ))}
                  </GridList>
                </div>
              </TabPanel>
              <TabPanel value={value} index={3}>
                Item Four
              </TabPanel>
            </div>
          </Grid>
          <Grid item></Grid>
        </Grid>
      </BG>
    </>
  );
}

export default PageThree;
