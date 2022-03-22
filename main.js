const eachSlide = img =>
  /*html*/`<div class="general-container" id="${img}">
<div class="general-container-inner">
  <div class="bg" style="background-image: url(./img/${img}.jpg);">
  </div>
  <div class="container-img">
    <img src="./img/${img}.jpg" alt="">
  </div>
  <div class="container-description">
  <div class="container-description-inner">
  <p><cite>Photo ${img}</cite> - John Doe </p>
  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias qui aliquid a amet voluptates repudiandae!</p>
  </div>
  </div>
</div>
</div>`

let element = ""
const slideCount = 10

for (let i = 1; i <= slideCount; i++) {
  element += eachSlide(i)
}

document.getElementById('outer-container').insertAdjacentHTML('afterbegin', element)


const todosOsSlides = document.querySelectorAll('.general-container')
const deadzone = parseInt(getComputedStyle(document.body).getPropertyValue('--deadzone').replace('px', ''))
const base = {}

for (let i = 1; i <= slideCount; i++) {
  base[i] = (window.innerHeight + deadzone) * (i - 1) + (window.innerHeight)
}

document.addEventListener('scroll', () => {
  todosOsSlides.forEach(v => {

    const id = v.getAttribute('id')
    const offset = v.offsetTop
    const descriptionDeadzone = 300

    if (offset > base[id] + descriptionDeadzone) {
      v.querySelector('.container-description').classList.add('active')
    } else {
      v.querySelector('.container-description').classList.remove('active')
    }
  })
})
