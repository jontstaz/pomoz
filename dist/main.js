(()=>{"use strict";var e={791:(e,t,o)=>{o.d(t,{gz:()=>ue,sS:()=>me,rC:()=>se,DH:()=>fe,HT:()=>de,m1:()=>Ee,LK:()=>ie,E5:()=>ye});const r=document.querySelector(".pause"),c=document.querySelector(".start"),l=document.querySelector(".reset"),a=document.querySelector(".fa-adjust"),n=document.querySelector("body"),s=document.querySelector(".squareBox"),d=document.querySelector(".sessionBtns"),u=document.querySelector(".score"),i=document.querySelector(".settingsBtn"),y=document.querySelector(".settingsPage"),E=document.querySelector(".dracula"),m=document.querySelector(".nord"),C=document.querySelector(".gruvHard"),f=document.querySelector(".defaultDark"),k=document.querySelector(".defaultLight"),g=document.querySelector(".tomato"),v=document.querySelector(".brandLogo"),b=document.querySelector(".aboutPage"),S=document.querySelector(".aboutBtn"),h=document.querySelector(".menulink-toggle"),q=document.querySelector(".modesLink"),F=document.querySelector(".modesDiv"),A=document.querySelector(".modeCurrentTime"),L=document.querySelector(".increaseTimeArrow"),D=document.querySelector(".decreaseTimeArrow"),p=document.querySelector(".breakMode"),B=document.querySelector(".defaultMode"),x=document.querySelector(".automaticMode"),I=document.querySelector(".timerModes"),w=document.querySelector(".modeSettings"),T=document.querySelector(".increaseTimeChevron"),$=document.querySelector(".saveBtnFLex");let M=0;const H=e=>{ye=e,localStorage.savedTheme=e},P=(e,t)=>{n.style.backgroundColor=t,n.style.color=e},j=(e,t)=>{s.style.backgroundColor=e,s.style.borderColor=t},O=(e,t,o)=>{let r=document.querySelector(".innerC"),c=document.querySelector(".outerC"),l=document.querySelector("svg");c.style.stroke=e,r.style.stroke=t,l.style.fill=o},z=(e,t)=>{d.style.backgroundColor=e,d.style.borderColor=t},K=(e,t,o)=>{[c,r].forEach((r=>{r.style.backgroundColor=t,r.style.color=e,r.addEventListener("mouseover",(()=>{r.style.backgroundColor=o,r.style.color=t})),r.addEventListener("mouseout",(()=>{r.style.backgroundColor=t,r.style.color=e}))}))},N=(e,t,o)=>{l.style.backgroundColor=t,l.style.color=e,l.addEventListener("mouseover",(()=>{l.style.backgroundColor=o})),l.addEventListener("mouseout",(()=>{l.style.backgroundColor=t}))},V=(e,t,o,r,c,l)=>{I.style.backgroundColor=t,[B,p,x].forEach((o=>{o.style.color=e,o.style.backgroundColor=t,o.addEventListener("click",(()=>{}))})),B.addEventListener("click",(()=>{[p,x].forEach((e=>{e.style.backgroundColor=t})),B.style.backgroundColor=o})),p.addEventListener("click",(()=>{[B,x].forEach((e=>{e.style.backgroundColor=t})),p.style.backgroundColor=o})),x.addEventListener("click",(()=>{[B,p].forEach((e=>{e.style.backgroundColor=t})),x.style.backgroundColor=o})),w.style.backgroundColor=r,A.style.color=c,A.style.backgroundColor=l,[L,D,T].forEach((e=>{e.style.backgroundColor=l,e.style.color=c,e!=T&&(e.addEventListener("mouseover",(()=>{e.style.backgroundColor=c,e.style.color=l})),e.addEventListener("mouseout",(()=>{e.style.backgroundColor=l,e.style.color=c})))})),B.style.backgroundColor=o,$.style.backgroundColor=t,$.style.color=e,$.addEventListener("mouseover",(()=>{$.style.backgroundColor=o,$.style.color=e})),$.addEventListener("mouseout",(()=>{$.style.backgroundColor=t,$.style.color=e}))},G=e=>{document.querySelectorAll("li").forEach((t=>{t.style.color=e})),document.querySelectorAll("h2").forEach((t=>{t.style.borderColor=e}))},J=(e,t)=>{let o=document.querySelector(".score");o.style.color=e,o.style.backgroundColor=t},Q=(e,t)=>{let o=document.querySelector(".settingsbtn");o.style.color=e,o.style.backgroundColor=t},R=()=>{H("dracula"),P("#D8DEE9","#1e1f29"),j("#282a36","282a36"),z("#31333f","#31333f"),K("#D8DEE9","#1e1f29","#FF6E67"),N("#1e1f29","#FF6E67","#D8DEE9"),V("#D8DEE9","#21232C","#282a36","#3C3E4A","#5AF78E","#282a36"),G("#AEB4D5"),O("#1e1f29","#5AF78E","#5AF78E"),Q("#FF6E67","#242829"),J("#AEB4D5","#282a36")},U=()=>{H("gruvHard"),P("#c8ccd4","#1D2021"),j("#242829","#242829"),K("#c8ccd4","#1D2021","#83a598"),N("#242829","#83a598","#c8ccd4"),z("#2E3233","#2E3233"),V("#83a598","#2E3233","#242829","#83a598","#83a598","#242829"),G("#C3C7CF"),Q("#242829","#A3BE8C"),O("#1D2021","#83a598","#83a598"),J("#C3C7CF","#242829")},W=()=>{H("dark"),P("#f9fcfb","#1E222A"),j("#23272f","#23272f"),z("#2a2e36","#2a2e36"),K("#E78992","#1E222A","#E78992"),N("#f9fcfb","#1E222A","#61afef"),Q("#1E222A","#61afef"),V("#f9fcfb","#2C323B","#4a5460","#40464F","#61afef","#2C323B"),G("#C3C7CF"),O("#1E222A","#61afef","#61afef"),J("#f6ecf0","#2a2e36")},X=()=>{H("light"),P("#545E6A","white"),j("white","#fafafa"),z("white","#fafafa"),K("#545E6A","#C0E4FE","#545e6a"),N("#FD8A89","#FFD9D8","white"),Q("#545e6a","#C0E4FE"),V("white","#545E6A","#4a5460","#C0E4FE","#545E6A","white"),G("#545e6a"),O("#f0f0f0","#C0E4FE","#545e6a"),J("#494975","#D5D4F4")},Y=()=>{H("nord"),P("#D8DEE9","#282E3A"),j("#2E3440","#2E3440"),z("#434C5E","#434C5E"),K("#81A1C1","#282E3A","#81A1C1"),N("#2E3440","#A3BE8C","#D8DEE9"),V("#D8DEE9","#2C313D","#2E3440","#81A1C1","#D8DEE9","#2C313D"),G("#c8ccd4"),Q("#EBCB8B","#3C3E4A"),O("#282E3A","#81A1C1","#81A1C1"),J("#C3C7CF","#2E3440")},Z=()=>{H("tomato"),P("#623A3F","#e5707e"),j("#F98492","#F98492"),z("#D36774","#D36774"),K("#954952","#FF8E9C","#623A3F"),N("#FF8E9C","#954952","#f9fcfb"),V("#623A3F","#D36774","#e5707e","#e5707e","#623A3F","#FF8E9C"),G("#623A3F"),Q("#FF8E9C","#623A3F"),O("#623A3F","#f9fcfb","#623A3F"),J("#C3C7CF","#623A3F")};k.addEventListener("click",X),f.addEventListener("click",W),m.addEventListener("click",Y),E.addEventListener("click",R),C.addEventListener("click",U),g.addEventListener("click",Z);let _=document.querySelector(".timerText");const ee=(e,t)=>{let o;e<10?o=`0${e} : ${t}`:t<10&&(o=`${e} : 0${t}`),o=`${e} : ${t}`,_.textContent=o},te=()=>{_.style.backgroundImage="url('https://media1.tenor.com/images/5fe35bec1c80a880bf59ae32a9716ace/tenor.gif?itemid=8953038')",_.textContent=">:("},oe=e=>{A.textContent=e<10?`0${e} : 00`:`${e} : 00`},re=()=>{let e=(Ee-me/60)/Ee*100,t=document.querySelector(".innerC"),o=2*t.r.baseVal.value*Math.PI;t.style.strokeDasharray=o,t.style.strokeDashoffset=o-e/100*o};[c,l].forEach((e=>{e.addEventListener("click",(()=>(_.style.animation=" none",_.style.backgroundImage="none","reset"===e.className?(ue="reset",clearInterval(de),me=60*Ee,ee(Ee,0),void re()):(ue="start",new Audio("./assets/sounds/tick.mp3").play(),clearInterval(de),void fe()))))}));let ce=0;r.addEventListener("click",(()=>{ce++,ue=ce%2==0?"resume":"pause","pause"==ue?(()=>{me!==60*Ee&&0!==me||te(),ue="pause",se=me,clearInterval(de);const e=Math.floor(se/60);ee(e,se%60)})():(me!==60*Ee&&0!==me||te(),ue="pause",me!=60*Ee&&fe())})),i.addEventListener("mouseover",(()=>i.style.textDecoration="underline")),i.addEventListener("mouseout",(()=>i.style.textDecoration="none")),i.addEventListener("click",(()=>{[s,d,l,b,F].forEach((e=>e.style.display="none")),y.style.display="grid"}));const le=()=>{[s,d,l].forEach((e=>{e.style.display=""})),[y,b,F].forEach((e=>{e.style.display="none"}))};v.addEventListener("click",(()=>le())),S.addEventListener("click",(()=>([s,d,l,y,F].forEach((e=>{e.style.display="none"})),void(b.style.display="block")))),q.addEventListener("click",(()=>([y,b,s,d,l].forEach((e=>{e.style.display="none"})),void(F.style.display="block")))),L.addEventListener("click",(()=>{Ee++,oe(Ee),ee(Ee,0)})),D.addEventListener("click",(()=>{Ee>1&&(Ee--,oe(Ee),ee(Ee,0))})),B.addEventListener("click",(()=>{[p,x].forEach((e=>{e.style.backgroundColor="#36404c"})),Ee=25,oe(Ee),B.style.backgroundColor="#4a5460"})),p.addEventListener("click",(()=>{[B,x].forEach((e=>{e.style.backgroundColor="#36404c"})),Ee=5,oe(Ee),p.style.backgroundColor="#4a5460"})),x.addEventListener("click",(()=>{[p,B].forEach((e=>{e.style.backgroundColor="#36404c"})),Ee=25,oe(Ee),x.style.backgroundColor="#4a5460"})),$.addEventListener("click",(()=>le()));let ae=document.querySelector(".navBarLinks");h.addEventListener("click",(()=>ae.classList.toggle("show")));const ne=(e,t,o)=>{const r=document.querySelector("."+e);r.setAttribute("title",t);const c=document.createElement("i");c.classList.add("fas",o,"fa-lg"),r.appendChild(c)};let se,de,ue,ie=0,ye="lightTheme";(()=>{switch(ie=localStorage.getItem("savedScore"),ye=localStorage.getItem("savedTheme"),0==localStorage.length&&(ie=0),u.innerText=`score : ${ie}`,ye){case"dark":W();break;case"light":X();break;case"dracula":R();break;case"nord":Y();break;case"gruvHard":U();break;case"tomato":Z()}})(),ne("start","start","fa-play"),ne("reset","reset","fa-redo"),ne("pause","pause","fa-stop");let Ee=25,me=60*Ee;const Ce=()=>{var e;e=de,0==me&&(clearInterval(e),document.getElementById("dingding").play(),ie=parseInt(ie),ie+=4*Ee,u.innerText=`Score : ${ie}`,localStorage.setItem("savedScore",ie),localStorage.setItem("savedTheme",ye));const t=Math.floor(me/60),o=me%60;0!==me?(ee(t,o),me--,re()):ee(t,o)},fe=()=>{me="pause"==ue?se:60*Ee,de=setInterval(Ce,1e3)};a.addEventListener("click",(()=>{M++,M%2!=0?W():X()}))}},t={};function o(r){if(t[r])return t[r].exports;var c=t[r]={exports:{}};return e[r](c,c.exports,o),c.exports}o.d=(e,t)=>{for(var r in t)o.o(t,r)&&!o.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},o.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),o(791)})();