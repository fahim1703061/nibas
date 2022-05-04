const data = require("./friend_data.json");

console.log(data.friend[0].name);

// modify
data.friend[1].name = "Ananta";   
console.log(data.friend[1].name);

delete data.friend[0].name;

console.log(data);

for (const x in data) {
    console.log(x);
}

// JS object to json
const newdata = {
    name: "Fahim",
    Roll: 1703061
}
console.log(JSON.stringify(newdata));

// json to js Object
const newdata2 = '{"name": "Fahim","Roll": 1703061}';
console.log(JSON.parse('{"name": "Fahim","Roll": 1703061}'));
console.log(typeof newdata2);
console.log(JSON.parse(newdata2));
