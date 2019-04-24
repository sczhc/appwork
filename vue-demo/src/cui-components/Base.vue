<template>
  <div>
    <h1 id="main-header" class="bg-dark text-white">
      <span id="main-header-path">Vue.js Complete UI &nbsp;/&nbsp;</span>
      <b-dropdown text="Base" variant="link">
        <b-dropdown-item to="/complete-ui/plugins" :exact="true" class="dropdown-item text-big py-2 px-4"><span class="d-inline-block py-1 px-2">Plugins</span></b-dropdown-item>
        <b-dropdown-item to="/complete-ui/charts" :exact="true" class="dropdown-item text-big py-2 px-4"><span class="d-inline-block py-1 px-2">Charts</span></b-dropdown-item>
      </b-dropdown>
    </h1>

    <cui-typography />
    <cui-utilities />
    <cui-buttons />
    <cui-badges />
    <cui-button-groups />
    <cui-button-dropdowns />
    <cui-dropdowns />
    <cui-navs />
    <cui-pagination />
    <cui-progress-bars />
    <cui-list-groups />
    <cui-alerts />
    <cui-tooltips-and-popovers />
    <cui-modals />
    <cui-breadcrumbs />
    <cui-form-controls />
    <cui-custom-checkboxes-and-radios />
    <cui-custom-select />
    <cui-file-browser />
    <cui-forms />
    <cui-input-groups />
    <cui-switchers />
    <cui-app-brand />
    <cui-navbar />
    <cui-sidenav />
    <cui-footer />
    <cui-tables />
    <cui-media />
    <cui-thumbnails />
    <cui-cards />
    <cui-accordion />
    <cui-carousel />

    <div class="cui-bottom-spacer" />
  </div>
</template>

<style src="./Index.scss" lang="scss" />

<script>
import CuiTypography from './CuiTypography'
import CuiUtilities from './CuiUtilities'
import CuiButtons from './CuiButtons'
import CuiBadges from './CuiBadges'
import CuiButtonGroups from './CuiButtonGroups'
import CuiButtonDropdowns from './CuiButtonDropdowns'
import CuiDropdowns from './CuiDropdowns'
import CuiNavs from './CuiNavs'
import CuiPagination from './CuiPagination'
import CuiProgressBars from './CuiProgressBars'
import CuiListGroups from './CuiListGroups'
import CuiAlerts from './CuiAlerts'
import CuiTooltipsAndPopovers from './CuiTooltipsAndPopovers'
import CuiModals from './CuiModals'
import CuiBreadcrumbs from './CuiBreadcrumbs'
import CuiFormControls from './CuiFormControls'
import CuiCustomCheckboxesAndRadios from './CuiCustomCheckboxesAndRadios'
import CuiCustomSelect from './CuiCustomSelect'
import CuiFileBrowser from './CuiFileBrowser'
import CuiForms from './CuiForms'
import CuiInputGroups from './CuiInputGroups'
import CuiSwitchers from './CuiSwitchers'
import CuiAppBrand from './CuiAppBrand'
import CuiNavbar from './CuiNavbar'
import CuiSidenav from './CuiSidenav'
import CuiFooter from './CuiFooter'
import CuiTables from './CuiTables'
import CuiMedia from './CuiMedia'
import CuiThumbnails from './CuiThumbnails'
import CuiCards from './CuiCards'
import CuiAccordion from './CuiAccordion'
import CuiCarousel from './CuiCarousel'

export default {
  components: {
    'cui-typography': CuiTypography,
    'cui-utilities': CuiUtilities,
    'cui-buttons': CuiButtons,
    'cui-badges': CuiBadges,
    'cui-button-groups': CuiButtonGroups,
    'cui-button-dropdowns': CuiButtonDropdowns,
    'cui-dropdowns': CuiDropdowns,
    'cui-navs': CuiNavs,
    'cui-pagination': CuiPagination,
    'cui-progress-bars': CuiProgressBars,
    'cui-list-groups': CuiListGroups,
    'cui-alerts': CuiAlerts,
    'cui-tooltips-and-popovers': CuiTooltipsAndPopovers,
    'cui-modals': CuiModals,
    'cui-breadcrumbs': CuiBreadcrumbs,
    'cui-form-controls': CuiFormControls,
    'cui-custom-checkboxes-and-radios': CuiCustomCheckboxesAndRadios,
    'cui-custom-select': CuiCustomSelect,
    'cui-file-browser': CuiFileBrowser,
    'cui-forms': CuiForms,
    'cui-input-groups': CuiInputGroups,
    'cui-switchers': CuiSwitchers,
    'cui-app-brand': CuiAppBrand,
    'cui-navbar': CuiNavbar,
    'cui-sidenav': CuiSidenav,
    'cui-footer': CuiFooter,
    'cui-tables': CuiTables,
    'cui-media': CuiMedia,
    'cui-thumbnails': CuiThumbnails,
    'cui-cards': CuiCards,
    'cui-accordion': CuiAccordion,
    'cui-carousel': CuiCarousel
  },
  metaInfo: {
    title: 'Base - Vue.js Complete UI'
  }
}
</script>
