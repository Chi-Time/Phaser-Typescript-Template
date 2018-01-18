/// <reference path="../typings/index.d.ts" />

import {Boot} from "./states/boot";
import {Preload} from "./states/preload";
import {Main} from "./states/Main";
import {GameOver} from "./states/GameOver";

// ----------------------------------------------------

var game: Phaser.Game;

// ----------------------------------------------------

window.onload = main;

// ----------------------------------------------------

function main() {
    game = new Phaser.Game(800, 600, Phaser.AUTO, 'content', {
        create: create,
        
    });
}

// ----------------------------------------------------

function create() {
    game.state.add("boot", Boot);
    game.state.add ("preload", Preload);
    game.state.add ("main", Main);
    game.state.add ("gameover", GameOver);

    game.state.start("boot");
}
