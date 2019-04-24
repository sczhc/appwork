<template>
  <div class="ui-block">
    <h3 class="ui-block-heading">Numeral.js</h3>
    <a target="_blank" href="https://github.com/adamwdraper/Numeral-js" class="ui-block-description">https://github.com/adamwdraper/Numeral-js</a>

    <h4 class="ui-block-heading">Examples</h4>

    <div class="cui-example cui-example-vertical-spacing-sm">
      <p>{{ example1 }}</p>
      <p>{{ example2 }}</p>
      <p>{{ example3 }}</p>
      <p>{{ example4 }}</p>
      <p>{{ example5 }}</p>
    </div>
  </div>
</template>

<script>
import * as numeral from 'numeral'

export default {
  data: () => ({
    example1: numeral(1000.1234).format('0,0'),
    example2: numeral(1000.1234).format('0,0.00'),
    example3: numeral(1000.1234).format('+0,0'),
    example4: numeral(1000.1234).format('.00'),
    example5: numeral(1000.1234).format('$0,0.00')
  })
}
</script>
