let passportWithAddress = {
    name: 'Petr',
    surname: 'Petrov',
    address: {
        country: 'USA',
        city: 'LA'
    }
}

let passportDeepCopy = structuredClone(passportWithAddress);
passportDeepCopy.address.city = 'Bobryisk';
console.log(passportWithAddress.address.city);
console.log(passportDeepCopy.address.city);