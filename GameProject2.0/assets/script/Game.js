// Learn cc.Class:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/class.html
//  - [English] http://docs.cocos2d-x.org/creator/manual/en/scripting/class.html
// Learn Attribute:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/reference/attributes.html
//  - [English] http://docs.cocos2d-x.org/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/life-cycle-callbacks.html
//  - [English] https://www.cocos2d-x.org/docs/creator/manual/en/scripting/life-cycle-callbacks.html

var item = require("item");
var person = require("person")

for(var i=0;i<27;i++){
    cc.sys.localStorage.setItem(i, 0);
}

cc.Class({
    extends: cc.Component,

    properties: {
        
        extends: cc.Component,
        display1: {
            default: null,
            type: cc.Label
        },
        display2: {
            default: null,
            type: cc.Label
        },
        information: {
            default: null,
            type: cc.Label

    },

    changeperson:function () {
        // 更新 scoreDisplay Label 的文字
        this.display1.string = "Might:"+ person.might;
        this.display2.string = "Speed:"+ person.speed;
    },
    // LIFE-CYCLE CALLBACKS:

    dice:function(num){         //掷色子
        var result = 0;
        for(var i =0;i<num;i++){
            result += Math.floor(Math.random()*3)
        }
        return result;

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



   // onLoad () {

    },

   // start () {   
    },
    // update (dt) {},
);

