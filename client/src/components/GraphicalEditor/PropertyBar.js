
import React, { Component } from "react";
import PropTypes from "prop-types";

class PropertyBar extends Component {
  constructor(props) {
    super(props);

    this.onChangeColor = this.onChangeColor.bind(this);
  }

  onChangeColor(ev) {
    let item = this.props.items[0];

    item.color = ev.target.value;
  }

  render() {
    const style = {
      backgroundColor: "#eee",
      display: "block",
      position: "absolute",
      top: 30,
      right: 20,
      width: 150,
      height: 120,
      padding: 3,
      border: "1px solid gray"
    }

    if (!this.props.items || this.props.items.length == 0) {
      return (
        <div style={style}>
        </div>
      );
    }
    const item = this.props.items[0];

    return (
      <div style={style}>
        <div>Color</div>
        <input type="text" value={item.color} onChange={(ev) => this.props.changeValue("color", ev.target.value)} />
        <div>Width</div>
        {/* <input type="text" value={42} /> */}
      </div>
    );
  }
}

PropertyBar.propTypes = {
  items: PropTypes.array.isRequired,
  changeValue: PropTypes.func.isRequired
};

export default PropertyBar;

