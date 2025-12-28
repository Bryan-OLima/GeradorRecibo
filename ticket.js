export default class Ticket{
    constructor(id, name, address, price, city, date) {
        this.id = id;
        this.name = name;
        this.address = address;
        this.price = price;
        this.city = city;
        this.date = date;
    }

    print() {
        setTimeout(() => {
            window.print();
        }, 600);
    }
}