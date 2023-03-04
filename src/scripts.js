// import Customer from './classes/customer';
import Data from './classes/Data';
// import Rooms from './classes/rooms';
// import Booking from './classes/booking'
import './css/styles.css';
import './images/hotel.png'
import './images/room.png'
//global variables
let newData
const allBookings = document.querySelector('.all-bookings')
const myBookingsBtn = document.querySelector('navMyBookings')

//event listeners
myBookingsBtn.addEventListener('click', customerBookings)
//-------------fetch requests

const getCustomers = fetch("http://localhost:3001/api/v1/customers")
  .then((response) => response.json())

const getBookings = fetch("http://localhost:3001/api/v1/bookings")
  .then((response) => response.json())

const getRooms = fetch("http://localhost:3001/api/v1/rooms")
  .then((response) => response.json())

Promise.all([getCustomers, getBookings, getRooms])
  .then((data) => {
       console.log(data)
       console.log(data[1].bookings)
       newData = new Data(data[0].customers, data[1].bookings, data[2].rooms)
       console.log(newData)
        //  newCustomer = new Customer(data[0].customers[0]);
        //  console.log(newCustomer, "Customer")
})


//functions
function customerBookings(bookings) {
    allBookings.innerHTML = "";
    bookings.forEach(booking => {
        allBookings.innerHTML += `
        <p class="booking-info">Booking Date:${booking.date}, Room Number:${booking.roomNumber} </p>`
    })
}