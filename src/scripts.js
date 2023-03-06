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
  .then((response) => response.json())

const getBookings = fetch("http://localhost:3001/api/v1/bookings")
  .then((response) => response.json())

const getRooms = fetch("http://localhost:3001/api/v1/rooms")
  .then((response) => response.json())

//functions

function getPromises() {
Promise.all([getCustomers, getBookings, getRooms])
  .then((data) => {
       console.log(data)
       console.log(data[1].bookings)
       dataClass = new Data(data[0].customers, data[1].bookings, data[2].rooms)
       
        //  newCustomer = new Customer(data[0].customers[0]);
        //  console.log(newCustomer, "Customer")
})
}

function login(event) {
    event.preventDefault()
    const user = userName.value.toLowerCase()
    const passcode = password.value
    let createId = user.split('customer')
    idNum = parseInt(createId[1])
    indexNum = idNum - 1
    console.log(indexNum)
    if(user === 'customer50' && passcode === 'overlook2021'){
    console.log(user)
    console.log(passcode)
    showMainPage()
    userInfo.innerText = `${user}`
    customerBookings(dataClass)
    }
}

function customerBookings(bookingsInfo) {
    const myBookingArray = bookingsInfo.filterBookingsById(bookingsInfo.customers[indexNum])
    const getTotalCost = bookingsInfo.myTotalCost(bookingsInfo.customers[indexNum]).toFixed()
    console.log(getTotalCost)
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
    roomsView.innerText = `I'm sorry shithead`
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
  console.log(tag)
  let filterOpenRooms = dataClass.filterOpenRooms(tag)
  console.log(filterOpenRooms)
  roomsView.innerHTML = "";
filterOpenRooms.forEach(room => {
    roomsView.innerHTML += `
    <div class="box">
    <img class="box-image" src="./images/room.png" alt="room-image"></img>
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
                "userID": indexNum,
                "date": dateSelected,
                "roomNumber": parseInt(roomNum)
            }),
            headers: {
                'Content-Type': 'application/json'
            }
        }) .then(response => response.json())
           .then(data => dataClass.addBooking(data.newBooking))
           .then(showBookingsView())
 }