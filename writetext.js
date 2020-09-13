//alert('Welcome to WriteText App.')
var eddit_head = document.getElementById('eddit_head')
var div = document.createElement('span')
div.setAttribute('onclick', 'addValue(text), autoFocus() ')
div.setAttribute('class', 'eddit_head_item')
div.innerText = 'text'
eddit_head.appendChild(div)
