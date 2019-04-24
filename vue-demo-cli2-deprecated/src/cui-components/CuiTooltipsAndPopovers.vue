<template>
  <div>
    <div class="ui-block">
      <h3 class="ui-block-heading">Tooltips</h3>

      <h4 class="ui-block-heading">Position</h4>

      <div class="cui-example cui-example-inline-spacing">
        <b-btn variant="default" v-b-tooltip.top title="Tooltip on top">Top</b-btn>
        <b-btn variant="default" v-b-tooltip.right title="Tooltip on right">Right</b-btn>
        <b-btn variant="default" v-b-tooltip.left title="Tooltip on left">Left</b-btn>
        <b-btn variant="default" v-b-tooltip.bottom title="Tooltip on bottom">Bottom</b-btn>
      </div>

      <h4 class="ui-block-heading">Variations</h4>

      <div class="cui-example cui-example-inline-spacing">
        <b-btn id="primaryTooltip" variant="default" title="Primary tooltip">Primary</b-btn>
        <b-tooltip id="primaryTooltip-container" container="primaryTooltip-container" target="primaryTooltip" class="tooltip-primary d-inline-block" placement="top" />

        <b-btn id="secondaryTooltip" variant="default" title="Secondary tooltip">Secondary</b-btn>
        <b-tooltip id="secondaryTooltip-container" container="secondaryTooltip-container" target="secondaryTooltip" class="tooltip-secondary d-inline-block" placement="bottom" />

        <b-btn id="successTooltip" variant="default" title="Success tooltip">Success</b-btn>
        <b-tooltip id="successTooltip-container" container="successTooltip-container" target="successTooltip" class="tooltip-success d-inline-block" placement="right" />

        <b-btn id="infoTooltip" variant="default" title="Info tooltip">Info</b-btn>
        <b-tooltip id="infoTooltip-container" container="infoTooltip-container" target="infoTooltip" class="tooltip-info d-inline-block" placement="left" />

        <b-btn id="warningTooltip" variant="default" title="Warning tooltip">Warning</b-btn>
        <b-tooltip id="warningTooltip-container" container="warningTooltip-container" target="warningTooltip" class="tooltip-warning d-inline-block" placement="bottom" />

        <b-btn id="dangerTooltip" variant="default" title="Danger tooltip">Danger</b-btn>
        <b-tooltip id="dangerTooltip-container" container="dangerTooltip-container" target="dangerTooltip" class="tooltip-danger d-inline-block" placement="left" />

        <b-btn id="darkTooltip" variant="default" title="Dark tooltip">Dark</b-btn>
        <b-tooltip id="darkTooltip-container" container="darkTooltip-container" target="darkTooltip" class="tooltip-dark d-inline-block" placement="top" />
      </div>
    </div>

    <div class="ui-block">
      <h3 class="ui-block-heading">Popovers</h3>

      <div class="no-ie10" data-name="Popover"></div>

      <h4 class="ui-block-heading">Position</h4>

      <div class="cui-example cui-example-inline-spacing">
        <b-btn variant="default" v-b-popover.hover.focus.top="'Vivamus sagittis lacus vel augue laoreet rutrum faucibus.'" title="Tooltip on top">Top</b-btn>
        <b-btn variant="default" v-b-popover.hover.focus.right="'Vivamus sagittis lacus vel augue laoreet rutrum faucibus.'" title="Tooltip on right">Right</b-btn>
        <b-btn variant="default" v-b-popover.hover.focus.left="'Vivamus sagittis lacus vel augue laoreet rutrum faucibus.'" title="Tooltip on left">Left</b-btn>
        <b-btn variant="default" v-b-popover.hover.focus.bottom="'Vivamus sagittis lacus vel augue laoreet rutrum faucibus.'" title="Tooltip on bottom">Bottom</b-btn>
      </div>

      <h4 class="ui-block-heading">Variations</h4>

      <div class="cui-example cui-example-inline-spacing">
        <b-btn id="primaryPopover" variant="default" title="Primary popover">Primary</b-btn>
        <b-popover id="primaryPopover-container" container="primaryPopover-container" target="primaryPopover" class="popover-primary d-inline-block" placement="top" triggers="hover focus" content="Embedding content using properties is easy" />

        <b-btn id="secondaryPopover" variant="default" title="Secondary popover">Secondary</b-btn>
        <b-popover id="secondaryPopover-container" container="secondaryPopover-container" target="secondaryPopover" class="popover-secondary d-inline-block" placement="bottom" triggers="hover focus" content="Embedding content using properties is easy" />

        <b-btn id="successPopover" variant="default" title="Success popover">Success</b-btn>
        <b-popover id="successPopover-container" container="successPopover-container" target="successPopover" class="popover-success d-inline-block" placement="right" triggers="hover focus" content="Embedding content using properties is easy" />

        <b-btn id="infoPopover" variant="default" title="Info popover">Info</b-btn>
        <b-popover id="infoPopover-container" container="infoPopover-container" target="infoPopover" class="popover-info d-inline-block" placement="left" triggers="hover focus" content="Embedding content using properties is easy" />

        <b-btn id="warningPopover" variant="default" title="Warning popover">Warning</b-btn>
        <b-popover id="warningPopover-container" container="warningPopover-container" target="warningPopover" class="popover-warning d-inline-block" placement="bottom" triggers="hover focus" content="Embedding content using properties is easy" />

        <b-btn id="dangerPopover" variant="default" title="Danger popover">Danger</b-btn>
        <b-popover id="dangerPopover-container" container="dangerPopover-container" target="dangerPopover" class="popover-danger d-inline-block" placement="left" triggers="hover focus" content="Embedding content using properties is easy" />

        <b-btn id="darkPopover" variant="default" title="Dark popover">Dark</b-btn>
        <b-popover id="darkPopover-container" container="darkPopover-container" target="darkPopover" class="popover-dark d-inline-block" placement="top" triggers="hover focus" content="Embedding content using properties is easy" />
      </div>
    </div>
  </div>
</template>

<script>
export default {}
</script>
