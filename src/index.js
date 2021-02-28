/* eslint-disable react/jsx-props-no-spreading */
import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import SensitiveArea from './sensitive-area';

window.tooltipTimeout = null;
window.hideTooltipTimeout = null;
window.tootltipVisible = false;

const ElegantReactTooltip = ({
  delayBeforeTooltip,
  keepTooltipAlive,
  ...rest
}) => {
  const [visible, setVisible] = useState(false);
  const [enabled, setEnabled] = useState(false);
  const [selected, setSelected] = useState(null);
  const [position, setPosition] = useState({});

  useEffect(() => {
    return () => {
      clearTimeout(window.tooltipTimeout);
      clearTimeout(window.hideTooltipTimeout);
    };
  }, []);

  const enableTooltip = (id, newPosition) => {
    clearTimeout(window.tooltipTimeout);
    window.tooltipTimeout = setTimeout(() => {
      setVisible(true);
      window.tooltipVisible = true;
    }, delayBeforeTooltip);

    setEnabled(true);
    setSelected(id);
    setPosition(newPosition);
  };

  const disableTooltip = () => {
    clearTimeout(window.hideTooltipTimeout);
    window.hideTooltipTimeout = setTimeout(() => {
      // if (!enabled) {
      setVisible(false);
      window.tooltipVisible = false;
      // }
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
  keepTooltipAlive: 2000,
};

export default ElegantReactTooltip;
