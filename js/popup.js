console.log('popup opened');

// Get the hipsters from storage
chrome.storage.local.get('hipsters', function(data){
    // if hipsters have been found, add it to the popup
    if (data.hipsters > 0){
        document.body.innerHTML += "<p>Hipsters found: " + data.hipsters + "</p>";
    }
});
