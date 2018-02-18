
import React, { Component } from "react";
import { connect } from "react-redux";

import * as actions from "../../actions";

import ProjectItem from "./ProjectItem"

class ProjectList extends Component {
  componentWillMount() {
    this.props.loadProjects();
  }

  render() {
    return (
      <div>
        {this.props.projects.map(p => {
          return (
            <ProjectItem key={p.id} project={p} />
          );
        })}
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => {
  return {
    loadProjects: () => dispatch(actions.loadProjectsAction())
  }
}

const mapStateToProps = state => {
  return {
    projects: state.project.projects
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ProjectList);
