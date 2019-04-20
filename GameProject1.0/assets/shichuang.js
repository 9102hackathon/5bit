import { ENFILE } from "constants";

/*
 * @Author: RephontilZhou 
 * @Date: 2018-05-18 17:39:48 
 * @Last Modified by: Damo
 * @Last Modified time: 2018-05-23 19:57:35
 */

var Alert = {
    _alert: null,           // prefab
    _detailLabel:   null,   // 内容
    _cancelButton:  null,   // 确定按钮
    _enterButton:   null,   // 取消按钮
    _enterCallBack: null,   // 回调事件
    _animSpeed:     0.3,    // 动画速度
    _sprite:        null,   //人物
};

cc.Class({
    extends: cc.Component,

    properties: {


    },


    statics:{

        /**
         * detailString :   内容 string 类型.
         * enterCallBack:   确定点击事件回调  function 类型.
         * neeCancel:       是否展示取消按钮 bool 类型 default YES.
         * spritePath:      动态加载弹框中精灵图片的resources路径
         * duration:        动画速度 default = 0.3.
        */
        show(detailString, enterCallBack, needCancel, spritePath, animSpeed) {

            var self = this;
        
            // 判断
            if (Alert._alert != undefined) return;
        
            Alert._animSpeed = animSpeed ? animSpeed : Alert._animSpeed;
            cc.loader.loadRes("prefabs/Alert", cc.Prefab, function (error, prefab) {
        
                if (error) {
                    cc.error(error);
                    return;
                }
        
                var alert = cc.instantiate(prefab);
                Alert._alert = alert;
        
                // 动画 
                var cbFadeOut = cc.callFunc(self.onFadeOutFinish, self);
                var cbFadeIn = cc.callFunc(self.onFadeInFinish, self);
                self.actionFadeIn = cc.sequence(cc.spawn(cc.fadeTo(Alert._animSpeed, 255), cc.scaleTo(Alert._animSpeed, 1.0)), cbFadeIn);
                self.actionFadeOut = cc.sequence(cc.spawn(cc.fadeTo(Alert._animSpeed, 0), cc.scaleTo(Alert._animSpeed, 2.0)), cbFadeOut);
        
                
                Alert._detailLabel = cc.find("alertBackground/detailLabel", alert).getComponent(cc.Label);
                Alert._cancelButton = cc.find("alertBackground/cancelButton", alert);
                Alert._enterButton = cc.find("alertBackground/enterButton", alert);
                Alert._sprite = cc.find("alertBackground/sprite", alert).getComponent(cc.Sprite);

                
                if (Alert._sprite.spriteFrame) {
                    console.log("Alert._sprite");
                }else{
                    console.log("找不到");
                }
                
                // 添加点击事件
                Alert._enterButton.on('click', self.onButtonClicked, self);
                Alert._cancelButton.on('click', self.onButtonClicked, self);
    
                // 父视图
                Alert._alert.parent = cc.find("Canvas");
        
                // 展现 alert
                self.startFadeIn();
        
                self.configAlert(detailString, enterCallBack, needCancel, spritePath,animSpeed);
                
            });
        
            // 参数
            self.configAlert = function (detailString, enterCallBack, needCancel, spritePath, animSpeed) {
        
                // 回调
                Alert._enterCallBack = enterCallBack;
        
                // 内容
                Alert._detailLabel.string = detailString;
                // 是否需要取消按钮
                if (needCancel || needCancel == undefined) { // 显示
                    Alert._cancelButton.active = true;
                } else {  // 隐藏
                    Alert._cancelButton.active = false;
                    Alert._enterButton.x = 0;
                }

                if (spritePath == null || spritePath == undefined) {
                    spritePath = "Alert/alert_baby";
                }

                cc.loader.loadRes(spritePath, cc.SpriteFrame, function (err, spriteFrame){
                    console.log(spritePath);
                    if (spriteFrame) {
                        console.log("恭喜发财");
                        if (Alert._sprite) {
                            Alert._sprite.spriteFrame = spriteFrame;
                        }
                    }

                });

            };
        
            // 执行弹进动画
            self.startFadeIn = function () {
                cc.eventManager.pauseTarget(Alert._alert, true);
                Alert._alert.position = cc.p(0, 0);
                Alert._alert.setScale(2);
                Alert._alert.opacity = 0;
                Alert._alert.runAction(self.actionFadeIn);
            };
        
            // 执行弹出动画
            self.startFadeOut = function () {
                cc.eventManager.pauseTarget(Alert._alert, true);
                Alert._alert.runAction(self.actionFadeOut);
            };
        
            // 弹进动画完成回调
            self.onFadeInFinish = function () {
                cc.eventManager.resumeTarget(Alert._alert, true);
            };
        
            // 弹出动画完成回调
            self.onFadeOutFinish = function () {
                self.onDestory();
            };
        
            // 按钮点击事件
            self.onButtonClicked = function(event){
                if(event.target.name == "enterButton"){
                    console.log("确认按钮");
                    if(self._enterCallBack){
                        self._enterCallBack();
                    }
                }else{
                    console.log("取消按钮");
                }
                self.startFadeOut();
            };
        
            // 销毁 alert 
            self.onDestory = function () {
                Alert._alert.destroy();
                Alert._enterCallBack = null;
                Alert._alert = null;
                Alert._detailLabel = null;
                Alert._cancelButton = null;
                Alert._enterButton = null;
                Alert._animSpeed = 0.3;
                Alert._sprite = null;

            };
        }


    },

    start () {

    },

   
});