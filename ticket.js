export default class Ticket{

    
    constructor(name, address, price, city) {
        this.name = name;
        this.address = address;
        this.price = price;
        this.city = city;
    }

    print() {
        setTimeout(() => {
            window.print();
        }, 600);
    }
}