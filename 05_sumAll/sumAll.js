const sumAll = function(val1, val2) {
    let result=0
    if(val1!==Math.floor(val1)||val2!==Math.floor(val2)||Number.isNaN(val1)||Number.isNaN(val2)||val1<0||val2<0){
        return("ERROR");
    }
    if (val1<val2){
        for(let i=val1; i<=val2;i++){
            result+=i;
        }
    } else {
        for(let i=val2; i<=val1;i++){
            result+=i;
        }
    }
    return(result);
};

// Do not edit below this line
module.exports = sumAll;
