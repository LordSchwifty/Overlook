import { expect } from 'chai';
import Booking from '../src/classes/Booking';
import Customer from '../src/classes/customers';
import Rooms from '../src/classes/rooms';
import Data from '../src/classes/Data';
import testData from '../src/data/test-data';

describe('data class', function() {
    let data1
    let roomsData
    let customersData
    let bookingsData
    beforeEach(() => {
        customersData = testData.customers
        roomsData = testData.rooms
        bookingsData = testData.bookings
        data1 = new Data(customersData, bookingsData, roomsData)
    })
    it('should be a function', () => {
        expect(Data).to.be.a('function');
      });
    it('should be an instance of data', function() {
      expect(data1).to.be.an.instanceOf(Data);
    });
    it('should have customers', () => {
        expect(customersData[0].id).to.equal(1);
        expect(data1.customers[0]).to.deep.equal(customersData[0]);
    });
    it('should have bookings', () => {
        expect(bookingsData[0].userID).to.equal(9);
        expect(data1.bookings[0]).to.deep.equal(bookingsData[0]);
    });
    it('should have rooms', () => {
        expect(roomsData[2].number).to.equal(3);
        expect(data1.rooms[2]).to.deep.equal(roomsData[2]);
    });
    it('should filter bookings by id', () => {
        expect(data1.filterBookingsById).to.be.a('function');
        expect(data1.filterBookingsById(customersData[0])).to.deep.equal([{
            "id": "5fwrgu4i7k55hl6t8",
            "userID": 1,
            "date": "2022/02/05",
            "roomNumber": 12,
        }]);
      });
      it('should get total cost', () => {
        expect(data1.myTotalCost).to.be.a('function');
        expect(data1.myTotalCost(customersData[0])).to.equal(0);
      });
      it('should find open rooms', () => {
        expect(data1.findOpenRooms).to.be.a('function');
        expect(data1.findOpenRooms("2023/03/03")).to.deep.equal(roomsData)
      });
      it('should filter rooms', () => {
        expect(data1.filterOpenRooms).to.be.a('function');
        expect(data1.filterOpenRooms("residential suite")).to.deep.equal([])
      });
      
})