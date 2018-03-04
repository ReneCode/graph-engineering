import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';

import List, { ListItem, ListItemIcon, ListItemText } from 'material-ui/List';
import ShareIcon from 'material-ui-icons/Share';
import CreateIcon from 'material-ui-icons/Create';
import Crop32Icon from 'material-ui-icons/Crop32';
import DeleteIcon from 'material-ui-icons/Delete';
import SearchIcon from 'material-ui-icons/Search';

import Drawer from 'material-ui/Drawer';
import Divider from 'material-ui/Divider';

const styles = theme => ({
  xroot: {
    flexGrow: 0,
    zIndex: 1,
    overflow: 'hidden',
    position: 'relative',
    display: 'flex',
  },

});

class Toolbar extends React.Component {

  render() {
    const { classes } = this.props;

    return (
      <div className={classes.root}>

        <Drawer variant="permanent" >
          <List>
            <ListItem button disabled>
              <ListItemIcon>
                <SearchIcon />
              </ListItemIcon>
              <ListItemText primary="Search" />
            </ListItem>
            <Divider />

            <ListItem button>
              <ListItemIcon>
                <CreateIcon />
              </ListItemIcon>
              <ListItemText primary="Draw" />
            </ListItem>

            <ListItem button>
              <ListItemIcon>
                <Crop32Icon />
              </ListItemIcon>
              <ListItemText primary="Starred" />
            </ListItem>

            <ListItem button disabled>
              <ListItemIcon>
                <ShareIcon />
              </ListItemIcon>
              <ListItemText primary="Connect" />
            </ListItem>

            <Divider />

            <ListItem button disabled>
              <ListItemIcon>
                <DeleteIcon />
              </ListItemIcon>
              <ListItemText primary="Delete" />
            </ListItem>
          </List>
        </Drawer>
      </div>
    );
  }
}

Toolbar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Toolbar);
