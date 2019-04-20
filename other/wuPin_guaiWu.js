


//实现物品的类（函数）
function wuPing(){
};

wuPing.prototype={
	shaizi=0;//骰子
};
wuPing.prototype={
	liliang=1;//力量
	sudu=1;//速度
};

//怪物属性（就是一种减益物品）
//danian:1
//elong:2
//.....
//boss:4
wuPing.prototype={
	daniao=10;//大鸟，怪物的一种，只有速度属性且为10
	elong=10;//恶龙，怪物的一种，只有力量属性且为10
	bigboss=100;//大主宰，怪物的一种，只有力量且为100
	boss=50;//主宰，怪物的一种，只有力量且为50
}

//装备物品属性
//changdao:1
//changjian:2
//...
//fenghuolun:9
wuPing.prototype={
	changdao=0;//长刀：当袭击时，默认骰子总数+2.
	changjian=0;//长剑：当袭击时，默认多投掷一个骰子。
	fopao=0；//佛袍：当袭击时，力量值默认减一（最小可以为0）
	shizijia=0;//十字架：袭击时，减少一点力量，增加两点骰数。
	sanchajian=0;//三叉戟：当袭击时，投掷两枚骰子，点数若2-4，力量+1；点数0-1，无任何效果。
	tiejia=0;//铁甲：速度降为1，力量+5.
	shaohuogun=0;//烧火棍：袭击时，力量+3
	dajian=0;//大剑：自身力量+20
	fenghuolun=0;//风火轮：自身速度+20
};

//装备物品功能实现（函数）
wuPing.prototype.changdao = function(shaizi) {
	shaizi=shaizi+2;
};
wuPing.prototype.changjian = function(shaizi) {
	shaizi=shaizi+1;
};
wuPing.prototype.fopao = function(liliang) {
	liliang=liliang-1;
};
wuPing.prototype.shizijia = function(liliang,shaizi) {
	liliang=liliang-1:
	shaizi=shaizi+2;
};
wuPing.prototype.sanchajian = function(liliang) {
	for (var i = 0; i <= ; i++) {
		if (2<=Math.floor(Math.random()*7)<=4) {
			liliang=liliang+1
		} else {
			continue;
		}
};
wuPing.prototype.tiejia = function(liliang,sudu) {
	sudu=sudu-1;
	liliang=liliang+5;
};
wuPing.prototype.shaohuogun = function(liliang) {
	liliang=liliang+3;
};
wuPing.prototype.dajian = function(liliang) {
	liliang=liliang+20;
};
wuPing.prototype.fenghuolun = function(liliang) {
	sudu=sudu+20;
};