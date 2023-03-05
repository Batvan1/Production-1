let messi = document.querySelector("#messi")
let ronaldo =document.getElementById("ronaldo")

messi.addEventListener("click",(x)=>{
    document.querySelector(".container").innerHTML = `<h1>Memnun Oldum Futbol Duayeni</h1>`
    document.querySelector(".title").innerHTML = ""
})

ronaldo.addEventListener("click",()=>{
    document.querySelector(".container").innerHTML = `<h1>Sen Mahallede Kaleye Konulan Çocuksun </h1>`
    document.querySelector(".title").innerHTML = ""
})