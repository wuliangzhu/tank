/**
* 1 玩家与obj发生碰撞，obj都有自己的事件ID；
*   a 不让通过 b 造成伤害等 可以理解为技能ID
* 2 需要参与对象和技能ID
* 3 技能也有自己对自己释放的
*/
var game;
(function (game) {
    var GameObjectManager = (function () {
        function GameObjectManager() {
        }
        return GameObjectManager;
    }());
    game.GameObjectManager = GameObjectManager;
})(game || (game = {}));

var proto = game.GameObjectManager.prototype;

/**
 * 1 技能释放者；
 * 2 target；
 * 3 技能
 * 4 技能参数
 */
proto.handleSkill = function() {

}

