let slide1 = document.querySelector("#slide1")
let api = "Api/doctors.json"
let response = new XMLHttpRequest()
response.open("GET" , api)
response.send()
response.onreadystatechange = function() {
    if(this.status===200 && this.readyState===4){
        let data = JSON.parse(this.response)
        for (let i = 0; i < data.length; i++) {
            let book = document.createElement("div")
            book.className = "book"
            let a = document.createElement("a")
            a.setAttribute("href" , `mailto:${data[i].email}`)
            let button = document.createElement("button")
            button.className = "email"
            let img = document.createElement("img")
            img.setAttribute("src" , "logo/outlook.png")
            let cover = document.createElement("div")
            cover.className = "cover"
            let divImg = document.createElement("div")
            divImg.className = "img"
            let img2 = document.createElement("img")
            img2.setAttribute("src" , "logo/logo.jpg")
            let span = document.createElement("span")
            span.innerHTML = data[i].name
            let p = document.createElement("p")
            p.className = "job"
            p.innerHTML = data[i].title
            book.appendChild(a)
            book.appendChild(cover)
            a.appendChild(button)
            button.appendChild(img)
            divImg.appendChild(img2)
            cover.appendChild(divImg) 
            cover.appendChild(span) 
            cover.appendChild(p) 
            slide1.appendChild(book)
        }
    }
}