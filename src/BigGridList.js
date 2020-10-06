import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import GridList from "@material-ui/core/GridList";
import GridListTile from "@material-ui/core/GridListTile";
import GridListTileBar from "@material-ui/core/GridListTileBar";
import IconButton from "@material-ui/core/IconButton";
import PlayCircleOutlineIcon from "@material-ui/icons/PlayCircleOutline";
import styled from "styled-components";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-around",
    overflow: "hidden",
    background: "#e3afbc",
  },
  gridList: {
    width: 500,
    height: 450,
    // Promote the list into his own layer on Chrome. This cost memory but helps keeping high FPS.
    transform: "translateZ(0)",
    background: "#e3afbc",
  },
  titleBar: {
    background:
      "linear-gradient(to bottom, rgba(0,0,0,0.7) 0%, " +
      "rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)",
  },
  icon: {
    color: "white",
  },
  title: {
    color: "white",
  },
}));

const tileData = [
  {
    img: "./JSPicOne.png",
    title: "Persona(l) Website",
    link: "https://persona-site.vercel.app/",
    featured: true,
  },
  {
    img: "./JSPicTwo.png",
    title: "Demon Summoning Program",
    link: "https://demon-program.vercel.app/",
    share:
      "https://twitter.com/intent/tweet?original_referer=https%3A%2F%2Fpublish.twitter.com%2F%3FbuttonType%3DTweetButton%26widget%3DButton&ref_src=twsrc%5Etfw&text=Twitter%20Publish&tw_p=tweetbutton&url=https%3A%2F%2Fpublish.twitter.com%2F%3FbuttonType%3DTweetButton%26widget%3DButton",
  },
  {
    img: "./CPlusPlusOne.jpeg",
    title: "Ace Deuce V2.4",
    link:
      "http://www.mediafire.com/file/5d2j2918e92xhub/ACE_DEUCE_v0.2.4.zip/file",
  },
  {
    img: "./CPlusPlusTwo.jpeg",
    title: "Ace Deuce Mobile V0.2.1",
    link:
      "http://www.mediafire.com/file/6fh3jzb8fbwbzf9/AceDeuce_v0.2.1.apk/file",
  },
  {
    img: "./JavaOne.png",
    title: "The WeatherFetcher",
    link: "https://github.com/lucas-goldner/weatherfetcher",
    featured: true,
  },
  {
    img: "./JavaTwo.png",
    title: "GNLobby Plugin for Minecraft",
    link: "https://github.com/lucas-goldner/gnlobby",
  },
  {
    img: "./JavaThree.png",
    title: "Sonic Survival Games Plugin for Minecraft",
    link: "https://github.com/lucas-goldner/sonicsg",
  },
];

const TheGridList = styled(GridList)`
  width: 100% !important;

  @media (max-width: 700px) {
    width: 500px !important;
  }

  @media (max-width: 600px) {
    width: 400px !important;
  }

  @media (max-width: 500px) {
    width: 300px !important;
  }

  @media (max-width: 400px) {
    width: 200px !important;
  }

  @media screen and (orientation: landscape) and (max-device-width: 1100px) {
    width: 900px !important;
  }

  @media screen and (orientation: landscape) and (max-device-width: 1000px) {
    width: 800px !important;
  }

  @media screen and (orientation: landscape) and (max-device-width: 900px) {
    width: 700px !important;
  }

  @media screen and (orientation: landscape) and (max-device-width: 800px) {
    width: 600px !important;
  }

  @media screen and (orientation: landscape) and (max-device-width: 700px) {
    width: 500px !important;
  }

  @media screen and (orientation: landscape) and (max-device-width: 600px) {
    width: 400px !important;
  }

  @media screen and (orientation: landscape) and (max-device-width: 500px) {
    width: 300px !important;
  }

  @media screen and (orientation: landscape) and (max-device-width: 400px) {
    width: 200px !important;
  }

`;

const BigGridList = (props) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <TheGridList cellHeight={200} spacing={1} className={classes.gridList}>
        {tileData.map((tile) => (
          <GridListTile
            key={tile.img}
            cols={tile.featured ? 2 : 1}
            rows={tile.featured ? 2 : 1}
          >
            <img src={tile.img} alt={tile.title} />
            <GridListTileBar
              title={tile.title}
              titlePosition="top"
              actionIcon={
                <a href={tile.link} rel="noopener noreferrer" target="_blank">
                  <IconButton aria-label={`star ${tile.title}`}>
                    <PlayCircleOutlineIcon className={classes.title} />
                  </IconButton>
                </a>
              }
              actionPosition="left"
              className={classes.titleBar}
            />
          </GridListTile>
        ))}
      </TheGridList>
    </div>
  );
};

export default BigGridList;
