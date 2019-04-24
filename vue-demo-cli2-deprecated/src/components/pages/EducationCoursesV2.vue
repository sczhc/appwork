<template>
  <div>

    <h4 class="d-flex flex-wrap justify-content-between align-items-center w-100 font-weight-bold pt-2 mb-4">
      <div class="col-12 col-md px-0 pb-2">Courses</div>
      <div class="col-12 col-md-3 px-0 pb-2">
        <b-input placeholder="Search..." />
      </div>
    </h4>

    <ul class="nav bg-lighter container-p-x py-1 container-m--x mb-4">
      <li class="nav-item">
        <a class="nav-link text-dark font-weight-bold pl-0" href="javascript:void(0)">Development</a>
      </li>
      <li class="nav-item">
        <a class="nav-link text-muted" href="javascript:void(0)">Web Development</a>
      </li>
      <li class="nav-item">
        <a class="nav-link text-muted" href="javascript:void(0)">Mobile Apps</a>
      </li>
      <li class="nav-item">
        <a class="nav-link text-muted" href="javascript:void(0)">Programming Languages</a>
      </li>
      <li class="nav-item">
        <a class="nav-link text-muted" href="javascript:void(0)">Databases</a>
      </li>
    </ul>

    <b-card no-body class="mb-4">
      <b-list-group :flush="true">

        <li v-for="course in coursesData" :key="course.title" class="list-group-item py-4">
          <div class="media flex-wrap">
            <div class="d-none d-sm-block ui-w-140">
              <a href="javascript:void(0)" class="d-block ui-rect-67 ui-bg-cover" :style="{'background-image': `url('${baseUrl}img/bg/${course.image}')`}"></a>
            </div>
            <div class="media-body ml-sm-4">
              <h5 class="mb-2">
                <div class="float-right font-weight-semibold ml-3">{{course.price ? formatPrice(course.price) : 'FREE'}}</div>
                <a href="javascript:void(0)" class="text-dark">{{course.title}}</a>
              </h5>
              <div class="d-flex flex-wrap align-items-center mb-2">
                <div class="text-muted small">
                  <i class="ion ion-md-time text-primary"></i>
                  <span>{{course.duration}}</span>
                </div>
                <div class="ui-stars ml-3">
                  <div class="ui-star" v-for="i in [1, 2, 3, 4, 5]" :class="uiStarClass(i, course.rating)" :key="i">
                    <i class="ion ion-md-star"></i>
                    <i class="ion ion-md-star"></i>
                  </div>
                </div>
                <a href="javascript:void(0)" class="text-muted small">{{course.votes}}</a>
              </div>
              <div>{{course.description}}</div>
              <div class="mt-2">
                <span v-for="tag in course.tags" :key="tag" class="badge badge-outline-default text-muted font-weight-normal mr-1">{{tag}}</span>
              </div>
            </div>
          </div>
        </li>

      </b-list-group>
    </b-card>

    <b-pagination :total-rows="50" :per-page="10" />

  </div>
</template>

<script>
import * as numeral from 'numeral'

export default {
  name: 'pages-education-courses-v2',
  metaInfo: {
    title: 'Courses v2 - Pages'
  },
  data: () => ({
    coursesData: [{
      image: '1.jpg',
      title: 'Complete Java Masterclass',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec odio ligula, rhoncus scelerisque ullamcorper iaculis.',
      price: 15.99,
      duration: '12h',
      rating: 4.5,
      votes: 55,
      tags: ['Java']
    }, {
      image: '2.jpg',
      title: 'The Complete Web Developer Course 2.0',
      description: 'Pellentesque at sodales tortor, eu volutpat metus.',
      price: 44.00,
      duration: '34h',
      rating: 3.5,
      votes: 55,
      tags: ['Backend']
    }, {
      image: '3.jpg',
      title: 'Python for Beginners: Learn Python Programming',
      description: 'Nulla lorem, placerat in ultricies sed, aliquet eu eros. In lacinia porttitor enim vel commodo.',
      price: 56.99,
      duration: '44h',
      rating: 4.5,
      votes: 55,
      tags: ['Backend', 'Python']
    }, {
      image: '4.jpg',
      title: 'Become a Web Developer from Scratch',
      description: 'Donec gravida id neque nec faucibus. Nam congue leo quis ligula dignissim, id scelerisque ipsum condimentum.',
      price: 0,
      duration: '16h',
      rating: 3.5,
      votes: 55,
      tags: ['HTML5', 'CSS3', 'JS']
    }, {
      image: '5.jpg',
      title: 'Become a Certified Web Developer',
      description: 'Vestibulum eget magna eget turpis imperdiet finibus. Maecenas mi velit, varius vel sapien sed, sodales dignissim risus.',
      price: 14.99,
      duration: '17h',
      rating: 4.5,
      votes: 55,
      tags: ['HTML5', 'CSS3', 'JS']
    }, {
      image: '6.jpg',
      title: 'Full stack Universal React with Redux, Node js and MongoDB',
      description: 'Integer fringilla varius vestibulum. Quisque efficitur tempor nisl vitae rutrum. Vestibulum et iaculis arcu, vitae placerat lacus.',
      price: 66.99,
      duration: '25h',
      rating: 5,
      votes: 55,
      tags: ['React', 'Redux', 'MongoDB', 'NodeJS']
    }]
  }),
  methods: {
    uiStarClass (i, rating) {
      if (rating > (i - 1) && rating < i) return 'half-filled'
      if (rating >= i) return 'filled'
      return ''
    },
    formatPrice (p) {
      return numeral(p).format('$0,0.00')
    }
  }
}
</script>
