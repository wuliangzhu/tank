/**
* name 
*/
var game;
(function (game) {
    var GameEvent = (function () {
        function GameEvent() {
            this.target = null;
            this.caster = null;
            this.skill = null;

        }
        return GameEvent;
    }());
    game.GameEvent = GameEvent;
})(game || (game = {}));