/* eslint-disable react/jsx-props-no-spreading */
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import SensitiveArea from './sensitive-area';

let tooltipTimeout;
let hideTooltipTimeout;

const ElegantReactTooltip = ({
  delayBeforeTooltip,
  keepTooltipAlive,
  ...rest
}) => {
  const [visible, setVisible] = useState(false);
  const [enabled, setEnabled] = useState(false);
  const [selected, setSelected] = useState(null);
  const [position, setPosition] = useState({});

  const enableTooltip = (id, newPosition) => {
    clearTimeout(tooltipTimeout);
    tooltipTimeout = setTimeout(() => {
      setVisible(true);
    }, delayBeforeTooltip);

    setEnabled(true);
    setSelected(id);
    setPosition(newPosition);
  };

  const disableTooltip = () => {
    clearTimeout(hideTooltipTimeout);
    hideTooltipTimeout = setTimeout(() => {
      if (!enabled) {
        setVisible(false);
      }
    }, keepTooltipAlive);

    setEnabled(false);
    setSelected(null);
    setPosition({});
  };

  return (
    <SensitiveArea
      {...rest}
      enableTooltip={enableTooltip}
      disableTooltip={disableTooltip}
      enabled={enabled}
      visible={visible}
      selected={selected}
      position={position}
    />
  );
};

ElegantReactTooltip.propTypes = {
  tag: PropTypes.string,
  label: PropTypes.string,
  delayBeforeTooltip: PropTypes.number,
  keepTooltipAlive: PropTypes.number,
};

ElegantReactTooltip.defaultProps = {
  tag: 'div',
  label: '',
  delayBeforeTooltip: 500,
  keepTooltipAlive: 1000,
};

export default ElegantReactTooltip;
