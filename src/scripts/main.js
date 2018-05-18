const search = document.querySelector('header input')
const resultsWrapper = document.querySelector('.results')

search.addEventListener('submit', (e) => {
  e.preventDefault()
})
search.addEventListener('keypress', (e) => {
  let key = e.which || e.keyCode
  if (key === 13) {
    if (search.value.length > 0) {
      searchResults(search.value)
    }
  }
})

function searchResults(input) {
  resultsWrapper.classList.remove('hidden')
  resultsWrapper.querySelector('h2').innerHTML = input
}