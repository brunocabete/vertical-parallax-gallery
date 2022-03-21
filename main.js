const cadaImagem = img =>
  /*html*/`<div class="container-geral" id="${img}">
<div class="container-geral-inner">
  <div class="bg" style="background-image: url(./img/${img}.jpg);">
  </div>
  <div class="container-img">
    <img src="./img/${img}.jpg" alt="">
  </div>
  <div class="container-legenda">
    <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
  </div>
</div>
</div>`

let elemento = ""

for (let i = 1; i <= 10; i++) {
  elemento += cadaImagem(i)
}

document.getElementById('outer-container').insertAdjacentHTML('afterbegin', elemento)


const todosOsSlides = document.querySelectorAll('.container-geral')


const base = {}

todosOsSlides.forEach(v => {
  base[v.getAttribute('id')] = v.offsetTop
})

const deadzone = parseInt(getComputedStyle(document.body).getPropertyValue('--deadzone').replace('px', ''))


for (let i = 1; i <= 10; i++) {
  base[i] = (window.innerHeight + deadzone) * (i - 1)
}

document.addEventListener('scroll', () => {
  todosOsSlides.forEach(v => {

    const id = v.getAttribute('id')
    const offset = v.offsetTop

    if (offset > base[id] + 300) {
      v.querySelector('.container-legenda').classList.add('ativo')

    } else {

      v.querySelector('.container-legenda').classList.remove('ativo')

    }


  })
})
