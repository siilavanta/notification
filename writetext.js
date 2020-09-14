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
