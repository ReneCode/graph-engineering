import React from "react";
import {Link} from "react-router-dom";

const PageItem = ({ page }) => {
  let functionCount = 0;
  if (page.functions) {
    functionCount = page.functions.length;
  }
  return (
    <div className="page-item">
      <Link to={`/projects/${page.projectId.id}/${page.id}`}>Page: {functionCount}</Link>
    </div>
  )
}

export default PageItem;
