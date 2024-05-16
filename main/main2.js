function openLinks(){
    const links = document.getElementById("nav");
    links.classList.toggle("active");
}

window.addEventListener("scroll" , function(){
    let header =this.document.querySelector(".lower-head");
    header.classList.toggle("fix" , window.scrollY > 210)
})