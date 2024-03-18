//animation start

gsap.registerPlugin(ScrollTrigger);

const heroSectionTimeline = gsap.timeline({
  defaults: { x: -100, duration: 0.5, opacity: 0, blur: 1, ease: Power2 },
  scrollTrigger: {
    trigger: ".hero-section",
    toggleActions: "restart play restart reset",
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
    toggleActions: "restart play restart reset",
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
    toggleActions: "restart play restart reset",
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
    toggleActions: "restart play restart reset",
    // markers: "true",
  },
});

testimonyTimeline
  .from(".testimony__title", {})
  .from(".testimony__description", {}, "<0.25")
  .from(".carousel", {}, "<0.25")
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
    toggleActions: "restart play restart reset",
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
    toggleActions: "restart play restart reset",
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
