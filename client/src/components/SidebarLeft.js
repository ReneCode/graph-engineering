
import React from "react";

import Drawer from "material-ui/Drawer";

const styles = theme => {
    
}

const SidebarLeft = (props) => {
  return (
    <Drawer
      variant="permanent"
    >
      {/* <div className="sidebar-left"> */}
      {props.children}
      {/* </div> */}
    </Drawer>
  )
}

export default SidebarLeft;
