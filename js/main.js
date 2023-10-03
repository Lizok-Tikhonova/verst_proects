const butNight = document.querySelector('.dark')


if(localStorage.getItem('darkMode')=='dark'){
    butNight.classList.add("dark--active")
    document.body.classList.add("night")
}



butNight.addEventListener('click', ()=>{
    butNight.classList.toggle("dark--active")
    const isDark = document.body.classList.toggle("night")

    if(isDark){
         localStorage.setItem('darkMode', 'dark')
    }
    else{
        localStorage.setItem('darkMode', 'white')
    }

   
})