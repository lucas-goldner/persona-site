import React from 'react'
import styled from "styled-components";
import { AppBar, Toolbar, Grid, Typography, List, ListItem, ListItemText} from "@material-ui/core"
import { makeStyles } from "@material-ui/core/styles"
import { Home } from "@material-ui/icons"
import { useHistory } from "react-router-dom";

const useStyles = makeStyles({
    navDisplayFlex: {
      display: `flex`,
      justifyContent: `start`
    },
    linkText: {
      textDecoration: `none`,
      textTransform: `uppercase`,
      color: `white`
    }
  });

const BG = styled.div`
    background-color: #E3E2DF;
`

const TheAppBar = styled(AppBar)`
    background-color: #5D001E !important;
`

const navLinks = [
    { title: `About`, path: `/about` },
    { title: `Projects`, path: `/projects` },
    { title: `Contact`, path: `/contact` },
  ]

function PageTwo() {
    const classes = useStyles(); 
    let history = useHistory();
    const handleClick = () => {history.push("/home")}

    return (
        <>
        <BG>
            <TheAppBar position="static" id="about">
                <Toolbar>
                <Home edge="start" color="inherit" aria-label="home" onClick={handleClick}>
                    <Home fontSize="large" />
                </Home>
                <List component="nav" aria-labelledby="main navigation" className={classes.navDisplayFlex}>
                    {navLinks.map(({ title, path }) => (
                        <a href={path} key={title} className={classes.linkText}>
                            <ListItem button>
                                <ListItemText primary={title} />
                            </ListItem>
                        </a>
                    ))}
                    </List>
                </Toolbar>
            </TheAppBar>
        </BG>    
        </>
    )
}

export default PageTwo