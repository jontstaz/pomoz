(()=>{"use strict";var e={791:(e,t,o)=>{o.d(t,{gz:()=>le,sS:()=>ue,rC:()=>ce,DH:()=>ye,HT:()=>ae,m1:()=>se,LK:()=>ne,E5:()=>de});const r=document.querySelector(".pomoBox"),c=document.querySelector(".restart"),a=document.querySelector(".pause"),l=document.querySelector(".resume"),n=document.querySelector(".start"),d=document.querySelector(".reset"),s=document.querySelector(".fa-adjust"),u=document.querySelector("body"),i=document.querySelector(".squareBox"),y=document.querySelector(".sessionBtns"),m=document.querySelector(".score"),E=document.querySelector(".settingsBtn"),f=document.querySelector(".settingsPage"),b=document.querySelector(".dracula"),k=document.querySelector(".nord"),g=document.querySelector(".gruvHard"),C=document.querySelector(".defaultDark"),v=document.querySelector(".defaultLight"),S=document.querySelector(".tomato"),q=document.querySelector(".brandLogo"),p=document.querySelector(".aboutPage"),L=document.querySelector(".aboutBtn"),h=(document.querySelector(".menulink-toggle"),document.querySelector(".modesLink")),D=document.querySelector(".modesDiv"),x=document.querySelector(".modeCurrentTime"),A=document.querySelector(".increaseTimeArrow"),F=document.querySelector(".decreaseTimeArrow"),B=document.querySelector(".breakMode"),T=document.querySelector(".defaultMode"),I=document.querySelector(".automaticMode"),$=document.querySelector(".timerModes"),M=document.querySelector(".modeSettings"),w=document.querySelector(".increaseTimeChevron"),H=document.querySelector(".saveBtnFLex");let P=0;const j=e=>{de=e,localStorage.savedTheme=e},O=(e,t)=>{u.style.backgroundColor=t,u.style.color=e},N=e=>i.style.backgroundColor=e,z=(e,t,o)=>{r.style.color=e,r.style.backgroundColor=t,r.style.border=o},K=e=>{y.style.backgroundColor=e},G=(e,t,o)=>{[c,n,a,l].forEach((r=>{r.style.backgroundColor=t,r.style.color=e,r.addEventListener("mouseover",(()=>{r.style.backgroundColor=o,r.style.color=t})),r.addEventListener("mouseout",(()=>{r.style.backgroundColor=t,r.style.color=e}))}))},J=(e,t,o)=>{d.style.backgroundColor=t,d.addEventListener("mouseover",(()=>{d.style.backgroundColor=o,d.style.color=e})),d.addEventListener("mouseout",(()=>{d.style.backgroundColor=t}))},Q=(e,t,o,r,c,a)=>{$.style.backgroundColor=t,[T,B,I].forEach((o=>{o.style.color=e,o.style.backgroundColor=t,o.addEventListener("click",(()=>{}))})),T.addEventListener("click",(()=>{[B,I].forEach((e=>{e.style.backgroundColor=t})),T.style.backgroundColor=o})),B.addEventListener("click",(()=>{[T,I].forEach((e=>{e.style.backgroundColor=t})),B.style.backgroundColor=o})),I.addEventListener("click",(()=>{[T,B].forEach((e=>{e.style.backgroundColor=t})),I.style.backgroundColor=o})),M.style.backgroundColor=r,x.style.color=c,x.style.backgroundColor=a,[A,F,w].forEach((e=>{e.style.backgroundColor=a,e.style.color=c})),T.style.backgroundColor=o;let l=document.querySelector(".score");l.style.color=e,l.style.backgroundColor=t,H.style.backgroundColor=t,H.style.color=e,H.addEventListener("mouseover",(()=>{H.style.backgroundColor=o,H.style.color=e})),H.addEventListener("mouseout",(()=>{H.style.backgroundColor=t,H.style.color=e}))},R=e=>{document.querySelectorAll("li").forEach((t=>{t.style.color=e})),document.querySelectorAll("h2").forEach((t=>{t.style.borderColor=e}))},U=()=>{j("dracula"),O("#D8DEE9","#282a36"),N("#323440"),z("#D8DEE9","#323440","6px solid #bd93f9"),K("#464854"),G("#D8DEE9","#282a36","#bd93f9"),J("#282a36","#bd93f9","#D8DEE9"),Q("#D8DEE9","#21232C","#282a36","#3C3E4A","#5AF78E","#282a36"),R("#AEB4D5")},V=()=>{j("gruvHard"),O("#c8ccd4","#1D2021"),N("#242829"),z("c8ccd4","#242829","6px solid #83a598"),G("#c8ccd4","#1D2021","#83a598"),J("#242829","#83a598","#c8ccd4"),K("#2E3233"),Q("#c8ccd4","#2E3233","#242829","#83a598","#242829","#c8ccd4"),R("#C3C7CF")},W=()=>{j("dark"),O("#f9fcfb","#222831"),N("#2C323B"),z("#f9fcfb","#2C323B","6px solid #a7c5eb"),K("#40464F"),G("#f9fcfb","#2C323B","#a7c5eb"),J("#2C323B","#a7c5eb","#f9fcfb"),Q("#f9fcfb","#2C323B","#4a5460","#40464F","#f9fcfb","#2C323B"),R("#C3C7CF")},X=()=>{j("light"),O("#36404c","#fafafa"),N("#a7c5eb"),z("#f9fcfb","#36404c","0px solid #36404c"),K("#f9fcfb"),G("#f9fcfb","#36404c","#a7c5eb"),J("#36404c","#a7c5eb","#f9fcfb"),Q("#fafafa","#36404c","#4a5460","#a7c5eb","#36404c","#fafafa"),R("#545e6a")},Y=()=>{j("nord"),O("#D8DEE9","#2E3440"),N("#323846"),z("#D8DEE9","#323846","6px solid #81A1C1"),K("#40464F"),G("#D8DEE9","#2E3440","#81A1C1"),J("#2E3440","#81A1C1","#D8DEE9"),Q("#D8DEE9","#2C313D","#2E3440","#81A1C1","#2E3440","#D8DEE9"),R("#c8ccd4")},Z=()=>{j("tomato"),O("#623A3F","#e5707e"),N("#F98492"),z("#954952","#F98492","6px solid #D36774"),K("#D36774"),G("#954952","#FF8E9C","#623A3F"),J("#222831","#D36774","#f9fcfb"),Q("#623A3F","#D36774","#e5707e","#e5707e","#623A3F","#FF8E9C"),R("#623A3F")};v.addEventListener("click",X),C.addEventListener("click",W),k.addEventListener("click",Y),b.addEventListener("click",U),g.addEventListener("click",V),S.addEventListener("click",Z);const _=(e,t)=>{r.innerText=e<10?`0${e} : ${t}`:t<10?`${e} : 0${t}`:`${e} : ${t}`},ee=()=>{r.style.backgroundImage="url('https://media1.tenor.com/images/5fe35bec1c80a880bf59ae32a9716ace/tenor.gif?itemid=8953038')",r.innerText=">:("},te=e=>{x.textContent=e<10?`0${e} : 00`:`${e} : 00`},oe=(e,t,o)=>{const r=document.querySelector("."+e);r.setAttribute("title",t);const c=document.createElement("i");c.classList.add("fas",o,"fa-lg"),r.appendChild(c)};[c,n,d].forEach((e=>{e.addEventListener("click",(()=>{r.style.animation=" none",r.style.backgroundImage="none","reset"===e.className?(le="reset",clearInterval(ae),ue=60*se,_(se,0)):(new Audio("./assets/sounds/tick.mp3").play(),le="start"===e.className?"start":"restart",clearInterval(ae),ye())}))})),a.addEventListener("click",(()=>{ue!==60*se&&0!==ue||ee(),le="pause",ce=ue,clearInterval(ae);const e=Math.floor(ce/60);_(e,ce%60)})),l.addEventListener("click",(()=>{ue===60*se||0===ue?ee():"pause"==le&&ue>0&&ye(),le="resume"})),E.addEventListener("mouseover",(()=>{E.style.textDecoration="underline"})),E.addEventListener("mouseout",(()=>{E.style.textDecoration="none"})),E.addEventListener("click",(()=>{[i,r,y,d,p,D].forEach((e=>{e.style.display="none"})),f.style.display="grid"}));const re=()=>{[i,r,y,d].forEach((e=>{e.style.display=""})),[f,p,D].forEach((e=>{e.style.display="none"}))};q.addEventListener("click",(()=>re())),L.addEventListener("click",(()=>([i,r,y,d,f,D].forEach((e=>{e.style.display="none"})),void(p.style.display="block")))),h.addEventListener("click",(()=>([f,p,i,r,y,d].forEach((e=>{e.style.display="none"})),void(D.style.display="block")))),A.addEventListener("click",(()=>{se++,te(se),_(se,0)})),F.addEventListener("click",(()=>{se>1&&(se--,te(se),_(se,0))})),T.addEventListener("click",(()=>{[B,I].forEach((e=>{e.style.backgroundColor="#36404c"})),se=25,te(se),T.style.backgroundColor="#4a5460"})),B.addEventListener("click",(()=>{[T,I].forEach((e=>{e.style.backgroundColor="#36404c"})),se=5,te(se),B.style.backgroundColor="#4a5460"})),I.addEventListener("click",(()=>{[B,T].forEach((e=>{e.style.backgroundColor="#36404c"})),se=25,te(se),I.style.backgroundColor="#4a5460"})),H.addEventListener("click",(()=>{re()}));let ce,ae,le,ne=0,de="lightTheme";(()=>{if(localStorage.length>0)switch(ne=localStorage.getItem("savedScore"),de=localStorage.getItem("savedTheme"),m.innerText="Score : "+ne,de){case"dark":W();break;case"light":X();break;case"dracula":U();break;case"nord":Y();break;case"gruvHard":V();break;case"tomato":Z()}})(),oe("start","start","fa-rocket"),oe("restart","restart","fa-redo"),oe("pause","pause","fa-stop"),oe("resume","resume","fa-play"),r.innerText="25 : 00";let se=25,ue=60*se;const ie=()=>{var e;e=ae,0==ue&&(clearInterval(e),document.getElementById("dingding").play(),ne=parseInt(ne),ne+=100,m.innerText="Score : "+ne,localStorage.setItem("savedScore",ne),localStorage.setItem("savedTheme",de));const t=Math.floor(ue/60);let o=ue%60;0!==ue?(_(t,o),ue--):_(t,o)},ye=()=>{r.style.animation="shake 4s",ue="pause"==le?ce:60*se,ae=setInterval(ie,1e3)};s.addEventListener("click",(()=>{P++,P%2!=0?W():X()}))}},t={};function o(r){if(t[r])return t[r].exports;var c=t[r]={exports:{}};return e[r](c,c.exports,o),c.exports}o.d=(e,t)=>{for(var r in t)o.o(t,r)&&!o.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},o.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),o(791)})();