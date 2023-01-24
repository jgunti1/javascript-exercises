const sumAll = function(first,second) {
    var count = 0;
    if (first > second) {
        temp = second;
        second = first;
        first = temp;
    }
    else if ( first <0 || second <0) {
        return 'ERROR';
    }
    else if (typeof first != 'number' || typeof second != 'number') {
        return 'ERROR';
    }
    
    for (let i=first;i<=second;i++)
        {
            count += i;
        }
    return count;
};

// Do not edit below this line
module.exports = sumAll;
