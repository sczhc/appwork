const Util = require('../node_modules/bootstrap/js/src/util.js').default;
const Alert = require('../node_modules/bootstrap/js/src/alert.js').default;
const Button = require('../node_modules/bootstrap/js/src/button.js').default;
const Carousel = require('../node_modules/bootstrap/js/src/carousel.js').default;
const Collapse = require('../node_modules/bootstrap/js/src/collapse.js').default;
const Dropdown = require('../node_modules/bootstrap/js/src/dropdown.js').default;
const Modal = require('../node_modules/bootstrap/js/src/modal.js').default;
const Scrollspy = require('../node_modules/bootstrap/js/src/scrollspy.js').default;
const Tab = require('../node_modules/bootstrap/js/src/tab.js').default;
const Tooltip = require('../node_modules/bootstrap/js/src/tooltip.js').default;
const Popover = require('../node_modules/bootstrap/js/src/popover.js').default;

// Tooltip extension
//

const bsTooltipSetContent = Tooltip.prototype.setContent;

// Set tooltip state
Tooltip.prototype.setContent = function() {
  const state = this.element.getAttribute('data-state');

  if (state) {
    $(this.getTipElement()).addClass(`tooltip-${state.replace(/[^a-z0-9_-]/ig, '')}`);
  }

  bsTooltipSetContent.call(this);
};

// Popover extension
//

const bsPopoverSetContent = Popover.prototype.setContent;

// Set popover state
Popover.prototype.setContent = function() {
  const state = this.element.getAttribute('data-state');

  if (state) {
    $(this.getTipElement()).addClass(`popover-${state.replace(/[^a-z0-9_-]/ig, '')}`);
  }

  bsPopoverSetContent.call(this);
};

export {
  Util,
  Alert,
  Button,
  Carousel,
  Collapse,
  Dropdown,
  Modal,
  Scrollspy,
  Tab,
  Tooltip,
  Popover
};
