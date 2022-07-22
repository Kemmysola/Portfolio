/* ======================================================Author: Amodu Alimat Oluwakemi===========================================================*/
(function() {
  "use strict";

  /* Easy Selector Helper Function*/
  const select = (el, all = false) => {
    el = el.trim()
    if (all) {
      return [...document.querySelectorAll(el)]
    } else {
      return document.querySelector(el)
    }
  }

  /* Easy Event Listener Function*/
  const onscroll = (el, listener) => {
    el.addEventListener('scroll', listener)
  }

  /*Navbox Links Active State on Scroll*/
  let navboxlinks = select('#navbox .navlink', true)
  const navboxlinksActive = () => {
    let position = window.scrollY+ 200
    navboxlinks.forEach(navboxlink => {
      if (!navboxlink.hash) return
        let section = select(navboxlink.hash)
      if (!section) return
        if (position >= section.offsetTop && position <= (section.offsetTop + section.offsetHeight)) {
          navboxlink.classList.add('active')
        } else {
          navboxlink.classList.remove('active')
        }
    })
  }
})