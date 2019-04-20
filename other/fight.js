import Math;

//战斗判定
var user=new array(1,1,0,0,0,0,0,0);//玩家属性、物品、装备数组
var monster=new array(0,1);//怪物种类和属性值，0表示力量怪物，1表示速度怪物
function fight(user,monster) {
	var harm=new int();
	if (monster[0]==0) {//力量怪物
		if (user[2]==1) {
			monster[1]=monster[1]-2;
		}
		if (user[3]==1) {
			monster[1]=monster[1]-2;
		} 
		if (user[5]==1) {
			user[0]=user[0]+1;
		} 
		if (user[6]==1) {
			user[0]=user[0]+2;
		} 
		var userSum=new int();
		var monsterSum=new int();
		for (var i = user[0]; i >= 0; i--) {
			userSum=userSum+Math.floor(Math.random()*7);
		}
		for (var i = monster[1]; i >= 0; i--) {
			monsterSum=monsterSum+Math.floor(Math.random()*7);
		}
		harm=userSum - monsterSum;
		var flag=new int(1);
		while(flag==1){
			if (harm>0) {
				monster[1]=monster[1]-abs(harm);
				if (monster[1]<=0) {
					//怪物死亡
					flag=0;
				} 
			}
			if (harm<0) {
				user[0]=user[0]-abs(harm);
				if (user[0]<=0) {
					//玩家死亡
					flag=0;
				} 
			} 
		} 
		
	}else{						//速度怪物
		if (user[3]==1) {
			monster[1]=monster[1]-2;
		} 
		if (user[4]==1) {
			monster[1]=monster[1]-3;
		} 
		if (user[7]==1) {
			user[1]=user[1]+2;
		}
		var userSum=new int();
		var monsterSum=new int();
		for (var i = user[0]; i >= 0; i--) {
			userSum=userSum+Math.floor(Math.random()*7);
		}
		for (var i = monster[1]; i >= 0; i--) {
			monsterSum=monsterSum+Math.floor(Math.random()*7);
		}
		harm=userSum - monsterSum;
		var flag=new int(1);
		while(flag==1){
			if (harm>0) {
				monster[1]=monster[1]-abs(harm);
				if (monster[1]<=0) {
					//怪物死亡
					flag=0;
				} 
			}
			if (harm<0) {
				user[0]=user[0]-abs(harm);
				if (user[0]<=0) {
					//玩家死亡
					flag=0;
				} 
	} 
}