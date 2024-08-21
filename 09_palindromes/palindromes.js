const palindromes = function (str) {
    
    str = str.toLowerCase();
    str = str.split("")
    let norm = str.filter((char) => char!=="!"&&char!==","&&char!=="."&&char!==" ");
    let normcopy=norm;
    let reversed=[];
    let x=0
    let bool=true;
    for(let i = norm.length-1; i>=0;i--){
        reversed[x]=norm[i];
        x++;
    };

    for(let o=0; o<norm.length;o++){
        if(reversed[o]!==norm[o]){
            bool=false;
        }
    }

    console.log(norm);
    console.log(reversed);
    return(bool);
};

// Do not edit below this line
module.exports = palindromes;
