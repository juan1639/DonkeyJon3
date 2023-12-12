// const Phaser = require('phaser');

let config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    physics: {
        default: 'arcade',
        arcade: {
            gravity: {y: 300},
            debug: false
        }
    },
    scene: {
        preload: preload,
        create: create,
        update: update
    }
};

let game = new Phaser.Game(config);

function preload() {
    this.load.image('sky', './assets/sky.png');
    this.load.image('ground', './assets/platform.png');
    this.load.image('star', './assets/star.png');
    this.load.image('bomb', './assets/bomb.png');
    this.load.spritesheet('dude', './assets/dude.png', {frameWidth: 32, frameHeight: 48});
}

function create() {
    this.add.image(400, 300, 'sky');

    platform = this.physics.add.staticGroup();

    platform.create(400, 568, 'ground').setScale(2).refreshBody();
    
    platform.create(600, 400, 'ground');
    platform.create(50, 250, 'ground');
    platform.create(750, 220, 'ground');
}

function update() {

}
