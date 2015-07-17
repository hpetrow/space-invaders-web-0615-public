var Spaceship = function(name, crew, phasers, shields) {
  this.name = name;
  this.crew = crew;
  this.phasers = phasers;
  this.shields = shields;
  this.cloaked = false;
  this.warpDrive = 'disengaged';
  this.docked = crew.length > 0 ? false : true;
  this.phasersCharge = 'uncharged';
  this.initCrew();
};

Spaceship.prototype.initCrew = function() {
  for (var i = 0; i < this.crew.length; i++) {
    this.crew[i].currentShip = this;
  }
};
