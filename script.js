// Nav scroll effect
const nav = document.getElementById('nav')
window.addEventListener('scroll', () => {
  nav.classList.toggle('scrolled', window.scrollY > 20)
}, { passive: true })

// Mobile burger
const burger = document.getElementById('burger')
const navMobile = document.getElementById('navMobile')
burger.addEventListener('click', () => {
  navMobile.classList.toggle('open')
})
navMobile.querySelectorAll('a').forEach(a =>
  a.addEventListener('click', () => navMobile.classList.remove('open'))
)

// Code gen tabs
document.querySelectorAll('.tab-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'))
    document.querySelectorAll('.code-block').forEach(b => b.classList.add('hidden'))
    btn.classList.add('active')
    document.getElementById('tab-' + btn.dataset.tab).classList.remove('hidden')
  })
})

// Scroll fade-in
const observer = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.classList.add('visible')
      observer.unobserve(e.target)
    }
  })
}, { threshold: 0.08 })

document.querySelectorAll(
  '.feature-card, .pipeline-card, .int-card, .video-wrap, .codegen-layout'
).forEach((el, i) => {
  el.classList.add('fade-up')
  el.style.transitionDelay = `${(i % 4) * 60}ms`
  observer.observe(el)
})
