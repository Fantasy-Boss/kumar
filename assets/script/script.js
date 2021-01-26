$(document).ready(function(){$(".float").fadeOut(200),$(".all").fadeIn(400),animation(),$(".intro ul li a").hover(function(){$(this).children("svg").css("background-color","white"),$(this).children("svg").find("path, polygon, circle").attr("fill","#0bd2b4")},function(){$(this).children("svg").css("background-color","transparent"),$(this).children("svg").find("path, polygon, circle").attr("fill","white")}),$("#work").css({"background-color":"rgb(39, 243, 223)","z-index":"5"}),$(".content ul li, .content-box ul li, .skill ul li").append("<span></span>"),$(".content ul li, .content-box ul li, .skill ul li").click(function(t){var e=$(window).scrollTop()-$(this).offset().top+t.clientY,i=$(window).scrollLeft()-$(this).offset().left+t.clientX;$(this).children("span").css({left:i,top:e}),$(this).children("span").addClass("active"),setTimeout(async function(){$(".content ul li span, .content-box ul li , .skill ul li").removeClass("active")},900)}),$(".content ul li").click(function(t){$(".content ul li").css({"background-color":"initial",transform:"scale(1)","z-index":"5"}),$(this).css({"background-color":"rgb(39, 243, 223)","z-index":"6"})}),$(".content-box ul li a").click(function(t){t.stopPropagation()}),$(".content-box ul li").click(function(){try{$(this).children("a")[0].click()}catch{}});function t(){!0,$(".content-box").children("div").slideUp(400),$(".viewer").slideUp(400),$(".skill ul li").css({"background-color":"initial",transform:"scale(1)","z-index":"5"})}$(".menu .content ul li").click(function(e){let i=$(this).attr("id");"work"==i?"none"==$(".content-box .work").css("display")&&(t(),$(".content-box .work").slideDown(400)):"skill"==i?"none"==$(".content-box .skill").css("display")&&(t(),$(".content-box .skill").slideDown(400)):"contact"==i?"none"==$(".content-box .contact").css("display")&&(t(),$(".content-box .contact").slideDown(400)):"about"==i&&"none"==$(".content-box .about").css("display")&&(t(),$(".content-box .about").slideDown(400))});let e=[{name:"My Blog API",img:"assets/images/websites/my-blog.png",link:"https://my-blog-api-0.herokuapp.com/"},{name:"Weather",img:"assets/images/websites/weather.png",link:"https://kumar85.github.io/weather/"},{name:"User Genaretor",img:"assets/images/websites/user-genaretor.png",link:"https://kumar85.github.io/user-genaretor/"},{name:"Guess The Number",img:"assets/images/websites/gtn.png",link:"https://kumar85.github.io/guess-the-number/"},{name:"Blackjack",img:"assets/images/websites/blackjack.png",link:"https://kumar85.github.io/blackjack/"},{name:"Beat It",img:"assets/images/websites/beat.png",link:"https://kumar85.github.io/beat-it/"},{name:"Tic Tac Toe",img:"assets/images/websites/tic-tac-toe.png",link:"https://kumar85.github.io/tic-tac-toe/"},{name:"Night & Day",img:"assets/images/websites/n-d.png",link:"https://kumar85.github.io/n-d/"}];for(let t of e){let e=`<li><a href="${t.link}" target="_blank" rel="noopener noreferrer">\n            <img src="${t.img}" alt="${t.name}"><br>${t.name}</a></li>`;$(".work ul").append(e)}let i=[{name:"Python",img:"assets/images/skills/python.png",id:"python"},{name:"JavaScript",img:"assets/images/skills/js.png",id:"js"},{name:"Node.js",img:"assets/images/skills/node.png",id:"node"},{name:"jQuery",img:"assets/images/skills/jq.png",id:"jq"},{name:"API",img:"assets/images/skills/api.png",id:"api"},{name:"HTML",img:"assets/images/skills/html.png",id:"html"},{name:"CSS",img:"assets/images/skills/css.png",id:"css"},{name:"Django",img:"assets/images/skills/dj.png",id:"dj"},{name:"SQL",img:"assets/images/skills/sql.png",id:"sql"},{name:"Git",img:"assets/images/skills/git.png",id:"git"}];for(let t of i){let e=`<li id="${t.id}"><img src="${t.img}" alt="${t.name}"><br>${t.name}</li>`;$(".skill ul").append(e)}$(".content-box .skill ul li").click(function(){$(".skill ul li").css({"background-color":"initial",transform:"scale(1)","z-index":"5"}),$(this).css({"background-color":"rgb(47, 191, 248)","z-index":"6"})});var s=!0;$("#about").click(function(){1==s&&(type(),s=!1)});let n=new Date;n=n.getFullYear(),$(".copyright p span").text(n),window.onscroll=function(){scrollFunction()},$(".top").click(function(){return $("body,html").animate({scrollTop:0},800),!1}),$("img, svg").attr("draggable","false")}),scrollFunction=(()=>{document.body.scrollTop>100||document.documentElement.scrollTop>100?$(".top").fadeIn(300):$(".top").fadeOut(300),(document.body.scrollTop>150||document.documentElement.scrollTop>150)&&($(".context").fadeIn(400),$(".extra").fadeOut(400))});const text="or if you want a web app for your company or personal use";var charIndex=0;function sleep(t){return new Promise(e=>setTimeout(e,t))}type=(()=>{charIndex<=text.length?($(".write .text").append(text[charIndex]),charIndex++,setTimeout(type,200)):$(".cursor").removeClass("typing")}),animation=(async()=>{$(".icon-img").show(),await sleep(1e3),$(".hello").show(),await sleep(100),$(".intro h1").show(),await sleep(1e3),$(".intro h4").slideDown(700),$(".social").show(900)});