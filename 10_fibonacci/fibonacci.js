const fibonacci = function(n) {
    if (Number(n) == NaN || Number(n) < 0)
        return "OOPS";    
    else if (n < 3)
        return (n == 0) ? 0 : 1;
    return fibonacci(Number(n) - 1) + fibonacci(Number(n) - 2);
};

// Do not edit below this line
module.exports = fibonacci;
