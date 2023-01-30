"use strict";

function lastCommit(username,reponame){
    fetch(`https://api.github.com/repos/${username}/${reponame}/commits`,{headers: {'Authorization': GITHUB_API_KEY}})

        .then((response) => response.json())
        .then((data) => console.log(data[0].commit.author.date))
        .catch((error) => {
            console.log('ERROR:' + error);
    });
}
lastCommit('mcampbell379','codeup-web-exercises');



function wait(millisec){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve();
        },millisec)
    });
}
wait(1000).then(() => console.log("You\'ll see this after 1 second"));
wait(3000).then(() => console.log("You\'ll see this after 3 seconds"));
