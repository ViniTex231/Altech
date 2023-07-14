const navbar = document.getElementsByTagName("li")
console.log(navbar)



document.addEventListener('click', (e)=>{
    const listaa =[]
    const liClick = e.target
    if(liClick.classList.contains('lis')){
        listaa[0].classList.remove('active')
        listaa.pop()
        listaa.push(liClick)
        listaa[0].classList.add('active')
 
        } 
    }
  
)