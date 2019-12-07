[![npm version](https://img.shields.io/npm/v/elegant-react-tooltip.svg?style=flat-square)](https://www.npmjs.com/package/elegant-react-tooltip)
[![npm downloads](https://img.shields.io/npm/dm/elegant-react-tooltip.svg?style=flat-square)](https://www.npmjs.com/package/elegant-react-tooltip)

# Elegant React Tooltip

A simple tooltip component that automatically positions itself and provides a seamless user experience.

Just wrap your elements with the **elegant-react-tooltip** and it will automatically show the tooltip in the right position.

Features:
- determine the correct position and z-index, to always show the tooltips, where they should be!
- consider the window width (no tooltips will be cut off at the edge of the screen)
- convenient timing: there's a bit of delay before the first tooltip would appear, but then the next ones appear immediately once the mouse moves over another item

## Installation and usage
The easiest way to use elegant-react-tooltip is to install it from npm or yarn and build it into your app:

```
npm install elegant-react-tooltip
```
or
```
yarn add elegant-react-tooltip
```

### Example

Import the package to your component, and wrap your elements, that should have a tooltip.

```
import React from 'react';
import ElegantReactTooltip from 'elegant-react-tooltip';

const newItemIcon = require('../images/new-item.svg');
const copyIcon = require('../images/copy.svg');
const removeIcon = require('../images/remove.svg');

const Toolbox = () => (
  <ul className="flex">

    <ElegantReactTooltip tag="li" label="New Item">
      <img src={newItemIcon} alt="" />
    </ElegantReactTooltip>

    <ElegantReactTooltip tag="li" label="Copy">
      <img src={copyIcon} alt="" />
    </ElegantReactTooltip>

    <ElegantReactTooltip
        tag="li"
        label="Remove"
        className="danger"
        onClick={() => alert('Delete me')}
    >
      <img src={removeIcon} alt="" />
    </ElegantReactTooltip>
  </ul>
);

export default Toolbox;
```

### Available props

- **label** - the text content of the tooltip
- **tag** - which HTML tag should be rendered for the sensitive area (The area, that triggers the tooltip if the mouse moves over it. It defaults to *div*)
- **delayBeforeTooltip** - how much time should pass before the tooltip shows up (A number of the milliseconds; defaults to 1000 - 1 second).
- **keepTooltipAlive** - how much time should tooltips be active, so if the mouse moves to another one, there's no delay again; defaults to 500 - 0.5 second).

Besides the above listed ones, you can use any props, that you would use on a react component.

## Support and Contributing

For help, discussion and bugs, check the project's [Github pages](https://github.com/johnnyfekete/elegant-react-tooltip/issues).

If you're interested in contributing to Elegant React Tooltip, please read our contributing docs before submitting a pull request.

If you like Elegant React Tooltip, or want to see my other work [follow me on twitter](https://twitter.com/JonatanFekete)

## License
MIT Licensed. Copyright (c) Johnny Fekete 2019.
