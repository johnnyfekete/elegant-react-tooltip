import React, { Component } from 'react';
import PropTypes from 'prop-types';
import SensitiveArea from './sensitive-area';
import './style.css';

const tooltipState = {
  enabled: false,
  visible: false,
  selected: null,
  position: {}
};

let tooltipTimeout;
let hideTooltipTimeout;

class ElegantReactTooltip extends Component {
  enableTooltip = (id, position) => {
    clearTimeout(tooltipTimeout);
    tooltipTimeout = setTimeout(() => {
      tooltipState.visible = true;
      this.setState({});
    }, 1000);

    tooltipState.enabled = true;
    tooltipState.selected = id;
    tooltipState.position = position;
    this.setState({});
  };

  disableTooltip = () => {
    clearTimeout(hideTooltipTimeout);
    hideTooltipTimeout = setTimeout(() => {
      if (!tooltipState.enabled) {
        tooltipState.visible = false;
        this.setState({});
      }
    }, 500);

    tooltipState.enabled = false;
    tooltipState.selected = null;
    tooltipState.position = {};
    this.setState({});
  };

  render() {
    return (
      <SensitiveArea
        {...this.props}
        enableTooltip={this.enableTooltip}
        disableTooltip={this.disableTooltip}
        {...tooltipState}
      />
    );
  }
}

export default ElegantReactTooltip;
