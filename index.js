"use strict";

var nodeDoctype = document.implementation.createDocumentType(
    'html',
    '-//W3C//DTD XHTML 1.0 Transitional//EN',
    'https://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtdd'
   );
   if(document.doctype) {
       document.replaceChild(nodeDoctype, document.doctype);
   } else {
       document.insertBefore(nodeDoctype, document.childNodes[0]);
   }
   document.write('<html lang="ru"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><meta http-equiv="X-UA-Compatible" content="ie=edge"></head><body></body></html>');


window.onload = function (){

    const h2Arr = ["About", "Projects", "Tools", "Contacts", "Future"];
    const h2HoverArr = ["Andrey Grek", "Creating", "I'm working", "Find me telegram", "More"];
    const imgArr = ['img/icons/about.svg', 'img/icons/projects.svg', 'img/icons/tools.svg', 'img/icons/contacts.svg', 'img/icons/future.svg'];
    const imgHoverArr = ['img/me.jpg', '', 'img/code.jpg', 'img/contacts.jpg', 'img/jsonly.jpg'];
    const spanHoverArr = ['I`m a Frontend JavaScript developer', '', 'Gentleman\'s set - html, css, js.<br>Also jquery, react.<br>I can make a design of any complexity.', 'Andrey_Grek', ''];


    let getEl = function(el){
        return document.querySelector(el);
    }
    let cs = function(el, prop){
        return window.getComputedStyle(getEl(el)).getPropertyValue(prop);
    }

    //конструктор элементов
    const newElement = function(parrent, tag, className, id, text, urlBg, attr, attrValue, attr2, attrValue2){
        let parrentEl = document.querySelector(parrent); //присваиваем родителя
        let el = document.createElement(tag); //создаём новый элемент
        if (className){
            el.className = className; //присваиваем class новому элементу
        }
        if (id){
            el.id = id; //присваиваем id новому элементу
        }
        if (text){
            el.innerHTML = text;
        }
        if (urlBg){
                el.style = `background-image: url(${urlBg})`;
        }
        if (attr){
            el.setAttribute(attr, attrValue);
        }
        if (attr2){
            el.setAttribute(attr2, attrValue2);
        }
        parrentEl.append(el); //выводим в DOM
    }
    
    newElement("head", "title", "", "", "Resume");
    newElement("body", "main");
    newElement("main", "section", "item", "about");
        newElement("#about", "h2", "", "", h2Arr[0]);
        newElement("#about", "img");
        newElement("#about", "div", "item-img hide", "", "", imgHoverArr[0]);
        newElement("#about", "span", "hide", "", spanHoverArr[0]);
    newElement("main", "section", "item", "projects");
        newElement("#projects", "h2", "", "", h2Arr[1]);
        newElement("#projects", "img");
        newElement("#projects", "div", "item-img hide", "", "", imgHoverArr[1]);
        newElement("#projects", "span", "hide", "", spanHoverArr[1]);
        newElement("#projects", "div", "main-slide hide");
            newElement(".main-slide", "div", "slider-btn hide");
                newElement(".slider-btn", "div", "slider-prev hide");
                newElement(".slider-btn", "div", "slider-next hide");
                newElement(".slider-btn", "div", "dust hide");
                newElement(".slider-btn", "div", "crack hide");
            newElement(".main-slide", "div", "slide active hide", "slide1");
                newElement("#slide1", "a", "href hide", "", "Check site", "", "href", "https://balagan-city.ru/#l-flag", "target", "_blank");
            newElement(".main-slide", "div", "slide not-active hide", "slide2");
                newElement("#slide2", "a", "href hide", "", "Check site", "", "href", "http://google.com", "target", "_blank");
            newElement(".main-slide", "div", "slide not-active hide", "slide3");
                newElement("#slide3", "a", "href hide", "", "Check site", "", "href", "https://google.com", "target", "_blank");
    newElement("main", "section", "item", "tools");
        newElement("#tools", "h2", "", "", h2Arr[2]);
        newElement("#tools", "img");
        newElement("#tools", "div", "item-img hide", "", "", imgHoverArr[2]);
        newElement("#tools", "span", "hide", "", spanHoverArr[2]);
    newElement("main", "section", "item", "contacts");
        newElement("#contacts", "h2", "", "", h2Arr[3]);
        newElement("#contacts", "img");
        newElement("#contacts", "div", "item-img hide", "", "", imgHoverArr[3]);
        newElement("#contacts", "span", "hide", "", spanHoverArr[3]);
    newElement("main", "section", "item", "future");
        newElement("#future", "h2", "", "", h2Arr[4]);
        newElement("#future", "img");
        newElement("#future", "div", "item-img hide", "", "", imgHoverArr[4]);
        newElement("#future", "span", "hide", "", spanHoverArr[4]);
    





















    function sizing(){
        let bodyWidth = document.body.clientWidth;
        let items = document.querySelectorAll(".item");

        let el = function(el){
            return document.querySelector(el);
        }

        el("#projects").style.left = bodyWidth / 5;
        el("#tools").style.left = bodyWidth / 5 * 2;
        el("#contacts").style.left = bodyWidth / 5 * 3;

        document.body.addEventListener('mouseenter', () => {    //ширина при наведении на body
            for (let i = 0; i < items.length; i++){
                items[i].style.width = bodyWidth / 6.25;
            }
        });

        //смещение влево при наведении отдельного item'а
        function hoveringItems(id, arg3 = bodyWidth / 6.25 * 3, arg2 = bodyWidth / 6.25 * 2, arg1 = bodyWidth / 6.25){
            id.addEventListener('mouseenter', () => {
                el("#projects").style.left = arg1;
                el("#tools").style.left = arg2;
                el("#contacts").style.left = arg3;
            });
        }
        hoveringItems(el("#about"), (bodyWidth / 2.77777778) + (bodyWidth / 6.25 * 2), (bodyWidth / 2.77777778) + (bodyWidth / 6.25), bodyWidth / 2.77777778);
        hoveringItems(el("#projects"), (bodyWidth / 2) + (bodyWidth / 8 * 2), (bodyWidth / 2) + (bodyWidth / 8), bodyWidth / 8);
        hoveringItems(el("#tools"), (bodyWidth / 2.77777778) + (bodyWidth / 6.25 * 2));
        hoveringItems(el("#contacts")); 
        hoveringItems(el("#future"));
     
        for(let i = 0; i < items.length; i++){                      //ширина при наведении и покидании отдельного item'а
            items[i].addEventListener('mouseenter', () => {
            
                items[i].style.width = bodyWidth / 2.77777778;

            });
            items[i].addEventListener('mouseleave', () => {
            
                items[i].style.width = bodyWidth / 6.25;

            });
        }

        document.body.addEventListener('mouseleave', () => {        //выравнивание ширины при покидании body
            for (let i = 0; i < items.length; i++){
                items[i].style.width = bodyWidth / 5;
            }
            el("#projects").style.left = bodyWidth / 5;
            el("#tools").style.left = bodyWidth / 5 * 2;
            el("#contacts").style.left = bodyWidth / 5 * 3;
        });

        el("#projects").addEventListener('mouseenter', () => {      //ширина projects
            for (let i = 0; i < items.length; i++){
                items[i].style.width = bodyWidth / 8;
            }
            el("#projects").style.width = bodyWidth / 2;
        });
        el("#projects").addEventListener('mouseleave', () => {
            for (let i = 0; i < items.length; i++){
                items[i].style.width = bodyWidth / 6.25;
            }
        });
    }
    sizing();
    window.addEventListener('resize', sizing);










    //ХОВЕРЫ
    function hoveringInside(className){

        let selectClass = document.querySelectorAll(className);
        let h2 = document.querySelectorAll(className + " h2");
        let img = document.querySelectorAll(className + " img");
        let divImg = document.querySelectorAll(".item-img");
        let span = document.querySelectorAll(className + " span");
        let slider = document.querySelectorAll(".main-slide *");
        let sliderMain = document.querySelector(".main-slide");
        let projects = document.querySelector("#projects");

        for(let i = 0; i < h2.length; i++){
            img[i].setAttribute("src", imgArr[i]);
            selectClass[i].addEventListener('mouseenter', e => {

                h2[i].innerText = h2HoverArr[i];
                img[i].classList.add("hide");
                divImg[i].classList.remove("hide");
                span[i].classList.remove("hide");

                

            });
            selectClass[i].addEventListener('mouseleave', e => {

                h2[i].innerText = h2Arr[i];
                img[i].classList.remove("hide");
                divImg[i].classList.add("hide");
                span[i].classList.add("hide");
                
            });
        }

        for(let i = 0; i < slider.length; i++){
            projects.addEventListener('mouseenter', e => {
                sliderMain.classList.remove("hide");
                slider[i].classList.remove("hide");
            });
            projects.addEventListener('mouseleave', e => {
                sliderMain.classList.add("hide");
                slider[i].classList.add("hide");
            });
        }        
    }
    hoveringInside(".item");
 




//СЛАЙДЕР
    
(function sliderMove(){

    let slide = document.querySelectorAll(".slide");

    //анимация окончания
    getEl(".slider-next").onclick = function() {
        if (slide[slide.length - 1].classList.contains("active")) {
            getEl(".slider-btn").animate({transform: ["translate(-42%) rotate(0deg)", "translate(-58%) rotate(0deg)", "translate(-42%) rotate(0deg)"]            
            }, 150);
        } else{
            getEl(".crack").animate({opacity: ["1", "0"]
            }, 400);
        }
      };
    getEl(".slider-prev").onclick = function() {
        if (!getEl("#slide2").classList.contains("active")) {
            getEl(".slider-btn").animate({transform: ["translate(-42%) rotate(180deg)", "translate(-58%) rotate(180deg)", "translate(-42%) rotate(180deg)"]
            }, 150);
        } else{
            getEl(".crack").animate({opacity: ["1", "0"]
            }, 400);
        }
      };
      



    let i = 0;

    function nextSlider(){
        
        return function(){
            
            if(i < slide.length - 1){
                slide[++i].classList.add("active");
            }
        }
    }
    let counterNext = nextSlider();
    let next = document.querySelector(".slider-next");
    if(next)next.addEventListener("click", counterNext);
    
    function prevSlider(){
        
        return function(){
            
            if(i > 0){
                slide[i--].classList.remove("active");
            }

        }
    }
    let counterPrev = prevSlider();
    let prev = document.querySelector(".slider-prev");
    if(prev)prev.addEventListener("click", counterPrev);
    
    






    //NEXT PREV
    function sliderBtn(){

        getEl(".slider-btn").style.left = event.clientX - cs("#about", "width").slice(0, -2) + "px";
        getEl(".slider-btn").style.top = event.clientY - 35 + "px";

        if(event.clientX < parseInt(cs("#projects", "left").slice(0, -2))){
            getEl(".slider-btn").style.left = parseInt(cs("#projects", "left").slice(0, -2)) + 36 + "px";
        }
        if(event.clientX > parseInt(cs("#tools", "left").slice(0, -2))){
            getEl(".slider-btn").style.left = parseInt(cs("#tools", "left").slice(0, -2)) - 140 + "px";
        }
        if(event.clientY < parseInt(cs("#projects", "height").slice(0, -2)) / 2){
            getEl(".slider-btn").classList.add("slider-btn-animate-next");
            getEl(".slider-btn").classList.remove("slider-btn-animate-prev");

            getEl(".dust").classList.toggle("animateDust1", true);
            getEl(".dust").classList.toggle("animateDust2", false);

            getEl(".slider-btn").style.transform = "translate3d(-50%, 0, 0) rotate(0deg)";
            getEl(".slider-prev").style.zIndex = "999";
            getEl(".slider-prev").style.opacity = "0";
            getEl(".slider-next").style.zIndex = "1000";
            getEl(".slider-next").style.opacity = "1";
        }
        if(event.clientY > parseInt(cs("#projects", "height").slice(0, -2)) / 2){
            getEl(".slider-btn").classList.add("slider-btn-animate-prev");
            getEl(".slider-btn").classList.remove("slider-btn-animate-next");

            getEl(".dust").classList.toggle("animateDust1", false);
            getEl(".dust").classList.toggle("animateDust2", true);

            getEl(".slider-btn").style.transform = "translate3d(-50%, 0, 0) rotate(180deg)";
            getEl(".slider-prev").style.zIndex = "1000";
            getEl(".slider-prev").style.opacity = "1";
            getEl(".slider-next").style.zIndex = "999";
            getEl(".slider-next").style.opacity = "0";
        }

        let btnChlds = document.querySelectorAll(".slider-btn *");
        
        if(event.clientY < 70 && event.clientX > parseInt(cs("#tools", "left").slice(0, -2)) - 70){
            getEl(".slider-btn").classList.remove("slider-btn-animate-prev");
            getEl(".slider-btn").style.display = "none";
            for(let i = 0; i < btnChlds.length; i++){
                btnChlds[i].style.display = "none";
            }
            
        } else{
            getEl(".slider-btn").style.display = "block";
            for(let i = 0; i < btnChlds.length; i++){
                btnChlds[i].style.display = "block";
            }
        }





    };

    getEl("#projects").addEventListener("mousemove", sliderBtn);
    
    }());




    
    
    //ПЕЧАТНЫЙ ТЕКСТ В ТУЛЗ
        document.querySelector("#tools").addEventListener('mouseenter', function() {
            let i = 0;
            function type(){
                let timer = setTimeout(type, 30);
                let select = document.querySelectorAll("#tools span")[0];
                i++;
                if(i <= spanHoverArr[2].length){
                    document.querySelector("#tools span").innerHTML = spanHoverArr[2].substr(0, i) + "|";

                }
                else{
                    
                    let off = clearTimeout(timer);
                    select.innerHTML = select.innerHTML.replace(/\|/g, function(match) {
                        return "<b>" + match + "</b>"
                      });
                    
                    if(!off){
                        function flick(){
                            document.querySelector("#tools span b").classList.add('hide');
                            
                            function flick2(){
                                document.querySelector("#tools span b").classList.remove('hide');
                            }
                            setTimeout(flick2, 500);
                            
                        }
                        let timer2 = setInterval(flick, 1000);
                        document.querySelector("#tools").addEventListener('mouseleave', e => {
                            clearTimeout(timer2);
                        });
                    }
                }
                
                document.querySelector("#tools").addEventListener('mouseleave', e => {
                    clearTimeout(timer);
                });
            }
            type();
        });



    





    //СТИЛИ
    function addStylesheetRules (rules) {
        var styleEl = document.createElement('style');
      
        styleEl.type = 'text/css';

        // Append <style> element to <head>
        document.head.appendChild(styleEl);
      
        // Grab style element's sheet
        var styleSheet = styleEl.sheet;
      
        for (var i = 0; i < rules.length; i++) {
          var j = 1, 
              rule = rules[i], 
              selector = rule[0], 
              propStr = '';
          // If the second argument of a rule is an array of arrays, correct our variables.
          if (Array.isArray(rule[1][0])) {
            rule = rule[1];
            j = 0;
          }
      
          for (var pl = rule.length; j < pl; j++) {
            var prop = rule[j];
            propStr += prop[0] + ': ' + prop[1] + (prop[2] ? ' !important' : '') + ';\n';
          }
      
          // Insert CSS Rule
          styleSheet.insertRule(selector + '{' + propStr + '}', styleSheet.cssRules.length);
        }
      }
      addStylesheetRules([
        ['*',
            ['font-family', 'monospace'],
            ['box-sizing', 'border-box'],
        ],
        ['body', 
            ['margin', '0px'],
            ['overflow', 'hidden'],
        ],
        ['.hide',
            ['opacity', '0', true],
            ['z-index', '-1', true],
        ],
        ['.item',
            ['width', '20vw'],
            ['height', '100vh'], 
            ['float', 'left'],
            ['top', '0px'],
            ['transition', '.3s linear, width .17s ease-in-out, left .17s ease-in-out, right .17s ease-in-out'],
            ['position', 'absolute'],
            // ['border', '1px solid black'],
        ],    
        ['.item h2',
            ['margin-top', '100px'],
            ['text-align', 'center'], 
            ['transition', '.3s linear'],
            ['word-wrap', 'break-word'],
        ], 
        ['.item span',
            ['width', '100%'],
            ['margin-top', '100px'],
            ['text-align', 'center'], 
            ['transition', '.3s linear'],
            ['word-wrap', 'break-word'],
            ['position', 'absolute'],
            ['bottom', '70px'],
            ['transform', 'translateY(-50%)'],
        ], 
        ['.item img',
            ['width', '100%'],
            ['position', 'absolute'],
            ['left', '50%'],
            ['top', '50%'],
            ['transform', 'translate(-50%, -50%)'],
            ['transition', '.3s linear'],
        ], 
        ['.item-img',
            ['width', '100%'],
            ['height', '100%'],
            ['max-width', '250px'],
            ['max-height', '250px'],
            ['border-radius', '200px'], 
            ['position', 'absolute'],
            ['left', '50%'],
            ['top', '50%'],
            ['transform', 'translate(-50%, -50%)'],
            ['transition', '.3s linear'],
            ['background-position', 'center'],
            ['background-size', 'cover'],
            ['background-repeat', 'no-repeat'],
        ], 

        //ABOUT
        ['#about',
            ['left', '0px'],
            ['z-index', '2'],
        ],
        ['#about:hover',
            ['background-color', '#98a6a6'],
        ],
        ['#about:hover .item-img',
            ['box-shadow', '0px 0px 20px 20px #486d6d'],
        ],

        //PROJECTS
        ['#projects',
            ['cursor', 'none'],
        ],
        ['.main-slide',
            ['width', '100%'],
            ['height', '100%'],
            ['position', 'absolute'],
            ['top', '0px'],
            ['perspective', '2400px'],
            ['perspective-origin', '150% 150%'],
        ],
        ['.slide',
            ['width', '100%'],
            ['height', '100%'],
            ['position', 'absolute'],
            ['background-size', 'cover'],
            ['background-repeat', 'no-repeat'],
            ['background-position', 'center'],
            ['transition', '.5s all'],
        ],
        ['.not-active',
            ['transform', 'translate3d(0px, 100vh, 0px)'],
        ],
        ['.active',
            ['transform', 'translate3d(0px, 0px, 0px)'],
        ],
        ['#slide1',
            ['perspective', '1px'],
            ['background-image', 'url(img/slider/balagan-map.jpg)'],
        ],
        ['#slide2',
            ['perspective', '2px'],
            ['background-image', 'url(https://xubuntu.org/wp-content/uploads/2018/04/8fbb/40103442821_db033c72a4_o-web.jpg)'],
        ],
        ['#slide3',
            ['perspective', '3px'],
            ['background-image', 'url(https://images.unsplash.com/photo-1511447333015-45b65e60f6d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjExMjU4fQ&w=1000&q=80)'],
        ],
        ['.href',
            ['width', '70px'],
            ['height', '70px'],
            ['position', 'absolute'],
            ['right', '0px'],
            ['top', '0px'],
            ['background-color', 'rgba(255, 255, 255, 0.75)'],
            ['cursor', 'pointer', true],
            ['border-radius', '150px'],
            ['text-align', 'center'],
            ['padding', '16px'],
        ],
        ['.slider-btn',
            ['width', '70px'],
            ['height', '70px'],
            ['position', 'absolute'],
            ['background-color', 'rgba(255, 255, 255, 0)'], 
            ['z-index', '999'], 
            ['cursor', 'none'],
            ['border-radius', '150px'], 
            ['transform', 'translate(-50%)'],
            ['background-size', 'contain'], 
            ['background-position', 'center center'], 
            ['background-repeat', 'no-repeat'], 
            ['background-image', 'url(img/slider/btn.svg)'],
            ['transition', 'transform .3s ease-in-out'],
        ],
        ['.slider-prev, .slider-next',
            ['width', '70px'],
            ['height', '70px'],
            ['position', 'absolute'],
            ['left', '0px'],
            ['top', '0px'],
            ['cursor', 'none'],
            ['border-radius', '150px'], 
            ['opacity', '0'],
            ['user-select', 'none'],
        ],
        ['.perspective',
            ['index', '2'],
        ],
        ['.dust',
            ['position', 'absolute'],
            ['top', '-150px'],
            ['left', '-140px'],
            ['width', '350px'],
            ['height', '350px'],
            ['background-image', 'url(img/slider/dust.png)'],
            ['background-repeat', 'no-repeat'],
            ['background-position', 'center'],
            ['background-size', 'cover'],
            ['opacity', '0'],
        ],
        ['.crack',
            ['position', 'absolute'],
            ['top', '-280px'],
            ['left', '-280px'],
            ['width', '650px'],
            ['height', '650px'],
            ['background-image', 'url(img/slider/crack.png)'],
            ['background-repeat', 'no-repeat'],
            ['background-position', 'center'],
            ['background-size', 'cover'],
            ['opacity', '0'],
        ],
        ['.slider-btn-animate-next',
            ['animation', '.5s linear 0s 1 alternate bumpIn'],
        ],
        ['.slider-btn-animate-prev',
            ['animation', '.5s linear 0s 1 alternate bumpOut'],
        ],
        ['.animateDust1',
            ['animation', '.4s linear 0.5s 1 alternate dust1'],
        ],
        ['.animateDust2',
            ['animation', '.4s linear 0.5s 1 alternate dust2'],
        ],
        //TOOLS
        ['#tools',
            ['z-index', '2'],
        ],
        ['#tools .item-img',
            ['max-width', 'initial'],
            ['max-height', 'initial'],
            ['z-index', '-1'],
            ['border-radius', '0px'], 
            ['background-color', 'rgba(0, 0, 0, .1)'], 
        ],
        ['#tools:hover h2',
            ['background-color', '#000'],
            ['color', '#fff'],
        ],
        ['#tools span',
            ['bottom', 'initial'],
            ['margin-top', '100px'],
            ['padding', '0px 15px'],
            ['text-align', 'start'],
        ],     
        ['#tools:hover span',
            ['background-color', 'rgba(0, 0, 0, .7)'],
            ['color', '#fff'],
            ['letter-spacing', '.15em'],
        ],      
        ['#tools span b',
            ['white-space', 'nowrap'],
        ],  

        //CONTACTS
        ['#contacts .item-img',
            ['max-width', 'initial'],
            ['max-height', 'initial'],
            ['z-index', '-1'],
            ['border-radius', '0px'], 
            ['background-color', 'rgba(0, 0, 0, .1)'], 
        ],
        ['#contacts span',
            ['color', '#fff'],
        ],

        //FUTURE
        ['#future',
            ['right', '0px'],
        ],  
        ['#future .item-img',
            ['max-width', 'initial'],
            ['max-height', 'initial'],
            ['z-index', '-1'],
            ['border-radius', '0px'], 
            ['background-color', 'rgba(0, 0, 0, .1)'], 
            ['background-position', 'center'],
            ['background-size', 'initial'],
            ['background-repeat', 'repeat'],
        ],
      ]);


      //CSS KEYFRAMES
      function keyFrame(){
        var style = document.createElement('style');
        style.type = 'text/css';
        var keyFrames = '\
        @keyframes bumpIn {\
            from {\
                transform: scaleY(-1) translate3d(-50%, 0, 0);\
            }\
            33% {\
                transform: scaleY(-1) translate3d(-50%, 0, 150px); box-shadow: rgb(0, 0, 0) 0px 0px 5px 10px;\
            }\
            to {\
                transform: scaleY(1) translate3d(-50%, 0, 0);\
            }\
        }\
        @keyframes bumpOut {\
            from {\
                transform: scaleY(1) translate3d(-50%, 0, 0);\
            }\
            33% {\
                transform: scaleY(-1) translate3d(-50%, 0, 150px); box-shadow: rgb(0, 0, 0) 0px 0px 5px 10px;\
            }\
            to {\
                transform: scaleY(-1) translate3d(-50%, 0, 0);\
            }\
        }\
        @keyframes dust1 {\
            from {\
                opacity: 1;\
            }\
            to {\
                opacity: 0;\
            }\
        }\
        @keyframes dust2 {\
            from {\
                opacity: 1;\
            }\
            to {\
                opacity: 0;\
            }\
        }';
        style.innerHTML = keyFrames;
        document.getElementsByTagName('head')[0].appendChild(style);
      }

      keyFrame();



}

