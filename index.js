var argv = require("minimist")(process.argv.slice(2)),
    Animal = require("./animal"),
    newZooAnimal = {};

function onError(msg) {
    console.log("ERROR: " + msg);
    process.exit(1);
}

function onInfo(obj) {
    if (typeof obj !== "object") {
        console.log("INFO: " + obj);
    } else {
        console.log("INFO: ");
        console.dir(obj);
    }
}

function validateParams(argv){
    if (!(argv.hasOwnProperty("n") && argv.n)) {
        onError('please provide the animal name');
    } else if (!(argv.hasOwnProperty("k") && argv.k)) {
        onError('please provide the kind name');
    } else if (!(argv.hasOwnProperty("s") && argv.s)) {
        onError('please provide the animal sound');
    } else if (!(argv.hasOwnProperty("m") && argv.m)) {
        onError('please provide the message');
    }
}

validateParams(argv);

newZooAnimal = {
    name: argv.n,
    kind: argv.k,
    sound: argv.s
};

var speciesResult = new Animal(newZooAnimal);

console.log(speciesResult.sayOwnSpecies());
console.log(speciesResult.talk(argv.m));