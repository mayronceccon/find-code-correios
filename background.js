function getword(info,tab) {
    console.log("Code " + info.selectionText + " searched.");
    chrome.tabs.create({  
        url: "https://proxyapp.correios.com.br/v1/sro-rastro/" + info.selectionText
    });
}

chrome.contextMenus.create({
    "title" : "Find code %s in correios",
    "type" : "normal",
    "contexts" : ["selection"],
    "onclick" : getword
});
