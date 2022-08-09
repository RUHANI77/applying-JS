const phones = [
    { name: 'Samsung', camera: 12, storage: '32gb', price: 36000, color: 'silver' },
    { name: 'Walton', camera: 9, storage: '32gb', price: 13000, color: 'silver' },
    { name: 'Nokia', camera: 15, storage: '32gb', price: 38000, color: 'silver' },
    { name: 'Xaomi', camera: 13, storage: '32gb', price: 52000, color: 'silver' },
    { name: 'iPhone', camera: 18, storage: '32gb', price: 44000, color: 'silver' },
    { name: 'HTC', camera: 11, storage: '32gb', price: 20000, color: 'silver' },
    { name: 'Oppo', camera: 10, storage: '32gb', price: 43000, color: 'silver' },
];

function cheapestPhone(phones) {
    let cheapest = phones[0];
    for (let i = 0; i < phones.length; i++){
        const phone = phones[i];
        if (phone.price < cheapest.price) {
            cheapest = phone;
        }
    }
    return cheapest;
}

const mySelection = cheapestPhone(phones);
console.log(mySelection);