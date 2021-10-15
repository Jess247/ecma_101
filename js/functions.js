// repeat function
let yell = "Woo!";
let party = yell.repeat(20);

document.write("<br>");

document.write("<h1>.repeat()</h1> <br>");
document.write(party, "<br>");

let cat = {
    meow(times) {
        document.write("meow ".repeat(times), "<br>");
    },
    purr(times) {
        document.write("purr ".repeat(times), "<br>");
    },
    snore(times) {
        document.write("ZzzZzz ".repeat(times), "<br>");
    }
};

cat.meow(4);
cat.purr(10);
cat.snore(7);

// default parameters
document.write("<h1>Default Parameters</h1> <br>");

function add(x = 5,y = 6){
    document.write(x + y, "<br>");
}

add(1,3);

function haveFun(
    nameActivity = "hiking",
    time = 3){
    document.write(`Today I will go ${nameActivity} for ${time} hours`);
}

haveFun("biking"); // Today I will go biking for 3 hours

// arrow functions
document.write("<h1>Arrow Functions</h1> <br>");
// function without arrow
let studentList = function(students) {
    console.log(students);
};

// function with arrow
let studentListArrow = (students) => {
    console.log(students);
};

let list = ["apple ", "banana ", "cherry "];
list.map((item) => {
    document.write(item);
});

// also works without curly brackets if theres just one statement
// list.map((item) => document.write(item));

studentList(["A","B","C"]);
studentListArrow(["A","B","C"]);

// this in arrow functions (in a formal function this would be undefined)
document.write("<h1>This in Arrow Functions</h1> <br>");

let person = {
    first: "Jess",
    hobbies: ["bike", "hike", "ski"],
    printHobbies: function() {
        this.hobbies.forEach((hobby) => {
            let string = `${this.first} likes to ${hobby}`;
            document.write(string, ", ");
        });
    }
};

person.printHobbies()

// working with generators (pause functions in the middle of execution * marks these functions)
document.write("<h1>Generator Functions</h1>");
function* director() {
    yield "Three";
    yield "Two";
    yield "One";
    yield "Actions";
}

let countdown = director();

document.write(countdown.next().value, " ");// Three , done:flase
document.write(countdown.next().value, " ");// Two , done:flase
document.write(countdown.next().value, " ");// One , done:flase
document.write(countdown.next().value, " ");// Action , done:flase
document.write(countdown.next().value, " ");// undefined , done:true



