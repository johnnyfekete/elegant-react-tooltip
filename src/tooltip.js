import React, { useEffect, useState, useRef } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

const topGutter = 7;
const leftGutter = 7;
const rightGutter = 7;

const Tooltip = ({ position, label }) => {
  const [width, setWidth] = useState(null);
  const [visible, setVisible] = useState(false);
  const highestZ = getHighestZ();

  const tooltipRef = useRef();
  let tooltipContainerElement;

  useEffect(() => {
    // The tooltip has to be appended to the body, to ensure the proper absolute position
    // and set the z-index to the highest of the body's children
    tooltipContainerElement = document.createElement('div');
    tooltipContainerElement.style.zIndex = highestZ + 1;

    // Append the container to the body
    document.body.appendChild(tooltipContainerElement);

    const tooltip = tooltipRef.current;
    setWidth(
      tooltip.getElementsByClassName('er-tooltip-content')[0].offsetWidth,
    );
    setVisible(true);

    return () => {
      // Remove the container from the body
      document.body.removeChild(tooltipContainerElement);
    };
  });

  // calculate position and arrow position
  const top = position.top + position.height + topGutter;
  let left = position.left + position.width / 2 - width / 2;
  const arrowStyle = {
    left: `${width / 2}px`,
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
        zIndex: highestZ + 1,
      }}
      ref={tooltipRef}
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
    tooltipContainerElement,
  );
};

// Find the highest Z index of the child elements of the body
const getHighestZ = () => {
  let highestZIndex = 0;
  const elements = document.querySelectorAll('*');
  elements.forEach((element) => {
    const style = getComputedStyle(element);
    const zIndex = style.zIndex ? parseInt(style.zIndex, 10) : 0;

    if (zIndex > highestZIndex) {
      highestZIndex = zIndex;
    }
  });

  return highestZIndex;
};

Tooltip.propTypes = {
  position: PropTypes.object.isRequired,
  label: PropTypes.string.isRequired,
};

export default Tooltip;

const styles = {
  tooltip: {
    position: 'absolute',
  },

  tooltipContent: {
    position: 'fixed',
    width: 'fit-content',
    maxWidth: '150px',
    backgroundColor: '#0f0b11',
    boxShadow:
      '0px 2px 3px rgba(0, 0, 0, 0.13), 1px 2px 2px rgba(0, 0, 0, 0.1), -1px -2px 2px rgba(0, 0, 0, 0.05)',
    padding: '0.25rem 0.5rem',
    borderRadius: '0.125rem',
    fontSize: '0.75rem',
    color: '#ecebed',
    whiteSpace: 'nowrap',
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
  },
};
