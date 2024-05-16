let page2 = document.querySelector(".activity")
let apiVideo = "Activity-clinical/videos.json"
let responseVideo = new XMLHttpRequest()
responseVideo.open("GET" , apiVideo)
responseVideo.send()
responseVideo.onreadystatechange = function() {
    if(this.status===200 && this.readyState===4){
        let data = JSON.parse(this.response)
        for (let i = 0; i < data.length; i++) {
            let nameLength = data[i].name
            let vidTitleLength = data[i].videoTitle
            if (nameLength.length != 0) {
                let activityCard = document.createElement("div")
                activityCard.className = "activity-card"
                let activitySlide = document.createElement("div")
                activitySlide.className = "activity-slide"
                let p = document.createElement("p")
                p.className = "activity-text"
                p.innerHTML = data[i].title
                for (let i = 0; i < nameLength.length; i++) {
                    let videoDiv = document.createElement("div")
                    videoDiv.className = "slide-activity-card"
                    let video = document.createElement("video")
                    video.className="slide-activity-img"
                    video.setAttribute("controls" , "")
                    let source = document.createElement("source")
                    source.setAttribute("src" , `Activity-video/${nameLength[i]}`)
                    let p2 = document.createElement("p")
                    p2.className = "activity-text"
                    p2.innerHTML = vidTitleLength[i]
                    if (nameLength[i].includes("https")) {
                        let iframe = document.createElement("iframe") 
                        iframe.src = `${nameLength[i]}`
                        source.setAttribute("controls" , "")
                        
                        videoDiv.appendChild(iframe)
                    } else{
                        video.appendChild(source)
                        videoDiv.appendChild(video)
                    }
                    videoDiv.appendChild(p2)
                    activitySlide.appendChild(videoDiv)
                }
                activityCard.appendChild(activitySlide)
                activityCard.appendChild(p)
                page2.appendChild(activityCard)
            }
        }
    }
}