const browseTypeBtns = document.querySelectorAll('.browse-type-btn')

browseTypeBtns.forEach((browseTypeBtn) => {
  browseTypeBtn.addEventListener('click', () => {
    browseTypeBtns.forEach((b) => b.classList.remove('text-(--clr-main-primary)'))

    browseTypeBtn.classList.add('text-(--clr-main-primary)')
  })
})

const feedTypeBtns = document.querySelectorAll('.feed-type-btn')

feedTypeBtns.forEach((feedTypeBtn) => {
  feedTypeBtn.addEventListener('click', () => {
    feedTypeBtns.forEach((btn) => {
      btn.classList.remove('text-(--clr-main-primary)')
      btn.classList.remove('bg-(--clr-main-white)')
      btn.classList.remove('border-2')
      btn.classList.remove('rounded-md')
      btn.classList.remove('border-(--clr-purple-shade)')
    })

    feedTypeBtn.classList.add('text-(--clr-main-primary)')
    feedTypeBtn.classList.add('bg-(--clr-main-white)')
    feedTypeBtn.classList.add('border-2')
    feedTypeBtn.classList.add('rounded-md')
    feedTypeBtn.classList.add('border-(--clr-purple-shade)')
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

// Mobile menu functionality
const mobileMenuBtn = document.getElementById('mobileMenuBtn')
const mobileMenu = document.getElementById('mobileMenu')

mobileMenuBtn.addEventListener('click', () => {
  mobileMenu.classList.toggle('hidden')
})

// Close mobile menu when clicking outside
document.addEventListener('click', (e) => {
  if (!mobileMenuBtn.contains(e.target) && !mobileMenu.contains(e.target)) {
    mobileMenu.classList.add('hidden')
  }
})

