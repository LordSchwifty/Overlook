import { expect } from 'chai';
import Customer from '../src/classes/customers';
import testData from '../src/data/test-data';
describe('bookings class', function() {
    let customer1
    let customersData
    beforeEach(() => {
        customersData = testData.customers
        customer1 = new Customer(customersData[0])
    })
    it('should be a function', () => {
        expect(Customer).to.be.a('function');
      });
    it('should be an instance of customer', function() {
        console.log('data:', customersData)
      expect(customer1).to.be.an.instanceOf(Customer);
    });
    it('should have a customer id', () => {
        expect(customer1.id).to.equal(1);
        expect(customer1.id).to.equal(customersData[0].id);
      });
      it('should have a user name', () => {
        expect(customer1.name).to.equal("Leatha Ullrich");
        expect(customer1.name).to.equal(customersData[0].name);
      });
    });