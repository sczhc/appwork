<template>
  <div class="ui-block">
    <h3 class="ui-block-heading">Carousel</h3>

    <h4 class="ui-block-heading">Example</h4>

    <div class="cui-example">
      <b-carousel controls indicators :interval="4000">
        <b-carousel-slide
          caption="First slide"
          text="Eos mutat malis maluisset et, agam ancillae quo te, in vim congue pertinacia."
          :img-src="`${baseUrl}img/bg/1.jpg`" />
        <b-carousel-slide
          caption="Second slide"
          text="In numquam omittam sea."
          :img-src="`${baseUrl}img/bg/2.jpg`" />
        <b-carousel-slide
          caption="Third slide"
          text="Lorem ipsum dolor sit amet, virtute consequat ea qui, minim graeco mel no."
          :img-src="`${baseUrl}img/bg/3.jpg`" />
      </b-carousel>
    </div>
  </div>
</template>

<script>
export default {}
</script>
