
const slideCount = 16
const todosOsSlides = document.querySelectorAll('.general-container')
const deadzone = parseInt(getComputedStyle(document.body).getPropertyValue('--deadzone').replace('px', ''))
const base = {}
const screensize = window.innerWidth >= 768 ? window.innerHeight : document.querySelector('.cover').offsetHeight
const descriptionDeadzone = window.innerWidth >= 768 ? 300 : 175

for (let i = 1; i <= slideCount; i++) {
  base[i] = (screensize + deadzone) * (i - 1) + (window.innerHeight)
}

document.addEventListener('scroll', () => {
  todosOsSlides.forEach(v => {

    const id = v.getAttribute('id')
    const offset = v.offsetTop


    if (offset > base[id] + descriptionDeadzone) {
      try {
        v.querySelector('.container-description').classList.add('active')
      } catch {

      }
    } else {
      try {

        v.querySelector('.container-description').classList.remove('active')
      } catch {

      }
    }
  })

  document.querySelector('#progressbar .pointer').style.top = `${(window.scrollY / document.body.clientHeight * 100).toFixed(2)}%`

})


document.getElementById('down-arrow').addEventListener('click', (ev) => {
  const eachSlideOffset = []
  document.querySelectorAll('.general-container').forEach((v) => {
    if (v.offsetTop > Math.ceil(window.scrollY)) {

      eachSlideOffset.push(v.offsetTop + descriptionDeadzone + 10)
    }
  })
  eachSlideOffset.sort(function (a, b) { return a - b })

  window.scroll({
    top: eachSlideOffset[0],
    left: 0,
    behavior: 'smooth'
  })
})


const eachslidePosition = []
document.querySelectorAll('.general-container').forEach((v) => {
  // eachslidePosition.push(v.offsetTop)
  eachslidePosition.push(v.offsetTop + descriptionDeadzone)
})

const markersPositions = eachslidePosition.map((v) => {
  return (v / document.body.clientHeight * 100).toFixed(2) + '%'
})


markersPositions.forEach((v) => {

  let marker = document.createElement('div')
  marker.classList.add('marker')
  marker.style.top = v
  document.querySelector('#progressbar .bar').appendChild(marker)
}

)