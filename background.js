function getCode(info,tab) {
    chrome.tabs.create({  
        url: "https://www.linkcorreios.com.br/?id=" + info.selectionText
    });
}

chrome.contextMenus.create({
    "title" : "Find code \"%s\" in correios",
    "type" : "normal",
    "contexts" : ["selection"],
    "onclick" : getCode
});
