/**
* name 
*/
var game;
var Stage     = Laya.Stage;
var TiledMap  = Laya.TiledMap;
var Rectangle = Laya.Rectangle;
var WebGL     = Laya.WebGL;

var tiledMap;
var layer;

(function (game) {
    var GameCanvas = (function () {
        function GameCanvas() {
        }
        return GameCanvas;
    }());
    game.GameCanvas = GameCanvas;
})(game || (game = {}));


/**
 * 
 */
game.GameCanvas.prototype.init = function(){
    Laya.init(1100, 800, WebGL);

    Laya.stage.alignV = Stage.ALIGN_MIDDLE;
    Laya.stage.alignH = Stage.ALIGN_CENTER;

    Laya.stage.scaleMode = Stage.SCALE_SHOWALL;
    Laya.stage.bgColor = "#2326ff";
    tiledMap = new TiledMap();
    tiledMap.createMap("res/first.json", new Rectangle(0, 0, Laya.stage.width, Laya.stage.height), 
    new Laya.Handler(this, this.completeHandler, null, false));

    Laya.stage.on(Laya.Event.CLICK, this, this.clickHandler);

    console.log("init finished");
}

game.GameCanvas.prototype.completeHandler = function() {
    console.log("load map completed!!")

    layer = tiledMap.getLayerByIndex(0);
}

game.GameCanvas.prototype.clickHandler = function(e){
    console.log("click:" + e.target)
    
    var x = Laya.stage.mouseX;
    var y = Laya.stage.mouseY;
    var col = Math.floor(x / 32);
    var row = Math.floor(y / 32);
    console.log("tile is:" + x + "," + y + "->" + col + "," + row);
    var a = layer.getTileData(col, row);
    /**
     * 1 tileset 是分组的，每个组属性单独存放；
     * 2 第一个参数就是tileset的组id，第二个参数是地图快id
     */
    var b = tiledMap.getTileProperties(0, a-1, "isPass");

    console.log("the custom attribute is:" + a + "-" + b)
}
/**
 * 地图绘制
 */
game.GameCanvas.prototype.onDraw = function(){

}

/**
 * 
 */
game.GameCanvas.prototype.onUpdate = function() {

}