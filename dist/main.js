(()=>{"use strict";var e={21:(e,t,o)=>{o.d(t,{gz:()=>Se,sS:()=>Ae,rC:()=>fe,DH:()=>pe,HT:()=>ke,m1:()=>qe,LK:()=>be,g1:()=>he,E5:()=>ve});const r=document.querySelector(".flexMain"),l=document.querySelector(".pause"),c=document.querySelector(".start"),a=document.querySelector(".reset"),n=document.querySelector(".fa-adjust"),s=document.querySelector("body"),d=document.querySelector(".squareBox"),u=document.querySelector(".sessionBtns"),y=document.querySelector(".score"),i=document.querySelector(".settingsBtn"),E=document.querySelector(".settingsPage"),m=document.querySelector(".dracula"),g=document.querySelector(".nord"),C=document.querySelector(".gruvHard"),f=document.querySelector(".defaultDark"),k=document.querySelector(".defaultLight"),S=document.querySelector(".brandLogo"),b=document.querySelector(".aboutPage"),v=document.querySelector(".dashboardLink"),h=document.querySelector(".dashboardPage"),q=document.querySelector(".aboutBtn"),A=document.querySelector(".menulink-toggle"),L=document.querySelector(".modesLink"),p=document.querySelector(".modesDiv"),D=document.querySelector(".modeCurrentTime"),F=document.querySelector(".increaseTimeArrow"),x=document.querySelector(".decreaseTimeArrow"),B=document.querySelector(".breakMode"),I=document.querySelector(".defaultMode"),w=document.querySelector(".automaticMode"),T=document.querySelector(".timerModes"),$=document.querySelector(".modeSettings"),M=document.querySelector(".increaseTimeChevron"),P=document.querySelector(".saveBtnFLex");document.querySelector(".timerSoundsDiv");let _=0;const H=e=>{ve=e,localStorage.savedTheme=e},O=(e,t)=>{s.style.backgroundColor=t,s.style.color=e},j=(e,t)=>{d.style.backgroundColor=e,d.style.borderColor=t},V=(e,t,o)=>{let r=document.querySelector(".innerC"),l=document.querySelector(".outerC"),c=document.querySelector("svg");l.style.stroke=e,r.style.stroke=t,c.style.fill=o},z=(e,t)=>{u.style.backgroundColor=e,u.style.borderColor=t},G=(e,t,o)=>{[c,l].forEach((r=>{r.style.backgroundColor=t,r.style.color=e,r.addEventListener("mouseover",(()=>{r.style.backgroundColor=o,r.style.color=t})),r.addEventListener("mouseout",(()=>{r.style.backgroundColor=t,r.style.color=e}))}))},K=(e,t,o)=>{a.style.backgroundColor=t,a.style.color=e,a.addEventListener("mouseover",(()=>{a.style.backgroundColor=o})),a.addEventListener("mouseout",(()=>{a.style.backgroundColor=t}))},N=(e,t,o,r,l,c)=>{T.style.backgroundColor=t,[I,B,w].forEach((o=>{o.style.color=e,o.style.backgroundColor=t,o.addEventListener("click",(()=>{}))})),I.addEventListener("click",(()=>{[B,w].forEach((e=>{e.style.backgroundColor=t})),I.style.backgroundColor=o})),B.addEventListener("click",(()=>{[I,w].forEach((e=>{e.style.backgroundColor=t})),B.style.backgroundColor=o})),w.addEventListener("click",(()=>{[I,B].forEach((e=>{e.style.backgroundColor=t})),w.style.backgroundColor=o})),$.style.backgroundColor=r,D.style.color=l,D.style.backgroundColor=c,[F,x,M].forEach((e=>{e.style.backgroundColor=c,e.style.color=l,e!=M&&(e.addEventListener("mouseover",(()=>{e.style.backgroundColor=l,e.style.color=c})),e.addEventListener("mouseout",(()=>{e.style.backgroundColor=c,e.style.color=l})))})),I.style.backgroundColor=o,P.style.backgroundColor=t,P.style.color=e,P.addEventListener("mouseover",(()=>{P.style.backgroundColor=o,P.style.color=e})),P.addEventListener("mouseout",(()=>{P.style.backgroundColor=t,P.style.color=e}))},R=e=>{document.querySelectorAll("li").forEach((t=>{t.style.color=e})),document.querySelectorAll("h2").forEach((t=>{t.style.borderColor=e}))},J=(e,t)=>{let o=document.querySelector(".settingsbtn");o.style.color=e,o.style.backgroundColor=t},Q=(e,t,o,r,l)=>{document.querySelector(".dashboardPage").style.backgroundColor=l,document.querySelectorAll(".currentScore").forEach((o=>{o.style.color=e,o.style.backgroundColor=t}));let c=document.querySelector(".score");c.style.backgroundColor=o,c.style.color=r},U=(e,t,o,r)=>{let l=document.querySelector(".scoreProgress"),c=document.querySelector(".scoreInnerCircle"),a=document.querySelector(".scoreOuterCircle"),n=document.querySelector(".scoreCircle");c.style.stroke=e,a.style.stroke=t,n.style.fill=o,l.style.backgroundColor=r},W=(e,t,o,r,l)=>{let c=document.querySelector(".sound_Settings");c.style.backgroundColor=l,c.style.color=o;let a=document.querySelectorAll(".timer_audio");a.forEach((l=>{l.style.backgroundColor=r,l.addEventListener("mouseover",(()=>{l.style.backgroundColor=t,l.style.color=e})),l.addEventListener("mouseout",(()=>{l.style.backgroundColor=r,l.style.color=o})),l.addEventListener("click",(()=>{for(let e=0;e<all_sounds.length;e++)a[e].style.color=o,a[e].style.textDecoration="line-through",a[e].style.backgroundColor=r,a[e].style.border="none";l.style.textDecoration="none",l.style.backgroundColor="red",l.style.color="blue"}))}))},X=()=>{H("dracula"),O("#D8DEE9","#1e1f29"),j("#282a36","282a36"),z("#31333f","#31333f"),G("#D8DEE9","#1e1f29","#FF6E67"),K("#1e1f29","#FF6E67","#D8DEE9"),N("#D8DEE9","#21232C","#282a36","#3C3E4A","#5AF78E","#282a36"),R("#AEB4D5"),V("#1e1f29","#5AF78E","#5AF78E"),J("#FF6E67","#242829"),Q("#8C8E9A","#1e1f29","#6272a4","#282a36","#282a36"),U("#5AF78E","#282a36","#646672","#1e1f29"),W("#5AF78E","#1e1f29","#8C8E9A","#282a36","#282a36")},Y=()=>{H("gruvHard"),O("#c8ccd4","#1D2021"),j("#242829","#242829"),G("#c8ccd4","#1D2021","#83a598"),K("#242829","#83a598","#c8ccd4"),z("#2E3233","#2E3233"),N("#83a598","#2E3233","#242829","#83a598","#83a598","#242829"),R("#C3C7CF"),J("#242829","#A3BE8C"),V("#1D2021","#83a598","#83a598"),Q("#6D7071","#1D2021","#665c54","#1D2021","#242829"),U("#EBCB8B","#242829","#6D7071","#1D2021"),W("#83a598","#1D2021","#6D7071","#242829","#242829","#1D2021")},Z=()=>{H("dark"),O("#f9fcfb","#1E222A"),j("#23272f","#23272f"),z("#2a2e36","#2a2e36"),G("#E78992","#1E222A","#E78992"),K("#f9fcfb","#1E222A","#61afef"),J("#1E222A","#61afef"),N("#f9fcfb","#2C323B","#4a5460","#40464F","#61afef","#2C323B"),R("#C3C7CF"),V("#1E222A","#61afef","#61afef"),Q("#787C84","#1E222A","#FF6E67","#1E222A","#23272f"),U("#A3BE8C","#23272f","#787C84","#1E222A"),W("#FF6E67","#1E222A","#787C84","#2a2e36","#2a2e36","#1E222A")},ee=()=>{H("light"),O("#545E6A","white"),j("white","#fafafa"),z("white","#fafafa"),G("#545E6A","#C0E4FE","#545e6a"),K("#FD8A89","#FFD9D8","white"),J("#545e6a","#C0E4FE"),N("white","#545E6A","#4a5460","#C0E4FE","#545E6A","white"),R("#545e6a"),V("#f0f0f0","#C0E4FE","#545e6a"),Q("#82868E","white","#545e6a","white","#fafafa"),U("#8deeb9","#f0f0f0","#82868E","white"),W("#545e6a","white","#545e6a","#8deeb9","#8deeb9")},te=()=>{H("nord"),O("#D8DEE9","#282E3A"),j("#2E3440","#2E3440"),z("#434C5E","#434C5E"),G("#81A1C1","#282E3A","#81A1C1"),K("#2E3440","#A3BE8C","#D8DEE9"),N("#D8DEE9","#2C313D","#2E3440","#81A1C1","#D8DEE9","#2C313D"),R("#c8ccd4"),J("#EBCB8B","#3C3E4A"),V("#282E3A","#81A1C1","#81A1C1"),Q("#8C929E","#282E3A","#81A1C1","#2E3440","#2E3440"),U("#BF616A","#2E3440","#8C929E","#282E3A"),W("#EBCB8B","#282E3A","#8C929E","#2E3440","#2E3440","#282E3A")};k.addEventListener("click",ee),f.addEventListener("click",Z),g.addEventListener("click",te),m.addEventListener("click",X),C.addEventListener("click",Y);let oe=document.querySelector(".sound_Settings");const re=e=>{let t=document.createElement("p");t.classList.add("timer_audio"),t.textContent=e,oe.appendChild(t)};let le=["cocGame","siren","yooo","pikachuu","angryBird","gnuReload"];(()=>{for(let e=0;e<le.length;e++)re(le[e])})();let ce=document.querySelectorAll(".timer_audio");ce.forEach((e=>{e.addEventListener("mouseover",(()=>{e.style.backgroundColor="#545E6A",e.style.cursor="pointer",e.style.color="white"})),e.addEventListener("mouseout",(()=>{e.style.backgroundColor="#fafafa",e.style.cursor="default",e.style.color="#545E6A"})),e.addEventListener("click",(()=>{for(let e=0;e<le.length;e++)ce[e].style.border="none",ce[e].style.color="#82868E",ce[e].style.textDecoration="line-through";e.style.textDecoration="none",e.style.color="#545E6A",e.style.border="5px dotted #545E6A",e.style.backgroundColor="pink";let t=document.querySelector("#dingding");he=e.innerText,localStorage.savedSound=he,t.setAttribute("src",`./assets/sounds/${he}.mp3`),ne()}))}));let ae=document.querySelector(".timerText");const ne=()=>{let e=document.querySelector("#dingding");null!=localStorage.savedSound&&(e.setAttribute("src",`./assets/sounds/${localStorage.savedSound}.mp3`),e.play()),e.play()},se=(e,t)=>{let o;e<10?o=`0${e} : ${t}`:t<10&&(o=`${e} : 0${t}`),o=`${e} : ${t}`,ae.textContent=o},de=()=>{ae.style.backgroundImage="url('https://media1.tenor.com/images/5fe35bec1c80a880bf59ae32a9716ace/tenor.gif?itemid=8953038')",ae.textContent=">:("},ue=()=>{let e=document.querySelector(".score"),t=parseInt(e.textContent)/5e4*100,o=document.querySelector(".scoreInnerCircle"),r=2*o.r.baseVal.value*Math.PI;o.style.strokeDasharray=r,o.style.strokeDashoffset=r-t/100*r},ye=e=>{D.textContent=e<10?`0${e} : 00`:`${e} : 00`},ie=()=>{let e=(qe-Ae/60)/qe*100,t=document.querySelector(".innerC"),o=2*t.r.baseVal.value*Math.PI;t.style.strokeDasharray=o,t.style.strokeDashoffset=o-e/100*o};[c,a].forEach((e=>{e.addEventListener("click",(()=>(ae.style.animation=" none",ae.style.backgroundImage="none","reset"===e.className?(Se="reset",clearInterval(ke),Ae=60*qe,se(qe,0),void ie()):(Se="start",new Audio("./assets/sounds/tick.mp3").play(),clearInterval(ke),void pe()))))}));let Ee=0;l.addEventListener("click",(()=>{Ee++,Se=Ee%2==0?"resume":"pause","pause"==Se?(()=>{Ae!==60*qe&&0!==Ae||de(),Se="pause",fe=Ae,clearInterval(ke);const e=Math.floor(fe/60);se(e,fe%60)})():(Ae!==60*qe&&0!==Ae||de(),Se="pause",Ae!=60*qe&&pe())})),i.addEventListener("mouseover",(()=>i.style.textDecoration="underline")),i.addEventListener("mouseout",(()=>i.style.textDecoration="none")),i.addEventListener("click",(()=>{[d,u,a,b,p,h,r].forEach((e=>e.style.display="none")),E.style.display="flex"}));const me=()=>{[d,u,a,r].forEach((e=>{e.style.display=""})),[E,b,p,h].forEach((e=>e.style.display="none"))};S.addEventListener("click",(()=>me())),q.addEventListener("click",(()=>([d,u,a,E,p,h,r].forEach((e=>{e.style.display="none"})),void(b.style.display="block")))),L.addEventListener("click",(()=>([E,b,d,u,a,h,r].forEach((e=>{e.style.display="none"})),void(p.style.display="block")))),v.addEventListener("click",(()=>([d,u,a,E,p,b,r].forEach((e=>{e.style.display="none"})),void(h.style.display="grid")))),F.addEventListener("click",(()=>{qe++,ye(qe),se(qe,0)})),x.addEventListener("click",(()=>{qe>1&&(qe--,ye(qe),se(qe,0))})),I.addEventListener("click",(()=>{[B,w].forEach((e=>{e.style.backgroundColor="#36404c"})),qe=25,ye(qe),I.style.backgroundColor="#4a5460"})),B.addEventListener("click",(()=>{[I,w].forEach((e=>{e.style.backgroundColor="#36404c"})),qe=5,ye(qe),B.style.backgroundColor="#4a5460"})),w.addEventListener("click",(()=>{[B,I].forEach((e=>{e.style.backgroundColor="#36404c"})),qe=25,ye(qe),w.style.backgroundColor="#4a5460"})),P.addEventListener("click",(()=>me()));let ge=document.querySelector(".navBarLinks");A.addEventListener("click",(()=>ge.classList.toggle("show")));const Ce=(e,t,o)=>{const r=document.querySelector("."+e);r.setAttribute("title",t);const l=document.createElement("i");l.classList.add("fas",o,"fa-lg"),r.appendChild(l)};let fe,ke,Se,be=0,ve="lightTheme",he="yooo";(()=>{switch(be=localStorage.getItem("savedScore"),ve=localStorage.getItem("savedTheme"),he=localStorage.getItem("savedSound"),0==localStorage.length?(be=0,localStorage.savedScore=0):3==localStorage.length&&document.querySelector("#dingding").setAttribute("src",`./assets/sounds/${he}.mp3`),y.innerText=`${be}`,ve){case"dark":Z();break;case"light":ee();break;case"dracula":X();break;case"nord":te();break;case"gruvHard":Y()}})(),Ce("start","start","fa-play"),Ce("reset","reset","fa-redo"),Ce("pause","pause","fa-stop");let qe=25,Ae=60*qe;const Le=()=>{var e;e=ke,0==Ae&&(clearInterval(e),ne(),be=parseInt(be),be+=4*qe,ue(),y.innerText=`${be}`,localStorage.setItem("savedScore",be),localStorage.setItem("savedTheme",ve),localStorage.setItem("savedSound",he));const t=Math.floor(Ae/60),o=Ae%60;0!==Ae?(se(t,o),Ae--,ie()):se(t,o)},pe=()=>{Ae="pause"==Se?fe:60*qe,ke=setInterval(Le,1e3)};ue(),n.addEventListener("click",(()=>{_++,_%2!=0?Z():ee()}))}},t={};function o(r){if(t[r])return t[r].exports;var l=t[r]={exports:{}};return e[r](l,l.exports,o),l.exports}o.d=(e,t)=>{for(var r in t)o.o(t,r)&&!o.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},o.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),o(21)})();