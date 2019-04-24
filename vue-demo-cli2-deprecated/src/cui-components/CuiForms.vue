<template>
  <div class="ui-block">
    <h3 class="ui-block-heading">Forms</h3>

    <h4 class="ui-block-heading">Example</h4>

    <div class="cui-example">
      <b-form>
        <b-form-group label="Email address">
          <b-input type="email" placeholder="Email" />
        </b-form-group>
        <b-form-group label="Password">
          <b-input type="password" placeholder="Password" />
        </b-form-group>
        <b-form-group label="File input" description="Example block-level help text here.">
          <b-file />
        </b-form-group>
        <b-form-group>
          <b-check>Check this custom checkbox</b-check>
        </b-form-group>
        <b-form-group>
          <b-check plain>Check me out</b-check>
        </b-form-group>
        <b-btn type="submit" variant="default">Submit</b-btn>
      </b-form>
    </div>

    <h4 class="ui-block-heading">Form row</h4>

    <div class="cui-example">
      <form>
        <b-form-row>
          <b-form-group label="Email" class="col-md-6">
            <b-input type="email" placeholder="Email" />
          </b-form-group>
          <b-form-group label="Password" class="col-md-6">
            <b-input type="password" placeholder="Password" />
          </b-form-group>
        </b-form-row>
        <b-form-group label="Address">
          <b-input placeholder="1234 Main St" />
        </b-form-group>
        <b-form-group label="Address 2">
          <b-input placeholder="Apartment, studio, or floor" />
        </b-form-group>
        <b-form-row>
          <b-form-group label="City" class="col-md-6">
            <b-input />
          </b-form-group>
          <b-form-group label="State" class="col-md-4">
            <b-select value="Select state" :options="['Select state','California','Hawaii','Florida','Texas','Massachusetts','Alabama']" />
          </b-form-group>
          <b-form-group label="Zip" class="col-md-2">
            <b-input />
          </b-form-group>
        </b-form-row>
        <b-form-group>
          <b-check>Check this custom checkbox</b-check>
        </b-form-group>
        <b-btn type="submit" variant="primary">Sign in</b-btn>
      </form>
    </div>

    <h4 class="ui-block-heading">Horizontal</h4>

    <div class="cui-example">
      <b-form>
        <b-form-group horizontal :label-cols="2">
          <div slot="label" class="text-sm-right pr-sm-2">Email</div>
          <b-input type="email" placeholder="Email" />
        </b-form-group>
        <b-form-group horizontal :label-cols="2">
          <div slot="label" class="text-sm-right pr-sm-2">Password</div>
          <b-input type="password" placeholder="Password" />
        </b-form-group>
        <b-form-group horizontal :label-cols="2">
          <div slot="label" class="text-sm-right pr-sm-2">Textarea</div>
          <b-textarea placeholder="Textarea" :rows="3" />
        </b-form-group>
        <b-form-group horizontal :label-cols="2" label-class="pt-sm-0">
          <div slot="label" class="text-sm-right pr-sm-2">Radios</div>
          <b-radio-group stacked :options="options" :checked="1" />
        </b-form-group>
        <b-form-group horizontal :label-cols="2" label-class="pt-sm-0">
          <div slot="label" class="text-sm-right pr-sm-2">Checkbox</div>
          <b-check>Check me out</b-check>
        </b-form-group>
        <b-form-row>
          <div class="col-sm-10 ml-sm-auto">
            <b-btn type="submit" variant="primary">Sign in</b-btn>
          </div>
        </b-form-row>
      </b-form>
    </div>

    <h4 class="ui-block-heading">Inline</h4>

    <div class="cui-example cui-example-vertical-spacing">
      <b-form inline>
        <b-input class="mr-sm-2 mb-2 mb-sm-0" placeholder="Jane Doe" />
        <b-input-group class="mr-sm-2 mb-2 mb-sm-0">
          <b-input-group-addon slot="left">@</b-input-group-addon>
          <b-input placeholder="Username" />
        </b-input-group>
        <b-check class="mr-sm-2 mb-2 mb-sm-0">Remember me</b-check>
        <b-btn variant="primary">Save</b-btn>
      </b-form>

      <b-form inline>
        <label class="form-label mr-sm-2">Preference</label>
        <b-select class="custom-select mr-sm-2 mb-2 mb-sm-0" value="Choose..." :options="['Choose...','One','Two','Three']" />
        <b-check class="mr-sm-2 mb-2 mb-sm-0">Remember my preference</b-check>
        <b-btn variant="primary">Submit</b-btn>
      </b-form>
    </div>

    <h4 class="ui-block-heading">Help text</h4>

    <div class="cui-example cui-example-vertical-spacing">
      <b-form>
        <b-form-group label="Password" description="Your password must be 8-20 characters long, contain letters and numbers, and must not contain spaces, special characters, or emoji.">
          <b-input type="password" />
        </b-form-group>
      </b-form>

      <b-form inline>
        <label class="form-label mr-sm-2">Password</label>
        <b-input type="password" class="mr-sm-2" />
        <small class="text-muted">Password must be 8-20 characters long</small>
      </b-form>
    </div>

    <h4 class="ui-block-heading">Static controls</h4>

    <div class="cui-example cui-example-vertical-spacing">
      <b-form>
        <b-form-group horizontal :label-cols="2">
          <div slot="label" class="text-sm-right pr-sm-2">Email</div>
          <b-input plaintext value="example@email.com" />
        </b-form-group>
        <b-form-group horizontal :label-cols="2">
          <div slot="label" class="text-sm-right pr-sm-2">Password</div>
          <b-input type="password" placeholder="Password" />
        </b-form-group>
        <b-form-row>
          <div class="col-sm-10 ml-sm-auto">
            <button type="submit" class="btn btn-default">Confirm identity</button>
          </div>
        </b-form-row>
      </b-form>

      <!-- Inline form -->
      <b-form inline>
        <b-input plaintext value="example@email.com" class="w-auto mr-sm-2 mb-2 mb-sm-0" />
        <b-input type="password" placeholder="Password" class="mr-sm-2 mb-2 mb-sm-0" />
        <button type="submit" class="btn btn-default">Confirm identity</button>
      </b-form>
    </div>

    <h4 class="ui-block-heading">States</h4>

    <div class="cui-example cui-example-vertical-spacing-sm">
      <!-- Valid -->
      <b-form-group label="Valid">
        <b-input :state="'valid'" />
      </b-form-group>

      <!-- Invalid -->
      <b-form-group label="Invalid" feedback="A block of help text that breaks onto a new line and may extend beyond one line.">
        <b-input :state="'invalid'" />
      </b-form-group>

      <!-- With tooltip -->
      <b-form-group label="Invalid with tooltip" class="position-relative">
        <b-input :state="'invalid'" />
        <div class="invalid-tooltip">Please provide a valid state.</div>
      </b-form-group>
    </div>

    <h4 class="ui-block-heading">Sizes</h4>

    <div class="cui-example cui-example-vertical-spacing">
      <b-form>
        <!-- Large -->
        <b-form-group>
          <label class="form-label form-label-lg">Large label</label>
          <b-input size="lg" placeholder="Large input" />
        </b-form-group>

        <!-- Small -->
        <b-form-group>
          <label class="form-label form-label-sm">Small label</label>
          <b-input size="sm" placeholder="Small input" />
        </b-form-group>
      </b-form>

      <b-form>
        <!-- Large -->
        <b-form-row class="mb-3">
          <label class="col-form-label col-form-label-lg col-sm-2 text-sm-right">Large label</label>
          <div class="col-sm-10">
            <b-input size="lg" placeholder="Large input" />
          </div>
        </b-form-row>

        <!-- Small -->
        <b-form-row>
          <label class="col-form-label col-form-label-sm col-sm-2 text-sm-right">Small label</label>
          <div class="col-sm-10">
            <b-input size="sm" placeholder="Small input" />
          </div>
        </b-form-row>
      </b-form>
    </div>
  </div>

</template>

<script>
export default {
  data: () => ({
    options: [
      { text: 'Option one is this and that&mdash;be sure to include why it\'s great', value: 1 },
      { text: 'Option two can be something else and selecting it will deselect option one', value: 2 },
      { text: 'Option three is disabled', value: 3, disabled: true }
    ]
  })
}
</script>
