const removeFromArray = function(arr, ...extra) {
    for(i=0; i<extra.length;i++){
        arr = arr.filter(takeout);
    }
    function takeout(elem){
        return elem !== extra[i];
    }
    return(arr)
};

// Do not edit below this line
module.exports = removeFromArray;
