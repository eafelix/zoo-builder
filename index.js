var argv = require("minimist")(process.argv.slice(2)),
    Animal = require("./Animal"),
    newZooAnimal = {};

var onError = function(msg) {
    console.log("ERROR: " + msg);
    process.exit(1);
};
var onInfo = function(obj) {
    if (typeof obj !== "object") {
        console.log("INFO: " + obj);
    } else {
        console.log("INFO: ");
        console.dir(obj);
    }
};

var validateParams = function(argv) {
    if (!(argv.hasOwnProperty("n") && argv.n)) {
        onError('please provide the animal name');
    } else if (!(argv.hasOwnProperty("k") && argv.k)) {
        onError('please provide the kind name');
    } else if (!(argv.hasOwnProperty("s") && argv.s)) {
        onError('please provide the animal sound');
    } else if (!(argv.hasOwnProperty("m") && argv.m)) {
        onError('please provide the message');
    }
};

//validate obj with params
validateParams(argv);

//create obj from params
newZooAnimal = {
    name: argv.n,
    kind: argv.k,
    sound: argv.s
};

//create obj
var speciesResult = new Animal(newZooAnimal);

console.log(speciesResult.sayOwnSpecies());
console.log(speciesResult.talk(argv.m));