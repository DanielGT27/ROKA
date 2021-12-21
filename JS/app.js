

//----------------------------------------------[Menú responsive]---------------------------------------

const d=document
const icon=d.querySelector(".responsiveLogo")
const menu_movile=d.querySelector(".menu_movile")

icon.addEventListener("click",()=>{

    menu_movile.classList.toggle("active")

})

//-------------------------------------------------------[Click]----------------------------------------

const logo_=d.querySelector(".logo_")

d.addEventListener("click", (e) => {
  if (menu.className === "menu_movile active"){
    if (e.target.className === "overlay"){
      menu.className = "menu_movile"
      overlay.style.background = "transparent"
      btn.className = "responsiveLogo responsiveLogo--elastic"
      logo.style.display = "block"
      header.style.background="rgb(255, 1, 1)"
     search.style.background="rgb(255, 255, 255)"
    } 
    
  }
})


//-----------------------------------[Background]-----------------------------------------

  const overlay = d.querySelector(".overlay") 
const search = d.querySelector(".main_container")
const logo = d.querySelector(".logo_ img")
const btn=d.querySelector(".responsiveLogo")
const menu=d.querySelector(".menu_movile")
const header=d.querySelector("header")
const headerA=d.querySelector("header a").textContent

btn.addEventListener("click", () => {
  if (menu.classList.contains("active")) {
    logo.style.display = "none"
    search.style.background = "rgba(0, 0, 0, 0.74)"
    overlay.style.background = "rgba(0, 0, 0, 0.74)"
    header.style.background ="rgba(0, 0, 0, 0.24)"
    logo.style.display = "none"

  } else {
    search.style.background = "#fff"
    overlay.style.background = "transparent"
    logo.style.display = "block"
    header.style.background="rgb(255, 1, 1)"
  }
})

console.log(headerA)


//-----------------------------------[Lista Responsive]-------------------------------------------

const icon2=d.querySelector(".item_button")
const lista_subitems=d.querySelector(".lista_subitems")

icon2.addEventListener("click",()=>{

    lista_subitems.classList.toggle("active")

})

//-----------------------------------------[SLider]-------------------------------------------------


//--------------------------------------[Slider1]--------------------------------------------------

const slider=document.querySelector("#slider")
let sliderSection=document.querySelectorAll(".slider-section")
let sliderSectionLast= sliderSection[sliderSection.length-1]

slider.insertAdjacentElement('afterbegin', sliderSectionLast)

function Movement () {

let sliderSectionFirst=  document.querySelectorAll(".slider-section")[0];
slider.style.marginLeft="-200%"
slider.style.transition="all ease 0.5s"
setTimeout(function () {

  slider.style.transition="none"
  slider.insertAdjacentElement('beforeend', sliderSectionFirst)
  slider.style.marginLeft="-100%"
  
},500)
  
}

setInterval(
  function () {
    Movement()
  },2000

)

//----------------------------------------------[Slider2]----------------------------------------

const slider2=document.querySelector("#slider2")
let sliderSection2=document.querySelectorAll(".slider-section2")
let sliderSectionLast2= sliderSection2[sliderSection2.length-1]

slider2.insertAdjacentElement('afterbegin', sliderSectionLast2)

function Movement2 () {

let sliderSectionFirst=  document.querySelectorAll(".slider-section2")[0];
slider2.style.marginLeft="-200%"
slider2.style.transition="all ease 0.5s"
setTimeout(function () {

  slider2.style.transition="none"
  slider2.insertAdjacentElement('beforeend', sliderSectionFirst)
  slider2.style.marginLeft="-100%"
  
},500)
  
}

setInterval(
  function () {
    Movement2()
  },2000

)

//--------------------------------------------------[SLider3]------------------------------------------------


const slider3=document.querySelector("#slider3")
let sliderSection3=document.querySelectorAll(".slider-section3")
let sliderSectionLast3= sliderSection3[sliderSection3.length-1]

slider3.insertAdjacentElement('afterbegin', sliderSectionLast3)

function Movement3 () {

let sliderSectionFirst=  document.querySelectorAll(".slider-section3")[0];
slider3.style.marginLeft="-200%"
slider3.style.transition="all ease 0.5s"
setTimeout(function () {

  slider3.style.transition="none"
  slider3.insertAdjacentElement('beforeend', sliderSectionFirst)
  slider3.style.marginLeft="-100%"
  
},500)
  
}

setInterval(
  function () {
    Movement3()
  },2000

)

//---------------------------------------------------------------[Slider4]-----------------------------------------------
// const d= document
// const sliderContainer5=d.querySelector("container--slider5")
// const slides5=d.querySelectorAll("slider--section5")
// const slider5=d.querySelector("slider5")
// const interval=2000
// const slideID
// let index5=1
// const firstClone1=slides5[0].cloneNode(true)
// const lastClone1=slides5[slides5.length-1].cloneNode(true)

// firstClone1.id="firstClone1"
// lastClone1.id="lastClone1"

// const slidewidth=slides5[0].clientWidth
// const sliderInterval=()=>{
//   slideID=setInterval(() => {
//     moverDerecha()
//   }, interval);
// }
// slider5.style.transform=`translateX(${-slidewidth*index5}px)`
// const moverDerecha=()=>{
//   if (index5>=slides5.length-1) return 
//   index5++ 
//   slider5.style.transform=`translateX(${-slidewidth*index5}px)`
//   slider5.style.transition=`all ease 0.5s`
  
// }
// sliderContainer5.addEventListener("DOMContentLoaded", sliderInterval
// )


//..................................................................


