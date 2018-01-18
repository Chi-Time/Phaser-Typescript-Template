(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({"i:\\Github\\Nyanchi\\Typescript-Test\\src\\game.ts":[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var boot_1 = require("./states/boot");
var preload_1 = require("./states/preload");
var Main_1 = require("./states/Main");
var GameOver_1 = require("./states/GameOver");
var game;
window.onload = main;
function main() {
    game = new Phaser.Game(800, 600, Phaser.AUTO, 'content', {
        create: create,
    });
}
function create() {
    game.state.add("boot", boot_1.Boot);
    game.state.add("preload", preload_1.Preload);
    game.state.add("main", Main_1.Main);
    game.state.add("gameover", GameOver_1.GameOver);
    game.state.start("boot");
}
},{"./states/GameOver":"i:\\Github\\Nyanchi\\Typescript-Test\\src\\states\\GameOver.ts","./states/Main":"i:\\Github\\Nyanchi\\Typescript-Test\\src\\states\\Main.ts","./states/boot":"i:\\Github\\Nyanchi\\Typescript-Test\\src\\states\\boot.ts","./states/preload":"i:\\Github\\Nyanchi\\Typescript-Test\\src\\states\\preload.ts"}],"i:\\Github\\Nyanchi\\Typescript-Test\\src\\states\\GameOver.ts":[function(require,module,exports){
"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var GameOver = (function (_super) {
    __extends(GameOver, _super);
    function GameOver() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    GameOver.prototype.preload = function () {
    };
    GameOver.prototype.create = function () {
    };
    return GameOver;
}(Phaser.State));
exports.GameOver = GameOver;
},{}],"i:\\Github\\Nyanchi\\Typescript-Test\\src\\states\\Main.ts":[function(require,module,exports){
"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var Main = (function (_super) {
    __extends(Main, _super);
    function Main() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Main.prototype.preload = function () {
        this.game.load.image('logo', 'data/phaser-logo-small.png');
    };
    Main.prototype.create = function () {
        console.log("Running game loop");
        var x = this.game.world.centerX;
        var y = this.game.world.centerY;
        this.game.stage.backgroundColor = 0xB20059;
        this.logo = this.game.add.sprite(x, y, 'logo');
        this.logo.inputEnabled = true;
        this.logo.anchor.set(0.5);
        this.logo.scale.set(0.5);
    };
    Main.prototype.loadUpdate = function () {
        var w = this.game.canvas.width / 2;
        var h = this.game.canvas.height / 2;
        var k = this.game.load.progressFloat * w / 100;
        this.progress = new Phaser.Line(w / 2, h, w / 2 + k, h);
    };
    Main.prototype.loadRender = function () {
        this.game.debug.geom(this.progress, '#fff');
    };
    Main.prototype.update = function () {
        if (this.logo.input.justPressed()) {
            this.game.add.tween(this.logo.scale)
                .to({ x: 1, y: 1 }, 500, Phaser.Easing.Cubic.InOut)
                .yoyo(true)
                .start();
        }
    };
    Main.prototype.render = function () {
        this.game.debug.spriteInfo(this.logo, 10, 18);
    };
    return Main;
}(Phaser.State));
exports.Main = Main;
},{}],"i:\\Github\\Nyanchi\\Typescript-Test\\src\\states\\boot.ts":[function(require,module,exports){
"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var Boot = (function (_super) {
    __extends(Boot, _super);
    function Boot() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Boot.prototype.preload = function () {
        console.log("Preloading boot data...");
    };
    Boot.prototype.create = function () {
        this.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
        this.game.state.start("preload");
    };
    return Boot;
}(Phaser.State));
exports.Boot = Boot;
},{}],"i:\\Github\\Nyanchi\\Typescript-Test\\src\\states\\preload.ts":[function(require,module,exports){
"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var Preload = (function (_super) {
    __extends(Preload, _super);
    function Preload() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Preload.prototype.preload = function () {
        console.log("Preloading game data...");
    };
    Preload.prototype.create = function () {
        this.game.state.start("main");
    };
    return Preload;
}(Phaser.State));
exports.Preload = Preload;
},{}]},{},["i:\\Github\\Nyanchi\\Typescript-Test\\src\\game.ts"])
//# sourceMappingURL=game.js.map
