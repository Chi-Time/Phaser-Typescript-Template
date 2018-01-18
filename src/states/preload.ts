export class Preload extends Phaser.State {
    preload () {
        console.log ("Preloading game data...");
    }

    create () {
        this.game.state.start ("main");
    }
}
