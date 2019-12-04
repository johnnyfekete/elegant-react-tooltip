import React, { Component } from 'react';
import PropTypes from 'prop-types';

const topGutter = 7;
const leftGutter = 7;
const rightGutter = 7;

export default class Tooltip extends Component {
  constructor(props) {
    super(props);

    this.tooltipRef = React.createRef();

    this.state = {
      width: null,
      visible: false
    };
  }

  componentDidMount() {
    const tooltip = this.tooltipRef.current;
    this.setState({
      width: tooltip.offsetWidth,
      visible: true
    });
  }

  render() {
    const { position, label } = this.props;
    const { width, visible } = this.state;

    // calculate position and arrow position
    const top = position.top + position.height + topGutter;
    let left = position.left + position.width / 2 - width / 2;
    const arrowStyle = {};
    if (left < leftGutter) {
      left = leftGutter;
      arrowStyle.left = `${position.left + position.width / 2 - left}px`;
    }
    if (left + width > window.innerWidth - rightGutter) {
      left = window.innerWidth - rightGutter - width;
      arrowStyle.left = `${position.left + position.width / 2 - left}px`;
    }

    return (
      <div
        className="er-tooltip"
        style={{
          left: `${left}px`,
          top: `${top}px`,
          opacity: visible ? 1 : 0
        }}
        ref={this.tooltipRef}
      >
        <div className="er-tooltip-content">{label}</div>
        <span className="er-tooltip-arrow" style={arrowStyle} />
      </div>
    );
  }
}

Tooltip.propTypes = {
  position: PropTypes.object.isRequired,
  label: PropTypes.string.isRequired
};
