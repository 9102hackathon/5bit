// Learn cc.Class:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/class.html
//  - [English] http://docs.cocos2d-x.org/creator/manual/en/scripting/class.html
// Learn Attribute:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/reference/attributes.html
//  - [English] http://docs.cocos2d-x.org/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/life-cycle-callbacks.html
//  - [English] https://www.cocos2d-x.org/docs/creator/manual/en/scripting/life-cycle-callbacks.html


var Game = require("Game");

cc.Class({

    extends: cc.Component,

    properties: {
        num:0,
        card:-1,
        b:Game
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

    judge:function(num){         //触发判断
        if (num==0) {
            this.information.string="U meet the great truam!"

        }
        else if(num==1){
           this.information.string="dwa"
        }
        else if(num==2){
           //this.information.string="天上掉馅饼，对力量和敏捷双重考验，若总骰数大于12则力量敏捷各加一点，否则，敏捷-1."
        }
        else if(num==3){
           // this.information.string="你破窗而入，需投掷两枚骰子进行判定，若0-3，则丢失武器，若骰数为4，则平安无事"

        }
        else if(num==4){ 
            //this.information.string="你获得了洗髓改命的机会，获得各随机1-9的双属性值"

        }
        else if(num==5){ //infor_lable.information.string="你偶然滑进去了一个神秘的话题，投掷一枚骰子进行抉择，投掷出的骰子为你敏捷度的下降值。"

        }
        else if(num==6){ //infor_lable.information.string="你获得了神秘的幸运灵符，投掷一枚骰子进行判定，点数为0则没有变化；若点数为1，则力量+1；若点数为2，则力量和敏捷均+1."

        }
        else if(num==7){//infor_lable.information.string="投掷出一枚骰子，骰子的点数为敏捷增加的点数。"

        }
        else if(num==8){

        }
        else if(num==9){

        }
      
        else if(num==10){

        }
        else if(num==11){

        } 
        else if(num==12){

        }
        else if(num==13){

        }
        else {item.additem(num+1)}

       

    },
    on_touch_end:function(){
        //人物移动
        var player = cc.find("Canvas/firstfloor/player");
        var temp=this.node.parent.getPosition();
        var action = cc.moveTo(1,temp);
        player.stopAllActions();
        player.runAction(action);

        //禁用该按钮
        // this.node.getComponent(cc.Button).interactable = false;

         //生成随机卡牌（不重复
        var rand = Math.floor(Math.random()*27);
        var value = cc.sys.localStorage.getItem(rand);
        while(value > 0){
            rand = Math.floor(Math.random()*27);
            value = cc.sys.localStorage.getItem(rand);
            cc.sys.localStorage.setItem(i, 1);
        }


        
        judge(0);
        //进行卡牌判断


        },

    // LIFE-CYCLE CALLBACKS:
     
       

    onLoad () {
        this.node.on(cc.Node.EventType.TOUCH_END,this.on_touch_end,this);
    },

    start () {

    },

    // update (dt) {},
});