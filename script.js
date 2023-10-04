function toggleMode() {
  const html = document.documentElement

  html.classList.toggle("light")

  const img = document.querySelector("#profile img")

   if (html.classList.contains("light")) {
    img.setAttribute ("src", './asseís/avataar.png') 

  } else {
    img.setAttribute("src", "./asseís/avatar.png")
  }
} 

/*function toggleMode() {
  const html = document.documentElement
  html.classList.toggle("light")


  const img = document.querySelector("#profile img")

  if (html.classList.contains("light")) {
    img.setAttribute("src", './asseís/avataar.png') 
  } else {
    img.setAttribute("src", "./asseís/avatar.png")
  }
}*/
