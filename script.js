const organicProjectMarkup = `
  <div class="project-grid">
    <div class="project-copy">
      <p class="project-kicker">Organic Farming Videos</p>
      <p>
        These were a series of 30-second videos I made to play on streaming and TV for a
        non-profit Organic Farming campaign in Vermont. I used a combination of pen-and-paper
        animation with digital work in Photoshop and After Effects.
      </p>
      <p>You can watch one of the videos here.</p>
    </div>
    <div class="project-media media-triple">
      <a class="media-card" href="assets/nofa-credits.png" target="_blank" rel="noreferrer" aria-label="Open full-size credits image">
        <img src="assets/nofa-credits.png" alt="Credits for the Organic Farming campaign" />
      </a>
      <a class="media-card" href="assets/nofa-bear.png" target="_blank" rel="noreferrer" aria-label="Open full-size bear illustration">
        <img src="assets/nofa-bear.png" alt="Character illustration from the Organic Farming campaign" />
      </a>
      <a class="media-card" href="assets/nofa-winter.png" target="_blank" rel="noreferrer" aria-label="Open full-size winter illustration">
        <img src="assets/nofa-winter.png" alt="Seasonal illustration from the Organic Farming campaign" />
      </a>
    </div>
    <div class="project-video-wrap">
      <video controls preload="metadata" poster="assets/pollinators.png">
        <source src="assets/leaping-bear.mp4" type="video/mp4" />
      </video>
    </div>
  </div>
`

const projectShells = document.querySelectorAll('[data-project="organic-farming"]')
projectShells.forEach((shell) => {
  shell.innerHTML = organicProjectMarkup
})

const year = document.getElementById('year')

if (year) {
  year.textContent = new Date().getFullYear()
}

const viewPanels = Array.from(document.querySelectorAll('[data-view]'))
const viewTriggers = Array.from(document.querySelectorAll('[data-view-target]'))

function setView(target) {
  viewPanels.forEach((panel) => {
    const isActive = panel.dataset.view === target
    panel.hidden = !isActive
  })

  viewTriggers.forEach((trigger) => {
    const isActive = trigger.dataset.viewTarget === target
    trigger.setAttribute('aria-current', isActive ? 'page' : 'false')
  })
}

viewTriggers.forEach((trigger) => {
  trigger.addEventListener('click', (event) => {
    const target = trigger.dataset.viewTarget

    if (target === 'home') {
      event.preventDefault()
      setView('home')
      window.scrollTo({ top: 0, behavior: 'smooth' })
      return
    }

    if (target === 'work') {
      event.preventDefault()
      setView(target)
      window.scrollTo({ top: 0, behavior: 'smooth' })
      return
    }

    if (viewPanels.some((panel) => panel.dataset.view === target)) {
      event.preventDefault()
      setView(target)
      window.scrollTo({ top: 0, behavior: 'smooth' })
      return
    }

    if (target === 'about' || target === 'contact') {
      event.preventDefault()
      setView('home')
      const targetId = target
      const element = document.getElementById(targetId)
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' })
      }
    }
  })
})

document.querySelectorAll('.visual-work-toggle').forEach((button) => {
  const artGrid = button.closest('.illustration-card')?.querySelector('.art-grid')

  if (!artGrid) {
    return
  }

  const updateToggle = () => {
    const collapsed = artGrid.classList.contains('is-collapsed')
    button.setAttribute('aria-expanded', String(!collapsed))
    button.textContent = collapsed ? 'View more' : 'Show less'
  }

  button.addEventListener('click', () => {
    artGrid.classList.toggle('is-collapsed')
    updateToggle()
  })

  updateToggle()
})

setView('home')
