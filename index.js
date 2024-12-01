//Logical AND && Operators// if one value is true and another is false then it returns it returns false afterchecking the second value
var a=10;
var b=20;
console.log(a&&b);//condition for logical and is if both true then it return true
var c=90;
var d=" ";
console.log(c&&d)//True
//Logical OR || Operator  //condition for Logical OR is if bothe false then it returns false otherwaise it returns true
var e="";
var f=0;
console.log(e|| f);//0 why because bothe false then it returns 0
var g=" ";
var h=30;
console.log(h||g)//30 why because 30 and space are true , first value is true then it dose'nt check the second value
//Logical NOT!   //it return true when the given value is false we can say that it is opposite to the given value
var i=!!false;
console.log(i)
var j=![];
console.log(j)
var k=undefined;
var l=" "
console.log(k&&l)//undefind
console.log(k||l)//space
console.log(!k)//true
var m=[];
var n=0;
console.log(m&&n)//0
console.log(m||n)//[]
console.log(![])//false
if(!!"deepika"){//hello
    console.log("hello")
}else{
    console.log("false")
}
if ([] && ["deepika"]){    //true && true
    console.log("hello")
}else{
    console.log("FALSE")
}
var o=null;
var p=null;
console.log(o&&p)//nul