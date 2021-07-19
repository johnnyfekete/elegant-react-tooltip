/* eslint-disable react/forbid-prop-types */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable no-bitwise */
import React, { useState, Fragment } from 'react';
import PropTypes from 'prop-types';
import Tooltip from './tooltip';

const uuidv4 = () => {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, c => {
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
  disabled,
  ...rest
}) => {
  const component = { tag };
  const [uuid] = useState(uuidv4());

  const wVisible = window.tooltipVisible;

  const hasLabel =
    label &&
    ((typeof label === 'string' && label.length > 0) ||
      typeof label === 'object');

  return (
    <>
      <component.tag
        onMouseEnter={e => {
          if (hasLabel) {
            enableTooltip(uuid, getCoordinates(e.currentTarget));
          }
        }}
        onMouseLeave={() => {
          if (hasLabel) {
            disableTooltip();
          }
        }}
        {...rest}
      >
        {children}
      </component.tag>
      {!disabled && (visible || wVisible) && selected === uuid && (
        <Tooltip label={label} position={position} />
      )}
    </>
  );
};

SensitiveArea.propTypes = {
  tag: PropTypes.string,
  label: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  children: PropTypes.node,
  enableTooltip: PropTypes.func.isRequired,
  disableTooltip: PropTypes.func.isRequired,
  visible: PropTypes.bool.isRequired,
  enabled: PropTypes.bool.isRequired,
  disabled: PropTypes.bool,
  selected: PropTypes.string,
  position: PropTypes.object.isRequired,
};

SensitiveArea.defaultProps = {
  tag: 'div',
  label: '',
  children: null,
  selected: null,
  disabled: false,
};

export default SensitiveArea;

const getCoordinates = element => {
  const rect = element.getBoundingClientRect();

  return {
    top: rect.top + window.scrollY,
    left: rect.left + window.scrollX,
    width: rect.width,
    height: rect.height,
  };
};
