
// 写程序判断下列变量是不是数组类型。
var a2 = '[a, b, c, d]';
var b = [1, 2, 3, 4];
//TODO
console.log(Array.isArray(a2));
console.log(Array.isArray(b));



// 编写程序，按下面的要求输出结果。
var colors = ["Red", "Green", "White", "Black"];
//TODO case 1 output: 'Red Green White Black'
// case 2 output: 'Red+Green+White+Black'
// case 3 output: 'Red,Green,White,Black'
console.log(colors.reduce(function(pre,cur,index,colors){
    return pre+" "+cur;
}) )
console.log(colors.reduce(function(pre,cur,index,colors){
    return pre+"+"+cur;
}) )
console.log(colors.reduce(function(pre,cur,index,colors){
    return pre+","+cur;
}) )
// 编写程序，将下面数组中的数字按从大到小的顺序排序。
var a1 = [5, 1, 8, 10, 4];
//TODO should output: [10,8,5,4,1]
a1.sort();
a1.reverse();
console.log(a1);

// 编程程序，找出下列数组中出现频率最高的元素。
var a3 = [3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];
//TODO should output: 'a'
//记录key
var key=new Array;
//记录value
var map=new Map();
a3.forEach(element => {
 if(!key.includes(element)){
     key.push(element);
   var count=0;
   a3.forEach(e=>{
       if(element==e){
           count++;
       }
   })
   map.set(element,count);
 }   
});

var result;
var max=0;

function logMapElements(value, key, map) {
    if(value>max){
        max=value;
        result=key;
    }
}
map.forEach(logMapElements);
console.log(result);
