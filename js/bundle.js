!function(){"use strict";function e(e,t){const o=document.querySelector(e);o.classList.add("show"),o.classList.remove("hide"),document.body.style.overflow="hidden",console.log(t),t&&clearInterval(t)}function t(e){const t=document.querySelector(e);t.classList.add("hide"),t.classList.remove("show"),document.body.style.overflow=""}window.addEventListener("DOMContentLoaded",(()=>{const o=setTimeout((()=>e(".modal",o)),5e4);(function(e,t,o,n){let r=document.querySelectorAll(e),a=document.querySelectorAll(t),c=document.querySelector(o);function l(){a.forEach((e=>{e.classList.add("hide"),e.classList.remove("show","fade")})),r.forEach((e=>{e.classList.remove(n)}))}function s(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;a[e].classList.add("show","fade"),a[e].classList.remove("hide"),r[e].classList.add(n)}r.forEach((e=>{e.classList.remove(n)})),l(),s(),c.addEventListener("click",(t=>{const o=t.target;o&&o.classList.contains(e.slice(1))&&r.forEach(((e,t)=>{o==e&&(l(),s(t))}))}))})(".tabheader__item",".tabcontent",".tabheader__items","tabheader__item_active"),function(o,n,r){const a=document.querySelectorAll(o),c=document.querySelector(n);a.forEach((t=>{t.addEventListener("click",(()=>e(n,r)))})),c.addEventListener("click",(e=>{e.target!==c&&""!=e.target.getAttribute("data-close")||t(n)})),document.addEventListener("keydown",(e=>{"Escape"===e.code&&c.classList.contains("show")&&t(n)})),window.addEventListener("scroll",(function t(){window.pageYOffset+document.documentElement.clientHeight>=document.documentElement.scrollHeight&&(e(n,r),window.removeEventListener("scroll",t))}))}("[data-model]",".modal",o),function(e,t){function o(e){return e>=0&&e<10?`0${e}`:e}!function(e,t){const n=document.querySelector(".timer"),r=n.querySelector("#days"),a=n.querySelector("#hours"),c=n.querySelector("#minutes"),l=n.querySelector("#seconds"),s=setInterval(i,1e3);function i(){const e=function(e){const t=Date.parse(e)-Date.parse(new Date);return{total:t,days:Math.floor(t/864e5),hours:Math.floor(t/36e5%24),minutes:Math.floor(t/1e3/60%60),seconds:Math.floor(t/1e3%60)}}(t);r.innerHTML=o(e.days),a.innerHTML=o(e.hours),c.innerHTML=o(e.minutes),l.innerHTML=o(e.seconds),e.total<=0&&clearInterval(s)}i()}(0,t)}(0,"2021-12-31"),function(){const e=document.querySelector(".calculating__result span");let t,o,n,r="female",a=1.375;function c(e,t){document.querySelectorAll(e).forEach((e=>{e.classList.remove(t),e.getAttribute("id")===localStorage.getItem("sex")&&e.classList.add(t),e.getAttribute("data-ratio")===localStorage.getItem("ratio")&&e.classList.add(t)}))}function l(){e.textContent=r&&t&&o&&n&&a?"female"===r?Math.round((6+9.2*o+3.1*t-4.3*n)*a):Math.round((88.36+13.4*o+4.8*t-5.7*n)*a):"____"}function s(e,t){const o=document.querySelectorAll(`${e} div`);o.forEach((e=>{e.addEventListener("click",(e=>{e.target.getAttribute("data-ratio")?(a=+e.target.getAttribute("data-ratio"),localStorage.setItem("ratio",+e.target.getAttribute("data-ratio"))):(r=e.target.getAttribute("id"),localStorage.setItem("sex",e.target.getAttribute("id"))),o.forEach((e=>{e.classList.remove(t)})),e.target.classList.add(t),l()}))}))}function i(e){const r=document.querySelector(e);r.addEventListener("input",(()=>{switch(r.value.match(/\D/g)?r.style.border="1px solid red":r.style.border="none",r.getAttribute("id")){case"height":t=+r.value;break;case"weight":o=+r.value;break;case"age":n=+r.value}l()}))}localStorage.getItem("sex")?r=localStorage.getItem("sex"):(r="female",localStorage.setItem("sex","female")),localStorage.getItem("ratio")?r=localStorage.getItem("ratio"):(r=1.375,localStorage.setItem("ratio",1.375)),c("#gender div","calculating__choose-item_active"),c(".calculating__choose_big div","calculating__choose-item_active"),l(),s("#gender","calculating__choose-item_active"),s(".calculating__choose_big","calculating__choose-item_active"),i("#height"),i("#weight"),i("#age")}(),function(o,n){function r(o){const r=document.querySelector(".modal__dialog");r.classList.add("hide"),e(".modal",n);const a=document.createElement("div");a.classList.add("modal__dialog"),a.innerHTML=`\n        <div class="modal__content">\n        <div class="modal__close data-close">&times;</div>\n        <div class="modal__title">${o}</div>\n        <div/>\n    `,document.querySelector(".modal").append(a),setTimeout((()=>{a.remove(),r.classList.add("show"),r.classList.remove("hide"),t(".modal")}),3e3)}document.querySelectorAll(o).forEach((e=>{e.addEventListener("submit",(e=>{e.preventDefault();const t=document.querySelector(".modal__content form");let o=document.createElement("img");o.src="img/form/spinner.svg",o.style.cssText="\n                    display: block;\n                    margin: 0 auto;\n                ",t.insertAdjacentElement("afterend",o);const n=new FormData(t);(async(e,t)=>{const o=await fetch("http://localhost:3000/requests",{method:"POST",headers:{"Content-type":"application/json"},body:t});return await o.json()})(0,JSON.stringify(Object.fromEntries(n.entries()))).then((e=>{console.log(e),r("Спасибо! Скоро мы с вами свяжемся"),o.remove()})).catch((()=>{r("Что-то пошло не так..")})).finally((()=>{t.reset()}))}))})),fetch("http://localhost:3000/menu").then((e=>e.json()))}("form",o),function(e){let{container:t,slide:o,nextArrow:n,prevArrow:r,totalCounter:a,currentCounter:c,wrapper:l,fields:s}=e,i=1,d=0;const u=document.querySelectorAll(o),m=document.querySelector(t),g=document.querySelector(r),f=document.querySelector(n),h=document.querySelector(a),y=document.querySelector(c),p=document.querySelector(l),v=document.querySelector(s),_=window.getComputedStyle(p).width;u.length<10?(h.textContent=`0${u.length}`,y.textContent=`0${i}`):(h.textContent=u.length,y.textContent=i),v.style.width=100*u.length+"%",v.style.display="flex",v.style.trasition="0.5s all",p.style.overflow="hidden",u.forEach((e=>{e.style.width=_})),m.style.position="relative";const L=document.createElement("ol"),S=[];function w(e){e.forEach((e=>e.style.opacity=".5")),e[i-1].style.opacity=1}function b(e){e.length<10?y.textContent=`0${i}`:y.textContent=i}L.classList.add("carousel-indicators"),L.style.cssText="\n    position: absolute;\n    right: 0;\n    bottom: 0;\n    left: 0;\n    z-index: 15;\n    display: flex;\n    justify-content: center;\n    margin-right: 15%;\n    margin-left: 15%;\n    list-style: none;\n  ",m.append(L);for(let e=0;e<u.length;e++){const t=document.createElement("li");t.setAttribute("data-slide-to",e+1),t.style.cssText="\n    box-sizing: content-box;\n    flex: 0 1 auto;\n    width: 30px;\n    height: 6px;\n    margin-right: 3px;\n    margin-left: 3px;\n    cursor: pointer;\n    background-color: #fff;\n    background-clip: padding-box;\n    border-top: 10px solid transparent;\n    border-bottom: 10px solid transparent;\n    opacity: .5;\n    transition: opacity .6s ease;\n    ",0==e&&(t.style.opacity=1),L.append(t),S.push(t)}function x(e){return+e.replace(/\D/g,"")}f.addEventListener("click",(()=>{d==x(_)*(u.length-1)?d=0:d+=x(_),v.style.transform=`translateX(-${d}px)`,i==u.length?i=1:i++,u.length<10?y.textContent=`0${i}`:y.textContent=i,w(S)})),g.addEventListener("click",(()=>{0==d?d=x(_)*(u.length-1):d-=x(_),v.style.transform=`translateX(-${d}px)`,1==i?i=u.length:i--,b(u),w(S)})),S.forEach((e=>{e.addEventListener("click",(e=>{const t=e.target.getAttribute("data-slide-to");i=t,d=x(_)*(t-1),v.style.transform=`translateX(-${d}px)`,b(u),w(S)}))}))}({container:".offer__slider",slide:".offer__slide",nextArrow:".offer__slider-next",prevArrow:".offer__slider-prev",totalCounter:"#total",currentCounter:"#current",wrapper:".offer__slider-wrapper",fields:".offer__slider-inner"})}))}();
//# sourceMappingURL=bundle.js.map