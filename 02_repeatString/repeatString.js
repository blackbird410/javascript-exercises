const repeatString = function(string, num) {
    if (num < 0)
        return 'ERROR';
    else if (string == "")
        return ''; 

    result = "";
    let i;
    for (i = 0; i < num; i++)
        result += string;
    return result;
};

// Do not edit below this line
module.exports = repeatString;
