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

const firebaseConfig = {
    apiKey: "AIzaSyDIpmWcYyNQvQtlNJbnJaiMbrfFQfhEZV0",
    authDomain: "talkshub-81f64.firebaseapp.com",
    projectId: "talkshub-81f64",
    storageBucket: "talkshub-81f64.appspot.com",
    messagingSenderId: "759345416835",
    appId: "1:759345416835:web:4b81afa38c4eb6197269b6",
    measurementId: "G-0YEH2S02PL"
  };
  function login(event){
  }
  function logout(){
  }