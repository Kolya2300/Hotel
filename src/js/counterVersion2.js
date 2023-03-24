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
btnPlus.addEventListener('click', function (){
    counterPeople.innerText = ++counterPeople.innerText
    counterPeopleInBar.innerText = ++counterPeopleInBar.innerText
})


btnPlusRoom.addEventListener('click', function (){
    counterRoom.innerText = ++counterRoom.innerText;
    counterRoomBar.innerText = ++counterRoomBar.innerText;
})


//addEventListener buttons Minus

btnMinus.addEventListener('click', function (){
    //check that counter to be than more 1
    if (parseInt(counterPeople.innerText) > 1){
        counterPeople.innerText = --counterPeople.innerText
        counterPeopleInBar.innerText = --counterPeopleInBar.innerText
    }
})
btnMinusRoom.addEventListener('click', function (){
    //check that counter to be than more 1
    if (parseInt(counterRoom.innerText) > 1){
        counterRoom.innerText = --counterRoom.innerText
        counterRoomBar.innerText = --counterRoomBar.innerText
    }
})


function getDate() {
    const inputDate = document.getElementById("myDate").value; // получаем значение поля ввода
    const inputDate2 = document.getElementById("myDate2").value; // получаем значение поля ввода

    const date1 = new Date(inputDate);
    const date2 = new Date(inputDate2);

    const diffInMs = date2.getTime() - date1.getTime(); // вычисляем разницу в миллисекундах

    let diffInDays = diffInMs / (1000 * 60 * 60 * 24); // преобразуем разницу в дни
    const selectElement = document.getElementById("mySelect");
    const selectedValue = selectElement.value;
    diffInDays = (diffInDays * (+counterPeopleInBar.innerText * selectedValue))* +counterRoomBar.innerText
    if(!diffInDays){
        alert('Input date!')
    }else {
        alert(`Per one night: ${selectedValue} 
    People: ${+counterPeopleInBar.innerText}
    Rooms: ${+counterRoomBar.innerText}
    Total price: ` + new Intl.NumberFormat('ru-RU', {
            style: 'currency',
            currency: 'USD',
        }).format(diffInDays))
    }
}