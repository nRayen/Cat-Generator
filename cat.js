const container = document.querySelector('.container')
const title = document.querySelector('h1')
title.innerText = 'Chargement...'
const img = document.querySelector('img')
    img.hidden = true
const btn = document.querySelector('button')

btn.addEventListener('click', event => {
    img.hidden = false
    title.innerText = 'Chargement...'
    btn.style.filter = 'brightness(.5)'


    fetch('https://api.thecatapi.com/v1/images/search')
    .then(r => {
        title.innerText = 'Chargement...'
        return r.json()
    })
    .then(data => {
        title.innerText = 'Chargement terminé !'
        img.src = data[0].url
        btn.style.filter = 'brightness(1)'

    });
});