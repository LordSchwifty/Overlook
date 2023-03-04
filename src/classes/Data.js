import Booking from './Booking'
import Rooms from './rooms'
import Customer from './customers'
class Data {
   constructor(customersData, bookingsData, roomsData,) {
       this.customers = customersData.map(customer => new Customer(customer))
       this.bookings = bookingsData.map(booking => new Booking(booking))
       this.rooms = roomsData.map(room => new Rooms(room))
   }
     filterBookingsById(customer) {
      const getRoomForUser = this.bookings.filter(booking => {
        return booking.userID === customer.id
      })
        return getRoomForUser
     }

     myTotalCost(customerData){
        const getRoomForUser = this.bookings.filter(booking => {
          console.log('this is the data:', booking)
          return booking.userID === customerData.id
        })
          return getRoomForUser.reduce((acc, cv) => {
            if(cv.roomNumber === this.rooms.number){
              acc += this.rooms.costPerNight
            }
            return acc
          }, 0)
       }

       findOpenRooms(dateQuery) {
        const findRooms = this.bookings.filter(booking => booking.date === dateQuery)
        const openRooms = this.rooms.filter(room => {
           return findRooms.every(booking => {
             return booking.roomNumber !== room.number
           })
          })
           return openRooms
         }
        
          
       
//filter through the bookings array and return all rooms booked on a certain date
//then filter through the rooms array and return all the rooms that are not matched booked on that date
}


// filter the bookings by customer id. filterByBookings(userid) if userid is the same as bookings user id return the list of bookings
// take the total number of bookings and adddthem together by the room price and return total
// find room cost based on room number and instantiate a newe instance of room
export default Data;