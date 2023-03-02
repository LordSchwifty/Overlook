import { expect } from 'chai';
import Rooms from '../src/classes/rooms';
import testData from '../src/data/test-data';

describe('rooms class', function() {
    let room1
    let roomsData
    beforeEach(() => {
        roomsData = testData.rooms
        room1 = new Rooms(roomsData[0])
    })
    it('should be a function', () => {
        expect(Rooms).to.be.a('function');
      });
    it('should be an instance of rooms', function() {
        console.log('data:', roomsData)
      expect(room1).to.be.an.instanceOf(Rooms);
    });
    it('should have an room number', () => {
        expect(room1.number).to.equal(1);
        expect(room1.number).to.equal(roomsData[0].number);
      });
      it('should have a room type', () => {
        expect(room1.roomType).to.equal("residential suite");
        expect(room1.roomType).to.equal(roomsData[0].roomType);
      });
        it('should have a bidet', () => {
        expect(room1.bidet).to.equal(true);
        expect(room1.bidet).to.equal(roomsData[0].bidet);
      });
      it('should have a bed size', () => {
        expect(room1.bedSize).to.equal("queen");
        expect(room1.bedSize).to.equal(roomsData[0].bedSize);
      });
  });