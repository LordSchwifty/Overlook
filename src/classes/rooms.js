class Rooms {
    constructor(roomData) {
        this.number = roomData.number;
        this.roomType = roomData.roomType;
        this.bidet = roomData.bidet;
        this.bedSize = roomData.bedSize;
        this.numBeds = roomData.numBeds;
        this.costPerNight = roomData.costPerNight;
    }
    //   findBookingsById() {
//  if(bookings.roomNumber === Rooms.number)
//   }
}
// filter by room number that returns specific cost
// method that filters room number and give back room data
export default Rooms;