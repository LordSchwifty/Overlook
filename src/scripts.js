// import Customer from './classes/customer';
// import Bookings from './classes/bookings';
// import Rooms from './classes/rooms';
// This is the JavaScript entry file - your code begins here
// Do not delete or rename this file ********

// An example of how you tell webpack to use a CSS (SCSS) file
import './css/styles.css';

// An example of how you tell webpack to use an image (also need to link to it in the index.html)
import './images/hotel.png'
import './images/room.png'
//global variables
let newCustomer
let getAllRooms

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
        //  newCustomer = new Customer(data[0].customers[0]);
        //  console.log(newCustomer, "Customer")
})