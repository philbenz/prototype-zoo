var Animal = require('./animal');

function Zoo(location, name, status, animals){

  this.location = location;
  this.name = name;
  this.status = status || 'closed';
  this.animals = new Array() || '';
}


Zoo.prototype.isOpen = function() {
  if(this.status === 'open') {
    return true;
  } else {
    return false;
  }
}

Zoo.prototype.open = function() {
  return (this.status='open');
}

Zoo.prototype.addAnimal = function(animal) {
  if(this.status!=='open') {
    return;
  } else {
    if(animal instanceof Animal){
      if(this.animals.indexOf(animal) < 0){
        this.animals.push(animal);
      } else {
        return 'Duplicate'
      }
    } else {
      return 'not an animal';
    }
  }
}

Zoo.prototype.close = function() {
  this.status = 'closed';
}

Zoo.prototype.removeAnimal = function(animal) {
  if(this.status==='open') {
    if (this.animals.indexOf(animal) > -1) {
      var index = this.animals.indexOf(animal);
      this.animals.splice(index, 1);
    }
  }
  return;
}

Zoo.prototype.changedLocation = function(newLocation) {
  this.location = newLocation;
}

module.exports = Zoo;
