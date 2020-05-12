import React, { Component } from 'react';
import PropTypes from 'prop-types';
import SensitiveArea from './sensitive-area';

const tooltipState = {
  enabled: false,
  visible: false,
  selected: null,
  position: {}
};

let tooltipTimeout;
let hideTooltipTimeout;

class ElegantReactTooltip extends Component {
  constructor(props) {
    super(props);
  
    this.state = {
      delayBeforeTooltip: props.delayBeforeTooltip,
      keepTooltipAlive: props.keepTooltipAlive
    }
  }

  enableTooltip = (id, position) => {
    clearTimeout(tooltipTimeout);
    tooltipTimeout = setTimeout(() => {
      tooltipState.visible = true;
      this.setState({});
    }, this.state.delayBeforeTooltip);

    tooltipState.enabled = true;
    tooltipState.selected = id;
    tooltipState.position = position;
    this.setState({});
  }

  disableTooltip = () => {
    clearTimeout(hideTooltipTimeout);
    hideTooltipTimeout = setTimeout(() => {
      if (!tooltipState.enabled) {
        tooltipState.visible = false;
        this.setState({});
      }
    }, this.state.keepTooltipAlive);

    tooltipState.enabled = false;
    tooltipState.selected = null;
    tooltipState.position = {};
    this.setState({});
  }

  render() {
    const { delayBeforeTooltip, keepTooltipAlive, ...rest } = this.props;
    return (
      <SensitiveArea
        {...rest}
        enableTooltip={this.enableTooltip}
        disableTooltip={this.disableTooltip}
        {...tooltipState}
      />
    );
  }
}

ElegantReactTooltip.propTypes = {
  tag: PropTypes.string,
  label: PropTypes.string,
  delayBeforeTooltip: PropTypes.number,
  keepTooltipAlive: PropTypes.number
}

ElegantReactTooltip.defaultProps = {
  tag: 'div',
  label: '',
  delayBeforeTooltip: 500,
  keepTooltipAlive: 1000
}

export default ElegantReactTooltip;
