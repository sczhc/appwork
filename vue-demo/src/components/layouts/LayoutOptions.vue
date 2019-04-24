<template>
  <div>
    <div class="py-3 mb-4">
      <h4 class="font-weight-bold mb-2">
        <span class="text-muted font-weight-light">Layouts /</span> Layout options
      </h4>
      <div class="text-muted text-big font-weight-light">
        You can configure the initial layout by setting control classes to the <strong class="font-weight-bold">html</strong> element. See also <a href="layouts_helpers.html">layout helpers.</a>
      </div>
    </div>

    <hr class="border-light container-m--x mt-0 mb-4">

    <pre class="layout-example-code mb-4"><code>&lt;html class="layout-fixed layout-collapsed"&gt;
    ...
  &lt;/html&gt;</code></pre>

    <div class="alert alert-warning text-big p-4 mb-4">
      After the initial layout setup the recommended way to control layout options is <router-link to="/layouts/helpers">layout helpers</router-link>,
      because the helpers do some extra work, such as: setting container paddings (when navbar is fixed),
      performing layout animations, setting correct sidenav state classes depending on screen size etc.
    </div>

    <div class="card mb-4">
      <div class="card-body">
        <pre class="layout-example-code text-big p-0 mb-3"><code>.layout-reversed</code></pre>
        Reverse layout direction without markup change.
      </div>
    </div>

    <div class="card mb-4">
      <div class="card-body">
        <pre class="layout-example-code text-big p-0 mb-3"><code>.layout-expanded</code></pre>
        Expand layout sidenav on small screens (&lt; 992px).
      </div>
    </div>

    <div class="card mb-4">
      <div class="card-body">
        <pre class="layout-example-code text-big p-0 mb-3"><code>.layout-collapsed</code></pre>
        Collapse layout sidenav on large screens (&gt;= 992px).
      </div>
    </div>

    <div class="card mb-4">
      <div class="card-body">
        <pre class="layout-example-code text-big p-0 mb-3"><code>.layout-offcanvas</code></pre>
        Make layout sidenav offcanvas.
      </div>
    </div>

    <div class="card mb-4">
      <div class="card-body">
        <pre class="layout-example-code text-big p-0 mb-3"><code>.layout-fixed</code></pre>
        Set layout position to fixed.
      </div>
    </div>

    <div class="card mb-4">
      <div class="card-body">
        <pre class="layout-example-code text-big p-0 mb-3"><code>.layout-fixed-offcanvas</code></pre>
        Set layout position to fixed with offcanvas sidenav.
      </div>
    </div>

    <div class="card mb-4">
      <div class="card-body">
        <pre class="layout-example-code text-big p-0 mb-3"><code>.layout-navbar-fixed</code></pre>
        Set layout navbar position to fixed.
      </div>
    </div>

    <div class="card mb-4">
      <div class="card-body">
        <pre class="layout-example-code text-big p-0 mb-3"><code>.layout-footer-fixed</code></pre>
        Set layout footer position to fixed.
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'layout-options-example',
  metaInfo: {
    title: 'Layout options - Layouts'
  }
}
</script>
