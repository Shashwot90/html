//loop for,while, do while, break, cont, for in for of
for(var a=0; a<10;a++){
    console.log("for loop",a);
}
var b=0
while(b<10){
    console.log("while loop",b);
    b++
}

var c =0
do {
    console.log("do while",c);
    c++
}
while(c<10)

for(var a=0; a<10;a++){
    if(a==3){
        console.log("equal value");
        continue
    }
    console.log("for loop",a);
}