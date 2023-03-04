// import Customer from './classes/customer';
import Data from './classes/Data';
// import Rooms from './classes/rooms';
// import Booking from './classes/booking'
import './css/styles.css';
import './images/hotel.png'
import './images/room.png'
//global variables
let bookings

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
       bookings = new Data(data[1].bookings)
       console.log(bookings)
        //  newCustomer = new Customer(data[0].customers[0]);
        //  console.log(newCustomer, "Customer")
})