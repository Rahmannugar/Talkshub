const bar = document.getElementById("mobile")
const close = document.getElementById("close")
const nav =document.getElementById("navbar")
if (bar) {
    bar.addEventListener("click", ()=>{
        nav.classList.add("active")
    })
}
if (close) {
    close.addEventListener("click", ()=>{
        nav.classList.remove("active")
    })
}

const btn = document.getElementById("btn")
const screen = document.getElementById("screen")
const comment = document.getElementById("comment")

function submit(){
    screen.innerHTML = comment.value
}
btn.addEventListener("click", submit)
