const fibonacci = function(a) {
    if (a<0) {
        return 'OOPS';
    }
    let seq = parseInt(a);
    let first =0;
    let second =1;
    for (let i = 1; i<seq; i++) {
        let temp = first + second;
        first = second
        second = temp
    }
    return second;
};

// Do not edit below this line
module.exports = fibonacci;
