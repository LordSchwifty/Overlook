import Booking from './Booking'
import Rooms from './rooms'
import Customer from './customers'
class Data {
   constructor(customersData, bookingsData, roomsData,) {
       this.customers = customersData.map(customer => new Customer(customer))
       this.bookings = bookingsData.map(booking => new Booking(booking))
       this.rooms = roomsData.map(room => new Rooms(room))
       this.openRooms = []
   }
     filterBookingsById(customer) {
      const getRoomForUser = this.bookings.filter(booking => {
        return booking.userID === customer.id
      })
        return getRoomForUser
     }

     myTotalCost(customerData){
        const getRoomForUser = this.bookings.filter(booking => {
          return booking.userID === customerData.id
        })
          const roomsArray = getRoomForUser.map(room => {
            return room.roomNumber
          })
          return roomsArray.reduce((acc, room) => {
            this.rooms.forEach(element => {
              if(element.number === room){
                acc += element.costPerNight
              }
            })
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
           this.openRooms = openRooms
           return openRooms
         }

      filterOpenRooms(tag) {
        return this.openRooms.filter(room => room.roomType === tag)
      }

      addBooking(newBooking) {
        this.bookings.push(new Booking(newBooking))
        console.log("Is this working:", this.bookings)
      }
        
}

export default Data;