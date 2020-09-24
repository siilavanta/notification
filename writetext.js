// // top ten



// var eddit_head = document.getElementById('eddit_head')
// var div = document.createElement('span')
// div.setAttribute('onclick', `addValue('text'), autoFocus()`)
// div.setAttribute('class', 'eddit_head_item')
// div.innerText = 'text'
// eddit_head.appendChild(div)
var vedio = `   <div id="frame_id">

<iframe 
width="100%" 
style="height: 85vh;" 
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

var stylebar = `
<style>
  #loadermain{
    justify-content: center;
    top: 0px;
    /* background: white; */
    height: 20vh;
    width: 100vw;
    position: fixed;
    opacity: 0.9;
    display: flex;
    justify-content: center;
    z-index: 4000;
    display: none;
    }

  #loader {
   
    top: 50px;
    align-self: center;
    z-index: 100; 
    width: 40px;
    height: 40px;
    border: 5px solid #f3f3f3;
    border-radius: 50%;
    border-top: 5px solid rgb(101 238 244);
    border-right: 5px solid rgb(101 238 244);
    -webkit-animation: spin 1s linear infinite;
    animation: spin 0.5s linear infinite;
  }

  @-webkit-keyframes spin {
    0% {
      -webkit-transform: rotate(0deg);
    }

    100% {
      -webkit-transform: rotate(360deg);
    }
  }

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }

    100% {
      transform: rotate(360deg);
    }
  }

  /* Add animation to "page content" */
  .animate-bottom {
    position: relative;
    -webkit-animation-name: animatebottom;
    -webkit-animation-duration: 1s;
    animation-name: animatebottom;
    animation-duration: 1s
  }

  @-webkit-keyframes animatebottom {
    from {
      bottom: -100px;
      opacity: 0
    }

    to {
      bottom: 0px;
      opacity: 1
    }
  }

  @keyframes animatebottom {
    from {
      bottom: -100px;
      opacity: 0
    }

    to {
      bottom: 0;
      opacity: 1
    }
  }

#loginpage{
   bottom: 100px;
    width: 40px;
    height: 40px;
    position: fixed;
    background: #007bff;
    border-radius: 200%;
    right: 0px;
    text-align: center;
    display: flex;
    justify-content: center;
}
#mcbtn{
align-self: center;
}

table {
font-family: Adorsholipi;
  border-collapse: collapse;
  width: 100%;
}

td, th {
  border: 1px solid #dddddd;
  text-align: left;
  padding: 4px;
}
tr:nth-child(even) {
  background-color: #f5f4f4;
}

.txt{
    position: fixed;
    background: aliceblue;
    height: 90%;
    width: 100%;
    overflow: scroll;
    top: 0px;
}
#close{
    background: cornflowerblue;
    text-align: center;
    position: fixed;
    width: 100%;
    color: white;
    font-family: Adorsholipi;
}
#pretxt{
margin : 50px 5px 100px 5px;
font-family: Adorsholipi;
}
</style>
`

var loadr =`
<div id="loadermain">
      <div id="loader"></div>
    </div>

