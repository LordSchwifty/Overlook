class Bookings {
   constructor(bookingsData) {
       this.id = bookingsData.id;
       this.userId = bookingsData.userId;
       this.date = bookingsData.date;
       this.roomNumber = bookingsData.roomNumber;
   }
}

export default Bookings;