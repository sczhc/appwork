<template>
  <div>
    <h4 class="font-weight-bold py-3 mb-4">
      <span class="text-muted font-weight-light">Forms /</span> Input groups
    </h4>

    <div class="demo-vertical-spacing-sm bg-white rounded p-4 mb-4 clearfix">
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

    <b-card header="Sizing" header-tag="h6" class="mb-4">
      <div class="demo-vertical-spacing-sm">
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
    </b-card>

    <b-card header="Checkbox and radio addons" header-tag="h6" class="mb-4">
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
    </b-card>

    <b-card header="Custom select" header-tag="h6" class="mb-4">
      <div class="demo-vertical-spacing-sm">
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
    </b-card>

    <b-card header="Button addons" header-tag="h6" class="mb-4">
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
    </b-card>

    <b-card header="Buttons with dropdowns" header-tag="h6" class="mb-4">
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
    </b-card>

    <b-card header="Segmented buttons" header-tag="h6" class="mb-4">
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
    </b-card>

  </div>
</template>

<script>
export default {
  name: 'forms-input-groups',
  metaInfo: {
    title: 'Input groups - Forms'
  },
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
