<template>
  <!-- `.clients-wrapper` fills all available space of container -->
  <div class="clients-wrapper" :class="{'clients-sidebox-open': sideboxOpened}">

    <!-- `.clients-content` fills all available space of `clients-wrapper` -->
    <perfect-scrollbar :options="{ suppressScrollX: true, wheelPropagation: true }" class="clients-content clients-scroll container-p-x container-p-y">

      <!-- Header -->
      <h4 class="d-flex flex-wrap justify-content-between align-items-center font-weight-bold pt-2 mb-4">
        <div class="mb-2">Clients</div>
        <div class="mb-2" style="max-width: 200px;">
          <b-input placeholder="Search" />
        </div>
      </h4>
      <!-- / Header -->

      <!-- Clients list -->
      <div class="table-responsive ui-bordered">
        <table class="clients-table table table-hover m-0">
          <tbody>

            <tr v-for="client in clientsData" :key="client.name" :class="{'bg-light': selected === client && sideboxOpened}" @click="selectClient(client)">
              <td class="align-middle py-3">
                <div class="media align-items-center">
                  <img :src="`${baseUrl}img/avatars/${client.avatar}`" class="d-block ui-w-40 rounded-circle" alt="">
                  <div class="media-body flex-basis-auto pl-3">
                    <div>{{client.name}}</div>
                    <div class="text-muted small">@{{client.username}}</div>
                  </div>
                </div>
              </td>
              <td class="align-middle py-3">
                {{client.company}}
              </td>
              <td class="align-middle py-3">
                <div>{{client.email}}</div>
                <div v-if="client.phone">{{client.phone}}</div>
              </td>
              <td class="align-middle py-3">
                <span v-if="client.status">
                  <b-badge variant="success" v-if="client.status === 1">Active</b-badge>
                  <b-badge variant="info" v-if="client.status === 2">In progress</b-badge>
                  <b-badge variant="warning" v-if="client.status === 3">Pending</b-badge>
                </span>
              </td>
            </tr>

          </tbody>
        </table>
      </div>
      <!-- / Clients list -->

    </perfect-scrollbar><!-- / .clients-content -->

    <!-- Clients sidebox -->
    <div class="clients-sidebox">
      <a @click.prevent="closeSidebox" href="#" class="clients-sidebox-close text-muted text-xlarge font-weight-light">&times;</a>

      <perfect-scrollbar v-if="selected" :options="{ suppressScrollX: true, wheelPropagation: true }" class="clients-scroll container-p-y">

        <!-- Client info -->
        <div class="text-center p-4">
          <img :src="`${baseUrl}img/avatars/${selected.avatar}`" class="ui-w-100 rounded-circle mb-4" alt="">
          <h5 class="mb-1"><a href="javascript:void(0)" class="text-dark">{{selected.name}}</a></h5>
          <div class="text-muted small mb-2">@{{selected.username}}</div>
          <div class="small mb-4" v-if="selected.company || selected.phone">
            <div v-if="selected.company">{{selected.company}}</div>
            <div v-if="selected.phone">{{selected.phone}}</div>
          </div>
          <div>
            <a href="javascript:void(0)" class="text-secondary"><span class="ion ion-md-mail"></span></a> &nbsp;&nbsp;
            <a href="javascript:void(0)" class="text-secondary"><span class="ion ion-ios-chatbubbles"></span></a> &nbsp;&nbsp;
            <span class="text-lighter">|</span> &nbsp;&nbsp;
            <a href="javascript:void(0)" class="text-twitter"><span class="ion ion-logo-twitter"></span></a> &nbsp;&nbsp;
            <a href="javascript:void(0)" class="text-facebook"><span class="ion ion-logo-facebook"></span></a> &nbsp;&nbsp;
            <a href="javascript:void(0)" class="text-instagram"><span class="ion ion-logo-instagram"></span></a>
          </div>
        </div>
        <!-- / Client info -->

        <hr class="border-light m-0">

        <!-- Messages -->
        <div class="p-4">
          <h6 class="mb-3">Messages</h6>

          <div v-if="selected.messages">
            <div v-for="(message, i) in selected.messages" :key="message.date + message.content" class="ui-bordered py-2 px-3" :class="{'mb-3': i !== (selected.messages.length - 1)}">
              {{message.content}}
              <div class="text-muted small mt-1">{{message.date}} ago &nbsp; | &nbsp; <a href="javascript:void(0)" class="text-muted">Reply</a></div>
            </div>
          </div>
          <div v-else class="text-lighter my-4">No messages</div>
        </div>
        <!-- / Messages -->

      </perfect-scrollbar>
    </div>
    <!-- / Clients sidebox -->

  </div>
  <!-- / Clients wrapper -->
