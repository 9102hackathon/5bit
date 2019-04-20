// Learn cc.Class:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/class.html
//  - [English] http://docs.cocos2d-x.org/creator/manual/en/scripting/class.html
// Learn Attribute:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/reference/attributes.html
//  - [English] http://docs.cocos2d-x.org/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/life-cycle-callbacks.html
//  - [English] https://www.cocos2d-x.org/docs/creator/manual/en/scripting/life-cycle-callbacks.html

var person = require("person")
var Game = require("Game")

cc.Class({

    extends: cc.Component,

    properties: {
        num:0,
        card:-1
        // foo: {
        //     // ATTRIBUTES:
        //     default: null,        // The default value will be used only when the component attaching
        //                           // to a node for the first time
        //     type: cc.SpriteFrame, // optional, default is typeof default
        //     serializable: true,   // optional, default is true
        // },
        // bar: {
        //     get () {
        //         return this._bar;
        //     },
        //     set (value) {
        //         this._bar = value;
        //     }
        // },
    },


    on_touch_end:function(){
        //人物移动
        var player = cc.find("Canvas/firstfloor/player")
        var temp=this.node.parent.getPosition()
        var action = cc.moveTo(1,temp);
        player.stopAllActions();
        player.runAction(action);

        //禁用该按钮
         this.node.getComponent(cc.Button).interactable = false;

         //生成随机卡牌（不重复
        var rand = Math.floor(Math.random()*27);
        var value = cc.sys.localStorage.getItem(rand);
        while(value > 0){
            rand = Math.floor(Math.random()*27);
            value = cc.sys.localStorage.getItem(rand);
            cc.sys.localStorage.setItem(i, 1);
        }

        //进行卡牌判断
        Game.Node.judge(rand);

        },

    // LIFE-CYCLE CALLBACKS:

    onLoad () {
        this.node.on(cc.Node.EventType.TOUCH_END,this.on_touch_end,this);
    },

    start () {

    },

    // update (dt) {},
});