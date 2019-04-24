<template>
  <div class="ui-block">
    <h3 class="ui-block-heading">Accordion</h3>

    <h4 class="ui-block-heading">Default</h4>

    <div class="cui-example">
      <b-card no-body class="mb-2">
        <b-card-header>
          <a class="text-dark" href="javascript:void(0)" v-b-toggle.accordion-1>Collapsible Group Item #1</a>
        </b-card-header>
        <b-collapse id="accordion-1" visible accordion="accordion">
          <b-card-body>
            Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
          </b-card-body>
        </b-collapse>
      </b-card>

      <b-card no-body class="mb-1">
        <b-card-header>
          <a class="text-dark" href="javascript:void(0)" v-b-toggle.accordion-2>Collapsible Group Item #2</a>
        </b-card-header>
        <b-collapse id="accordion-2" visible accordion="accordion">
          <b-card-body>
            Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
          </b-card-body>
        </b-collapse>
      </b-card>

      <b-card no-body class="mb-1">
        <b-card-header>
          <a class="text-dark" href="javascript:void(0)" v-b-toggle.accordion-3>Collapsible Group Item #3</a>
        </b-card-header>
        <b-collapse id="accordion-3" visible accordion="accordion">
          <b-card-body>
            Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
          </b-card-body>
        </b-collapse>
      </b-card>
    </div>

    <h4 class="ui-block-heading">With icon</h4>

    <div class="cui-example">
      <b-card no-body class="mb-2">
        <b-card-header>
          <a class="d-flex justify-content-between text-dark" href="javascript:void(0)" v-b-toggle.accordion2-1>
            Collapsible Group Item #1
            <div class="collapse-icon"></div>
          </a>
        </b-card-header>
        <b-collapse id="accordion2-1" visible accordion="accordion2">
          <b-card-body>
            Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
          </b-card-body>
        </b-collapse>
      </b-card>

      <b-card no-body class="mb-1">
        <b-card-header>
          <a class="d-flex justify-content-between text-dark" href="javascript:void(0)" v-b-toggle.accordion2-2>
            Collapsible Group Item #2
            <div class="collapse-icon"></div>
          </a>
        </b-card-header>
        <b-collapse id="accordion2-2" visible accordion="accordion2">
          <b-card-body>
            Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
          </b-card-body>
        </b-collapse>
      </b-card>

      <b-card no-body class="mb-1">
        <b-card-header>
          <a class="d-flex justify-content-between text-dark" href="javascript:void(0)" v-b-toggle.accordion2-3>
            Collapsible Group Item #3
            <div class="collapse-icon"></div>
          </a>
        </b-card-header>
        <b-collapse id="accordion2-3" visible accordion="accordion2">
          <b-card-body>
            Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
          </b-card-body>
        </b-collapse>
      </b-card>
    </div>
  </div>
</template>

<script>
export default {}
</script>
