const hotelContainer = document.querySelector('.hotel__card')
getHotel()
async function getHotel() {
    const response = await fetch('http://localhost:3000/hotel')
    const hotelsArray = await response.json()
    console.log( typeof hotelsArray)
    renderHotels(hotelsArray)
}
function renderHotels(hotelsArray){
        Array.from(hotelsArray).forEach(item=>{
            const hotelHTML = `
            <div class="hotel__card-item">
            <div data-id="${item.id}">
                <img src="${item.picture}" alt="" class="hotel__card-img">
                <a href="" class="hotel__card-location">${item.locationURL}</a>
                <p class="hotel__card-name-hotel">${item.nameHotel}</p>
                <div class="hotel__starts">
                    <p class="hotel__card-price">${item.price} $ Par Night</p>
                    <div class="stars"></div>
                </div>
                </div>
            </div>
        `
            hotelContainer.insertAdjacentHTML('beforeend', hotelHTML)
        })
}