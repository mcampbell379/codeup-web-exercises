"use strict";
(async function () {
    function lastCommit(username, apikey) {
        const url = `https://api.github.com/users/${username}/events/public`
        return fetch(url, {headers: {'Authorization': `token ${apikey}`}})
            .then((response) => response.json())
            .then(data => {
                return data.filter(function (event){
                    return event.type === "PushEvent";
                })[0].created_at;
            });
    }

    const lastCommitDate = await lastCommit('mcampbell379', GITHUB_API_KEY)

    console.log(lastCommitDate);


////////////////////////////////////////////////////////////////////////

    function wait(millisec) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve();
            }, millisec);
        });
    }

    wait(1000).then(() => console.log("You\'ll see this after 1 second"));
    wait(3000).then(() => console.log("You\'ll see this after 3 seconds"));

})();