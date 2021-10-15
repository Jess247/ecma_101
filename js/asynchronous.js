// promises
document.write("<h1>Promise</h1> <p>logs a string to the console after one second</p>");

const delay = (seconds) => 
    new Promise((resolves, rejects) => {
        if (typeof seconds !== "number") {
            rejects(
                new Error("Seconds must be a number")
            );
        }

        setTimeout(resolves, seconds * 1000)
});

delay(1).then(() => console.log("One Second")); 
delay(5).then(() => console.log("One Second")); 

// loading remote Data with Promise
// boiler plate for any HTTPRequest

const spacePeople = () => {
    return new Promise((resolves, rejects) => {
        const api = "http://api.open-notify.org/astros.json";
        const request = new XMLHttpRequest();
        request.open("Get", api);
        request.onload = () => {
            if(request.status == 200){
                resolves(JSON.parse(request.response));
            } else {
                rejects(Error(request.statusText))
            }
        };
        request.onerror = (err) => rejects(err);
        request.send();
    });
};

spacePeople().then(
    (spaceData) => console.log(spaceData),
    (err) => 
    console.error(new Error("Can't load Data"))
);

// returning Promises with fetch - outputs the same as the spacePeople function
let getSpacePeople = () => 
    fetch("http://api.open-notify.org/astros.json")
        .then(res => res.json());

getSpacePeople().then(console.log);

let spaceNames = () =>
    getSpacePeople()
        .then(json => json.people)
        .then(people.map(p => p.name))
        .then((names) => names.join(", "));
        

spaceNames().then(console.log); 

// async await

const delayTwo = (seconds) => 
    new Promise((resolves) => {
        setTimeout(resolves, seconds * 1000)
});
const countToFive = async () => {
    console.log("zero seconds");
    await delayTwo(1);
    console.log("one Second");
    await delayTwo(2);
    console.log("two Second");
    await delayTwo(3);
    console.log("three Second");
    await delayTwo(4);
    console.log("four Second");
    await delayTwo(5);
    console.log("five Second");
}

countToFive();

// incorporating fetch with async/await
const githubRequest = async (login) => {
    let response = await fetch(`https://api.github.com/users/${login}`);
    let json = await response.json();
    let summary = `${json.name}, ${json.company}`;
    console.log(summary);
};

githubRequest("jess247");
