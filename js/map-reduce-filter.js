const users = [
    {
        id: 1,
        name: 'ryan',
        email: 'ryan@codeup.com',
        languages: ['clojure', 'javascript'],
        yearsOfExperience: 5
    },
    {
        id: 2,
        name: 'luis',
        email: 'luis@codeup.com',
        languages: ['java', 'scala', 'php'],
        yearsOfExperience: 6
    },
    {
        id: 3,
        name: 'zach',
        email: 'zach@codeup.com',
        languages: ['javascript', 'bash'],
        yearsOfExperience: 7
    },
    {
        id: 4,
        name: 'fernando',
        email: 'fernando@codeup.com',
        languages: ['java', 'php', 'sql'],
        yearsOfExperience: 8
    },
    {
        id: 5,
        name: 'justin',
        email: 'justin@codeup.com',
        languages: ['html', 'css', 'javascript', 'php'],
        yearsOfExperience: 9
    }
];

const versedInLanguages = users.filter(function (n){
    return n.languages.length >= 3;
});

const userEmails = users.map(function(n){
    return n.email;
});

const longestEmail = userEmails.reduce(function (currentLongest, n){
    if (n.length > currentLongest.length){
        currentLongest = n;
    }
    return currentLongest;
}, "");


const userNames = users.reduce(function (names, n){
    return names + n.name + ", ";
}, "");

console.log(versedInLanguages);
console.log(userEmails);
console.log("Longest email belongs to: " + longestEmail);
console.log("Your instructors are: " + userNames);

