const palindromes = function (s) {
    let p = [' ', '.', ',', '!', '?'];
    p.forEach(punct => s = splitAndJoin(s, punct));
    console.log(s);

    let forward = "";
    let backward = "";
    let i = 0;
    for (i = 0; i < s.length; i++)
        forward += s[i].toLowerCase();
    for (i = s.length -1; i >= 0; i--)
        backward += s[i].toLowerCase();

    return forward === backward;
};

let splitAndJoin = (string, punc) => {
    let arr = string.split(punc);
    let i = 0;
    string = ""
    for (i = 0; i < arr.length; i++)
        string += arr[i];
    return string;
}

// Do not edit below this line
module.exports = palindromes;
