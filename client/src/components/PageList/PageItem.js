import React from "react";
import { Link } from "react-router-dom";

const PageItem = ({ page }) => {
  return (
    <div className="page-item">
      <div>
        <Link to={`/projects/${page.projectId.id}/${page.id}`}>{page.p11017}</Link>
      </div>
      <div>
        {page.sortId } {page.p11020} / {page.p11021} 
      </div>
    </div>
  )
}

export default PageItem;
