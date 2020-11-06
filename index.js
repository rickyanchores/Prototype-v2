let hero = document.querySelector('#main h1')

hero.addEventListener('click', ()=>{
    hero.style.fontSize = '200rem'
    hero.style.opacity = '0'
    hero.style.transition = 'opacity 1s ease, font-size 2s linear'
    setTimeout(()=>{location.href = 'contacts.html'},200)
})

//HERO DELAY APPEAR

window.onload = () =>{

    hero.style.opacity = '1'
    hero.style.transition = 'opacity 3s ease'

}