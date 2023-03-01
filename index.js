const boton = document.querySelector('#boton');
const image = document.querySelector('#image');
const name = document.querySelector('#name');
const birthday = document.querySelector('#birthday');
const place = document.querySelector('#place');
const age = document.querySelector('#age');
const street = document.querySelector('#street');
const phone = document.querySelector('#phone');
const email = document.querySelector('#email');

const userGenerator = async () => {
    try {
        const url = 'https://randomuser.me/api/'
        const res = await fetch(url)
        const { results } = await res.json()
        const data = results[0]
        image.src = data.picture.large
        name.textContent = data.name.first + " " + data.name.last
        birthday.textContent = data.dob.date
        place.textContent = data.location.country + ", " + data.location.city
        age.textContent = data.dob.age
        street.textContent = data.location.street.name + ", " + data.location.street.number
        phone.textContent = data.phone
        email.textContent = data.email
    } catch (error) {
        console.log(error)
    }
}

boton.addEventListener('click', userGenerator)
document.addEventListener('DOMContentLoaded', userGenerator)