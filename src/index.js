//javascript code for header tag//
const nav = document.getElementById('header')
fetch('./header.html')
.then(res=>res.text())
.then(data=>{
    nav.innerHTML = data
    console.log((data));
})
//javascript code for footer tag//
/*const footer= document.getElementById('footer')
fetch('./footer.html')
.then(res=>res.text())
.then(data=>{
    footer.innerHTML = data
    console.log((data));
})*/