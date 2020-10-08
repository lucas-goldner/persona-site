import React, {useState} from 'react'
import { List, ListItem, ListItemText, IconButton, Drawer } from "@material-ui/core"
import { Menu } from "@material-ui/icons"
import { makeStyles } from "@material-ui/core/styles"

const useStyles = makeStyles((theme) => ({
    MuiDrawer: {
      backgroundColor: "#5d001e",
    },
    list: {
      width: 250,
    },
    linkText: {
      textDecoration: `none`,
      textTransform: `uppercase`,
      color: `white`,
    },
  }))

const SideDrawer = ({ navLinks }) => {
    const classes = useStyles();
    const [state, setState] = useState({ right: false })
    const toggleDrawer = (anchor, open) => (event) => {
      if (
        event.type === "keydown" &&
        (event.key === "Tab" || event.key === "Shift")
      ) {
        return
      }
      setState({ [anchor]: open })
    }

    const sideDrawerList = anchor => (
        <div
        className={classes.list}
          role="presentation"
          onClick={toggleDrawer(anchor, false)}
          onKeyDown={toggleDrawer(anchor, false)}>
          <List component="nav">
            {navLinks.map(({ title, path }) => (
              <a href={path} key={title} className={classes.linkText}>
                <ListItem button>
                  <ListItemText primary={title} />
                </ListItem>
              </a>
            ))}
          </List>
        </div>
      );

    return (
        <>
        <React.Fragment>
        <IconButton
          edge="end"
          aria-label="menu"
          onClick={toggleDrawer("right", true)}
          className="TheIconButton">
          <Menu />
        </IconButton>
        <Drawer anchor="right" open={state.right} onOpen={toggleDrawer("right", true)} onClose={toggleDrawer("right", false)} classes={{paper: classes.MuiDrawer}}>
        {sideDrawerList("right")}
        </Drawer>
      </React.Fragment>
        </>
    )
}


export default SideDrawer;