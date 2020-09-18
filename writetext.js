
// var eddit_head = document.getElementById('eddit_head')
// var div = document.createElement('span')
// div.setAttribute('onclick', `addValue('text'), autoFocus()`)
// div.setAttribute('class', 'eddit_head_item')
// div.innerText = 'text'
// eddit_head.appendChild(div)
var vedio = `   <div id="frame_id">

<iframe 
width="100%" 
style="height: 100vh;" 
src="https://www.youtube.com/embed/j6glx7ZypAs" 
frameborder="0" allow="accelerometer; autoplay; 
encrypted-media; gyroscope; picture-in-picture" 
allowfullscreen></iframe>
<br><br><br><br><br><br><br><br><br><br><br><br><br><br>
</div>`

var divel = document.createElement('div')
    divel.setAttribute('id', 'frameid')
    divel.innerHTML = vedio
    document.body.appendChild(divel)

// var login = document.getElementById('login')

// login.insertAdjacentHTML('beforebegin', `<div style="padding: 15px" class="notify">
// <b>বিশেষ ঘোষণাঃ</b> 
// আপনাদের টাইপের সবিধার্থে “|” ভার্টিকেল এবং “$” ডলার চিহ্ন ব্যবহার না করার সিদ্ধান্ত নেওয়া হয়েছে। 
// এখন থেকে নতুন কোন শব্দ টাইপ করলে এই সিদ্ধান্তটি ফলো করার সকলকে প্রার্থনা বা অনুরোধ করা হচ্ছে। 
// তবে আগে যে শব্দগুলো যেভাবে লেখা হয়েছে সেভাবে থাকুক সেগুলো পরিবর্তন করার প্রয়োজন নেই। </div>`)
// // top ten
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
var devasen = 'https://raw.githubusercontent.com/AnugganandaBhante/vol_1/master/%E0%A6%95.txt'
var samadhikalyan = 'https://raw.githubusercontent.com/SamadhikalyanBhante/vol_1/master/%E0%A6%A8.txt'


    function rang() {
        var index = [silavanta, sarbananda, shuvaananda, anuggaananda, shilojyoti, sadhonajyoti, abhijnananda, meghiya, miton, devasen, samadhikalyan];
        var indexName = [['সীলৰন্ত'], ['সর্বানন্দ'], ['শুভনন্দ'], ['অনুজ্ঞানন্দ'], ['শীলজ্যোতি'], ['সাধনাজ্যোতি'], ['অভিজ্ঞানন্দ'], ['মেগীয়'], ['মিটন'], ['দেবসেন'], ['সমাধিকল্যাণ']];

        var request = new XMLHttpRequest();
        (function loop(i, length) {
            if (i >= length) {
                return;
            }
            var url = index[i];

            request.open("GET", url);
            request.onreadystatechange = function () {
                if (request.readyState === XMLHttpRequest.DONE && request.status === 200) {
                    var data = request.responseText
                    var singleuser = indexName[i].concat(data.length)

                    
                    document.body.insertAdjacentHTML('beforebegin', `<div style="display: none;" class="nameid">${indexName[i]} </div> <div style="display: none;" class="char_num"> ${data.length}</div>`)
                   
                   
                    if (indexName[i].toString() === 'সমাধিকল্যাণ') {
                       // alert('finshed')
                       setTimeout(()=>{
            document.body.insertAdjacentHTML('beforebegin', `<div 
                                            style="text-align: center; 
                                            font-size: 20px; 
                                            font-family: Adorsholipi;
                                            background: steelblue;
                                            color: white;
                                            padding: 5px;
                                            font-weight: bold;">
                                            রেঙ্কিংয়ে আছেন</div> `)
                    document.getElementById('login').style.cssText = `
                                                        position: fixed;
                                                        bottom: 0px;
                                                        width: 100%;
                                                        justify-content: center;
                                                        background: darksalmon;
                                                        padding-top: 0%;
                                                        display: flex;
                                                        flex-direction: row;

                                                        `

                        topTen();
                       }, 300)
                    }
                    loop(i + 1, length);
                }


            }

            request.send();

        })(0, index.length);

        ///https://stackoverflow.com/questions/46503558/how-to-use-multiple-xmlhttprequest/46503763
    }
      rang()

    const topTen = () => {

            var nameId = document.querySelectorAll('.nameid')
            var char_num = document.querySelectorAll('.char_num')
            var arr = []
            var output = []
            for (var i = 0; i < nameId.length; i++) {

                arr.push([char_num[i].textContent, `${nameId[i].textContent}`])

                var totalChar = Number(arr[i][0])
                arr[i].splice(0, 1, totalChar)
            }

            arr.sort(sortFunction);

            function sortFunction(a, b) {
                if (a[0] === b[0]) {
                    return 0;
                }
                else {
                    return (a[0] > b[0]) ? -1 : 1;
                }
            }
            for(var i = 0; i < arr.length; i++){
                output.push(`
                    <div style="
                            font-family: Adorsholipi;
                            
                            
                            padding: 5px;">
                        
                        <div> 0${i +1} : ${arr[i][1]} <span> অক্ষর লিখেছেন ${arr[i][0]} টি।</span> </div> 
                        
                    </div>`)
            }

            document.body.insertAdjacentHTML('afterbegin', output.join(' '))
            
        }
