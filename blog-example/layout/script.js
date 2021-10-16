
let isMenuSlide = false; 

document.getElementById('burger').addEventListener('click', function(e) {
    if(isMenuSlide)
        document.querySelector('nav').classList.remove('show'); 
    else
        document.querySelector('nav').classList.add('show'); 


    isMenuSlide = !isMenuSlide; 
})

