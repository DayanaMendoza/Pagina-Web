const menu = document.querySelector('.menu');
const mennu = document.querySelector('.menu-navegacion');

//console.log(menu)
//console.log(mennu)


menu.addEventListener('click',()=> {
    mennu.classList.toggle("spread")
})


window.addEventListener('click', e=>{
    if(mennu.classList.contains('spread') && e.target!=mennu  &&  e.target != menu ){
            mennu.classList.toggle("spread")   

    }
})