// const headerName = async() => {
//         const res = await fetch('https://openapi.programming-hero.com/api/phero-tube/categories');
//         const data = await res.json()
//         console.log(data)
// }

async function headerNav() {
    fetch ('https://openapi.programming-hero.com/api/phero-tube/categories')
    .then(res => res.json())
    .then(data => displayCategory(data.categories))
}
const displayCategory = (data) => {
    const categoryContainer = document.getElementById('categories')

    data.forEach((categories) => {
        const button = document.createElement('button')
        button.classList = "btn"
        button.innerText = categories.category
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
    const videoContainer =document.getElementById('video-content')
    // console.log(data);
    data.forEach((video) => {
        console.log(video);
        const videoContent  = document.createElement('div')
        videoContent.innerHTML = `
        <div class  = "card w-96 shadow-xl">
            <img class = "w-full h-[280px] object-cover" src = "${video.thumbnail}">
            <div class = "flex gap-3 px-3 py-2">
                <img class = "w-[40px] h-10 object-cover rounded-full" src = "${video?.authors[0].profile_picture}">
                <div class = ''>
                    <div class = "">
                    <h3 class = "font-semibold ">${video?.title}</h3>
                        <div class = "flex items-center justify-between">
                        <p class = "text-[rgba(23,23,23,0.72)] font-medium">${video?.authors?.[0].profile_name}</p>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                        </svg> 
                        </div> 
                    <p class = "text-[rgba(23,23,23,0.7)] font-medium">${video?.others?.views}</p>
                    </div>
                </div>
            </div>
        </div>
        `
        videoContainer.appendChild(videoContent);
    })
}
headerNav()
displayCategory() 