<template>
  <div>
    <h4 class="font-weight-bold py-3 mb-4">
      <span class="text-muted font-weight-light">Miscellaneous /</span> Numeral.js
    </h4>

    <hr class="border-light container-m--x mt-0 mb-4">

    <b-card no-body>
      <b-card-body class="demo-vertical-spacing">
        <p>{{ example1 }}</p>
        <p>{{ example2 }}</p>
        <p>{{ example3 }}</p>
        <p>{{ example4 }}</p>
        <p>{{ example5 }}</p>
      </b-card-body>
    </b-card>
  </div>
</template>

<script>
import * as numeral from 'numeral'

export default {
  name: 'miscellaneous-numeraljs',
  metaInfo: {
    title: 'Numeral.js - Miscellaneous'
  },
  data: () => ({
    example1: numeral(1000.1234).format('0,0'),
    example2: numeral(1000.1234).format('0,0.00'),
    example3: numeral(1000.1234).format('+0,0'),
    example4: numeral(1000.1234).format('.00'),
    example5: numeral(1000.1234).format('$0,0.00')
  })
}
</script>
