const removeFromArray = function(arr) {
    let i;
    let j;

    for (i = 1; i < arguments.length; i++)
    {
        for (j = 0; j < arr.length; j++)
        {
            if (arr[j] === arguments[i])
                arr.splice(j, 1);
        }
    }

    return arr;
};

// Do not edit below this line
module.exports = removeFromArray;
