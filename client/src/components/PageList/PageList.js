/*
import React, { Component } from "react";
import { connect } from "react-redux";

import * as actions from "../../actions";

import PageItem from "./PageItem"

class PageList extends Component {
  componentWillMount() {
    const projectId = this.props.projectId;
    this.props.loadPages(projectId);
  }

  render() {
    return (
      <div>
        {this.props.pages.map(p => {
          return (
            <PageItem key={p.id} page={p} />
          );
        })}
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => {
  return {
    loadPages: (projectId) => dispatch(actions.loadPagesAction(projectId))
  }
}

const mapStateToProps = state => {
  return {
    pages: state.page.pages
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(PageList);
*/