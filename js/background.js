console.log("Chrome extension development is easy");

// When the extension is first installed or updated
chrome.runtime.onInstalled.addListener(function(data){
    console.log('onInstalled');
    // Set an initial value for the hipsters key in storage
    chrome.storage.local.set({
        hipsters: 0
    });
});

// Handle any received messages
chrome.runtime.onMessage.addListener(function(message){
    console.log('message received', message);
    // If count hipsters action, add them
    if (message.action == "countHipster"){
        // Get any existing hipster count
        chrome.storage.local.get('hipsters', function(data){
            // Add to that hipster count in storage
            chrome.storage.local.set({
                hipsters: message.hipstersCount + data.hipsters
            });
        });
    }
});

// http://pastebin.com/vSzLMMT2