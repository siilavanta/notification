 var themetxt = `
                <div style="display: flex;
                flex-direction: row;
                justify-content: space-evenly;
                position: fixed;
                bottom: 30%;
                width: 100vw;" 
                id="theme">
                    <span style="padding: 5px 15px;
                    background: darkgray;"  onclick="nightt()">নাইট</span>
                    <span style="    padding: 5px 15px;
                    background: darkgray;"  onclick="normalt()">নরমাল</span>
                    
                </div>`
    
        var savebar = document.getElementById('savebar')
        savebar.insertAdjacentHTML('beforebegin', `${themetxt}`)


       
            function nighttheme() {
                var allquery = document.querySelectorAll(`#eddit, 
                                                #eddit_head, 
                                                #txtarea, 
                                                #savebar, 
                                                #fb_btn, 
                                                #fb_btn_content, 
                                                #font_item, 
                                                #history_div, 
                                                #sidebar, 
                                                #fontresize,
                                                #wrapstyle`)
    
    
                allquery.forEach((el) => {
                    el.style.background = 'rgb(29 27 27)'
                    el.style.color = 'white'
                })
            }
            const daytheme = () => {
                var allquery = document.querySelectorAll(`#eddit, 
                                                #eddit_head, 
                                                #txtarea, 
                                                #savebar, 
                                                #fb_btn, 
                                                #fb_btn_content, 
                                                #font_item, 
                                                #history_div, 
                                                #sidebar, 
                                                #fontresize,
                                                #wrapstyle`)
    
    
                allquery.forEach((el) => {
                    el.style.background = ''
                    el.style.color = ''
                })
    
            }
    
            const nightt = () => {
                window.localStorage.setItem('theme', "night")
                nighttheme()
    
            }
            const normalt = () => {
                window.localStorage.setItem('theme', 'day')
                daytheme()
            }
    
            var themeSwitch = window.localStorage.getItem('theme')
            if (themeSwitch === 'day') {
                daytheme()
            } else if (themeSwitch === 'night') {
                nighttheme()
            }
       
        console.log('ooooo')
  
