const annotation = {
  init: function () {
    select.image.addEventListener('click', function (e) {
      select.removeAllClass('active')
      annotation.stickyNote(e)
    })
  },
  stickyNote: function (e) {
    console.log(e) 
    const dot = document.createElement('div')
    dot.classList.add('dot')
    dot.classList.add('active')
    dot.style.left = (e.x - 12) + 'px'
    dot.style.top = (e.y - 12)+ 'px'
    select.notes.appendChild(dot)

    dot.insertAdjacentHTML('afterbegin', this.noteBox())

    dot.addEventListener('click', function (e) {
      annotation.openCloseDot(e)
    })
  },
  createNote: function () {

  },
  openCloseDot: function (e) {
    if (e.target.classList.contains('active')) {
      e.target.classList.remove('active')
    } else {
      e.target.classList.add('active')
    }
  },
  noteBox: function () {
    let text = 
    `
    <section class="noteBox">
      <article>
        <textarea></textarea>
        <button>add</button>
      </article>
    </section>
    `
    return text
  }
}

const select = {
  canvas: document.querySelector('.canvas'),
  image: document.querySelector('.image'),
  notes: document.querySelector('.notes'),
  dot: document.querySelector('.dot'),
  dots: document.querySelectorAll('.dot'),
  noteBox: document.querySelector('.noteBox'),

  removeAllClass: function (classElement) {
    if (select.dots.length > 0) {
      console.log(select.dots)
      select.dots.forEach(function (dot) {
        dot.classList.remove(classElement)
      })
    }
  }
}

annotation.init()