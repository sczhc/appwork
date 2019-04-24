<template>
  <div>

    <div class="container px-0">
      <h2 class="text-center font-weight-bolder pt-5">
        Find a Job You Will Love
      </h2>
      <div class="text-center text-muted text-big mx-auto mt-3" style="max-width: 500px;">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec lorem erat, dapibus et mauris dictum, consectetur blandit ante.
      </div>

      <b-card no-body class="mt-5">
        <div v-for="(vacancy, index) in vacanciesData" :key="vacancy.title">

          <div class="p-4 p-md-5">
            <a href="javascript:void(0)" class="text-dark text-large font-weight-semibold">{{vacancy.title}}</a>
            <div class="d-flex flex-wrap mt-3">
              <div v-if="vacancy.department" class="mr-3"><i class="ion ion-md-business text-light" v-b-tooltip.hover title="Department"></i>&nbsp; {{vacancy.department}}</div>
              <div v-if="vacancy.location" class="mr-3"><i class="ion ion-md-pin text-light" v-b-tooltip.hover title="Location"></i>&nbsp; {{vacancy.location}}</div>
              <div v-if="vacancy.employment" class="mr-3"><i class="ion ion-md-time text-primary" v-b-tooltip.hover title="Employment"></i>&nbsp; {{vacancy.employment}}</div>
            </div>
            <div class="mt-3 mb-4">
              {{vacancy.description}}
            </div>
            <b-btn variant="primary btn-round">Learn more</b-btn>
          </div>
          <hr class="border-light m-0" v-if="index !== (vacanciesData.length - 1)">

        </div>
      </b-card>
    </div>

  </div>
</template>

<script>
export default {
  name: 'pages-vacancies',
  metaInfo: {
    title: 'Vacancies - Pages'
  },
  data: () => ({
    vacanciesData: [{
      title: 'Account Director',
      description: 'Donec dui risus, sagittis non congue vitae, auctor ornare ex. Aliquam hendrerit, odio vel dictum volutpat, nulla sapien venenatis tellus, vel aliquam enim eros vel ligula. Duis dictum, tellus et feugiat viverra, justo velit vestibulum ex, nec malesuada ex ligula consectetur mi.',
      department: 'Marketing',
      location: 'UK wide',
      employment: 'Full-time'
    }, {
      title: 'Java Developer',
      description: 'Morbi dolor ex, cursus vitae lectus in, auctor ultricies metus. Sed quis nulla lacus. Maecenas et lectus massa. Cras porta mauris nec nibh tincidunt, non porttitor elit condimentum. Etiam quis augue condimentum, luctus purus et, porttitor enim. Pellentesque quam sapien, lobortis eget dolor non, ultrices fermentum purus.',
      department: 'Backend Dev',
      location: 'New York, US',
      employment: 'Full-time'
    }, {
      title: 'Infrastructure Administrator',
      description: 'Nulla venenatis turpis vel ante accumsan cursus. Cras ultrices ornare neque eu pharetra. In dapibus sollicitudin urna sed suscipit. Interdum et malesuada fames ac ante ipsum primis in faucibus. Fusce vel sapien sodales, pharetra nisl quis, molestie odio. Donec ullamcorper, tortor sed iaculis bibendum, ante ligula dignissim neque, eget cursus nibh arcu quis est. Pellentesque auctor aliquet arcu at placerat. Duis sodales porta eros vitae gravida. Duis malesuada consectetur tristique.',
      department: 'Service Dev',
      location: 'Tokyo, Japan',
      employment: 'Part-time'
    }, {
      title: 'Product Designer',
      description: 'Duis accumsan ultrices tortor, nec tristique tortor eleifend a. Nunc convallis tempor dignissim. Etiam maximus erat a nunc interdum, ac mattis eros consequat. Fusce urna erat, fringilla at faucibus a, porttitor eget tortor. Sed pharetra massa id molestie sagittis. Etiam hendrerit quis dolor ut viverra.',
      department: 'Design',
      employment: 'Freelance'
    }, {
      title: 'Frontend Developer',
      description: 'Quisque convallis dolor quis malesuada tempus. Fusce lacinia id ex id fringilla. Nunc sit amet tellus non quam efficitur convallis. Morbi elementum ex sed nisl mattis blandit.',
      department: 'Frontend Dev',
      location: 'New York, US',
      employment: 'Full-time'
    }]
  })
}
</script>
