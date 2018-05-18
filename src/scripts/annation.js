const annotation = {
  init: function () {
    select.image.addEventListener('click', function (e) {
      annotation.stickyNote(e)
    })
  },
  stickyNote: function (e) {
    console.log(e) 
    const dot = document.createElement('div')
    dot.classList.add('dot')
    select.notes.appendChild(dot)

    dot.insertAdjacentHTML('afterbegin', this.noteBox())
  },
  createNote: function () {

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
  notes: document.querySelector('.notes')
}

annotation.init()