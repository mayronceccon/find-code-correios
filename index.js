const CONTEXT_MENU_ID = "SEARCH_CODE_CORREIOS"

function getCode(info, tab) {
  if (info.menuItemId !== CONTEXT_MENU_ID) {
    return;
  }

  // chrome.tabs.create({  
  //   url: "https://www.linkcorreios.com.br/?id=" + info.selectionText
  // });

  const html = 'data:text/html;base64,PGgxPk9sYSBtdW5kbzwvaDE+'

  chrome.tabs.create({  
    url: html
  });
}

chrome.contextMenus.create({
  "id": CONTEXT_MENU_ID,
  "title" : "Buscar postagem nº \"%s\" nos Correios",
  "type" : "normal",
  "contexts" : ["selection"],
});

chrome.contextMenus.onClicked.addListener(getCode);
