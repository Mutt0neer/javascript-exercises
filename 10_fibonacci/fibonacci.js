const fibonacci = function(leng) {
let double=0;
let single=1;
let num=0;
leng=Number(leng);
if(leng<0){
    return("OOPS")
}
if(leng==1){
    num=1
}
for(i=1;i<=leng-1;i++){
    num=single+double;
    double=single;
    single=num;
    console.log(num);
}
return(num);
};

// Do not edit below this line
module.exports = fibonacci;
