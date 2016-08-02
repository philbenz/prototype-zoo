function Animal(kind, sound, name, age, awake){
  // write code here


  // kind: has a string as a value--e.g., lion"
  // sound: has a string as a value--e.g., "roar"
  // name: has a string as a value
  // age: has an integer as a value
  // awake: has a Boolean value, and the default is false
  // methods
  //
  // wakeUp(): changes awake to true
  // speak(): has a string as a value (e.g., a pig would return "oink!")
  // feed(): if the animal is awake, return's the string "NOM NOM NOM"
  // growUp(): adds one year to animal's age
  // sleep(): changes awake to false

  this.kind = kind;
  this.sound = sound;
  this.name = name;
  this.age = age;
  this.awake = awake || false;

}

Animal.prototype.wakeUp = function (){
  this.awake = true;
}

Animal.prototype.speak = function (){
  return this.sound;
}

Animal.prototype.feed = function (){
  if (this.awake) {
    return 'NOM NOM NOM';
  }
}

Animal.prototype.growUp = function (){
  return (this.age = this.age + 1);
}



module.exports = Animal;
