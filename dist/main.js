(()=>{"use strict";var e={21:(e,t,o)=>{o.d(t,{gz:()=>Se,sS:()=>qe,rC:()=>fe,DH:()=>De,HT:()=>ke,m1:()=>Ae,LK:()=>be,g1:()=>he,E5:()=>ve});const r=document.querySelector(".flexMain"),l=document.querySelector(".pause"),c=document.querySelector(".start"),a=document.querySelector(".reset"),n=document.querySelector(".fa-adjust"),s=document.querySelector("body"),d=document.querySelector(".squareBox"),u=document.querySelector(".sessionBtns"),y=document.querySelector(".score"),i=document.querySelector(".settingsBtn"),E=document.querySelector(".settingsPage"),m=document.querySelector(".dracula"),g=document.querySelector(".nord"),C=document.querySelector(".gruvHard"),f=document.querySelector(".defaultDark"),k=document.querySelector(".defaultLight"),S=document.querySelector(".brandLogo"),b=document.querySelector(".aboutPage"),v=document.querySelector(".dashboardLink"),h=document.querySelector(".dashboardPage"),A=document.querySelector(".aboutBtn"),q=document.querySelector(".menulink-toggle"),L=document.querySelector(".modesLink"),D=document.querySelector(".modesDiv"),p=document.querySelector(".modeCurrentTime"),F=document.querySelector(".increaseTimeArrow"),x=document.querySelector(".decreaseTimeArrow"),B=document.querySelector(".breakMode"),I=document.querySelector(".defaultMode"),w=document.querySelector(".automaticMode"),T=document.querySelector(".timerModes"),$=document.querySelector(".modeSettings"),M=document.querySelector(".increaseTimeChevron"),P=document.querySelector(".saveBtnFLex");document.querySelector(".timerSoundsDiv");let H=document.querySelector(".sound_Settings");const _=e=>{let t=document.createElement("p");t.classList.add("timer_audio"),t.textContent=e,H.appendChild(t)},O=["cocGame","siren","yooo","pikachuu","angryBird","gnuReload"];(()=>{for(let e=0;e<O.length;e++)_(O[e])})();let j=document.querySelectorAll(".timer_audio");j.forEach((e=>{e.addEventListener("mouseover",(()=>{e.style.backgroundColor="#545E6A",e.style.cursor="pointer",e.style.color="white"})),e.addEventListener("mouseout",(()=>{e.style.backgroundColor="#fafafa",e.style.cursor="default",e.style.color="#545E6A"})),e.addEventListener("click",(()=>{for(let e=0;e<O.length;e++)j[e].style.border="none",j[e].style.color="#82868E",j[e].style.textDecoration="line-through";e.style.textDecoration="none",e.style.color="#545E6A",e.style.border="5px dotted #545E6A",e.style.backgroundColor="pink";let t=document.querySelector("#dingding");he=e.innerText,localStorage.savedSound=he,t.setAttribute("src",`./assets/sounds/${he}.mp3`),ne()}))}));let V=0;const z=e=>{ve=e,localStorage.savedTheme=e},G=(e,t)=>{s.style.backgroundColor=t,s.style.color=e},K=(e,t)=>{d.style.backgroundColor=e,d.style.borderColor=t},N=(e,t,o)=>{let r=document.querySelector(".innerC"),l=document.querySelector(".outerC"),c=document.querySelector("svg");l.style.stroke=e,r.style.stroke=t,c.style.fill=o},R=(e,t)=>{u.style.backgroundColor=e,u.style.borderColor=t},J=(e,t,o)=>{[c,l].forEach((r=>{r.style.backgroundColor=t,r.style.color=e,r.addEventListener("mouseover",(()=>{r.style.backgroundColor=o,r.style.color=t})),r.addEventListener("mouseout",(()=>{r.style.backgroundColor=t,r.style.color=e}))}))},Q=(e,t,o)=>{a.style.backgroundColor=t,a.style.color=e,a.addEventListener("mouseover",(()=>{a.style.backgroundColor=o})),a.addEventListener("mouseout",(()=>{a.style.backgroundColor=t}))},U=(e,t,o,r,l,c)=>{T.style.backgroundColor=t,[I,B,w].forEach((o=>{o.style.color=e,o.style.backgroundColor=t,o.addEventListener("click",(()=>{}))})),I.addEventListener("click",(()=>{[B,w].forEach((e=>{e.style.backgroundColor=t})),I.style.backgroundColor=o})),B.addEventListener("click",(()=>{[I,w].forEach((e=>{e.style.backgroundColor=t})),B.style.backgroundColor=o})),w.addEventListener("click",(()=>{[I,B].forEach((e=>{e.style.backgroundColor=t})),w.style.backgroundColor=o})),$.style.backgroundColor=r,p.style.color=l,p.style.backgroundColor=c,[F,x,M].forEach((e=>{e.style.backgroundColor=c,e.style.color=l,e!=M&&(e.addEventListener("mouseover",(()=>{e.style.backgroundColor=l,e.style.color=c})),e.addEventListener("mouseout",(()=>{e.style.backgroundColor=c,e.style.color=l})))})),I.style.backgroundColor=o,P.style.backgroundColor=t,P.style.color=e,P.addEventListener("mouseover",(()=>{P.style.backgroundColor=o,P.style.color=e})),P.addEventListener("mouseout",(()=>{P.style.backgroundColor=t,P.style.color=e}))},W=(e,t)=>{document.querySelectorAll("li").forEach((t=>{t.style.color=e})),document.querySelectorAll("h2").forEach((e=>{e.style.color=t,e.style.borderColor=t}))},X=(e,t)=>{let o=document.querySelector(".settingsbtn");o.style.color=e,o.style.backgroundColor=t},Y=(e,t,o,r,l)=>{document.querySelector(".dashboardPage").style.backgroundColor=l,document.querySelectorAll(".currentScore").forEach((o=>{o.style.color=e,o.style.backgroundColor=t}));let c=document.querySelector(".score");c.style.backgroundColor=o,c.style.color=r},Z=(e,t,o,r)=>{let l=document.querySelector(".scoreProgress"),c=document.querySelector(".scoreInnerCircle"),a=document.querySelector(".scoreOuterCircle"),n=document.querySelector(".scoreCircle");c.style.stroke=e,a.style.stroke=t,n.style.fill=o,l.style.backgroundColor=r},ee=(e,t,o,r,l)=>{let c=document.querySelector(".sound_Settings");c.style.backgroundColor=l,c.style.color=o;let a=document.querySelectorAll(".timer_audio");a.forEach((l=>{l.style.backgroundColor=r,l.addEventListener("mouseover",(()=>{l.style.backgroundColor=t,l.style.color=e})),l.addEventListener("mouseout",(()=>{l.style.backgroundColor=r,l.style.color=o})),l.addEventListener("click",(()=>{for(let e=0;e<O.length;e++)a[e].style.color=o,a[e].style.textDecoration="line-through",a[e].style.backgroundColor=r,a[e].style.border="none";l.style.textDecoration="none",l.style.backgroundColor="red",l.style.color="blue"}))}))},te=()=>{z("dracula"),G("#D8DEE9","#1e1f29"),K("#282a36","282a36"),R("#31333f","#31333f"),J("#D8DEE9","#1e1f29","#FF6E67"),Q("#1e1f29","#FF6E67","#D8DEE9"),U("#D8DEE9","#21232C","#282a36","#3C3E4A","#5AF78E","#282a36"),W("#AEB4D5","#82838D"),N("#1e1f29","#5AF78E","#5AF78E"),X("#FF6E67","#242829"),Y("#8C8E9A","#1e1f29","#6272a4","#282a36","#282a36"),Z("#5AF78E","#282a36","#646672","#1e1f29"),ee("#5AF78E","#1e1f29","#8C8E9A","#282a36","#282a36")},oe=()=>{z("gruvHard"),G("#c8ccd4","#1D2021"),K("#242829","#242829"),J("#c8ccd4","#1D2021","#83a598"),Q("#242829","#83a598","#c8ccd4"),R("#2E3233","#2E3233"),U("#83a598","#2E3233","#242829","#83a598","#83a598","#242829"),W("#C3C7CF","#A9ACAD"),X("#242829","#A3BE8C"),N("#1D2021","#83a598","#83a598"),Y("#6D7071","#1D2021","#665c54","#1D2021","#242829"),Z("#EBCB8B","#242829","#6D7071","#1D2021"),ee("#83a598","#1D2021","#6D7071","#242829","#242829","#1D2021")},re=()=>{z("dark"),G("#f9fcfb","#1E222A"),K("#23272f","#23272f"),R("#2a2e36","#2a2e36"),J("#E78992","#1E222A","#E78992"),Q("#f9fcfb","#1E222A","#61afef"),X("#1E222A","#61afef"),U("#f9fcfb","#2C323B","#4a5460","#40464F","#61afef","#2C323B"),W("#C3C7CF","#AAAEB6"),N("#1E222A","#61afef","#61afef"),Y("#787C84","#1E222A","#FF6E67","#1E222A","#23272f"),Z("#A3BE8C","#23272f","#787C84","#1E222A"),ee("#FF6E67","#1E222A","#787C84","#2a2e36","#2a2e36","#1E222A")},le=()=>{z("light"),G("#545E6A","white"),K("white","#fafafa"),R("white","#fafafa"),J("#545E6A","#C0E4FE","#545e6a"),Q("#FD8A89","#FFD9D8","white"),X("#545e6a","#C0E4FE"),U("white","#545E6A","#4a5460","#C0E4FE","#545E6A","white"),W("#545e6a","#3C3E4A"),N("#f0f0f0","#C0E4FE","#545e6a"),Y("#82868E","white","#545e6a","white","#fafafa"),Z("#8deeb9","#f0f0f0","#82868E","white"),ee("#545e6a","white","#545e6a","#8deeb9","#8deeb9")},ce=()=>{z("nord"),G("#D8DEE9","#282E3A"),K("#2E3440","#2E3440"),R("#434C5E","#434C5E"),J("#81A1C1","#282E3A","#81A1C1"),Q("#2E3440","#A3BE8C","#D8DEE9"),U("#D8DEE9","#2C313D","#2E3440","#81A1C1","#D8DEE9","#2C313D"),W("#c8ccd4","#8C929E"),X("#EBCB8B","#3C3E4A"),N("#282E3A","#81A1C1","#81A1C1"),Y("#8C929E","#282E3A","#81A1C1","#2E3440","#2E3440"),Z("#BF616A","#2E3440","#8C929E","#282E3A"),ee("#EBCB8B","#282E3A","#8C929E","#2E3440","#2E3440","#282E3A")};k.addEventListener("click",le),f.addEventListener("click",re),g.addEventListener("click",ce),m.addEventListener("click",te),C.addEventListener("click",oe);let ae=document.querySelector(".timerText");const ne=()=>{let e=document.querySelector("#dingding");null!=localStorage.savedSound&&(e.setAttribute("src",`./assets/sounds/${localStorage.savedSound}.mp3`),e.play()),e.play()},se=(e,t)=>{let o;e<10?o=`0${e} : ${t}`:t<10&&(o=`${e} : 0${t}`),o=`${e} : ${t}`,ae.textContent=o},de=()=>{ae.style.backgroundImage="url('https://media1.tenor.com/images/5fe35bec1c80a880bf59ae32a9716ace/tenor.gif?itemid=8953038')",ae.textContent=">:("},ue=()=>{let e=document.querySelector(".score"),t=parseInt(e.textContent)/5e4*100,o=document.querySelector(".scoreInnerCircle"),r=2*o.r.baseVal.value*Math.PI;o.style.strokeDasharray=r,o.style.strokeDashoffset=r-t/100*r},ye=e=>{p.textContent=e<10?`0${e} : 00`:`${e} : 00`},ie=()=>{let e=(Ae-qe/60)/Ae*100,t=document.querySelector(".innerC"),o=2*t.r.baseVal.value*Math.PI;t.style.strokeDasharray=o,t.style.strokeDashoffset=o-e/100*o};[c,a].forEach((e=>{e.addEventListener("click",(()=>(ae.style.animation=" none",ae.style.backgroundImage="none","reset"===e.className?(Se="reset",clearInterval(ke),qe=60*Ae,se(Ae,0),void ie()):(Se="start",new Audio("./assets/sounds/tick.mp3").play(),clearInterval(ke),void De()))))}));let Ee=0;l.addEventListener("click",(()=>{Ee++,Se=Ee%2==0?"resume":"pause","pause"==Se?(()=>{qe!==60*Ae&&0!==qe||de(),Se="pause",fe=qe,clearInterval(ke);const e=Math.floor(fe/60);se(e,fe%60)})():(qe!==60*Ae&&0!==qe||de(),Se="pause",qe!=60*Ae&&De())})),i.addEventListener("mouseover",(()=>i.style.textDecoration="underline")),i.addEventListener("mouseout",(()=>i.style.textDecoration="none")),i.addEventListener("click",(()=>{[d,u,a,b,D,h,r].forEach((e=>e.style.display="none")),E.style.display="flex"}));const me=()=>{[d,u,a,r].forEach((e=>{e.style.display=""})),[E,b,D,h].forEach((e=>e.style.display="none"))};S.addEventListener("click",(()=>me())),A.addEventListener("click",(()=>([d,u,a,E,D,h,r].forEach((e=>{e.style.display="none"})),void(b.style.display="block")))),L.addEventListener("click",(()=>([E,b,d,u,a,h,r].forEach((e=>{e.style.display="none"})),void(D.style.display="block")))),v.addEventListener("click",(()=>([d,u,a,E,D,b,r].forEach((e=>{e.style.display="none"})),void(h.style.display="grid")))),F.addEventListener("click",(()=>{Ae++,ye(Ae),se(Ae,0)})),x.addEventListener("click",(()=>{Ae>1&&(Ae--,ye(Ae),se(Ae,0))})),I.addEventListener("click",(()=>{[B,w].forEach((e=>{e.style.backgroundColor="#36404c"})),Ae=25,ye(Ae),I.style.backgroundColor="#4a5460"})),B.addEventListener("click",(()=>{[I,w].forEach((e=>{e.style.backgroundColor="#36404c"})),Ae=5,ye(Ae),B.style.backgroundColor="#4a5460"})),w.addEventListener("click",(()=>{[B,I].forEach((e=>{e.style.backgroundColor="#36404c"})),Ae=25,ye(Ae),w.style.backgroundColor="#4a5460"})),P.addEventListener("click",(()=>me()));let ge=document.querySelector(".navBarLinks");q.addEventListener("click",(()=>ge.classList.toggle("show")));const Ce=(e,t,o)=>{const r=document.querySelector("."+e);r.setAttribute("title",t);const l=document.createElement("i");l.classList.add("fas",o,"fa-lg"),r.appendChild(l)};let fe,ke,Se,be=0,ve="lightTheme",he="yooo";(()=>{switch(be=localStorage.getItem("savedScore"),ve=localStorage.getItem("savedTheme"),he=localStorage.getItem("savedSound"),0==localStorage.length?(be=0,localStorage.savedScore=0):3==localStorage.length&&document.querySelector("#dingding").setAttribute("src",`./assets/sounds/${he}.mp3`),y.innerText=`${be}`,ve){case"dark":re();break;case"light":le();break;case"dracula":te();break;case"nord":ce();break;case"gruvHard":oe()}})(),Ce("start","start","fa-play"),Ce("reset","reset","fa-redo"),Ce("pause","pause","fa-stop");let Ae=25,qe=60*Ae;const Le=()=>{var e;e=ke,0==qe&&(clearInterval(e),ne(),be=parseInt(be),be+=4*Ae,ue(),y.innerText=`${be}`,localStorage.setItem("savedScore",be),localStorage.setItem("savedTheme",ve),localStorage.setItem("savedSound",he));const t=Math.floor(qe/60),o=qe%60;0!==qe?(se(t,o),qe--,ie()):se(t,o)},De=()=>{qe="pause"==Se?fe:60*Ae,ke=setInterval(Le,0)};ue(),n.addEventListener("click",(()=>{V++,V%2!=0?re():le()}))}},t={};function o(r){if(t[r])return t[r].exports;var l=t[r]={exports:{}};return e[r](l,l.exports,o),l.exports}o.d=(e,t)=>{for(var r in t)o.o(t,r)&&!o.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},o.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),o(21)})();