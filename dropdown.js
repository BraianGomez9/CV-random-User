let btn = document.querySelector('#btn')
let pota = document.querySelector('#info-2')

btn.addEventListener('click', () => {
  if(pota.style.display === "none") {
    pota.style.display = "flex"
  } else {
    pota.style.display = "none"
  }

  
})