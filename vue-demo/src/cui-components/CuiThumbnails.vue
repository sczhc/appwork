<template>
  <div class="ui-block">
    <h3 class="ui-block-heading">Thumbnails</h3>

    <h4 class="ui-block-heading">Example</h4>

    <div class="cui-example">
      <div class="row">
        <div class="col-md">
          <a href="javascript:void(0)" class="img-thumbnail">
            <img :src="`${baseUrl}img/bg/1.jpg`" alt="" class="img-fluid">
          </a>
        </div>
        <div class="col-md">
          <a href="javascript:void(0)" class="img-thumbnail">
            <img :src="`${baseUrl}img/bg/2.jpg`" alt="" class="img-fluid">
          </a>
        </div>
        <div class="col-md">
          <a href="javascript:void(0)" class="img-thumbnail">
            <img :src="`${baseUrl}img/bg/3.jpg`" alt="" class="img-fluid">
          </a>
        </div>
        <div class="col-md">
          <a href="javascript:void(0)" class="img-thumbnail">
            <img :src="`${baseUrl}img/bg/4.jpg`" alt="" class="img-fluid">
          </a>
        </div>
      </div>
    </div>

    <h4 class="ui-block-heading">With overlay</h4>

    <div class="cui-example">
      <div class="row">
        <div class="col-md">
          <a href="javascript:void(0)" class="img-thumbnail">
            <div class="img-thumbnail-overlay bg-dark opacity-25"></div>
            <img :src="`${baseUrl}img/bg/1.jpg`" alt="" class="img-fluid">
          </a>
        </div>
        <div class="col-md">
          <a href="javascript:void(0)" class="img-thumbnail">
            <div class="img-thumbnail-overlay bg-primary opacity-50"></div>
            <img :src="`${baseUrl}img/bg/2.jpg`" alt="" class="img-fluid">
          </a>
        </div>
        <div class="col-md">
          <a href="javascript:void(0)" class="img-thumbnail">
            <div class="img-thumbnail-overlay bg-success opacity-25"></div>
            <img :src="`${baseUrl}img/bg/3.jpg`" alt="" class="img-fluid">
          </a>
        </div>
        <div class="col-md">
          <a href="javascript:void(0)" class="img-thumbnail">
            <div class="img-thumbnail-overlay bg-white opacity-50"></div>
            <img :src="`${baseUrl}img/bg/4.jpg`" alt="" class="img-fluid">
          </a>
        </div>
      </div>
    </div>

    <h4 class="ui-block-heading">With overlay and content</h4>

    <div class="cui-example">
      <div class="row">
        <div class="col-md">
          <a href="javascript:void(0)" class="img-thumbnail">
            <span class="img-thumbnail-overlay bg-dark opacity-25"></span>
            <span class="img-thumbnail-content text-white text-xlarge"><i class="ion ion-ios-search"></i></span>
            <img :src="`${baseUrl}img/bg/1.jpg`" alt="" class="img-fluid">
          </a>
        </div>
        <div class="col-md">
          <a href="javascript:void(0)" class="img-thumbnail">
            <span class="img-thumbnail-overlay bg-primary opacity-50"></span>
            <span class="img-thumbnail-content text-white text-xlarge"><i class="ion ion-ios-search"></i></span>
            <img :src="`${baseUrl}img/bg/2.jpg`" alt="" class="img-fluid">
          </a>
        </div>
        <div class="col-md">
          <a href="javascript:void(0)" class="img-thumbnail">
            <span class="img-thumbnail-overlay bg-success opacity-25"></span>
            <span class="img-thumbnail-content text-white text-xlarge"><i class="ion ion-ios-search"></i></span>
            <img :src="`${baseUrl}img/bg/3.jpg`" alt="" class="img-fluid">
          </a>
        </div>
        <div class="col-md">
          <a href="javascript:void(0)" class="img-thumbnail">
            <span class="img-thumbnail-overlay bg-white opacity-75"></span>
            <span class="img-thumbnail-content text-secondary text-xlarge"><i class="ion ion-ios-search"></i></span>
            <img :src="`${baseUrl}img/bg/4.jpg`" alt="" class="img-fluid">
          </a>
        </div>
      </div>
    </div>

    <h4 class="ui-block-heading">Shadow on hover</h4>

    <div class="cui-example">
      <div class="row">
        <div class="col-md">
          <a href="javascript:void(0)" class="img-thumbnail img-thumbnail-shadow">
            <span class="img-thumbnail-overlay bg-dark opacity-25"></span>
            <span class="img-thumbnail-content text-white text-xlarge"><i class="ion ion-ios-search"></i></span>
            <img :src="`${baseUrl}img/bg/1.jpg`" alt="" class="img-fluid">
          </a>
        </div>
        <div class="col-md">
          <a href="javascript:void(0)" class="img-thumbnail img-thumbnail-shadow">
            <span class="img-thumbnail-overlay bg-primary opacity-50"></span>
            <span class="img-thumbnail-content text-white text-xlarge"><i class="ion ion-ios-search"></i></span>
            <img :src="`${baseUrl}img/bg/2.jpg`" alt="" class="img-fluid">
          </a>
        </div>
        <div class="col-md">
          <a href="javascript:void(0)" class="img-thumbnail img-thumbnail-shadow">
            <span class="img-thumbnail-overlay bg-success opacity-25"></span>
            <span class="img-thumbnail-content text-white text-xlarge"><i class="ion ion-ios-search"></i></span>
            <img :src="`${baseUrl}img/bg/3.jpg`" alt="" class="img-fluid">
          </a>
        </div>
        <div class="col-md">
          <a href="javascript:void(0)" class="img-thumbnail img-thumbnail-shadow">
            <span class="img-thumbnail-overlay bg-white opacity-75"></span>
            <span class="img-thumbnail-content text-secondary text-xlarge"><i class="ion ion-ios-search"></i></span>
            <img :src="`${baseUrl}img/bg/4.jpg`" alt="" class="img-fluid">
          </a>
        </div>
      </div>
    </div>

    <h4 class="ui-block-heading">Zoom In animation on hover</h4>

    <div class="cui-example">
      <div class="row">
        <div class="col-md">
          <a href="javascript:void(0)" class="img-thumbnail img-thumbnail-zoom-in">
            <span class="img-thumbnail-overlay bg-dark opacity-25"></span>
            <span class="img-thumbnail-content text-white text-xlarge"><i class="ion ion-ios-search"></i></span>
            <img :src="`${baseUrl}img/bg/1.jpg`" alt="" class="img-fluid">
          </a>
        </div>
        <div class="col-md">
          <a href="javascript:void(0)" class="img-thumbnail img-thumbnail-zoom-in">
            <span class="img-thumbnail-overlay bg-primary opacity-50"></span>
            <span class="img-thumbnail-content text-white text-xlarge"><i class="ion ion-ios-search"></i></span>
            <img :src="`${baseUrl}img/bg/2.jpg`" alt="" class="img-fluid">
          </a>
        </div>
        <div class="col-md">
          <a href="javascript:void(0)" class="img-thumbnail img-thumbnail-zoom-in">
            <span class="img-thumbnail-overlay bg-success opacity-25"></span>
            <span class="img-thumbnail-content text-white text-xlarge"><i class="ion ion-ios-search"></i></span>
            <img :src="`${baseUrl}img/bg/3.jpg`" alt="" class="img-fluid">
          </a>
        </div>
        <div class="col-md">
          <a href="javascript:void(0)" class="img-thumbnail img-thumbnail-zoom-in">
            <span class="img-thumbnail-overlay bg-white opacity-75"></span>
            <span class="img-thumbnail-content text-secondary text-xlarge"><i class="ion ion-ios-search"></i></span>
            <img :src="`${baseUrl}img/bg/4.jpg`" alt="" class="img-fluid">
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {}
</script>
