const browseTypeBtns = document.querySelectorAll('.browse-type-btn')

browseTypeBtns.forEach((browseTypeBtn) => {
  browseTypeBtn.addEventListener('click', () => {
    browseTypeBtns.forEach((b) => b.classList.remove('text-(--clr-main-primary)'))

    browseTypeBtn.classList.add('text-(--clr-main-primary)')
  })
})

//add to favorite propertiy buttons event listeners 
const addToFavButtons = document.querySelectorAll('.addToFavsBtn')

addToFavButtons.forEach((addToFavButton) => {
  addToFavButton.addEventListener('click', () => {
    const heartIcon = addToFavButton.querySelector('.fa-heart')
    heartIcon.classList.toggle('fa-solid')
  })
})

let valueDisplays = document.querySelectorAll('#statsNum')
let interval = 5000

valueDisplays.forEach((valueDisplay) => {
  let startValue = 0
  let endValue = parseInt(valueDisplay.getAttribute('data-val'))
  let duration = Math.floor(interval / endValue)
  let counter = setInterval(() => {
    startValue += 1
    valueDisplay.textContent = startValue
    if (startValue === endValue) {
      clearInterval(counter)
    }
  }, duration);
})

