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

