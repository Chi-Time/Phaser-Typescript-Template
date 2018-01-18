export class Boot extends Phaser.State {
    preload () {
        console.log ("Preloading boot data...");
    }

    create () {
        this.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;

        this.game.state.start ("preload");
    }
}
