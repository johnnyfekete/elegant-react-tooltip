/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable no-bitwise */
import React, { useState, Fragment } from 'react';
import PropTypes from 'prop-types';
import Tooltip from './tooltip';

const uuidv4 = () => {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, (c) => {
    const r = (Math.random() * 16) | 0;
    const v = c === 'x' ? r : (r & 0x3) | 0x8;
    return v.toString(16);
  });
};

const SensitiveArea = ({
  label,
  tag,
  children,
  enableTooltip,
  disableTooltip,
  visible,
  selected,
  position,
  enabled,
  ...rest
}) => {
  const component = { tag };
  const [uuid] = useState(uuidv4());

  const wVisible = window.tooltipVisible;

  return (
    <>
      <component.tag
        onMouseEnter={(e) => {
          if (label && label.length > 0) {
            enableTooltip(uuid, e.currentTarget.getBoundingClientRect());
          }
        }}
        onMouseLeave={() => {
          if (label && label.length > 0) {
            disableTooltip();
          }
        }}
        {...rest}
      >
        {children}
      </component.tag>
      {(visible || wVisible) && selected === uuid && (
        <Tooltip label={label} position={position} />
      )}
    </>
  );
};

SensitiveArea.propTypes = {
  tag: PropTypes.string,
  label: PropTypes.string,
  children: PropTypes.node,
  enableTooltip: PropTypes.func.isRequired,
  disableTooltip: PropTypes.func.isRequired,
  visible: PropTypes.bool.isRequired,
  enabled: PropTypes.bool.isRequired,
  selected: PropTypes.string,
  position: PropTypes.object.isRequired,
};

SensitiveArea.defaultProps = {
  tag: 'div',
  label: '',
  children: null,
  selected: null,
};

export default SensitiveArea;