</template>

<!-- Page -->
<style src="@/vendor/styles/pages/clients.scss" lang="scss"></style>

<script>
import PerfectScrollbar from '@/vendor/libs/perfect-scrollbar/PerfectScrollbar'

export default {
  name: 'pages-clients',
  metaInfo: {
    title: 'Clients - Pages'
  },
  components: {
    PerfectScrollbar
  },
  data: () => ({
    selected: null,
    sideboxOpened: false,

    clientsData: [{
      avatar: '5-small.png',
      name: 'Nelle Maxwell',
      username: 'nmaxwell',
      email: 'nmaxwell@mail.com',
      phone: '+0 (123) 456 7891',
      company: 'Company Inc.'
    }, {
      avatar: '9-small.png',
      name: 'Amanda Warner',
      username: 'awarner',
      email: 'awarner@mail.com',
      phone: '+0 (123) 456 7891',
      company: 'Company Inc.',
      status: 1,
      messages: [
        { content: 'Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo.', date: '1 day' },
        { content: 'Vivendum torquatos ut nec, sit audiam deterruisset ei, cu sed nibh autem scriptorem. Ea quo vidit deleniti constituto, ex qui malis mollis iudicabit, viris fabellas id has.', date: '2 days' },
        { content: 'Eam facilis laboramus reprehendunt ei, ex esse fastidii per.', date: '3 days' },
        { content: 'Ea inani epicurei mea. No docendi antiopam quo, ad dicant viderer cotidieque vix. Ea mea dicat ludus, utroque explicari conclusionemque ius eu, in scaevola tractatos persecuti per.', date: '3 days' }
      ]
    }, {
      avatar: '4-small.png',
      name: 'Kenneth Frazier',
      username: 'kfrazier',
      email: 'kfrazier@mail.com',
      phone: '+0 (123) 456 7891',
      company: 'Company Inc.',
      status: 3,
      messages: [
        { content: 'Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo.', date: '1 day' },
        { content: 'Vivendum torquatos ut nec, sit audiam deterruisset ei, cu sed nibh autem scriptorem. Ea quo vidit deleniti constituto, ex qui malis mollis iudicabit, viris fabellas id has.', date: '2 days' },
        { content: 'Eam facilis laboramus reprehendunt ei, ex esse fastidii per.', date: '3 days' },
        { content: 'Ea inani epicurei mea. No docendi antiopam quo, ad dicant viderer cotidieque vix. Ea mea dicat ludus, utroque explicari conclusionemque ius eu, in scaevola tractatos persecuti per.', date: '3 days' }
      ]
    }, {
      avatar: '6-small.png',
      name: 'Mae Gibson',
      username: 'mgibson',
      email: 'mgibson@mail.com',
      phone: '+0 (123) 456 7891',
      company: 'Company Inc.'
    }, {
      avatar: '12-small.png',
      name: 'Arthur Duncan',
      username: 'aduncan',
      email: 'aduncan@mail.com',
      phone: '+0 (123) 456 7891',
      company: 'Company Inc.',
      status: 2
    }, {
      avatar: '11-small.png',
      name: 'Belle Ross',
      username: 'bross',
      email: 'bross@mail.com',
      phone: '+0 (123) 456 7891',
      company: 'Company Inc.',
      messages: [
        { content: 'Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo.', date: '1 day' },
        { content: 'Vivendum torquatos ut nec, sit audiam deterruisset ei, cu sed nibh autem scriptorem. Ea quo vidit deleniti constituto, ex qui malis mollis iudicabit, viris fabellas id has.', date: '2 days' },
        { content: 'Eam facilis laboramus reprehendunt ei, ex esse fastidii per.', date: '3 days' },
        { content: 'Ea inani epicurei mea. No docendi antiopam quo, ad dicant viderer cotidieque vix. Ea mea dicat ludus, utroque explicari conclusionemque ius eu, in scaevola tractatos persecuti per.', date: '3 days' }
      ]
    }, {
      avatar: '3-small.png',
      name: 'Allie Rodriguez',
      username: 'arodriguez',
      email: 'bross@mail.com',
      phone: '+0 (123) 456 7891',
      company: 'Company Inc.',
      status: 1,
      messages: [
        { content: 'Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo.', date: '1 day' },
        { content: 'Vivendum torquatos ut nec, sit audiam deterruisset ei, cu sed nibh autem scriptorem. Ea quo vidit deleniti constituto, ex qui malis mollis iudicabit, viris fabellas id has.', date: '2 days' },
        { content: 'Eam facilis laboramus reprehendunt ei, ex esse fastidii per.', date: '3 days' },
        { content: 'Ea inani epicurei mea. No docendi antiopam quo, ad dicant viderer cotidieque vix. Ea mea dicat ludus, utroque explicari conclusionemque ius eu, in scaevola tractatos persecuti per.', date: '3 days' }
      ]
    }, {
      avatar: '7-small.png',
      name: 'Alice Hampton',
      username: 'ahampton',
      email: 'ahampton@mail.com',
      phone: '+0 (123) 456 7891',
      company: 'Company Inc.',
      status: 3,
      messages: [
        { content: 'Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo.', date: '1 day' },
        { content: 'Vivendum torquatos ut nec, sit audiam deterruisset ei, cu sed nibh autem scriptorem. Ea quo vidit deleniti constituto, ex qui malis mollis iudicabit, viris fabellas id has.', date: '2 days' },
        { content: 'Eam facilis laboramus reprehendunt ei, ex esse fastidii per.', date: '3 days' },
        { content: 'Ea inani epicurei mea. No docendi antiopam quo, ad dicant viderer cotidieque vix. Ea mea dicat ludus, utroque explicari conclusionemque ius eu, in scaevola tractatos persecuti per.', date: '3 days' }
      ]
    }, {
      avatar: '8-small.png',
      name: 'Hallie Lewis',
      username: 'hlewis',
      email: 'hlewis@mail.com',
      phone: '+0 (123) 456 7891',
      company: 'Company Inc.',
      status: 2
    }, {
      avatar: '2-small.png',
      name: 'Leon Wilson',
      username: 'lwilson',
      email: 'lwilson@mail.com',
      phone: '+0 (123) 456 7891',
      company: 'Company Inc.',
      messages: [
        { content: 'Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo.', date: '1 day' },
        { content: 'Vivendum torquatos ut nec, sit audiam deterruisset ei, cu sed nibh autem scriptorem. Ea quo vidit deleniti constituto, ex qui malis mollis iudicabit, viris fabellas id has.', date: '2 days' },
        { content: 'Eam facilis laboramus reprehendunt ei, ex esse fastidii per.', date: '3 days' },
        { content: 'Ea inani epicurei mea. No docendi antiopam quo, ad dicant viderer cotidieque vix. Ea mea dicat ludus, utroque explicari conclusionemque ius eu, in scaevola tractatos persecuti per.', date: '3 days' }
      ]
    }]
  }),
  methods: {
    selectClient (client) {
      this.selected = client
      this.sideboxOpened = true
    },
    closeSidebox () {
      this.sideboxOpened = false
    }
  }
}
</script>
