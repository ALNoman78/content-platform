const hideActiveBtn = (id) => {
    const btn1 = document.getElementsByClassName('active-btn')
    for (const e of btn1) {
        e.classList.remove('active')
    }
}

// details function 

const details = async(data2) => {
    const res = await fetch(`https://openapi.programming-hero.com/api/phero-tube/video/${data2}`)
    const data = await res.json()
    displayDetails(data.video);
}

const displayDetails = (video) => {
    console.log(video);
    const modalItems = document.getElementById('modal-box')
    console.log(modalItems);
    document.getElementById('customeModal').showModal()
    modalItems.innerHTML = `
        <img class = "w-full" src = "${video.thumbnail}">
        <p>${video.description}</p>
    `
}