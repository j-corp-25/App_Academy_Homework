function NBAPlayer(name,team,pos){
    this.name = name,
    this.team = team,
    this.pos = pos
}

const curry = new NBAPlayer ()

NBAPlayer.prototype.dunk = function() {};

curry.dunk();

curry
