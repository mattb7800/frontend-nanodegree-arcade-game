// Enemies our player must avoid
var Enemy = function(x,y, speed) {
    // Variables applied to each of our instances go here,
    // we've provided one for you to get started

    // The image/sprite for our enemies, this uses
    // a helper we've provided to easily load images
    this.sprite = 'images/enemy-bug.png';
    this.x = x;
    this.y = y;
    this.speed = speed;
};

// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
Enemy.prototype.update = function(dt) {
    // You should multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers.
    // note: movement of enemies is on x axis
    this.x = this.x + this.speed * dt;
    // per engine.js screen width is 550 pixels. need to wrap enemies back around
    // to start
     if (this.x >= 550) {
       this.x = 0;
     }

};



// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};



// Now write your own player class
// This class requires an update(), render() and
// a handleInput() method.
var Player = function(x,y) {
  this.sprite = 'images/char-boy.png';
  this.x = x;
  this.y = y;
}

Player.prototype.update = function() {

};

// Draw player on screen
Player.prototype.render = function(x,y) {
  ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

//Track player movement on screen with respect to key presses dxy = delta xy
Player.prototype.handleInput = function(dxy) {
  this.dxy = dxy;
}
// Found good info on character movement with arrow keys at:
//  https://www.w3schools.com/graphics/game_controllers.asp
if (this.dxy == 'left' && this.x > 0) this.x -=1;
if (this.dxy == 'right' && this.x < 500) this.x +=1;
if (this.dxy == 'up' && this.y > -30) this.y -=1;
if (this.dxy == 'down &&' this.y < 500) this.y +=1;

// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies********
var allEnemies = [];


// Place the player object in a variable called player
var player = new Player(200, 30);


// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.
document.addEventListener('keyup', function(e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    player.handleInput(allowedKeys[e.keyCode]);
});
