// const headerName = async() => {
//         const res = await fetch('https://openapi.programming-hero.com/api/phero-tube/categories');
//         const data = await res.json()
//         console.log(data)
// }
function getTime (time){
    const hours = parseInt(time / 3600);
    let remainingSecond = hours % 3600
    const minutes = parseInt(remainingSecond / 60);
    remainingSecond = remainingSecond % 60

    return `${hours} hours ${minutes} minutes ${remainingSecond} seconds`
}

const showItems = (id) => {
    fetch (`https://openapi.programming-hero.com/api/phero-tube/category/${id}`)
    .then(res => res.json())
    .then(data => {
        hideActiveBtn()

        videoDisplay(data.category)
        const activeBtn = document.getElementById(`btn-${id}`)
        activeBtn.classList.add('active')
        
    });
}

async function headerNav() {
    fetch ('https://openapi.programming-hero.com/api/phero-tube/categories')
    .then(res => res.json())
    .then(data => displayCategory(data.categories))
    .catch(error => console.error('Error found', error))
}
const displayCategory = (data) => {
    const categoryContainer = document.getElementById('categories');
    data.forEach(categories => {
        console.log(categories);
        const button = document.createElement('div')
        button.innerHTML = `
            <button id="btn-${categories.category_id}" onclick= "showItems(${categories.category_id})" class = "btn active-btn">
            ${categories.category}
            </button>
        `
        categoryContainer.appendChild(button)
    });
}


// video section
const videoSection = async() => {
    const res = await fetch('https://openapi.programming-hero.com/api/phero-tube/videos')
    const data = await res.json()
    videoDisplay(data.videos)
}
videoSection()

const videoDisplay = (data) => {
    const videoContainer =document.getElementById('video-content');
    videoContainer.innerHTML = "";

    if(!data.length){
        videoContainer.classList.remove('grid')
        videoContainer.innerHTML = `
        <div class = "min-h-screen flex justify-center items-center flex-col">
            <img src = "./asstes/Icon.png">
        <h1 class = "text-4xl font-bold">No content here in this category</h1>
        </div>
        `;
    }else{
        videoContainer.classList.add('grid')
    }

    data.forEach((video) => {
        const videoContent  = document.createElement('div')
        videoContent.innerHTML = `
        <div class  = "card w-96 shadow-lg">
            <div>
                <img class = "w-full h-[280px] object-cover relative" src = "${video.thumbnail}">
                ${video.others.posted_date?.length === 0 ? "" : `<span class = "absolute bg-[#171717] text-white rounded-lg right-2 bottom-24 p-2">${getTime(video.others.posted_date)}</span>`}
                
            </div>
            <div class = "flex gap-3 px-3 py-2">
                <img class = "w-[40px] h-10 object-cover rounded-full" src = "${video?.authors[0].profile_picture}">
                <div class = ''>
                    <div class = "">
                    <h3 class = "font-semibold ">${video?.title}</h3>
                        <div class = "flex items-center justify-between">
                        <p class = "text-[rgba(23,23,23,0.72)] font-medium">${video?.authors?.[0].profile_name}</p>
                        ${video.authors[0].verified === true ? `<img class ="w-5" src = "https://img.icons8.com/?size=48&id=SRJUuaAShjVD&format=png"/>` : "" }
                        </div> 
                    <p class = "text-[rgba(23,23,23,0.7)] font-medium">${video?.others?.views}</p>
                    </div>
                </div>
                </div>
                <button onclick = "details('${video.video_id}')" class = "btn btn-error">Details</button>
                
        </div>
        `
        videoContainer.appendChild(videoContent);
    })
}
headerNav()
// displayCategory() 