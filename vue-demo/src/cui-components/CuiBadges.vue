<template>
  <div class="ui-block">
    <h3 class="ui-block-heading">Badges</h3>

    <h4 class="ui-block-heading">Within headings</h4>

    <div class="cui-example">
      <h1>Example heading <b-badge variant="default">New</b-badge></h1>
      <h2>Example heading <b-badge variant="default">New</b-badge></h2>
      <h3>Example heading <b-badge variant="default">New</b-badge></h3>
      <h4>Example heading <b-badge variant="default">New</b-badge></h4>
      <h5>Example heading <b-badge variant="default">New</b-badge></h5>
      <h6>Example heading <b-badge variant="default">New</b-badge></h6>
    </div>

    <h4 class="ui-block-heading">Variations</h4>

    <div class="cui-example cui-example-inline-spacing">
      <b-badge href="javascript:void(0)" variant="default">Default</b-badge>
      <b-badge href="javascript:void(0)" variant="primary">Primary</b-badge>
      <b-badge href="javascript:void(0)" variant="secondary">Secondary</b-badge>
      <b-badge href="javascript:void(0)" variant="success">Success</b-badge>
      <b-badge href="javascript:void(0)" variant="info">Info</b-badge>
      <b-badge href="javascript:void(0)" variant="warning">Warning</b-badge>
      <b-badge href="javascript:void(0)" variant="danger">Danger</b-badge>
      <b-badge href="javascript:void(0)" variant="dark">Dark</b-badge>
    </div>

    <h4 class="ui-block-heading">Pills</h4>

    <div class="cui-example cui-example-inline-spacing">
      <b-badge href="javascript:void(0)" pill variant="default">Default</b-badge>
      <b-badge href="javascript:void(0)" pill variant="primary">Primary</b-badge>
      <b-badge href="javascript:void(0)" pill variant="secondary">Secondary</b-badge>
      <b-badge href="javascript:void(0)" pill variant="success">Success</b-badge>
      <b-badge href="javascript:void(0)" pill variant="info">Info</b-badge>
      <b-badge href="javascript:void(0)" pill variant="warning">Warning</b-badge>
      <b-badge href="javascript:void(0)" pill variant="danger">Danger</b-badge>
      <b-badge href="javascript:void(0)" pill variant="dark">Dark</b-badge>
    </div>

    <h4 class="ui-block-heading">Outline</h4>

    <div class="cui-example cui-example-inline-spacing">
      <b-badge href="javascript:void(0)" variant="outline-default">Default</b-badge>
      <b-badge href="javascript:void(0)" variant="outline-primary">Primary</b-badge>
      <b-badge href="javascript:void(0)" variant="outline-secondary">Secondary</b-badge>
      <b-badge href="javascript:void(0)" variant="outline-success">Success</b-badge>
      <b-badge href="javascript:void(0)" variant="outline-info">Info</b-badge>
      <b-badge href="javascript:void(0)" variant="outline-warning">Warning</b-badge>
      <b-badge href="javascript:void(0)" variant="outline-danger">Danger</b-badge>
      <b-badge href="javascript:void(0)" variant="outline-dark">Dark</b-badge>
    </div>

    <h4 class="ui-block-heading">Button badges</h4>

    <div class="cui-example cui-example-paragraph-spacing">
      <p>
        <b-btn variant="primary">Messages <b-badge variant="light">4</b-badge></b-btn>
        <b-btn variant="secondary">Messages <b-badge variant="light">4</b-badge></b-btn>
        <b-btn variant="default">Messages <b-badge variant="light">4</b-badge></b-btn>
        <b-btn variant="success">Messages <b-badge variant="light">4</b-badge></b-btn>
        <b-btn variant="warning">Messages <b-badge variant="light">4</b-badge></b-btn>
        <b-btn variant="info">Messages <b-badge variant="light">4</b-badge></b-btn>
        <b-btn variant="danger">Messages <b-badge variant="light">4</b-badge></b-btn>
        <b-btn variant="dark">Messages <b-badge variant="light">4</b-badge></b-btn>
      </p>
      <p>
        <b-btn variant="outline-primary">Messages <b-badge variant="light">4</b-badge></b-btn>
        <b-btn variant="outline-secondary">Messages <b-badge variant="light">4</b-badge></b-btn>
        <b-btn variant="outline-default">Messages <b-badge variant="light">4</b-badge></b-btn>
        <b-btn variant="outline-success">Messages <b-badge variant="light">4</b-badge></b-btn>
        <b-btn variant="outline-warning">Messages <b-badge variant="light">4</b-badge></b-btn>
        <b-btn variant="outline-info">Messages <b-badge variant="light">4</b-badge></b-btn>
        <b-btn variant="outline-danger">Messages <b-badge variant="light">4</b-badge></b-btn>
        <b-btn variant="outline-dark">Messages <b-badge variant="light">4</b-badge></b-btn>
      </p>
    </div>

    <h4 class="ui-block-heading">Dot badges</h4>

    <div class="cui-example">
      <b-badge variant="default badge-dot"></b-badge> Default&nbsp;&nbsp;
      <b-badge variant="primary badge-dot"></b-badge> Primary&nbsp;&nbsp;
      <b-badge variant="success badge-dot"></b-badge> Success&nbsp;&nbsp;
      <b-badge variant="info badge-dot"></b-badge> Info&nbsp;&nbsp;
      <b-badge variant="warning badge-dot"></b-badge> Warning&nbsp;&nbsp;
      <b-badge variant="danger badge-dot"></b-badge> Danger
    </div>

    <h4 class="ui-block-heading">Indicators</h4>

    <div class="cui-example cui-example-inline-spacing">
      <b-btn variant="default">Badge <b-badge variant="primary indicator">12</b-badge></b-btn>&nbsp;&nbsp;
      <b-btn variant="default">Outlined badge <b-badge variant="outline-success indicator">12</b-badge></b-btn>&nbsp;&nbsp;
      <b-btn variant="default">Pill <b-badge pill variant="info indicator">12</b-badge></b-btn>&nbsp;&nbsp;
      <b-btn variant="default">Outlined pill <b-badge pill variant="outline-danger indicator">12</b-badge></b-btn>&nbsp;&nbsp;
      <b-btn variant="default">Dot <b-badge variant="danger badge-dot indicator"></b-badge></b-btn>&nbsp;&nbsp;
      <b-btn variant="default">Outlined dot <b-badge variant="outline-success badge-dot indicator"></b-badge></b-btn>
    </div>
  </div>
</template>

<script>
export default {}
</script>
