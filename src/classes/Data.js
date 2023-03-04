import Booking from './Booking'
class Data {
   constructor(bookingsData) {
       console.log("this ish:", bookingsData)
       this.bookings = bookingsData.map(booking => new Booking(booking))
   }
     filterBookingsById(customerData) {
      const getRoomForUser = this.bookings.filter(booking => {
        console.log('this is the data:', booking)
        return booking.userID === customerData.id
      })
        return getRoomForUser
     }

    //  findOpenRooms(bookingsData, roomsData) {
    //   const findRooms = roomsData.filter(room => {
    //     return room.number !== bookingsData.roomNumber
    //   })
    //  }
     totalCost(roomsData, customerData){
        const getRoomForUser = this.bookings.filter(booking => {
          console.log('this is the data:', booking)
          return booking.userID === customerData.id
        })
          return getRoomForUser.reduce((acc, cv) => {
            if(cv.roomNumber === roomsData.number){
              acc += roomsData.costPerNight
            }
            return acc
          }, 0)
       }
//   findBookingsById() {
//  if(bookings.roomNumber === Rooms.number)
//   }
//    findRooms() {
//    let findbook = findbookingsbyId(this.id)
//     //bookings.map((booking) => {
    
//    }
   //find the rooms
   //add upp the cost of the rooms for that userId
   //use room number to find room data

}


// filter the bookings by customer id. filterByBookings(userid) if userid is the same as bookings user id return the list of bookings
// take the total number of bookings and adddthem together by the room price and return total
// find room cost based on room number and instantiate a newe instance of room
export default Data;