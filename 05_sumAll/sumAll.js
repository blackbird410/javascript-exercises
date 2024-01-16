const sumAll = function(n, m) {
    if ((n < 0 || m < 0) || 
        (typeof(n) != 'number' || typeof(m) != 'number'))
        return 'ERROR';

    let min = (n < m) ? n : m;
    let max = (min == n) ? m : n;
    let sum = 0;
    if (min == max)
        return 2 * min;

    while (min <= max)
    {
        sum += min;
        min++;
    }

    return sum;
};

// Do not edit below this line
module.exports = sumAll;
