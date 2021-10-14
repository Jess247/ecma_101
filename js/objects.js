// objects
function skier(name, sound){
    return {
        name: name,
        sound: sound,
        powderYell: function() {
            let yell = this.sound.toUpperCase();
            document.write(`${yell}!${yell}! `);
        }
    }
}

skier("Bob", "Woho").powderYell();

// object literal inhancement quicker more readable
function skier(name, sound){
    return {
        name,
        sound,
        powderYell: function() {
            let yell = this.sound.toUpperCase();
            document.write(`${yell}!${yell}! `);
        }
    }
}

skier("Sandy", "Yeah").powderYell();

// object spread

const daytime = {
    breafast: "oatmeal",
    lunch: "peanut butter and jelly"
};

const nighttime = "MAc and Cheese";
const backpackingMeals = {
    ...daytime,
    nighttime
};

console.log(backpackingMeals);

// destructuring 

const {title, price} = {
    title: "Reuben",
    price: 7,
    description: "A Classic",
    ingredients: [
        "bread",
        "corned beef",
        "dressing",
        "sauerkraut",
        "cheese"
    ] 
};

console.log(title);

const vacation = {
    destination: "Chile",
    travelers: 2,
    activity: "skiing",
    cost: "so much"
};

function marketing({destination, activity}) {
    return `come to ${destination} and do some ${activity}`;
}

console.log(marketing(vacation)); // keys of the marketing Function are being used on vacation

// for of loop

for(let letter of "JavaScript") {
    console.log(letter); 
}

let topics = ["JavaScript", "Node", "CSS"];

for(let topic of topics) {
    console.log(topic); 
}


let subjects = new Map();
subjects.set("Math", "/subjects/math");
subjects.set("Philosophy", "/subjects/philosophy");
subjects.set("History", "/subjects/history");

for(let subject of subjects) {
    console.log(subject); 
} // returns key and route

for(let subject of subjects.keys()) {
    console.log(subject); 
}// returns the keys of Subjects

for(let route of subjects.values()) {
    console.log(`The description of the course can be found at ${route}`); 
}//returned the route

for(let route of subjects.entries()) {
    console.log(`The description of the course can be found at ${route}`); 
}//returned the key value pairs

class Car {
    constructor(description, wheels){

        this.description = description;
        this.wheels =  wheels;
    }

    describeYourself() {
        console.log(`I am a ${this.description} with ${this.wheels} wheels`);
    }
}

let coolSkiVan = new Car("Cool ski van", 4);

console.log(coolSkiVan);
coolSkiVan.describeYourself();


// extending class

class SemiTruck extends Car {
    constructor() {
        super("semi truck", 18);
    }
}

let groceryStoreSemi = new SemiTruck();
groceryStoreSemi.describeYourself();

// getting and setting Object (Getter setter method)
let attendance = {
    _list: [],
    set addName(name){
        this._list.push(name);
    },
    get list() {
        return this._list-join(", ");
    }
};

attendance.addName = "Joanne Starr";
console.log(attendance.list);
attendance.addName = "Bob Bills";
attendance.addName = "Charles Charson";

class Hike {
    constructor(distance, pace){
        this.distance = distance;
        this.pace = pace;
    }
    get lengthInHours(){
        return `${this.calcLength()} hours`;
    }
    calcLength(){
        return this.distance / this.pace;
    }
}

const mtTallac = new Hike(10, 2);

console.log(mtTallac.lengthInHours);