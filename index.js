const navSlide=()=>{
    const burger = document.getElementById('btn');
    const list=document.getElementById('move');
    
    burger.addEventListener('click', () => {
        if(list.style.display === "block"){
            list.style.display = "none"
        }else{
            list.style.display = "block"
        }
    })
    const toggle = document.getElementById('cancel');
    
    toggle.addEventListener('click', () => {
        if(list.style.display === "block"){
            list.style.display = "none"
        }else{
            list.style.display = "block"
        }
    })
    // burger.addEventListener('click',()=>{
    //     list.classList.toggle('list');
    // },false)
}
navSlide();