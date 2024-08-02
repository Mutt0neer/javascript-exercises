const reverseString = function(str) {
    let arr = str.split("")
    let reversed = []
    for(i=arr.length-1;i>=0;i--){
        reversed.push(arr[i])
    } 
    return(reversed.join(""))
};

// Do not edit below this line
module.exports = reverseString;
