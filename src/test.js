let myData = {
    name: "Brandon",
    age: 31,
    location: {
        country: "Sweden",
        city: "Stockholm",
        address: {
            street: "Testvägen 123",
            zipCode: "163 74"
        }
    }
}
//de-structuring
let {city,country, address} = myData.location;
let {street, zipCode} = address;

console.log(`Jag bor på ${street} ${zipCode}
    i ${city}, ${country}`)