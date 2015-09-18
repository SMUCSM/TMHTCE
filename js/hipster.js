console.log('hipster injected');

var hipsterRegex = /(ember|angular|meteor|react|backbone)(\.js)?/gi;

var matchesFound = document.body.innerHTML.match(hipsterRegex);

if (matchesFound && matchesFound.length > 0){
    console.log("hipster found");
    console.log("number of hipsters", matchesFound.length);

    // Send a message to background.js
    chrome.extension.sendMessage({
        action: "countHipster",
        hipstersCount: matchesFound.length
    });

    // Replace any matches in hipsterRegex on the current page
    document.body.innerHTML = document.body.innerHTML.replace(hipsterRegex, "HipsterFramework.js");
}

//http://pastebin.com/jqbr0cKA