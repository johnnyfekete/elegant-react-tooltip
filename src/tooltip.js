import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

const topGutter = 7;
const leftGutter = 7;
const rightGutter = 7;

export default class Tooltip extends Component {
  constructor(props) {
    super(props);

    this.tooltipRef = React.createRef();

    // The tooltip has to be appended to the body, to ensure the proper absolute position
    // and set the z-index to the highest of the body's children
    this.tooltipContainerElement = document.createElement('div');
    const highestZ = getHighestZ();
    this.tooltipContainerElement.style.zIndex = highestZ + 1;

    this.state = {
      width: null,
      visible: false,
      highestZ
    };
  }

  componentDidMount() {
    // Append the container to the body
    document.body.appendChild(this.tooltipContainerElement);

    const tooltip = this.tooltipRef.current;
    this.setState({
      width: tooltip.getElementsByClassName('er-tooltip-content')[0].offsetWidth,
      visible: true
    });
  }

  componentWillUnmount() {
    // Remove the container from the body
    document.body.removeChild(this.tooltipContainerElement);
  }

  render() {
    const { position, label } = this.props;
    const { width, visible, highestZ } = this.state;

    // calculate position and arrow position
    const top = position.top + position.height + topGutter;
    let left = position.left + position.width / 2 - width / 2;
    const arrowStyle = {
      left: `${width / 2}px`
    };
    if (left < leftGutter) {
      left = leftGutter;
      arrowStyle.left = `${position.left + position.width / 2 - left}px`;
    }
    if (left + width > window.innerWidth - rightGutter) {
      left = window.innerWidth - rightGutter - width;
      arrowStyle.left = `${position.left + position.width / 2 - left}px`;
    }

    return ReactDOM.createPortal(
      <div
        className="er-tooltip"
        style={{
          ...styles.tooltip,
          left: `${left}px`,
          top: `${top}px`,
          opacity: visible ? 1 : 0,
          zIndex: highestZ + 1
        }}
        ref={this.tooltipRef}
      >
        <div className="er-tooltip-content" style={styles.tooltipContent}>
          {label}
        </div>
        <span
          className="er-tooltip-arrow"
          style={{
            ...styles.tooltipArrow,
            ...arrowStyle,
          }}
        />
      </div>,
      this.tooltipContainerElement
    );
  }
}

// Find the highest Z index of the child elements of the body
const getHighestZ = () => {
  let highestZIndex = 0;
  const elements = document.querySelectorAll('*');
  elements.forEach(element => {
    const style = getComputedStyle(element);
    const zIndex = (style.zIndex) ?
      parseInt(style.zIndex) :
      0;

    if (zIndex > highestZIndex) {
      highestZIndex = zIndex;
    }
  });

  return highestZIndex;
}

Tooltip.propTypes = {
  position: PropTypes.object.isRequired,
  label: PropTypes.string.isRequired
};

const styles = {
  tooltip: {
    position: 'absolute'
  },

  tooltipContent: {
    position: 'fixed',
    width: 'fit-content',
    maxWidth: '150px',
    backgroundColor: '#0f0b11',
    boxShadow: '0px 2px 3px rgba(0, 0, 0, 0.13), 1px 2px 2px rgba(0, 0, 0, 0.1), -1px -2px 2px rgba(0, 0, 0, 0.05)',
    padding: '0.25rem 0.5rem',
    borderRadius: '0.125rem',
    fontSize: '0.75rem',
    color: '#ecebed',
    whiteSpace: 'nowrap'
  },

  tooltipArrow: {
    width: '0',
    height: '0',
    position: 'absolute',
    top: '-5px',
    left: '50%',
    marginLeft: '-5px',
    borderLeft: '5px solid transparent',
    borderRight: '5px solid transparent',
    borderBottom: '5px solid #0f0b11',
  }
}
