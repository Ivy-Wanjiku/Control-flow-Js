function manipulateArray(arr1){
if (arr1.length<4){

}
else{
var newArr=[]
for(var b=0; b<4; b++){
newArr.push(arr1[b]*arr1[b])
}
newArr.pop(arr1[arr1.length -2]+10)
newArr.pop(arr1[arr1.length -1]+10)
}
return newArr

}
const newArr=[22,44,98,352,34,87]
console.log(manipulateArray(newArr));
function loopArray(arrNum){
    var a=0;
    while (a<arrNum.length){
        if(a===4){
            break
        }
        a++
    }
    return arrNum
}
let arrNum=[1,2,3,4,5,6,7,8,9]
console.log(loopArray(arrNum));
function manipulate(fruits){
for(var c=0;c<fruits.length;c++){
    if(c===2)continue;

}
return fruits
}
let fruits=["apples","plum","banana","strawberries","kiwi"]
console.log(manipulate(fruits));
function mylooping(names){
for(var c=0;c<names.length;c++){
    console.log(names[c]);;

}
return names
}
let names=["Wanjiku","Kimbery","Anita","Marion","Wakesho"]
mylooping(names)
function myReverseString(string){
    let myReverseString=""
    var i=string.length-1;
    while(i>0){
        myReverseString +=string[i];
        i--;
    }
return myReverseString;
}
let  newstr="Amazing"
let b=myReverseString(newstr)
console.log(b);