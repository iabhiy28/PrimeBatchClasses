//
const obj = {
    name: "John",
    city: "Delhi",
};
console.log(obj);
const name = obj.name;
console.log(name);
console.log(obj.name);
// to insert new key value pair in object
obj.country = "India";
console.log(obj.country);
console.log(obj.date);

// accessing the key value pair dynamically
console.log(obj["name"]);

// reassigning the value of key
obj.name = "Abhishek";
console.log(obj.name);

// to delete the key value pair
delete obj.city;
console.log(obj.city);