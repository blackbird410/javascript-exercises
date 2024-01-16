const leapYears = function(n) {
    if (typeof(n) != 'number' && n < 0)
        return 'ERROR';
    else if (n % 4 == 0)
    {
        if (n % 100 == 0)
        {
            if (n % 400 == 0)
                return true;
            else 
                return false;
        }
        else
            return true;
    }

    return false;
};

// Do not edit below this line
module.exports = leapYears;
