var pre=cc.Class({
    extends: cc.Component,

    properties: {
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
        num:0
    },
    ctor:function(){
        num=Math.floor(Math.random()*10);
    },
    happen:function(){
        if (num==0) {
            
        }
        else if(num=1){

        }
        else if(num==2){

        }
        else if(num=3){

        }
        else if(num=4){

        }
        else if(num=5){

        }
        else if(num=6){

        }
        else if(num=7){

        }
        else if(num=8){

        }
        else if(num=9){

        }
    },

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {},

    start () {

    },

    // update (dt) {},
});