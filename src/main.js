import './styles/style.css'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import $ from 'jquery'

console.log('fuck')
gsap.registerPlugin(ScrollTrigger)

$(document).ready(function ($) {
  $(document).mousemove(function (e) {
    gsap.to('.cursor-circle', {
      x: e.clientX,
      y: e.clientY,
      duration: 0.1,
      ease: 'power2.out',
    })
  })
})

// Move cursor

let tlMain = gsap
  .timeline({
    scrollTrigger: {
      trigger: '.section-height',
      start: 'top top',
      end: '98% bottom',
      scrub: 1,
    },
  })
  .to('.track', {
    xPercent: -100,
    ease: 'none',
  })
// hero photo
gsap
  .timeline({
    scrollTrigger: {
      trigger: '.hero-panel',
      containerAnimation: tlMain,
      start: 'left left',
      end: 'right left',
      scrub: true,
    },
  })
  .from('.hero-panel_img', { scale: 1.6 }, 0)

// note
gsap
  .timeline({
    scrollTrigger: {
      trigger: '.note-panel',
      containerAnimation: tlMain,
      start: 'left right',
      end: 'left left',
      scrub: true,
    },
  })
  .from('.note-panel_img', { rotate: 45, scale: 0.3 })

// thanks
gsap
  .timeline({
    scrollTrigger: {
      trigger: '.thanks-panel_wrap',
      containerAnimation: tlMain,
      start: 'left left',
      end: 'right right',
      scrub: true,
    },
  })
  .to('.thanks-panel', { xPercent: 100, ease: 'none' })
  .to('.thanks-panel_photo', { scale: 1 }, 0)
  .fromTo(
    '.thanks-panel_contain.is-2',
    {
      clipPath: 'polygon(100% 0%, 100% 0%, 100% 100%, 100% 100%)',
    },
    { clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)', ease: 'none' },
    0
  )

// stagger photos
gsap
  .timeline({
    scrollTrigger: {
      trigger: '.stagger-panel',
      containerAnimation: tlMain,
      start: 'left right',
      end: 'right left',
      scrub: true,
    },
  })
  .from('.stagger-panel_img', { x: '100vw', stagger: { each: 0.05 } })
  .to('.stagger-panel_img', { scale: 0.5, stagger: { each: 0.05 } })

let tl3 = gsap.timeline({
  scrollTrigger: {
    trigger: '.section_layout91',
    start: 'top center+=50%',
    end: 'bottom top',
    scrub: true,
  },
})
tl3.to('.header1_image', {
  rotate: 90,
  duration: 1,
})

let tlsecond = gsap.timeline({
  scrollTrigger: {
    trigger: '.section_layout98',
    start: 'top 80%',
    end: 'bottom top',
    scrub: true,
  },
})
tlsecond.to('.layout98_image', {
  scale: 1.5,
  duration: 1,
})
