import { Customer } from './customer';

let customer = new Customer("John", "Smith", 31);
customer.greeter();
console.log(`Age: ${customer.getAge()}`);
