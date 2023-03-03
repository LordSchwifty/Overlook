
class Bookings {
   constructor(bookingsData) {
       this.id = bookingsData.id;
       this.userID = bookingsData.userID;
       this.date = bookingsData.date;
       this.roomNumber = bookingsData.roomNumber;
   }
     filterBookingsById(bookingsData, customerData) {
      const getRoomForUser = bookingsData.filter(booking => {
        console.log('this is the data:', bookingsData)
        return booking.userID === customerData.id
      })
        return getRoomForUser
     }

     findOpenRooms(bookingsData, roomsData) {
      const findRooms = roomsData.filter(room => {
        return room.number !== bookingsData.roomNumber
      })
     }
     totalCost(bookingsData, roomsData, customerData){
        const getRoomForUser = bookingsData.filter(booking => {
          console.log('this is the data:', bookingsData)
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
export default Bookings;