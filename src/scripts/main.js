const categories = ['All', 'Personal', 'Presentation', 'Random', 'Fun']

const elements = {
  search: document.querySelector('header input'),
  resultsWrapper: document.querySelector('.results'),
  hashtags: document.querySelectorAll('.hashtag'),
  categories: document.querySelector('.sidebar ul'),
  newCategory: document.querySelector('.newCategory'),
  newCategoryInput: document.querySelector('.newCategoryInput'),
  postCategories: document.querySelector('.categories'),
  postForm: document.querySelector('.timeline form'),
  posts: document.querySelector('.articles')
}

function addCategories() {
  while (elements.categories.firstChild) {
    elements.categories.removeChild(elements.categories.firstChild)
  }
  while (elements.postCategories.firstChild) {
    elements.postCategories.removeChild(elements.postCategories.firstChild)
  }
  categories.forEach((category, i) => {
    elements.categories.insertAdjacentHTML(
      'beforeend',
      `<li><a href="#">${category}</a></li>`
    )
    elements.postCategories.insertAdjacentHTML(
      'beforeend',
      `<input type="checkbox" id="category${i}"><label for="category${i}">${category}</label>`
    )
  })
}
addCategories()

elements.postForm.addEventListener('submit', e => {
  e.preventDefault()
  elements.posts.insertAdjacentHTML(
    'afterbegin',
    `<article>
    <header>
      <img src="images/cat.jpg" alt="">
    </header>
    <footer>
      <img src="images/avatar@2x.png" alt="">
      <div class="content">
        <time>18-05-2018 12:41</time>
        <p>A cute cat
          <span class="hashtag">#cat #cute</span>
        </p>
      </div>
      <img src="images/icon-photo.svg" alt="" class="icon">
    </footer>
  </article>`
  )
})
elements.newCategory.addEventListener('click', () => {
  categories.push(elements.newCategoryInput.value)
  addCategories()
})
elements.search.addEventListener('submit', e => {
  e.preventDefault()
})
elements.search.addEventListener('keypress', e => {
  let key = e.which || e.keyCode
  if (key === 13) {
    if (elements.search.value.length > 0) {
      searchResults(elements.search.value)
    }
  }
})

function searchResults(input) {
  elements.resultsWrapper.classList.remove('hidden')
  elements.resultsWrapper.querySelector('h2').innerHTML = input
}

elements.hashtags.forEach(hashtag => {
  hashtag.addEventListener('click', () => {
    searchResults(hashtag.innerHTML)
  })
})
