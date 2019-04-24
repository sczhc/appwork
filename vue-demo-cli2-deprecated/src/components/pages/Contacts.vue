<template>
  <div>

    <h4 class="font-weight-bold py-3 mb-4">
      Contacts
    </h4>

    <div class="d-flex flex-wrap justify-content-between ui-bordered px-3 pt-3 mb-4">
      <div>
        <!-- View toggle -->
        <b-button-group class="mb-3">
          <b-btn variant="default icon-btn md-btn-flat" :pressed="viewMode === 'col'" @click="viewMode='col'"><i class="ion ion-md-apps"></i></b-btn>
          <b-btn variant="default icon-btn md-btn-flat" :pressed="viewMode === 'row'" @click="viewMode='row'"><i class="ion ion-md-menu"></i></b-btn>
        </b-button-group>
        <!-- / View toggle -->

        <b-btn variant="outline-primary" class="mb-3 ml-3"><span class="ion ion-md-add"></span>&nbsp; Add contact</b-btn>
      </div>
      <b-input class="mb-3" placeholder="Search..." style="max-width: 200px;" />
    </div>

    <!-- Set `.contacts-col-view` or '.contacts-row-view' to control view mode -->
    <div class="row" :class="`contacts-${viewMode}-view`">
      <div v-for="contact in contactsData" :key="contact.username" class="contacts-col col-12">

        <b-card class="mb-4">
          <b-dropdown class="contacts-dropdown" variant="default icon-btn borderless btn-round md-btn-flat hide-arrow" size="sm" :right="!isRTL">
            <template slot="button-content"><i class="ion ion-ios-more"></i></template>
            <b-dropdown-item href="javascript:void(0)">Edit</b-dropdown-item>
            <b-dropdown-item href="javascript:void(0)">Remove</b-dropdown-item>
          </b-dropdown>

          <div class="contact-content">
            <img :src="`${baseUrl}img/avatars/${contact.avatar}`" class="contact-content-img rounded-circle" alt="">
            <div class="contact-content-about">
              <h5 class="contact-content-name mb-1"><a href="javascript:void(0)" class="text-dark">{{contact.name}}</a></h5>
              <div class="contact-content-user text-muted small mb-2">@{{contact.username}}</div>
              <div class="small">
                <div v-if="contact.company">{{contact.company}}</div>
                <div v-if="contact.phone">{{contact.phone}}</div>
              </div>
              <hr class="border-light">
              <div>
                <a href="javascript:void(0)" class="text-secondary"><span class="ion ion-md-mail"></span></a> &nbsp;&nbsp;
                <a href="javascript:void(0)" class="text-secondary"><span class="ion ion-ios-chatbubbles"></span></a> &nbsp;&nbsp;
                <span class="text-lighter">|</span> &nbsp;&nbsp;
                <a href="javascript:void(0)" class="text-twitter"><span class="ion ion-logo-twitter"></span></a> &nbsp;&nbsp;
                <a href="javascript:void(0)" class="text-facebook"><span class="ion ion-logo-facebook"></span></a> &nbsp;&nbsp;
                <a href="javascript:void(0)" class="text-instagram"><span class="ion ion-logo-instagram"></span></a>
              </div>
            </div>
          </div>
        </b-card>

      </div>
    </div><!-- / .row -->

  </div>
</template>

<!-- Page -->
<style src="@/vendor/styles/pages/contacts.scss" lang="scss"></style>

<script>
export default {
  name: 'pages-contacts',
  metaInfo: {
    title: 'Contacts - Pages'
  },
  data: () => ({
    viewMode: 'col',

    contactsData: [
      {
        avatar: '9.png',
        name: 'Amanda Warner',
        username: 'awarner',
        company: 'Company Inc.',
        phone: '+0 (123) 456 7891'
      }, {
        avatar: '5.png',
        name: 'Nelle Maxwell',
        username: 'nmaxwell',
        company: 'Company Inc.',
        phone: '+0 (123) 456 7891'
      }, {
        avatar: '4.png',
        name: 'Kenneth Frazier',
        username: 'kfrazier',
        company: 'Company Inc.',
        phone: '+0 (123) 456 7891'
      }, {
        avatar: '6.png',
        name: 'Mae Gibson',
        username: 'mgibson',
        company: 'Company Inc.',
        phone: '+0 (123) 456 7891'
      }, {
        avatar: '12.png',
        name: 'Arthur Duncan',
        username: 'aduncan',
        company: 'Company Inc.',
        phone: '+0 (123) 456 7891'
      }, {
        avatar: '11.png',
        name: 'Belle Ross',
        username: 'bross',
        company: 'Company Inc.',
        phone: '+0 (123) 456 7891'
      }, {
        avatar: '3.png',
        name: 'Allie Rodriguez',
        username: 'arodriguez',
        company: 'Company Inc.',
        phone: '+0 (123) 456 7891'
      }, {
        avatar: '7.png',
        name: 'Alice Hampton',
        username: 'ahampton',
        company: 'Company Inc.',
        phone: '+0 (123) 456 7891'
      }
    ]
  })
}
</script>
