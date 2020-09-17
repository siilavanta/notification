//     var eddit_head = document.getElementById('eddit_head')
// var div = document.createElement('span')
// div.setAttribute('onclick', `addValue('text'), autoFocus()`)
// div.setAttribute('class', 'eddit_head_item')
// div.innerText = 'text'
// eddit_head.appendChild(div)

// top ten
var shraddhamitra = ''
var silavanta = 'https://raw.githubusercontent.com/siilavanta/vol_1/master/%E0%A6%97.txt'
var sarbananda = 'https://raw.githubusercontent.com/SarbaNandaOfficial/Pali-to-Bengali-Dictionary/master/%E0%A6%85.txt'
var shuvaananda = 'https://raw.githubusercontent.com/ShuvanandaBhante/vol_1/master/%E0%A6%87.txt'
var anuggaananda = 'https://raw.githubusercontent.com/AnugganandaBhante/vol_1/master/%E0%A6%89.txt'
var shilojyoti = 'https://raw.githubusercontent.com/ShilojyotiBhante/vol_1/master/%E0%A6%A6.txt'
var sadhonajyoti = 'https://raw.githubusercontent.com/SadhonajyotiBhante/vol_1/master/%E0%A6%A7.txt'
var meghiya_1 = 'https://raw.githubusercontent.com/MeghiyaBhante/vol_1/master/%E0%A6%88_complite.txt'
var meghiya = 'https://raw.githubusercontent.com/MeghiyaBhante/vol_1/master/%E0%A6%8A.txt'
var abhijnananda = 'https://raw.githubusercontent.com/AbhijnanandaBhante/vol_1/master/%E0%A6%86.txt'
var miton = 'https://raw.githubusercontent.com/MitonShramon/vol_1/master/%E0%A6%8F.txt'
var samadhikalyan = 'https://raw.githubusercontent.com/SamadhikalyanBhante/vol_1/master/%E0%A6%A8.txt'


var index = [silavanta, sarbananda, shuvaananda, anuggaananda, shilojyoti, sadhonajyoti, abhijnananda, meghiya, miton, samadhikalyan];
var arr = []
var indexName = [['silavanta'], ['sarbananda'], ['shuvaananda'], ['anuggaananda'], ['shilojyoti'], ['sadhonajyoti'], ['abhijnananda'], ['meghiya'], ['miton'], ['samadhikalyan']];

var request = new XMLHttpRequest();
(function loop(i, length) {
    if (i>= length) {
        return;
    }
    var url =  index[i];

    request.open("GET", url);
    request.onreadystatechange = function() {
        if(request.readyState === XMLHttpRequest.DONE && request.status === 200) {
            var data = request.responseText
            
            var fulluser = indexName[i].concat(data.length);
            console.log(fulluser)
           

            loop(i + 1, length);
        }
    }
    request.send();
})(0, index.length);
