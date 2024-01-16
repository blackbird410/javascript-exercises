const findTheOldest = function(people) {
    let oldestAge = 0;
    let oldestIndex = 0;
    let age = 0;
    for(let i = 0; i < people.length; i++)
    {
        age = (people[i].yearOfDeath) ? 
            people[i].yearOfDeath - people[i].yearOfBirth : 
            (new Date()).getFullYear() - people[i].yearOfBirth;

        if (age > oldestAge)
        {
            oldestAge = age;
            oldestIndex = i;
        }
    }

    return people[oldestIndex];
};

// Do not edit below this line
module.exports = findTheOldest;
