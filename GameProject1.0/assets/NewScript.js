// Learn cc.Class:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/class.html
//  - [English] http://docs.cocos2d-x.org/creator/manual/en/scripting/class.html
// Learn Attribute:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/reference/attributes.html
//  - [English] http://docs.cocos2d-x.org/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/life-cycle-callbacks.html
//  - [English] https://www.cocos2d-x.org/docs/creator/manual/en/scripting/life-cycle-callbacks.html

cc.Class({
    extends: cc.Component,

    properties: {
        extends: cc.Component,
        display1: {
            default: null,
            type: cc.Label1
        },
        display2: {
            default: null,
            type: cc.Label2
        },
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
        prenums:0,
        socre:0
    },
    addpre:function(){
        prenums+=1;
    },
    gainScore: function () {
        // 更新 scoreDisplay Label 的文字
        this.display1.string = "Wight:"+ this.socre;
    },
    // LIFE-CYCLE CALLBACKS:

    onLoad () {
        this.gainScore();
    },

    start () {   
    },
    // update (dt) {},
});