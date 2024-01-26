let passportMarried = {
    name: 'Petr',
    surname: 'Petrov',
    address: {
        country: 'USA',
        city: 'Bobryisk'
    }
};

let passportDeepCopy = structuredClone(passportMarried);
passportDeepCopy.married = true;

console.log(passportMarried);
console.log(passportDeepCopy);
