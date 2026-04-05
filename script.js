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
navMobile.querySelectorAll('a').forEach(a => {
  a.addEventListener('click', () => navMobile.classList.remove('open'))
})

// Code gen tabs
document.querySelectorAll('.tab-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    const tab = btn.dataset.tab
    document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'))
    document.querySelectorAll('.code-block').forEach(b => b.classList.add('hidden'))
    btn.classList.add('active')
    document.getElementById('tab-' + tab).classList.remove('hidden')
  })
})

// Intersection observer — fade-in sections
const observer = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.style.opacity = '1'
      e.target.style.transform = 'translateY(0)'
      observer.unobserve(e.target)
    }
  })
}, { threshold: 0.1 })

document.querySelectorAll('.feature-card, .pipeline-card, .integration-card').forEach(el => {
  el.style.opacity = '0'
  el.style.transform = 'translateY(20px)'
  el.style.transition = 'opacity .5s ease, transform .5s ease'
  observer.observe(el)
})
