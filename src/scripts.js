// import Customer from './classes/customer';
import Data from './classes/Data';
// import Rooms from './classes/rooms';
// import Booking from './classes/booking'
import './css/styles.css';
import './images/hotel.png'
import './images/room.png'
//global variables
let dateSelected
let dataClass
let tag
let idNum
let indexNum
const loginTitle = document.querySelector('.login-title')
const bookBtn = document.querySelector('.book-btn')
const userInfo = document.getElementById('navUserInfo')
const loginView = document.querySelector('.login-view')
const navBar = document.querySelector('.nav-bar')
const userName = document.getElementById('uname')
const password = document.getElementById('pword')
const loginBtn = document.querySelector('.login-btn')
const filterDropdown = document.getElementById('filterDropdown');
const allBookings = document.querySelector('.booking-info')
const myBookings = document.getElementById('navMyBookings')
const dateBtn = document.querySelector('.date-button')
const dateInput = document.getElementById('date')
const roomsView = document.querySelector('.rooms-view')
const totalCost = document.querySelector('.total-cost')
const bookingsView = document.querySelector('.bookings-view')
const costView = document.querySelector('.cost-view')
//event listeners
roomsView.addEventListener('click', (event) => {
     addNewBooking(event)
    })
myBookings.addEventListener('click', showBookingsView)
window.addEventListener('load', getPromises)
dateBtn.addEventListener('click',(event) => {
    findRooms(event)})
loginBtn.addEventListener('click',(event) => {
    login(event)})
filterDropdown.addEventListener('click', (event) => {
    filterRoomsByType(event)
});    
//-------------fetch requests

const getCustomers = fetch("http://localhost:3001/api/v1/customers")
  .then(response => {
    if(!response.ok) {
        throw new Error("There was an error. Status Code: ", response.status);
    } else {
        return response.json()
    }
})
.catch(error => alert(`Could not fetch because: ${error}`))

const getBookings = fetch("http://localhost:3001/api/v1/bookings")
  .then(response => {
    if(!response.ok) {
        throw new Error("There was an error. Status Code: ", response.status);
    } else {
        return response.json()
    }
})
.catch(error => alert(`Could not fetch because: ${error}`));


const getRooms = fetch("http://localhost:3001/api/v1/rooms")
  .then(response => {
    if(!response.ok) {
        throw new Error("There was an error. Status Code: ", response.status);
    } else {
        return response.json()
    }
})
.catch(error => alert(`Could not fetch because: ${error}`));

//functions

function getPromises() {
Promise.all([getCustomers, getBookings, getRooms])
  .then((data) => {
       dataClass = new Data(data[0].customers, data[1].bookings, data[2].rooms)
})
}

function login(event) {
    event.preventDefault()
    const user = userName.value.toLowerCase()
    const passcode = password.value
    let createId = user.split('customer')
    idNum = parseInt(createId[1])
    indexNum = idNum - 1
    if(passcode === 'overlook2021'){
    showMainPage()
    userInfo.innerText = `${user}`
    customerBookings(dataClass)
    } else {
        loginTitle.innerText = 'The username/password is incorrect'
    }
}

function customerBookings(bookingsInfo) {
    const myBookingArray = bookingsInfo.filterBookingsById(bookingsInfo.customers[indexNum])
    const getTotalCost = bookingsInfo.myTotalCost(bookingsInfo.customers[indexNum]).toFixed()
     allBookings.innerHTML = "";
     totalCost.innerHTML = "";
     myBookingArray.forEach(booking => {
         allBookings.innerHTML += `
         <p class="booking-info">Booking Date:${booking.date}, Room Number:${booking.roomNumber} </p>`
     })
        totalCost.innerHTML = `<p class="total-cost">Total Cost: ${getTotalCost}</p>`
 }

function findRooms(event) {
    event.preventDefault()
    dateSelected = dateInput.value.split('-').join('/')
const availableRooms = dataClass.findOpenRooms(dateSelected)
if(availableRooms.length) {
roomsView.innerHTML = "";
availableRooms.forEach(room => {
    roomsView.innerHTML += `
    <div class="box">
    <img class="box-image" src="./images/room.png" alt="room-image"></img>
    <h2 class="room-title">${room.roomType}</h2>
    <p class="bed-info">bedSize: ${room.bedSize}</p>
    <p class="num-beds">numBeds: ${room.numBeds}</p>
    <p class="num-beds">costPerNight: ${room.costPerNight}</p>
    <button id="${room.number}" class="book-btn">Book Now!</button>
  </div>`
  showRoomView()

})
} else {
    roomsView.innerText = `We are so sorry but there are no available rooms on this date. Sorry for the inconvenience.`
    showRoomView()
 }
}
 function showRoomView() {
    bookingsView.classList.add('hidden')
    costView.classList.add('hidden')
    roomsView.classList.remove('hidden')
 }

 function filterRoomsByType(event) {
  let tag = event.target.innerText.toLowerCase();
  let filterOpenRooms = dataClass.filterOpenRooms(tag)
  roomsView.innerHTML = "";
filterOpenRooms.forEach(room => {
    roomsView.innerHTML += `
    <div class="box">
    <img class="box-image" src="./images/room.png" alt="beautiful-hotel-bedroom"></img>
    <h2 class="room-title">${room.roomType}</h2>
    <p class="bed-info">bedSize: ${room.bedSize}</p>
    <p class="num-beds">numBeds: ${room.numBeds}</p>
    <p class="num-beds">costPerNight: ${room.costPerNight}</p>
    <button id="${room.number}" class="book-btn">Book Now!</button>
  </div>`
})
 }

 function showBookingsView() {
    bookingsView.classList.remove('hidden')
    costView.classList.remove('hidden')
    roomsView.classList.add('hidden')
 }

 function showMainPage() {
    bookingsView.classList.remove('hidden')
    costView.classList.remove('hidden')
    navBar.classList.remove('hidden')
    loginView.classList.add('hidden')
 }

 function addNewBooking(event) {
   const roomNum = event.target.id
   fetch('http://localhost:3001/api/v1/bookings', {
            method: 'POST',
            body: JSON.stringify({ 
                "userID": idNum,
                "date": dateSelected,
                "roomNumber": parseInt(roomNum)
            }),
            headers: {
                'Content-Type': 'application/json'
            }
        }) .then(response => response.json())
           .then(data => {dataClass.addBooking(data.newBooking)
            customerBookings(dataClass)
            showBookingsView()
           })
 }