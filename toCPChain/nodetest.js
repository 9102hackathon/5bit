//本代码仅为调试node.js调用python时使用
//之后适当修改将添加到游戏核心逻辑中

var exec = require('child_process').exec;
var arg1 = '4cd11e76fb7f8c9684aeed6a9641b8157ab03e6a'
var arg2 = '58D0791b5C4ddB460a89FedA48A2ED935Fb757Ec'
var arg3 = '4'

// 测试时使用的绝对路径，其他情况时可以适当改变
exec('python D:\\9102Hackthon\\workstation\\toCPChain\\ToCPChain.py ' + arg1 + ' ' + arg2 + ' ' + arg3, function(error, stdout, stderr) {
    if (stdout.length > 1) {
        console.log(stdout);
    } else {
        console.log('you don\'t offer args');
    }
    if (error) {
        console.info('stderr : ' + stderr);
    }
});