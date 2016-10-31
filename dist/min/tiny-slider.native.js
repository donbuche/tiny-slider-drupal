var tns=function(){"use strict";function t(t){function f(){return"gallery"===wt||Qt||"page"===t.slideBy?Mt:t.slideBy}function h(){if(o(At,{"data-tns-role":"wrapper"}),o(Ct,{"data-tns-role":"content-wrapper"}),"vertical"===Lt?o(Ct,{"data-tns-hidden":"y"}):o(At,{"data-tns-hidden":"x"}),"carousel"===wt){var t=St&&Nt?W():Nt?Nt+Pt:0;Ct.style.cssText="horizontal"===Lt?"margin: 0 "+t+"px;":"padding: "+t+"px 0 "+Nt+"px; height: "+q()+"px;"}}function p(){Et=Dn(),Mt=Tn();var t=St&&Et%nn!==0?1:zt;bt=rn-Mt-t,"horizontal"!==Lt||St||(nn=An()),gt=Cn(),Zt=f()}function L(){""===Tt.id?Tt.id=tn=n():tn=Tt.id;var t="";if(Lt&&(t+=Lt+" "),Kt&&(t+="autoheight"),o(Tt,{"data-tns-role":"content","data-tns-mode":wt,"data-tns-features":t}),"carousel"===wt)if("horizontal"===Lt){var e="width: "+(nn+1)*rn+"px; ",a=-cn*nn,i=v?v+": translate3d("+a+"px, 0px, 0px)":"left: "+a+"px";Tt.style.cssText+=e+i}else{var r=-hn[cn];Tt.style.cssText+=v?v+": translate3d(0px, "+r+"px, 0px)":"top: "+r+"px"}}function M(){navigator.msMaxTouchPoints&&(At.classList.add("ms-touch"),At.addEventListener("scroll",dt,!1))}function T(){for(var t=0;t<kt;t++){var n=Dt[t];n.id=tn+"-item"+t,"gallery"===wt&&Vt.normal&&n.classList.add(Vt.normal),o(n,{"aria-hidden":"true"});var e="horizontal"===Lt?"right":"bottom",a="margin-"+e+": "+Pt+"px;";"horizontal"===Lt&&(a+=" width: "+(nn-Pt)+"px"),n.style.cssText+=a}if(Yt||Nt){for(var i=document.createDocumentFragment(),r=document.createDocumentFragment(),s=an;s--;){var d=s%kt,c=Dt[d].cloneNode(!0);if(l(c,"id"),r.insertBefore(c,r.firstChild),"carousel"===wt){var u=Dt[kt-1-d].cloneNode(!0);l(u,"id"),i.appendChild(u)}}Tt.insertBefore(i,Tt.firstChild),Tt.appendChild(r),Dt=Tt.children}}function A(){It&&(t.controlsContainer||(gn.append(At,'<div data-tns-role="controls" aria-label="Carousel Navigation"><button data-controls="prev" tabindex="-1" aria-controls="'+tn+'" type="button">'+Ot[0]+'</button><button data-controls="next" tabindex="0" aria-controls="'+tn+'" type="button">'+Ot[1]+"</button></div>"),Wt=At.querySelector('[data-tns-role="controls"]')),pt=Wt.querySelector('[data-controls="prev"]'),mt=Wt.querySelector('[data-controls="next"]'),i(Wt,"tabindex")||(o(Wt,{"aria-label":"Carousel Navigation"}),o(Wt.children,{"aria-controls":tn,tabindex:"-1"})))}function C(){if(Bt){if(!t.navContainer){for(var n="",e=0;e<kt;e++)n+='<button data-slide="'+e+'" tabindex="-1" aria-selected="false" aria-controls="'+tn+"-item"+e+'" type="button"></button>';Rt&&(n+='<button data-action="stop" type="button"><span hidden>Stop Animation</span>'+Ut[0]+"</button>"),n='<div data-tns-role="nav" aria-label="Carousel Pagination">'+n+"</div>",gn.append(At,n),Ht=At.querySelector('[data-tns-role="nav"]')}if(yt=Ht.querySelectorAll("[data-slide]"),!i(Ht,"aria-label")){o(Ht,{"aria-label":"Carousel Pagination"});for(var a=0;a<kt;a++)o(yt[a],{tabindex:"-1","aria-selected":"false","aria-controls":tn+"-item"+a})}for(var r=gt;r<kt;r++)o(yt[r],{hidden:""});on=gt}}function D(){Rt&&(Ht||(gn.append(At,'<div data-tns-role="nav" aria-label="Carousel Pagination"><button data-action="stop" type="button"><span hidden>Stop Animation</span>'+Ut[0]+"</button></div>"),Ht=At.querySelector('[data-tns-role="nav"]')),mn=Ht.querySelector("[data-action]"),nt())}function k(){for(var t=cn;t<cn+Mt;t++)o(Dt[t],{"aria-hidden":"false"}),"gallery"===wt&&(Dt[t].style.marginLeft=nn*(t-cn)+"px",Dt[t].classList.remove(Vt.normal),Dt[t].classList.add(Vt.in));It&&(o(mt,{tabindex:"0"}),(cn===fn&&!Yt||Xt)&&(pt.disabled=!0)),Bt&&o(yt[0],{tabindex:"0","aria-selected":"true"})}function P(){if("carousel"===wt&&(g&&Tt.addEventListener(g,J,!1),_t&&(Tt.addEventListener("touchstart",ct,!1),Tt.addEventListener("touchmove",ut,!1),Tt.addEventListener("touchend",ft,!1),Tt.addEventListener("touchcancel",ft,!1))),Bt)for(var t=0;t<kt;t++)yt[t].addEventListener("click",tt,!1),yt[t].addEventListener("keydown",st,!1);if(It&&(pt.addEventListener("click",$,!1),mt.addEventListener("click",_,!1),pt.addEventListener("keydown",lt,!1),mt.addEventListener("keydown",lt,!1)),Rt&&(mn.addEventListener("click",at,!1),It&&(pt.addEventListener("click",it,!1),mt.addEventListener("click",it,!1)),Bt))for(var n=0;n<kt;n++)yt[n].addEventListener("click",it,!1);qt&&document.addEventListener("keydown",rt,!1),window.addEventListener("resize",vt,!1),window.addEventListener("scroll",ht,!1)}function N(){if($t&&gn.isInViewport(Tt)){for(var t=[],n=cn-1;n<cn+Mt+1;n++){for(var e=Dt[n].querySelectorAll('[data-tns-role="lazy-img"]'),a=e.length;a--;t.unshift(e[a]));t.unshift()}for(var i=t.length;i--;){var o=t[i];o.classList.contains("loaded")||(o.src=r(o,"data-src"),o.classList.add("loaded"))}}}function z(){if(Kt){for(var t=[],n=cn;n<cn+Mt;n++)for(var e=Dt[n].querySelectorAll("img"),a=e.length;a--;)t.push(e[a]);0===t.length?B():S(t)}}function S(t){for(var n=t.length;n--;)u(t[n])&&t.splice(n,1);0===t.length?B():setTimeout(function(){S(t)},16)}function I(){gn.wrap(Tt,Ct),gn.wrap(Ct,At),p(),T(),"vertical"===Lt&&H(),h(),L(),M(),A(),C(),D(),k(),P(),O(),N(),z()}function O(){kt<=Mt?(Bt=It=Rt=Yt=Xt=!1,cn=an,Ht&&d(Ht),Wt&&d(Wt),mn&&d(mn)):(Bt=t.nav,It=t.controls,Rt=t.autoplay,Yt=!t.rewind&&t.loop,Xt=t.rewind,Bt&&c(Ht),It&&c(Wt),Rt&&c(mn))}function W(){return(Et%St+Pt)/2}function B(){for(var t,n=[],e=cn;e<cn+Mt;e++)n.push(Dt[e].offsetHeight);t=Math.max.apply(null,n),Tt.style.height!==t&&(m&&X(1),Tt.style.height=t+"px")}function H(){hn=[0];for(var t,n=Dt[0].getBoundingClientRect().top,e=1;e<rn;e++)t=Dt[e].getBoundingClientRect().top,hn.push(t-n)}function q(){return hn[cn+Mt]-hn[cn]}function G(){At.style.msScrollSnapPointsX="snapInterval(0%, "+nn+")"}function R(){var t,n,e,a;cn!==un&&(cn>un?(t=un,n=Math.min(un+Mt,cn),e=Math.max(un+Mt,cn),a=cn+Mt):(t=Math.max(cn+Mt,un),n=un+Mt,e=cn,a=Math.min(cn+Mt,un))),Zt%1!==0&&(t=Math.round(t),n=Math.round(n),e=Math.round(e),a=Math.round(a));for(var i=t;i<n;i++)o(Dt[i],{"aria-hidden":"true"});for(var r=e;r<a;r++)o(Dt[r],{"aria-hidden":"false"})}function j(){if(gt!==on)if(gt>on)for(var t=on;t<gt;t++)l(yt[t],"hidden");else for(var n=gt;n<on;n++)o(yt[n],{hidden:""});on=gt}function F(){if(Bt){if(ln===-1){for(var n=cn;n<an;)n+=kt;n=(n-an)%kt,t.navContainer?sn=n:(sn=Math.floor(n/Mt),Yt||kt%Mt===0||cn!==bt||(sn+=1))}else sn=ln,ln=-1;sn!==dn&&(o(yt[dn],{tabindex:"-1","aria-selected":"false"}),o(yt[sn],{tabindex:"0","aria-selected":"true"}),dn=sn)}}function U(){if(It&&!Yt)if(cn===fn||!Xt&&cn===bt){var t=cn===fn?pt:mt,n=cn===fn?mt:pt;ot(t,n),t.disabled=!0,o(t,{tabindex:"-1"}),n.disabled=!1,o(n,{tabindex:"0"})}else pt.disabled=!1,mt.disabled=!1}function X(t,n){var e=Gt*t/1e3+"s";n=n||Tt,n.style[m]=e,"gallery"===wt&&(n.style[b]=e),"vertical"===Lt&&(Ct.style[m]=e)}function V(t,n){m&&X(t),Pn(n)}function Y(){var t=Zt+zt,n=rn-Mt-Zt-1;if(cn<t||cn>n){Q();var e=cn-kt,a=cn+kt;cn=e>=t&&e<=n?e:a,V(0)}}function K(t){o(Tt,{"aria-busy":"true"}),V(t),g||J()}function J(t){if("gallery"===wt&&en.length>0)for(var n=0;n<Mt;n++){var e=en[n];m&&X(0,e),Vt.delay&&y&&(e.style[y]=""),e.classList.remove(Vt.out),e.classList.add(Vt.normal),e.style.marginLeft=""}(!g||t&&"height"!==t.propertyName)&&(Yt&&"carousel"===wt&&Y(),R(),F(),U(),N(),z(),l(Tt,"aria-busy"),Q())}function Q(){un=cn}function Z(t){if("true"!==r(Tt,"aria-busy")){var n=cn,e=cn+t*Zt,a=Math.abs(t*Zt);cn=Yt?e:Math.max(fn,Math.min(e,bt)),cn!==n&&K(a)}}function $(){Z(-1)}function _(){Z(Xt&&cn===bt?-(bt-fn)/Zt:1)}function tt(n){if("true"!==r(Tt,"aria-busy")){for(var e,a,i=n.target||n.srcElement;gn.indexOf(yt,i)===-1;)i=i.parentNode;e=ln=Number(r(i,"data-slide")),cn=t.navContainer?e+an:e*Mt+an,cn=Yt?cn:Math.min(cn,bt),a=Math.abs(cn-un),K(a)}}function nt(){pn=setInterval(function(){Z(Ft)},jt),mn.setAttribute("data-action","stop"),mn.innerHTML="<span hidden>Stop Animation</span>"+Ut[1],yn=!0}function et(){clearInterval(pn),mn.setAttribute("data-action","start"),mn.innerHTML="<span hidden>Stop Animation</span>"+Ut[0],yn=!1}function at(){yn?et():nt()}function it(){yn&&et()}function rt(t){switch(t=t||window.event,t.keyCode){case w.LEFT:$();break;case w.RIGHT:_()}}function ot(t,n){"object"==typeof t&&"object"==typeof n&&t===document.activeElement&&(t.blur(),n.focus())}function lt(t){t=t||window.event;var n=t.keyCode,e=document.activeElement;switch(n){case w.LEFT:case w.UP:case w.HOME:case w.PAGEUP:e!==pt&&pt.disabled!==!0&&ot(e,pt);break;case w.RIGHT:case w.DOWN:case w.END:case w.PAGEDOWN:e!==mt&&mt.disabled!==!0&&ot(e,mt);break;case w.ENTER:case w.SPACE:e===mt?_():$()}}function st(t){t=t||window.event;var n=t.keyCode,e=document.activeElement,a=r(e,"data-slide");switch(n){case w.LEFT:case w.PAGEUP:a>0&&ot(e,e.previousElementSibling);break;case w.UP:case w.HOME:0!==a&&ot(e,yt[0]);break;case w.RIGHT:case w.PAGEDOWN:a<gt-1&&ot(e,e.nextElementSibling);break;case w.DOWN:case w.END:a<gt-1&&ot(e,yt[gt-1]);break;case w.ENTER:case w.SPACE:tt(t)}}function dt(){V(0,Tt.scrollLeft()),Q()}function ct(t){var n=t.changedTouches[0];Ln=parseInt(n.clientX),Mn=parseInt(n.clientY);var e="horizontal"===Lt?[12,-13]:[17,-8];bn=Number(Tt.style[v].slice(e[0],e[1]))}function ut(t){var n=t.changedTouches[0];if(xn=parseInt(n.clientX)-Ln,En=parseInt(n.clientY)-Mn,a(e(En,xn),15)===Lt){wn=!0,t.preventDefault();var i="horizontal"===Lt?xn:En;V(0,bn+i)}}function ft(t){var n=t.changedTouches[0];if(xn=parseInt(n.clientX)-Ln,En=parseInt(n.clientY)-Mn,wn){wn=!1,t.preventDefault();var e;if("horizontal"===Lt)e=-(bn+xn)/nn,e=xn>0?Math.floor(e):Math.ceil(e);else{var a=-(bn+En);if(a<=0)e=fn;else if(a>=hn[hn.length-1])e=bt;else{var i=0;do i++,e=En<0?i+1:i;while(i<rn&&a>=Math.round(hn[i+1]))}}cn=Math.max(fn,Math.min(e,bt));var r="horizontal"===Lt?-cn*nn:-hn[cn];!St||Yt||Nt||cn!==bt||(r=-rn*nn+Et+Pt),V(1,r),g||J()}}function vt(){clearTimeout(xt),xt=setTimeout(function(){var t=Dn();Et!==t&&(Et=t,p(),"vertical"===Lt&&H(),O(),St&&!Nt||kn(),j(),navigator.msMaxTouchPoints&&G(),"carousel"===wt&&(V(0),J(),Q()))},100)}function ht(){vn||window.requestAnimationFrame(function(){N(),vn=!1}),vn=!0}if(t=gn.extend({container:document.querySelector(".slider"),mode:"carousel",axis:"horizontal",items:1,gutter:0,edgePadding:0,fixedWidth:!1,slideByPage:!1,slideBy:1,controls:!0,controlsText:["prev","next"],controlsContainer:!1,nav:!0,navContainer:!1,arrowKeys:!1,speed:300,autoplay:!1,autoplayTimeout:5e3,autoplayDirection:"forward",autoplayText:["start","pause"],animate:{},loop:!0,autoHeight:!1,responsive:!1,lazyload:!1,touch:!0,rewind:!1},t||{}),"object"!=typeof t.container||null===t.container)return{init:function(){},destory:function(){}};var pt,mt,yt,gt,bt,xt,Et,wt=t.mode,Lt=t.axis,Mt=t.items,Tt=t.container,At=document.createElement("div"),Ct=document.createElement("div"),Dt=Tt.children,kt=Dt.length,Pt=t.gutter,Nt="vertical"!==wt&&t.edgePadding,zt=Nt?1:0,St=t.fixedWidth,It=t.controls,Ot=t.controlsText,Wt=!!t.controlsContainer&&t.controlsContainer,Bt=t.nav,Ht=!!t.navContainer&&t.navContainer,qt=t.arrowKeys,Gt=t.speed,Rt=(t.delay,t.autoplay),jt=t.autoplayTimeout,Ft="forward"===t.autoplayDirection?1:-1,Ut=t.autoplayText,Xt=t.rewind,Vt=t.animate,Yt=!t.rewind&&t.loop,Kt="gallery"===wt||t.autoHeight,Jt=!St&&t.responsive,Qt=t.slideByPage,Zt=f(),$t=t.lazyload,_t=t.touch,tn=Tt.id||n(),nn=St||0,en=[],an="gallery"===wt?2*kt:Yt?Math.ceil(1.5*kt):Nt?1:0,rn="gallery"===wt?kt+an:kt+2*an,on=kt,ln=-1,sn=0,dn=0,cn="gallery"===wt?0:an,un=cn,fn=zt,vn=!1;if("carousel"===wt&&"vertical"===Lt)var hn;if(Rt)var pn,mn,yn=!1;if(_t)var bn,xn,En,wn,Ln=0,Mn=0;Vt.in=Vt.in||"tns-fadeIn",Vt.out=Vt.out||"tns-fadeOut",Vt.normal=Vt.normal||"tns-normal";var Tn=function(){return St?function(){return Math.max(1,Math.min(kt,Math.floor(Et/St)))}:function(){var n=t.items,e="object"==typeof Jt&&Object.keys(Jt);if(e)for(var a=0;a<e.length;a++)Et>=e[a]&&(n=Jt[e[a]]);return Math.max(1,Math.min(kt,n))}}(),An=function(){return navigator.appVersion.indexOf("MSIE 8")>0?function(){return Math.round((Et+Pt)/Mt)}:function(){return(Et+Pt)/Mt}}(),Cn=function(){return t.navContainer?function(){return kt}:function(){return Math.ceil(kt/Mt)}}(),Dn=function(){return St||!Nt||"vertical"===Lt?function(){return At.clientWidth}:function(){return At.clientWidth-2*(Nt+Pt)}}();I();var kn=function(){return"horizontal"!==Lt?function(){Ct.style.height=q()+"px"}:St?Nt?function(){Ct.style.cssText="margin: 0px "+W()+"px"}:void 0:function(){Tt.style.width=(nn+1)*rn+"px";for(var t=rn;t--;)Dt[t].style.width=nn-Pt+"px","gallery"===wt&&t>cn&&t<cn+Mt&&(Dt[t].style.marginLeft=nn*(t-cn)+"px")}}(),Pn=function(){return"carousel"===wt?function(t){var n=t?t:"horizontal"===Lt?-nn*cn:-hn[cn],e="translate3d(",a={x:[v,e,n,"px, 0px, 0px)"],y:[v,e+"0px, ",n,"px, 0px)"],l:["left","",n,"px"],t:["top","",n,"px"]},i="horizontal"===Lt?v?"x":"l":v?"y":"t";Tt.style[a[i][0]]=a[i][1]+a[i][2]+a[i][3],"vertical"===Lt&&(Ct.style.height=q()+"px")}:function(){if(cn>bt)for(;cn>=kt;)cn-=kt;else if(cn<fn)for(;cn<=bt-kt;)cn+=kt;en=[],Dt[un].removeEventListener(g,J,!1),Dt[un].removeEventListener(E,J,!1),Dt[cn].addEventListener(g,J,!1),Dt[cn].addEventListener(E,J,!1);for(var t=un,n=un+Mt;t<n;t++){var e=t<rn?t:t-kt,a=Dt[e];if(m&&X(1,a),Vt.delay&&y){var i=Vt.delay*(t-un)/1e3;a.style[y]=i+"s",a.style[x]=i+"s"}a.classList.remove(Vt.in),a.classList.add(Vt.out),en.push(a)}for(var r=0,o=cn,l=cn+Mt;o<l;o++){var s=o<rn?o:o-kt,d=Dt[s];if(m&&X(1,d),Vt.delay&&y){var i=Vt.delay*(o-cn)/1e3;a.style[y]=i+"s",a.style[x]=i+"s"}d.classList.remove(Vt.normal),d.classList.add(Vt.in),r>0&&(d.style.marginLeft=r*nn+"px"),r++}}}();return{destory:function(){if(gn.unwrap(At),gn.unwrap(Ct),At=Ct=null,l(Tt,["id","style","data-tns-role","data-tns-features"]),Yt)for(var n=an;n--;)Dt[0].remove(),Dt[Dt.length-1].remove();l(Dt,["id","style","aria-hidden"]),tn=kt=null,It&&(t.controlsContainer?(l(Wt,["aria-label"]),l(Wt.children,["aria-controls","tabindex"]),s(Wt)):(Wt.remove(),Wt=pt=mt=null)),Bt&&(t.navContainer?(l(Ht,["aria-label"]),l(yt,["aria-selected","aria-controls","tabindex"]),s(Ht)):(Ht.remove(),Ht=null),yt=null),Rt&&(t.navContainer||null===Ht?s(mn):(Ht.remove(),Ht=null)),s(Tt),qt&&document.removeEventListener("keydown",rt,!1),window.removeEventListener("resize",vt,!1),window.removeEventListener("scroll",ht,!1)},getIndex:function(){return cn},hasAttr:i,getAttr:r,setAttrs:o,removeAttrs:l,removeEvents:s,getSlideId:n,toDegree:e,getPanDirection:a,hideElement:d,showElement:c,mode:wt,axis:Lt,gutter:Pt,edgePadding:Nt,fixedWidth:St,controls:It,nav:Bt,rewind:Xt,loop:Yt,autoHeight:Kt,slideBy:Zt,lazyload:$t,touch:_t,speed:Gt,items:Tn(),cloneCount:an,navCountVisible:function(){return gt},slideWidth:function(){return nn},container:Tt,slideItems:Dt,slideCount:kt,controlsContainer:function(){return Wt},prevButton:function(){return pt},nextButton:function(){return mt},navContainer:function(){return Ht},navItems:function(){return yt}}}function n(){return window.tnsNumber=window.tnsNumber?window.tnsNumber++:1,"tns"+window.tnsNumber}function e(t,n){return Math.atan2(t,n)*(180/Math.PI)}function a(t,n){return Math.abs(90-Math.abs(t))>=90-n?"horizontal":Math.abs(90-Math.abs(t))<=n&&"vertical"}function i(t,n){return t.hasAttribute(n)}function r(t,n){return t.getAttribute(n)}function o(t,n){if(t=gn.isNodeList(t)||t instanceof Array?t:[t],"[object Object]"===Object.prototype.toString.call(n))for(var e=t.length;e--;)for(var a in n)t[e].setAttribute(a,n[a])}function l(t,n){t=gn.isNodeList(t)||t instanceof Array?t:[t],n=n instanceof Array?n:[n];for(var e=n.length,a=t.length;a--;)for(var i=e;i--;)t[a].removeAttribute(n[i])}function s(t){var n=t.cloneNode(!0),e=t.parentNode;e.insertBefore(n,t),t.remove(),t=null}function d(t){i(t,"hidden")||o(t,{hidden:""})}function c(t){i(t,"hidden")&&l(t,"hidden")}function u(t){return"boolean"==typeof t.complete?t.complete:"number"==typeof t.naturalWidth?0!==t.naturalWidth:void 0}function f(t){var n,e=document.createElement("fakeelement");for(n in t)if(void 0!==e.style[n])return[n,t[n][0],t[n][1]];return!1}var v=gn.getSupportedProp(["transform","WebkitTransform","MozTransform","OTransform"]),h={transitionDuration:["transitionDelay","transitionend"],WebkitTransitionDuration:["WebkitTransitionDelay","oTransitionEnd"],MozTransitionDuration:["MozTransitionDelay","transitionend"],OTransitionDuration:["OTransitionDelay","webkitTransitionEnd"]},p={animationDuration:["animationDelay","animationend"],WebkitAnimationDuration:["WebkitAnimationDelay","oAnimationEnd"],MozAnimationDuration:["MozAnimationDelay","animationend"],OAnimationDuration:["OAnimationDelay","webkitAnimationEnd"]},m=f(h)[0],y=f(h)[1],g=f(h)[2],b=f(p)[0],x=f(p)[1],E=f(p)[2],w={ENTER:13,SPACE:32,PAGEUP:33,PAGEDOWN:34,END:35,HOME:36,LEFT:37,UP:38,RIGHT:39,DOWN:40};return t}();
//# sourceMappingURL=../sourcemaps/tiny-slider.native.js.map
