//animation start

gsap.registerPlugin(ScrollTrigger);

const heroSectionTimeline = gsap.timeline({
  defaults: { x: -100, duration: 0.5, opacity: 0, blur: 1, ease: Power2 },
  scrollTrigger: {
    trigger: ".hero-section",
    toggleActions: "play none none none",
    // markers: "true",
  },
});

heroSectionTimeline
  .from(".hero-section__title", {})
  .from(".hero-section__description", {})
  .from(".hero-section__button", {})
  .from(
    ".hero-section__image",
    {
      x: 100,
    },
    0
  );

const ourServicesTimeline = gsap.timeline({
  paused: true,
  defaults: { x: 100, duration: 0.5, opacity: 0, blur: 1, ease: Power2 },
  scrollTrigger: {
    trigger: ".our-services",
    toggleActions: "play none none none",
    // markers: "true",
  },
});

ourServicesTimeline
  .from(".our-services__image", {
    x: -100,
  })
  .from(".our-services__title", {}, "<")
  .from(".our-services__description", {}, "<0.25");

const serviceList = document.querySelectorAll(".our-services__service");

for (const service of serviceList) {
  ourServicesTimeline.from(
    service,
    {
      duration: 0.5,
    },
    "<0.25"
  );
}

const whyUsTimeline = gsap.timeline({
  paused: true,
  defaults: { duration: 0.5, opacity: 0, blur: 1, ease: Power2 },
  scrollTrigger: {
    trigger: ".why-us",
    toggleActions: "play none none none",
    // markers: "true",
  },
});

whyUsTimeline
  .from(".why-us__title", {
    y: -50,
  })
  .from(
    ".why-us__description",
    {
      y: -50,
    },
    0.25
  );

const cardList = document.querySelectorAll(".why-us__card");
for (const card of cardList) {
  whyUsTimeline.from(
    card,
    {
      x: -100,
      duration: 0.5,
    },
    "<0.25"
  );
}

const testimonyTimeline = gsap.timeline({
  paused: true,
  defaults: {
    duration: 0.5,
    opacity: 0,
    blur: 1,
    ease: Power2,
    y: -50,
  },
  scrollTrigger: {
    trigger: ".testimony",
    toggleActions: "play none none none",
    // markers: "true",
  },
});

testimonyTimeline
  .from(".testimony__title", {})
  .from(".testimony__description", {}, "<0.25")
  .from(".owl-carousel", {}, "<0.25")
  .from(".testimony__button-container", {}, "<0.25");

const ctaBannerTimeline = gsap.timeline({
  paused: true,
  defaults: {
    duration: 0.5,
    opacity: 0,
    blur: 1,
    ease: Power2,
    y: -50,
  },
  scrollTrigger: {
    trigger: ".cta-banner",
    toggleActions: "play none none none",
    // markers: "true",
  },
});

ctaBannerTimeline
  .from(".cta-banner__title", {})
  .from(".cta-banner__description", {}, "<0.25")
  .from(".cta-banner__button", {}, "<0.25");

const faqTimeline = gsap.timeline({
  paused: true,
  defaults: {
    duration: 0.5,
    opacity: 0,
    blur: 1,
    ease: Power2,
    y: -50,
  },
  scrollTrigger: {
    trigger: ".faq",
    toggleActions: "play none none none",
    // markers: "true",
  },
});

faqTimeline.from(".faq__title", {}).from(".faq__description", {}, "<0.25");

const accordionItem = document.querySelectorAll(".accordion-item");

for (const item of accordionItem) {
  faqTimeline.from(
    item,
    {
      duration: 0.25,
    },
    "<0.25"
  );
}

// for (var i in accordionItem) {
//   if (i === 1) {
//     faqTimeline.from(accordionItem[i], {
//       duration: 10,
//       delay: 0,
//     });
//   } else {
//     faqTimeline.from(
//       accordionItem[i],
//       {
//         duration: 0.25,
//       },
//       "<0.25"
//     );
//   }
// }

//animation end

// $(function () {
//   // Owl Carousel
//   var owl = $(".owl-carousel");
//   owl.owlCarousel({
//     items: 1,
//     margin: 10,
//     loop: true,
//     nav: true,
//   });
// });

$(".owl-carousel").owlCarousel({
  center: true,
  loop: true,
  margin: 10,
  nav: false,
  autoplay: false,
  paginationSpeed: 500,
  autoplayTimeout: 3000,
  autoplayHoverPause: true,
  dots: false,
  responsive: {
    0: {
      items: 1,
    },
    600: {
      items: 2,
    },
    1000: {
      items: 2,
    },
  },
});

var owl = $(".owl-carousel");
owl.owlCarousel();
$(".btn-right").click(function () {
  owl.trigger("next.owl.carousel");
});
$(".btn-left").click(function () {
  owl.trigger("prev.owl.carousel", [300]);
});
