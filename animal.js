//Create Animal Obj
var Animal = function(animal) {
    this.name = animal.name;
    this.kind = animal.kind;
    this.sound = animal.sound;
};

Animal.prototype.sayOwnSpecies = function() {
    return this.name + " says: my species is " + this.kind;
};

Animal.prototype.talk = function(verse) {
    var that = this;
    resVerse = this.name + " says: ";
    verse.split(" ").forEach(function (value, index) {
        resVerse += value + " " + that.sound + " ";
    });
    return resVerse;
};

module.exports = Animal;