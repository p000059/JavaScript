/*
    0 - connection not started
    1 - configured request
    2 - request sent
    3 - processing
    4 - response received
 */

function createXMLHttpRequest(method, url, cb, data = null){
    
    const xhr = new XMLHttpRequest()
    
    xhr.open(method, url)
    xhr.send(data)
    xhr.onreadystatechange = verifyAjax
    
    function verifyAjax(){
        if(xhr.readyState === 4){
            if(xhr.status === 200 || xhr.status === 302){
                const json = JSON.parse(xhr.responseText)
                if(typeof cb === "function"){
                    cb(json)
                }
            } else if(typeof cb === "function") {
                cb({
                    status: xhr.status,
                    message: "Error connection",
                    obj: xhr
                })
            }
        }
    }
}

/* function getObjectMenu(){
    let xhr = new XMLHttpRequest();
    xhr.open("GET", "js/json/string.json");
    let jsonData = ''
    xhr.onreadystatechange = function() {
      if (this.readyState === 4 && this.status === 200) {
        jsonData = JSON.parse(this.responseText);
        console.log(jsonData)
      }
    };
    return jsonData
} */
