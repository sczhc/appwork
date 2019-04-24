<template>
  <div class="ui-block">
    <h3 class="ui-block-heading">Input groups</h3>

    <h4 class="ui-block-heading">Example</h4>

    <div class="cui-example cui-example-vertical-spacing-sm">
      <b-input-group prepend="@">
        <b-input />
      </b-input-group>

      <b-input-group append="@example.com">
        <b-input placeholder="Recipient's username" />
      </b-input-group>

      <b-input-group prepend="https://example.com/users/">
        <b-input />
      </b-input-group>

      <b-input-group prepend="$" append=".00">
        <b-input />
      </b-input-group>

      <b-input-group>
        <b-input-group-text slot="prepend">$</b-input-group-text>
        <b-input-group-text slot="prepend">0.00</b-input-group-text>
        <b-input />
      </b-input-group>
    </div>

    <h4 class="ui-block-heading">Sizing</h4>

    <div class="cui-example cui-example-vertical-spacing-sm">
      <b-input-group size="sm" prepend="@">
        <b-input placeholder="Username" />
      </b-input-group>

      <b-input-group prepend="@">
        <b-input placeholder="Username" />
      </b-input-group>

      <b-input-group size="lg" prepend="@">
        <b-input placeholder="Username" />
      </b-input-group>
    </div>

    <h4 class="ui-block-heading">Checkbox and radio addons</h4>

    <div class="cui-example">
      <div class="row">
        <div class="col-md mb-3">

          <b-input-group>
            <b-input-group-text slot="prepend">
              <b-check class="px-2 m-0" />
            </b-input-group-text>
            <b-input placeholder="Username" />
          </b-input-group>

        </div>
        <div class="col-md mb-3">

          <b-input-group>
            <b-input-group-text slot="prepend">
              <b-radio class="px-2 m-0" />
            </b-input-group-text>
            <b-input placeholder="Username" />
          </b-input-group>

        </div>
        <div class="w-100"></div>
        <div class="col-md mb-3">

          <b-input-group>
            <b-input-group-text slot="prepend">
              <input type="checkbox">
            </b-input-group-text>
            <b-input placeholder="Username" />
          </b-input-group>

        </div>
        <div class="col-md mb-3">

          <b-input-group>
            <b-input-group-text slot="prepend">
              <input type="radio">
            </b-input-group-text>
            <b-input placeholder="Username" />
          </b-input-group>

        </div>
      </div>
    </div>

    <h4 class="ui-block-heading">Custom select</h4>

    <div class="cui-example cui-example-vertical-spacing-sm">
      <b-input-group>
        <b-select v-model="selected" :options="options" class="flex-grow-1" />
        <b-btn slot="append">Go!</b-btn>
      </b-input-group>

      <b-input-group>
        <b-input placeholder="Search for..." />
        <b-select v-model="selected" :options="options" />
        <b-btn slot="append">Go!</b-btn>
      </b-input-group>

      <b-input-group>
        <b-select v-model="selected" :options="options" />
        <b-input placeholder="Search for..." />
        <b-btn slot="append">Go!</b-btn>
      </b-input-group>

      <b-input-group>
        <b-btn slot="prepend">Go!</b-btn>
        <b-input placeholder="Search for..." />
        <b-select v-model="selected" :options="options" />
      </b-input-group>
    </div>

    <h4 class="ui-block-heading">Multiple addons</h4>

    <div class="cui-example">
      <div class="row">
        <div class="col-md">

          <b-form-group>
            <b-input-group>
              <b-input-group-text slot="prepend">$</b-input-group-text>
              <b-input-group-text slot="prepend">
                <input type="checkbox">
              </b-input-group-text>
              <b-input placeholder="Username" />
            </b-input-group>
          </b-form-group>

        </div>
        <div class="col-md">

          <b-form-group>
            <b-input-group>
              <b-input-group-text slot="prepend">$</b-input-group-text>
              <b-input-group-text slot="prepend">0.00</b-input-group-text>
              <b-input />
            </b-input-group>
          </b-form-group>

        </div>
      </div>
    </div>

    <h4 class="ui-block-heading">Button addons</h4>

    <div class="cui-example">
      <div class="row">
        <div class="col-md">

          <b-form-group>
            <b-input-group>
              <b-btn slot="prepend">Go!</b-btn>
              <b-input placeholder="Search for..." />
            </b-input-group>
          </b-form-group>

        </div>
        <div class="col-md">

          <b-form-group>
            <b-input-group>
              <b-input placeholder="Search for..." />
              <b-btn slot="append">Go!</b-btn>
            </b-input-group>
          </b-form-group>

        </div>
        <div class="w-100"></div>
        <div class="col-md">

          <b-form-group>
            <b-input-group>
              <b-btn slot="prepend">Hate it</b-btn>
              <b-input placeholder="Search for..." />
              <b-btn slot="append">Love it</b-btn>
            </b-input-group>
          </b-form-group>

        </div>
      </div>
    </div>

    <h4 class="ui-block-heading">Buttons with dropdowns</h4>

    <div class="cui-example">
      <div class="row">
        <div class="col-md">

          <b-form-group>
            <b-input-group>
              <b-dd text="Action" :right="isRTL" slot="prepend">
                <b-dd-item>Action 1</b-dd-item>
                <b-dd-item>Action 2</b-dd-item>
              </b-dd>
              <b-input placeholder="Search for..." />
            </b-input-group>
          </b-form-group>

        </div>
        <div class="col-md">

          <b-form-group>
            <b-input-group>
              <b-input placeholder="Search for..." />
              <b-dd text="Action" :right="!isRTL" slot="append">
                <b-dd-item>Action 1</b-dd-item>
                <b-dd-item>Action 2</b-dd-item>
              </b-dd>
            </b-input-group>
          </b-form-group>

        </div>
      </div>
    </div>

    <h4 class="ui-block-heading">Segmented buttons</h4>

    <div class="cui-example">
      <div class="row">
        <div class="col-md">

          <b-form-group>
            <b-input-group>
              <b-dd split text="Action" :right="isRTL" slot="prepend">
                <b-dd-item>Action 1</b-dd-item>
                <b-dd-item>Action 2</b-dd-item>
              </b-dd>
              <b-input placeholder="Search for..." />
            </b-input-group>
          </b-form-group>

        </div>
        <div class="col-md">

          <b-form-group>
            <b-input-group>
              <b-input placeholder="Search for..." />
              <b-dd split text="Action" :right="!isRTL" slot="append">
                <b-dd-item>Action 1</b-dd-item>
                <b-dd-item>Action 2</b-dd-item>
              </b-dd>
            </b-input-group>
          </b-form-group>

        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    options: [
      { text: 'Orange', value: 'orange' },
      { text: 'Apple', value: 'apple' },
      { text: 'Pineapple', value: 'pineapple' },
      { text: 'Grape', value: 'grape', disabled: true }
    ],
    selected: 'apple'
  })
}
</script>
