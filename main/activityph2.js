let page = document.querySelector(".activity")
let apiPhoto = "Activity-clinical/photos.json"
let responsePhoto = new XMLHttpRequest()
responsePhoto.open("GET" , apiPhoto)
responsePhoto.send()
responsePhoto.onreadystatechange = function() {
    if(this.status===200 && this.readyState===4){
        let data = JSON.parse(this.response)
        for (let i = 0; i < data.length; i++) {
            let nameTitle = data[i].name
            if (nameTitle.length != 0) {
            let activityCard = document.createElement("div")
            activityCard.className = "activity-card"
            let activitySlide = document.createElement("div")
            activitySlide.className = "activity-slide"
            let p = document.createElement("p")
            p.className = "activity-text"
            p.innerHTML = data[i].title
            for (let i = 0; i < nameTitle.length; i++) {
                let img = document.createElement("img")
                img.className = "activity-img"
                img.setAttribute("src" , `Activity-photo/${nameTitle[i]}`)
                activitySlide.appendChild(img)
            }
            activityCard.appendChild(activitySlide)
            activityCard.appendChild(p)
            page.appendChild(activityCard)
            }
        }
    }
}