`
document.body.insertAdjacentHTML('afterbegin', `${stylebar}`)

document.body.insertAdjacentHTML('afterbegin', `${loadr}`)
var logiPage = document.getElementById('loginpage')
var cmbtn = `<a id="mcbtn" href="https://github.com/PaliBanglaDictionary/vol_1/issues/"><i class="material-icons">comment</i></a>`
logiPage.innerHTML = cmbtn

// // top ten
var shraddhamitra = 'https://raw.githubusercontent.com/ShraddhamitraBhante/vol_1/master/%E0%A6%96.txt'
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
var sukel = 'https://raw.githubusercontent.com/Upasok/vol_1/master/%E0%A6%85_%E0%A7%A7.txt'
var sabinoy = 'https://raw.githubusercontent.com/Upasok/vol_1/master/%E0%A6%85_%E0%A7%A8.txt'
var rabin = 'https://raw.githubusercontent.com/Upasok/vol_1/master/%E0%A6%85_%E0%A7%A9.txt'
var sarubikash = 'https://raw.githubusercontent.com/Upasok/vol_1/master/%E0%A6%85_%E0%A7%AA.txt'
var sumon = 'https://raw.githubusercontent.com/Upasok/vol_1/master/%E0%A6%85_%E0%A7%AB.txt'
var rigen = 'https://raw.githubusercontent.com/Upasok/vol_1/master/%E0%A6%85_%E0%A7%AC.txt'
var samadhikalyan = 'https://raw.githubusercontent.com/SamadhikalyanBhante/vol_1/master/%E0%A6%A8.txt'


    function rang() {
        document.getElementById('loadermain').style.display = "flex"
        var index = [
        shraddhamitra,
        silavanta,
        sarbananda,
        shuvaananda,
        anuggaananda,
        shilojyoti,
        sadhonajyoti,
        abhijnananda,
        meghiya,
        miton,
        devasen,
        sukel,
        sabinoy,
        rabin,
        sarubikash,
        sumon,
        rigen,
        samadhikalyan
      ];
        var indexName = [
        ['শ্রদ্ধামিত্র ভিক্ষু'], 
        ['সীলৰন্ত ভিক্ষু'], 
        ['সর্বানন্দ ভিক্ষু'], 
        ['শুভনন্দ ভিক্ষু'], 
        ['অনুজ্ঞানন্দ ভিক্ষু'], 
        ['শীলজ্যোতি ভিক্ষু'], 
        ['সাধনাজ্যোতি ভিক্ষু'], 
        ['অভিজ্ঞানন্দ ভিক্ষু'], 
        ['মেঘিয়ো ভিক্ষু'], 
        ['মিটন শ্রামণ'], 
        ['দেবসেন ভিক্ষু'], 
        ['সুকেল চাকমা'], 
        ['সবিনয় চাকমা'], 
        ['রবিন চাকমা'], 
        ['চারু বিকাশ চাকমা'], 
        ['সুমন চাকমা'], 
        ['রিগেন চাকমা'], 
        ['সমাধিকল্যাণ ভিক্ষু']
        ];

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

                    
                    document.body.insertAdjacentHTML('beforebegin', `
                    <div style="display: none;" class="nameid">${indexName[i]} </div> 
                    <div style="display: none;" class="txtid"><div>${data}</div> 
                    <div style="display: none;" class="char_num">${data.length}</div>`)
                   
                   
                    if (indexName[i].toString() === 'সমাধিকল্যাণ ভিক্ষু') {
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
                                            র‌্যাঙ্কিংয়ের ফলাফল</div> `)
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
            var txtId = document.querySelectorAll('.txtid')
            var char_num = document.querySelectorAll('.char_num')
            var arr = []
            var output = []
            var txtall = []
            for (var i = 0; i < nameId.length; i++) {

                arr.push([char_num[i].textContent, nameId[i].textContent, txtId[i].textContent])

                var totalChar = Number(arr[i][0])
                arr[i].splice(0, 1, totalChar)
            }
            console.log(arr)
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
                    <tr class="userName" id=user${i}>
                        <td> ${i +1}. </td> 
                        <td class="name"> ${arr[i][1]} </td> 
                        <td class="letter">${arr[i][0]}</td> 
                        <td onclick="data('txt${i+1}')">দেখুন</td>
                      
                    </tr>`)
            }
            for(var i = 0; i < arr.length; i++){
                txtall.push(`<div style="display: none;" class="txt" id="txt${i + 1}"> <div id="close" onclick="closetxt('txt${i + 1}')">দেখা বন্ধ করুন</div><pre id="pretxt"> ${arr[i][2]}</pre></div>`)
            }

            
            document.getElementById('loadermain').style.display = "none"
            document.body.insertAdjacentHTML('afterbegin', `<table id="rankdiv"></table>`)
            setTimeout(()=>{
                var rankdiv = document.getElementById('rankdiv')
                   
            },10)
           
            rankdiv.innerHTML = output.join(' ')
            var user0 = document.getElementById('user0')
            user0.insertAdjacentHTML('beforebegin', `<tr id="header"><th>টপ</th> <th class="nameHead">নাম</th> <th class="rankHead">অক্ষর</th> <th>লেখা</th> </tr>`)
            

            document.body.insertAdjacentHTML('afterbegin', '<p style="color: white; background: gray; padding: 2px 6px; font-size:12px; margin: 0px 0px 10px 0px; text-align: center;"><i>কেবল আনলাইনে জমা দেওয়া ডাটা নিয়ে র‌্যাঙ্কিং করা হয়েছে।</i></p> ')
            document.body.insertAdjacentHTML('afterbegin', txtall.join(''))
            
            //console.log(output)
        }
function data(id){
    document.getElementById(`${id}`).style.display = 'block'

}


function closetxt(idtxt){
    document.getElementById(`${idtxt}`).style.display = 'none'

}
