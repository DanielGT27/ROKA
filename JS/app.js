const d=document
const icon=d.querySelector(".responsiveLogo")
const menu_movile=d.querySelector(".menu_movile")

icon.addEventListener("click",()=>{

    menu_movile.classList.toggle("active")

})


/*d.addEventListener("click", (e) => {

    if (menu_movile.classList.contains("active")) {
      d.addEventListener("click", (e) => {
        if (e.target !== d.querySelector(".responsiveLogo")){
          menu_movile.classList.remove("active")
        }
      })
    }
  })*/