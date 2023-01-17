const removeFromArray = function(numList,...args) {
    /*for (var i=0;i<numList.length; i++) {
        if (numList[i]==removeNum) {
            numList.splice(i,1);
        }
    }
    return numList;
    */
    return numList.filter(x => !args.includes(x))
};

// Do not edit below this line
module.exports = removeFromArray;
