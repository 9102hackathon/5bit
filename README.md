## 9102 BitRun Hackathon
## Team： 5bit
 #### 团队成员：中央财经大学 马润薪（wolong001） 朱润南（Porkia） 李泓源（lhylanglang） 方红超（ColeFang） 铁静杰（Giggleee）
 #### 游戏名称 Bit Surviver
 
 你被一股神秘的力量包裹，卷到了一个不为人知的地方之中，你的唯一目的就是存活下去。
 #### 游戏介绍：
 
 玩家支付一定金额的代币作为进场券进入游戏，击杀他人和怪物可以掠夺金币，最终的存活者可以携带金币离开游戏。
 
 游戏每一局都是独立存在的，与其他局没有任何关联，前一局中获取的物品不会延续到之后的游戏中。
 #### 规则简介
 PVE模式：
  按照游戏难度设立房间个数，初级中级和高级分别对应9、16、25个房间，投入代币数分别为5、10、20。
  
  玩家在选择游戏难度之后进入游戏，进行体能点分配，力量和敏捷值的总和为10.属性分配完成之后玩家选定房间进入，房间中会有事件发生，或好或坏。
  
  玩家可能会在房间中增长属性值，也有可能降低属性值。当然还有一种情况就是与怪物相遇，怪物分为两类，敏捷性怪物和力量型怪物。敏捷性怪物敏捷属性6-9，力量属性2-3；力量型怪物的敏捷属性2-3，力量属性6-9，用户可以选择通过敏捷或力量属性对怪物进行战斗，若战斗胜利，可随机获得代币。当用户走过全部房间之后，游戏结束，玩家胜利。反之，在玩家走完全部房间之前，玩家的任意一个属性降低到0，则玩家均死亡。玩家死亡之后可以选择支付游戏开局相同数量代币复活，复活之后，所有信息恢复到本回合开始，进行重新选择房间。
  
  当玩家和怪物相遇，必须选择战斗，玩家投掷出选定属性值相同个数的骰子与怪物相对应属性值进行比较，若玩家总骰数高于怪物骰数，则怪物死亡，反之，玩家受到两者相差数值等同伤害，伤害作用于选定属性上。
  
  房间越多，怪物越多，危险越大，利益越大！危险永远都是和机遇并存的，勇敢的勇士，冲出重重怪物的包围吧，去寻找你的那一片天地。
 
 PVP模式：
 玩家投入50枚代币进入PVP竞技场模式，玩家进入游戏之后进行体能点分配，力量和敏捷两种属性的总和为10.敏捷决定着每一回合开始时玩家进入房间的先后顺序，若存在相同点数，则随机选取优先者并固定此顺序；力量决定着用户袭击或被其他用户袭击时，所能投掷的骰子个数。
 
 游戏内部存在75个房间，每层25个，共三层为阁楼、大厅、地下室。除第一回合外，每回合开始前爆破五个房间，将提前一回合告知爆破房间，上层房间爆破后房间中的玩家自动掉入下一层空间，若玩家所在爆破房间在地下室，则直接判定死亡。每一层的中间房间为电梯间，不会爆破，当某一层经过爆破只存在电梯间时，下一回合自动关闭该层电梯间。优先爆破上层空间，富贵险中求。
 
游戏开始时，玩家可从75个房间中任选一个房间进入，之后的每回合开始时，可选定一个和当前房间同层级的房间进入，若想跨层级移动，需先到至楼梯间，然后通过本层楼梯间到达目标楼层楼梯间。

房间中随机会掉落物品，若房间之中只有一个人，则该玩家获得此样物品，物品会有意想不到的后果；若房间中存在两名或更多的玩家，则敏捷值点数大者获得该物品。若多名玩家相处同一个房间，处于回合中的玩家可以选择袭击其中一人或不袭击，若选择袭击则不能在袭击后进行移动。袭击过程双方分别投掷出和自己体力值相同个数的骰子，骰子的差值为投掷点数较少者的受伤值，对应减少该玩家的力量值，力量值下降至0则玩家死亡，该名玩家的所有物品归击杀者所拥有。
 
当游戏中只剩下两名玩家时游戏结束，存活者可以携带出当前所拥有的代币的95%。若房间全部爆破完毕，仍有三名及以上玩家躲避在楼梯间，则同时判负，只能带出50%的代币数。

击杀则获取他人代币，存活则将代币带出，为了生存和财富，开始勇士的冒险吧！

##### 设置和限制：
每场PVE模式游戏由房间个数控制流程，走完所有房间方为结束。
每场PVP游戏游戏由房间爆破控制流程，不超过十五回合。
——每回合移动去向的决定时间不超过60s，每件事件的决策时间不超过30s。
——每个人拥有的物品数量不得超过8.
——同一物品带来的效果是唯一不可叠加的。

 #### Language
 JavaScript，python，其他
