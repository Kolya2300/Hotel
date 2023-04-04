// find elements on the webSite
const btnMinus = document.querySelector('[data-action="minus"]')
const btnMinusRoom = document.querySelector('[data-action="minus-room"]')
const btnPlus = document.querySelector('[data-action="plus"]')
const btnPlusRoom = document.querySelector('[data-action="plus-room"]')


const counterPeople = document.querySelector('[data-counter]')
const counterPeopleInBar = document.querySelector('[data-counter-people]')


const counterRoom = document.querySelector('[data-counter-room]')
const counterRoomBar = document.querySelector('[data-counter-room-bar]')
const counterRoomEnd = document.querySelector('[data-counter-room-end]')


//addEventListener buttons Plus
btnPlus.addEventListener('click', function () {
    counterPeople.innerText = ++counterPeople.innerText
    counterPeopleInBar.innerText = ++counterPeopleInBar.innerText
})


btnPlusRoom.addEventListener('click', function () {
    counterRoom.innerText = ++counterRoom.innerText;
    counterRoomBar.innerText = ++counterRoomBar.innerText;
})


//addEventListener buttons Minus

btnMinus.addEventListener('click', function () {
    //check that counter to be than more 1
    if (parseInt(counterPeople.innerText) > 1) {
        counterPeople.innerText = --counterPeople.innerText
        counterPeopleInBar.innerText = --counterPeopleInBar.innerText
    }
})
btnMinusRoom.addEventListener('click', function () {
    //check that counter to be than more 1
    if (parseInt(counterRoom.innerText) > 1) {
        counterRoom.innerText = --counterRoom.innerText
        counterRoomBar.innerText = --counterRoomBar.innerText
    }
})

const searchBox = document.querySelector('.search__box')
const searchBoxItem = document.querySelector('.search__box-item')
const searchBtn = document.querySelector('.search__menu-btn')
const searchBtnClose = document.querySelector('.search__btn-close')
/*searchBtn.addEventListener('click', function (){

})*/
searchBtnClose.addEventListener('click', function () {
    searchBox.style.display = 'none'
})

async function getDate() {

    const inputDate = document.getElementById("myDate").value; // получаем значение поля ввода
    const inputDate2 = document.getElementById("myDate2").value; // получаем значение поля ввода

    const date1 = new Date(inputDate);
    const date2 = new Date(inputDate2);

    const diffInMs = date2.getTime() - date1.getTime(); // вычисляем разницу в миллисекундах

    let diffInDays = diffInMs / (1000 * 60 * 60 * 24); // преобразуем разницу в дни
    let locationHotel = document.getElementById("locationInput").value;

    diffInDays = (diffInDays * (+counterPeopleInBar.innerText)) * +counterRoomBar.innerText
    if (!diffInDays) {
        alert('Input date!')
    } else {
        searchBox.style.display = 'block'
        const response = await fetch('http://localhost:3000/hotel')
        const hotelsArray = await response.json()
        console.log(typeof hotelsArray)
        renderHotels(hotelsArray, locationHotel, diffInDays)
    }

}

function renderHotels(hotelsArray, locationHotel, diffInDays) {
    Array.from(hotelsArray).forEach(item => {
        if (item.location === locationHotel) {
            const hotelHTML = `
            <div class="hotel__card-item">
            <div data-id="${item.id}">
                <img src="${item.picture}" alt="" class="hotel__card-img-search">
                <a href="" class="hotel__card-location-search">${item.locationURL}</a>
                <a href="" class="hotel__card-location-search">${item.location}</a>
                <p class="hotel__card-name-hotel">${item.nameHotel}</p>
                <div class="hotel__starts">
                    <p class="hotel__card-price">${item.price * diffInDays} $ Par Night</p>
                    <div class="stars"></div>
                </div>
                </div>
            </div>
        `;
            searchBoxItem.insertAdjacentHTML('beforeend', hotelHTML)
        }
    })
}
