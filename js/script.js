// template strings 
function print(firstname) {
    document.write(`Hello, ${firstname}`);
}

function createEmail(firstname, price) {
    let shipping = 10.88;
    document.write(`Hi ${firstname}! Thanks!
        Total: $${price}
        Shipping: $${shipping}
        Grand Total: $${price + shipping} `);
}

print("Jess");
document.write("<br>");
createEmail("Emily",938);
document.write("<br>");

// seaching strings
const baseballTeam = "Dodgers";
console.log(baseballTeam.startsWith("Dod")); // true
console.log(baseballTeam.startsWith("dod")); // false because case sensitive 
console.log(baseballTeam.endsWith("rs")); // true
console.log(baseballTeam.includes("g")); // true
console.log(baseballTeam.search("g")); // 3
document.write("<br>");
// primitives - symbols

const id = Symbol();

const curseInfo = {
    title: "JavaScript",
    topics: ["strings", "arrays", "objects"],
    id: "curse_id"
};

curseInfo[id] = 84362;
console.log(curseInfo); // there wont be a naming conflict because the id is stored in the symbol
document.write("<br>");

// maps
let course = new Map();

course.set("react", {description: "ui"});
course.set("jest", {description: "testing"});
console.log(course.get("react")); // maps are similar to object but need a get method to be fully read

let details = new Map([
    [new Date(), "today"],
    [2,{javascript: ["js", "node", "react"]}],
    ["items", [1,2]]
]);

console.log(details(details.size));

details.forEach(function(){
    //ideates in the order they where added
    console.log(item); 
});

// sets (each value must be unique)
let books = new Set();
books.add("Lord of the Rings");
books.add("Harry Potter").add("Oliver Twist"); // can be chained onto each other

console.log(bocks);
console.log(books.size);
books.delete("Oliver Twist");
console.log("has Oliver Twist", books.has("Oliver Twist")); // false


