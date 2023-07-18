const navbar = document.getElementsByTagName("li")
console.log(navbar)



document.addEventListener('click', (e)=>{
    const listaa = [document.querySelector('.active')]
    const liClick = e.target
    if(liClick.classList.contains('lis')){
        if (listaa.length > 0){
            listaa[0].classList.remove('active')
            listaa.pop()
            listaa.push(liClick)
            listaa[0].classList.add('active')
        }
        } 
    }
)