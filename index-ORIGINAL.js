!function e(t,o,i){function n(s,a){if(!o[s]){if(!t[s]){var l="function"==typeof require&&require;if(!a&&l)return l(s,!0);if(r)return r(s,!0);var c=new Error("Cannot find module '"+s+"'");throw c.code="MODULE_NOT_FOUND",c}var p=o[s]={exports:{}};t[s][0].call(p.exports,function(e){var o=t[s][1][e];return n(o?o:e)},p,p.exports,e,t,o,i)}return o[s].exports}for(var r="function"==typeof require&&require,s=0;s<i.length;s++)n(i[s]);return n}({1:[function(e,t,o){var i=(e("./libs/gquery/dist/gquery.min.js"),e("./util.js")),n=function(){"use strict";function e(){}var t,o={};return e.prototype.assign=function(){o.ad=$(".ad").selector,o.scene1=$("#scene-1").selector,o.scene2=$("#scene-2").selector,o.scene3=$("#scene-3").selector,o.scene4=$("#scene-4").selector,o.logo1=$("#logo1").selector,o.type11=$("#type1-1").selector,o.type12=$("#type1-2").selector,o.type13=$("#type1-3").selector,o.type132=$("#type1-32").selector,o.type14=$("#type1-4").selector,o.typeAll1=$("#typeAll1Cont").selector,o.type21=$("#type2-1").selector,o.type22=$("#type2-2").selector,o.type23=$("#type2-3").selector,o.type24=$("#type2-4").selector,o.typeAll2=$("#typeAll2Cont").selector,o.background2=$("#background2").selector,o.white=$("#white").selector,o.white2=$("#white2").selector,o.white3=$("#white3").selector,o.yellow=$("#yellow").selector,o.yellow2=$("#yellow2").selector,o.yellow3=$("#yellow3").selector,o.images=$("#images").selector,o.image1Cont=$("#image-1Cont").selector,o.image2Cont=$("#image-2Cont").selector,o.image3Cont=$("#image-3Cont").selector,o.image4Cont=$("#image-4Cont").selector,o.image1=$("#image-1").selector,o.image2=$("#image-2").selector,o.image3=$("#image-3").selector,o.image4=$("#image-4").selector,o.logo2=$("#logo2").selector,o.letsRethink=$("#letsRethink").selector,o.letsRethinkCont=$("#letsRethinkCont").selector,o.rethink=$("#rethink").selector,o.possibility=$("#possibility").selector,o.legal=$("#legal").selector,o.cutline=$("#cutline").selector,o.cta1=$("#cta1").selector,o.cta2=$("#cta2").selector,o.r1=$("#r1").selector,o.r2=$("#r2").selector,o.e1=$("#e1").selector,o.e2=$("#e2").selector,o.t1=$("#t1").selector,o.t2=$("#t2").selector,o.h1=$("#h1").selector,o.h2=$("#h2").selector,o.i1=$("#i1").selector,o.i2=$("#i2").selector,o.n1=$("#n1").selector,o.n2=$("#n2").selector,o.k1=$("#k1").selector,o.k2=$("#k2").selector,o.rethinkMotionCont=$("#rethinkMotionCont").selector,o.yellowBoxCont=$("#yellowBoxCont").selector,this.construct()},e.prototype.construct=function(){t=new TimelineLite({onComplete:this.onFinish,onCompleteScope:this});var e=new TimelineLite;e.to(o.type11,.3,{autoAlpha:1,y:-12,ease:"power1.out"},.1).to(o.type12,.3,{autoAlpha:1,y:-12,ease:"power1.out"},.3).to(o.type13,.3,{autoAlpha:1,y:-12,ease:"power1.out"},1.3).to(o.background2,.7,{autoAlpha:1},2.5).to(o.yellow,.7,{autoAlpha:1},2.5).to(o.yellow2,.7,{autoAlpha:1},2.5).to(o.yellow3,.7,{autoAlpha:1},2.5).to(o.typeAll1,.7,{autoAlpha:1},2.5).to(o.white,.7,{y:70,ease:"power1.out"},3).to(o.white2,.7,{rotation:3,x:5,ease:"power1.out"},3).to(o.white3,.7,{rotation:35,x:90,y:-70,ease:"power1.out"},3).to(o.yellow,.7,{y:70,ease:"power1.out"},3).to(o.yellow2,.7,{rotation:3,x:5,ease:"power1.out"},3).to(o.yellow3,.7,{rotation:35,x:90,y:-70,ease:"power1.out"},3).to(o.type21,.3,{autoAlpha:1,y:-12,ease:"power1.out"},3).to(o.type22,.3,{autoAlpha:1,y:-12,ease:"power1.out"},3.2).to(o.type23,.3,{autoAlpha:1,y:-12,ease:"power1.out"},3.4).to(o.logo2,.2,{autoAlpha:1},2.5).to(o.white,1,{rotation:-3,y:0,ease:"power1.out"},6.3).to(o.white2,1,{rotation:0,x:-5,ease:"power1.out"},7.3).to(o.white3,1,{rotation:10,x:20,y:-20,ease:"power1.out"},6.3).to(o.yellow,1,{rotation:-3,y:0,ease:"power1.out"},6.3).to(o.yellow2,1,{rotation:0,x:-5,ease:"power1.out"},7.3).to(o.yellow3,1,{rotation:10,x:20,y:-20,ease:"power1.out"},6.3).to(o.white,.7,{autoAlpha:0},7).to(o.white2,.7,{autoAlpha:0},7).to(o.white3,.7,{autoAlpha:0},7).to(o.image3Cont,.3,{css:{clip:"rect(0px, 635px, 250px, 0px)"},ease:"power4.out"},7).to(o.image3,3.9,{y:45,ease:"power1.out"},7).to(o.image4Cont,.3,{css:{clip:"rect(0px, 335px, 250px, 0px)"},ease:"power4.out"},7.4).to(o.image4,3.3,{x:34,ease:"power1.out"},7.4).to(o.image2Cont,.3,{css:{clip:"rect(0px, 280px, 250px, 0px)"}},7.4).to(o.image2,3.3,{x:-30,ease:"power2.out"},7.4).to(o.image1Cont,.3,{css:{clip:"rect(0px, 280px, 115px, 0px)"}},7.8).to(o.image1,3.3,{y:-30,ease:"power2.out"},7.8).to(o.typeAll2,0,{autoAlpha:0},7.7).to(o.yellow,0,{autoAlpha:1},9).to(o.yellow2,0,{autoAlpha:1},9).to(o.yellow,.6,{y:40,ease:"power1.out"},9).to(o.yellow2,.8,{rotation:4,x:25,ease:"power1.out"},9).to(o.image1Cont,.2,{css:{clip:"rect(115px, 280px, 115px, 0px)"}},9).to(o.image2Cont,.2,{css:{clip:"rect(0px, 280px, 250px, 280px)"}},9.3).to(o.image4Cont,.2,{css:{clip:"rect(0px, 0px, 250px, 0px)"},ease:"power4.out"},9.6).to(o.image3Cont,.2,{css:{clip:"rect(0px, 635px, 0px, 0px)"},ease:"power4.out"},9.9).to(o.letsRethink,.5,{autoAlpha:1,y:-12,ease:"power1.out"},10.2).set(o.rethinkMotionCont,{scale:1.5},10).to(o.rethinkMotionCont,.5,{autoAlpha:1,y:-12,ease:"power1.out"},10.4).to(o.possibility,.5,{autoAlpha:1,y:-12,ease:"power1.out"},10.8).to(o.cutline,.5,{autoAlpha:1},10).to(o.cta1,.5,{autoAlpha:1},10).to(o.legal,.2,{autoAlpha:1},13.8).to(o.k1,.1,{scaleX:.5},11.3).to(o.k1,.1,{scaleX:-1,x:-15},11.4).to(o.k1,.1,{autoAlpha:0},11.5).to(o.k2,.1,{autoAlpha:1},11.5).to(o.k2,.5,{x:15},11.5).to(o.n1,.1,{scaleX:.5},11.35).to(o.n1,.1,{scaleX:-1,x:-15},11.45).to(o.n1,.1,{autoAlpha:0},11.55).to(o.n2,.1,{autoAlpha:1},11.55).to(o.n2,.5,{x:15},11.5).to(o.i1,.2,{scaleX:.5},11.4).to(o.i1,.2,{scaleX:-1,x:-15},11.5).to(o.i1,.1,{autoAlpha:0},11.6).to(o.i2,.1,{autoAlpha:1},11.6).to(o.i2,.5,{x:15},11.5).to(o.h1,.2,{scaleX:.5},11.45).to(o.h1,.2,{scaleX:-1,x:-13},11.55).to(o.h1,.1,{autoAlpha:0},11.65).to(o.h2,.1,{autoAlpha:1},11.65).to(o.h2,.5,{x:13},11.55).to(o.t1,.2,{scaleX:.5},11.5).to(o.t1,.2,{scaleX:-1,x:-10},11.6).to(o.t1,.1,{autoAlpha:0},11.7).to(o.t2,.1,{autoAlpha:1},11.7).to(o.t2,.5,{x:10},11.55).to(o.e1,.2,{scaleX:.5},11.53).to(o.e1,.2,{scaleX:-1,x:-7},11.63).to(o.e1,.1,{autoAlpha:0},11.73).to(o.e2,.1,{autoAlpha:1},11.73).to(o.e2,.5,{x:5},11.55).to(o.r1,.2,{scaleX:.5},11.55).to(o.r1,.2,{scaleX:-1,x:0},11.6).to(o.r1,.1,{autoAlpha:0},11.65).to(o.r2,.1,{autoAlpha:1},11.65).to(o.r2,.2,{scaleX:-1},12.5).to(o.r2,.2,{scaleX:.5},12.7).to(o.e2,.2,{scaleX:-1,x:1},12.55).to(o.e2,.2,{scaleX:.5},12.75).to(o.t2,.2,{scaleX:-1},12.6).to(o.t2,.2,{scaleX:.5,x:2},12.8).to(o.h2,.2,{scaleX:-1},12.65).to(o.h2,.2,{scaleX:.5,x:2},12.85).to(o.h2,.2,{x:0},12.6).to(o.i2,.2,{x:0},12.6).to(o.n2,.2,{x:0},12.6).to(o.k2,.2,{x:0},12.6).to(o.r1,.1,{autoAlpha:1,scaleX:1},12.6).to(o.r2,.1,{autoAlpha:0},12.6).to(o.e1,.1,{autoAlpha:1,scaleX:1,x:0},12.65).to(o.e2,.1,{autoAlpha:0},12.65).to(o.t1,.1,{autoAlpha:1,scaleX:1,x:0},12.7).to(o.t2,.1,{autoAlpha:0},12.7).to(o.h1,.1,{autoAlpha:1,scaleX:1,x:0},12.75).to(o.h2,.1,{autoAlpha:0},12.75).to(o.i1,.1,{autoAlpha:1,scaleX:1,x:0},12.8).to(o.i2,.1,{autoAlpha:0},12.8).to(o.n1,.1,{autoAlpha:1,scaleX:1,x:0},12.85).to(o.n2,.1,{autoAlpha:0},12.85).to(o.k1,.1,{autoAlpha:1,scaleX:1,x:0},12.9).to(o.k2,.1,{autoAlpha:0},12.9),t.add(e),t.pause()},e.prototype.onFinish=function(e){i.environment.isMobile()||($("#clicktag").on("mouseover",function(){TweenLite.to(o.cta2,.1,{autoAlpha:1,ease:Power2.easeOut})}),$("#clicktag").on("mouseleave",function(){TweenLite.to(o.cta2,.1,{autoAlpha:0,ease:Power2.easeOut})}))},e.prototype.begin=function(){i.removeClass(o.ad,"loading"),t.play()},e}();window.onload=function(){var e=new n;e.assign(),e.begin()}},{"./libs/gquery/dist/gquery.min.js":2,"./util.js":3}],2:[function(e,t,o){!function(){var e=function(t){return new e.fn.init(t)};e.each=function(e,t){for(var o=0;o<e.length;o++)t(o,e[o])},e.fn=e.prototype={init:function(e){var t=document.querySelectorAll(e)||[],o={Version:2,Author:"gregcarrart",Created:"9.19.2015",Updated:"1.20.2016"};return e?(t.length>1?this.selector=t:this.selector=t[0],this.length=t.length,window===this?new $(e):this):o},css:function(e,t){var o={"background-image":"backgroundImage","background-position":"backgroundPosition","background-color":"backgroundColor","background-size":"backgroundSize","background-repeat":"backgroundRepeat","background-attachment":"backgroundAttachment","background-origin":"backgroundOrigin"};if(this.selector.length>1)for(var i=0;i<this.selector.length;i++)if("object"==typeof e&&"undefined"==typeof t){for(var n in e)if(e.hasOwnProperty(n)){var r=e[n];o.hasOwnProperty(n)?this.selector[i].style[o[n]]=r:this.selector[i].style[n]=r}}else{if("string"!=typeof e||"string"!=typeof t){if("string"==typeof e&&"undefined"==typeof t){var t=window.getComputedStyle(this.selector[i]);return t.getPropertyValue(e)}return window.getComputedStyle(this.selector[i])}o.hasOwnProperty(e)?this.selector[i].style[o[e]]=t:this.selector[i].style[e]=t}else if("object"==typeof e&&"undefined"==typeof t){for(var n in e)if(e.hasOwnProperty(n)){var r=e[n];o.hasOwnProperty(n)?this.selector.style[o[n]]=r:this.selector.style[n]=r}}else{if("string"!=typeof e||"string"!=typeof t){if("string"==typeof e&&"undefined"==typeof t){var t=window.getComputedStyle(this.selector);return t.getPropertyValue(e)}return window.getComputedStyle(this.selector)}o.hasOwnProperty(e)?this.selector.style[o[e]]=t:this.selector.style[e]=t}},map:function(e){for(var t=[],o=0;o<this.length;o++)t.push(e.call(this,this[o],o));return t},mapOne:function(e){var t=this.map(e);return t.length>1?t:t[0]},forEach:function(e){return this.map(e),this},on:function(e,t){if(this.selector.length>1)for(var o=0;o<this.selector.length;o++)this.selector[o].addEventListener(e,t,!1);else this.selector.addEventListener(e,t,!1)},off:function(e,t){if(this.selector.length>1)for(var o=0;o<this.selector.length;o++)this.selector[o].removeEventListener(e,t,!1);else this.selector.removeEventListener(e,t,!1)},text:function(e){return"undefined"!=typeof e?this.forEach(function(){this.selector.innerText=e}):this.mapOne(function(){return this.selector.innerText})},html:function(e){return"undefined"!=typeof e?(this.forEach(function(){this.selector.innerHTML=e}),this):this.mapOne(function(){return this.selector.innerHTML})},append:function(e){"undefined"!=typeof e&&("string"==typeof e?this.selector.insertAdjacentHTML("beforeend",e):1===e.nodeType&&this.selector.appendChild(e))},prepend:function(e){"undefined"!=typeof e&&("string"==typeof e?this.selector.insertAdjacentHTML("afterbegin",e):1===e.nodeType&&this.selector.insertBefore(e,this.selector.childNodes[0]))},addClass:function(e){var t="";if(this.selector,"string"!=typeof e)for(var o=0;o<e.length;o++)t+=" "+e[o];else t=" "+e;return this.forEach(function(){this.selector.className+=t})},removeClass:function(e){return this.forEach(function(){for(var t,o=this.selector.className.split(" ");(t=o.indexOf(e))>-1;)o=o.slice(0,t).concat(o.slice(++t));this.selector.className=o.join(" ")})},attr:function(e,t){return"undefined"!=typeof t?this.forEach(function(){this.selector.setAttribute(e,t)}):this.mapOne(function(){return this.selector.getAttribute(e)})},hide:function(){if(this.selector.length>1)for(var e=0;e<this.selector.length;e++)this.selector[e].style.display="none";else this.selector.style.display="none"},show:function(){if(this.selector.length>1)for(var e=0;e<this.selector.length;e++)this.selector[e].style.display="block";else this.selector.style.display="block"}},e.fn.init.prototype=e.fn,window.gQuery=window.$=e}()},{}],3:[function(e,t,o){function i(e){for(var t=0;t<e.length;t++){var o=e[t].string,i=e[t].property;if(l=e[t].versionSearch||e[t].identity,o&&o.indexOf(e[t].subString)!==-1||i)return e[t].identity}return""}function n(e){var t=e.indexOf(l);if(t!==-1)return parseFloat(e.substring(t+l.length+1))}function r(e,t){for(var o=0;o<h.os.length;o++)if(t.indexOf(h.os[o].subString)!==-1&&h.os[o].version)return h.os[o].version(e);return""}function s(e){var t=e.match(/(?:OS|Mac[^;]+) ([0-9_.]+)/);return t?parseFloat(t[1].split("_").slice(0,2).join(".")):""}var a=a||{},l="",c=navigator.userAgent,p=navigator.vendor,u=navigator.platform,h={prefixes:"Webkit Moz O ms".split(" "),engines:{applewebkit:"webkit",safari:"webkit",chrome:"webkit",msie:"trident",firefox:"gecko",opera:"webkit",opera_legacy:"presto",adobeair:"webkit"},browser:[{string:c,subString:"MSIE",identity:"MSIE",versionSearch:"MSIE"},{string:c,subString:"Trident",identity:"Trident",versionSearch:"Trident"},{string:c,subString:"OPR/",identity:"Opera",versionSearch:"OPR"},{string:c,subString:"Chrome",identity:"Chrome"},{string:c,subString:"Opera",identity:"opera_legacy",versionSearch:"Version"},{string:c,subString:"AdobeAIR",identity:"AdobeAIR"},{string:p,subString:"Apple",identity:"Safari",versionSearch:"Version"},{string:c,subString:"Firefox",identity:"Firefox"},{string:c,subString:"AppleWebKit",identity:"AppleWebKit"},{string:c,subString:"AppleWebkit",identity:"AppleWebkit"}],os:[{string:u,subString:"Win",identity:"Windows",version:function(e){var t=e.match(/Windows NT ([0-9.]+)/i);return t?parseFloat(t[1]):""}},{string:u,subString:"Mac",identity:"Mac",version:s},{string:u,subString:"Android",identity:"Android",version:function(e){var t=e.match(/Android ([0-9.]+)/i);return t?t[1]:""}},{string:c,subString:"iPod",identity:"iPod",version:s},{string:c,subString:"iPhone",identity:"iPhone",version:s},{string:c,subString:"iPad",identity:"iPad",version:s},{string:u,subString:"Linux",identity:"Linux"}],transitionEndEventNames:{webkit:"webkitTransitionEnd",gecko:"transitionend",presto:"oTransitionEnd",trident:"transitionend"},animationEndEventNames:{webkit:"webkitAnimationEnd",gecko:"animationend",presto:"oAnimationEnd",trident:"animationend"}},d=i(h.browser).toLowerCase(),g=n(c);os=i(h.os),osVersion=r(c,os),a.removeClass=function(e,t){e.classList?e.classList.remove(t):e.className=e.className.replace(new RegExp("(^|\\b)"+t.split(" ").join("|")+"(\\b|$)","gi")," ")},a.addClass=function(e,t){e.classList?e.classList.add(t):e.className+=" "+t},a.environment={os:function(){return os},osVersion:function(){return osVersion},browser:function(){return d},browserVersion:function(){return g},isMobile:function(){var e=!1;return(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|ipad|iris|kindle|Android|Silk|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(navigator.userAgent)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(navigator.userAgent.substr(0,4)))&&(e=!0),e}},t.exports=a},{}]},{},[1]);