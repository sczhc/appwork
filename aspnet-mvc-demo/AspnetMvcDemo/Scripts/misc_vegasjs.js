$(function() {
  $('#vegas-example').vegas({
    slides: [
      { src: "/Images/bg/1.jpg" },
      { src: "/Images/bg/2.jpg" },
      { src: "/Images/bg/3.jpg" },
      { src: "/Images/bg/4.jpg" },
      { src: "/Images/bg/5.jpg" }
    ],
    transition: [ 'fade', 'zoomOut', 'zoomIn', 'blur' ],
    animation: [ 'kenburnsUp', 'kenburnsDown', 'kenburnsLeft', 'kenburnsRight' ]
  });

  // Progess color
  $('#vegas-example .vegas-timer-progress').css('background', 'rgba(0,0,0,.2)');

  // Overlays
  $('#vegas-dark-overlay-example, #vegas-light-overlay-example').vegas({
    overlay: true,
    timer: false,
    shuffle: true,
    slides: [
      { src: "/Images/bg/1.jpg" },
      { src: "/Images/bg/2.jpg" },
      { src: "/Images/bg/3.jpg" },
      { src: "/Images/bg/4.jpg" },
      { src: "/Images/bg/5.jpg" }
    ],
    transition: [ 'fade', 'blur' ],
  });

  // Fixed bg
  $('#vegas-fixed-bg-example').vegas({
    overlay: false,
    timer: false,
    shuffle: true,
    slides: [
      { src: "/Images/bg/1.jpg" },
      { src: "/Images/bg/2.jpg" },
      { src: "/Images/bg/3.jpg" },
      { src: "/Images/bg/4.jpg" },
      { src: "/Images/bg/5.jpg" }
    ],
    transition: [ 'fade', 'blur' ],
  });
});
