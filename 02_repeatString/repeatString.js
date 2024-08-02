const repeatString = function(word, numtimes) {
    let ret=""
    if (numtimes<0){
        return("ERROR")
    }
    for (i=0;i<numtimes;i++){
        ret +=word;
    }

    return(ret);
};

// Do not edit below this line
module.exports = repeatString;
