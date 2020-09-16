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
</div>`

var divel = document.createElement('div')
    divel.setAttribute('id', 'frameid')
    divel.innerHTML = vedio
    document.body.appendChild(divel)

var login = document.getElementById('login')

login.insertAdjacentHTML('beforebegin', `<div style="padding: 15px" class="notify">
<b>বিশেষ ঘোষণাঃ</b> 
আপনাদের টাইপের সবিধার্থে “|” ভার্টিকেল এবং “$” ডলার চিহ্ন ব্যবহার না করার সিদ্ধান্ত নেওয়া হয়েছে। 
এখন থেকে নতুন কোন শব্দ টাইপ করলে এই সিদ্ধান্তটি ফলো করার সকলকে প্রর্থনা বা অনুরোধ করা হচ্ছে।</div>`)

