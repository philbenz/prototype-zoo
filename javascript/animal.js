function Animal(kind, sound, name, age, awake){

  this.kind = kind;
  this.sound = sound;
  this.name = name;
  this.age = age;
  this.awake = awake || false;

}

Animal.prototype.wakeUp = function (){
  return(this.awake = true);
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

Animal.prototype.sleep = function (){
  return(this.awake = false);
}


module.exports = Animal;
