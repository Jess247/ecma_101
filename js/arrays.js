// spread operator to add elements of an array without nesting
let cats = ["Tiger", "Kitty"];
let dogs = ["Bobo", "Rex"];
let animals = ["Bobby", "Goldie", "Sharky", ...cats, ...dogs];

// destructuring
let [varNameForFirst,,,varNameForForth] = [
    "Berlin", 
    "Munich",
    "Bremen",
    "Hamburg",
    "Cologne"
];


console.log(varNameForFirst, varNameForForth);

// using include with arrays
let cities = [
    "Berlin", 
    "Munich",
    "Bremen",
    "Hamburg",
    "Cologne"
]; 

console.log(cities.includes("Hamburg")); // true
console.log(cities.includes("Frankfurt")); // false
