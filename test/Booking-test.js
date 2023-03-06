import { expect } from 'chai';
import Booking from '../src/classes/Booking';
import testData from '../src/data/test-data';

describe('booking class', function() {
    let booking1
    let bookingsData
    beforeEach(() => {
        bookingsData = testData.bookings
        booking1 = new Booking(bookingsData[0])
    })
    it('should be a function', () => {
        expect(Booking).to.be.a('function');
      });
    it('should be an instance of bookings', function() {
      expect(booking1).to.be.an.instanceOf(Booking);
    });
    it('should have an id', () => {
        expect(booking1.id).to.equal("5fwrgu4i7k55hl6sz");
        expect(booking1.id).to.equal(bookingsData[0].id);
      });
      it('should have a user id', () => {
        expect(booking1.userID).to.equal(9);
        expect(booking1.userID).to.equal(bookingsData[0].userID);
      });
        it('should have a booking date', () => {
        expect(booking1.date).to.equal("2022/04/22");
        expect(booking1.date).to.equal(bookingsData[0].date);
      });
      it('should have a room number', () => {
        expect(booking1.roomNumber).to.equal(15);
        expect(booking1.roomNumber).to.equal(bookingsData[0].roomNumber);
      });
  });