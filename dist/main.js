(()=>{var e={21:(e,t,o)=>{"use strict";o.d(t,{gz:()=>Se,sS:()=>qe,rC:()=>me,DH:()=>pe,HT:()=>ge,m1:()=>Ce,_:()=>ve,LK:()=>Ee,g1:()=>be,E5:()=>ke});const r=document.querySelector(".flexMain"),l=document.querySelector(".pause"),c=document.querySelector(".start"),a=document.querySelector(".reset"),n=document.querySelector(".fa-adjust"),s=document.querySelector("body"),d=document.querySelector(".squareBox"),u=document.querySelector(".sessionBtns"),y=document.querySelector(".score"),i=document.querySelector(".settingsBtn"),f=document.querySelector(".settingsPage"),m=document.querySelector(".defaultDark"),g=document.querySelector(".defaultLight"),S=document.querySelector(".brandLogo"),E=document.querySelector(".aboutPage"),k=document.querySelector(".dashboardLink"),b=document.querySelector(".dashboardPage"),v=document.querySelector(".aboutBtn"),C=document.querySelector(".menulink-toggle"),q=document.querySelector(".modesLink"),h=document.querySelector(".modesDiv"),p=document.querySelector(".modeCurrentTime"),L=document.querySelector(".increaseTimeArrow"),A=document.querySelector(".decreaseTimeArrow"),I=document.querySelector(".breakMode"),x=document.querySelector(".defaultMode"),D=document.querySelector(".automaticMode"),B=document.querySelector(".timerModes"),P=document.querySelector(".modeSettings"),w=document.querySelector(".increaseTimeChevron"),F=document.querySelector(".saveBtnFLex");document.querySelector(".timerSoundsDiv");let M=document.querySelector(".sound_Settings");const T=e=>{let t=document.createElement("p");t.classList.add("timer_audio"),t.textContent=e,M.appendChild(t)},$=["cocGame","siren","yooo","pikachuu","angryBird","gnuReload","piano","vasco_shot","pizzaro"];(()=>{for(let e=0;e<$.length;e++)T($[e])})();let _=document.querySelectorAll(".timer_audio");_.forEach((e=>{e.addEventListener("mouseover",(()=>{e.style.backgroundColor="#545E6A",e.style.cursor="pointer",e.style.color="white"})),e.addEventListener("mouseout",(()=>{e.style.backgroundColor="#fafafa",e.style.cursor="default",e.style.color="#545E6A"})),e.addEventListener("click",(()=>{for(let e=0;e<$.length;e++)_[e].style.border="none",_[e].style.color="#82868E",_[e].style.textDecoration="line-through";e.style.textDecoration="none",e.style.color="#545E6A",e.style.border="5px dotted #545E6A",e.style.backgroundColor="pink";let t=document.querySelector("#dingding");be=e.innerText,localStorage.savedSound=be,t.setAttribute("src",`./assets/sounds/${be}.mp3`),te()}))}));let O=0;const j=e=>{ke=e,localStorage.savedTheme=e},z=(e,t)=>{s.style.backgroundColor=t,s.style.color=e},H=(e,t)=>{d.style.backgroundColor=e,d.style.borderColor=t},K=(e,t,o)=>{let r=document.querySelector(".innerC"),l=document.querySelector(".outerC"),c=document.querySelector("svg");l.style.stroke=e,r.style.stroke=t,c.style.fill=o},R=(e,t)=>{u.style.backgroundColor=e,u.style.borderColor=t},U=(e,t,o)=>{[c,l].forEach((r=>{r.style.backgroundColor=t,r.style.color=e,r.addEventListener("mouseover",(()=>{r.style.backgroundColor=o,r.style.color=t})),r.addEventListener("mouseout",(()=>{r.style.backgroundColor=t,r.style.color=e}))}))},V=(e,t,o)=>{a.style.backgroundColor=t,a.style.color=e,a.addEventListener("mouseover",(()=>{a.style.backgroundColor=o})),a.addEventListener("mouseout",(()=>{a.style.backgroundColor=t}))},W=(e,t,o,r,l,c)=>{B.style.backgroundColor=t,[x,I,D].forEach((o=>{o.style.color=e,o.style.backgroundColor=t,o.addEventListener("click",(()=>{}))})),x.addEventListener("click",(()=>{[I,D].forEach((e=>{e.style.backgroundColor=t})),x.style.backgroundColor=o})),I.addEventListener("click",(()=>{[x,D].forEach((e=>{e.style.backgroundColor=t})),I.style.backgroundColor=o})),D.addEventListener("click",(()=>{[x,I].forEach((e=>{e.style.backgroundColor=t})),D.style.backgroundColor=o})),P.style.backgroundColor=r,p.style.color=l,p.style.backgroundColor=c,[L,A,w].forEach((e=>{e.style.backgroundColor=c,e.style.color=l,e!=w&&(e.addEventListener("mouseover",(()=>{e.style.backgroundColor=l,e.style.color=c})),e.addEventListener("mouseout",(()=>{e.style.backgroundColor=c,e.style.color=l})))})),x.style.backgroundColor=o,F.style.backgroundColor=t,F.style.color=e,F.addEventListener("mouseover",(()=>{F.style.backgroundColor=o,F.style.color=e})),F.addEventListener("mouseout",(()=>{F.style.backgroundColor=t,F.style.color=e}))},Y=(e,t)=>{document.querySelectorAll("li").forEach((t=>{t.style.color=e})),document.querySelectorAll("h2").forEach((e=>{e.style.color=t,e.style.borderColor=t}))},G=(e,t)=>{let o=document.querySelector(".settingsbtn");o.style.color=e,o.style.backgroundColor=t},N=(e,t,o,r,l)=>{document.querySelector(".dashboardPage").style.backgroundColor=l,document.querySelectorAll(".currentScore").forEach((o=>{o.style.color=e,o.style.backgroundColor=t}));let c=document.querySelector(".score");c.style.backgroundColor=o,c.style.color=r},X=(e,t,o,r)=>{let l=document.querySelector(".scoreProgress"),c=document.querySelector(".scoreInnerCircle"),a=document.querySelector(".scoreOuterCircle"),n=document.querySelector(".scoreCircle");c.style.stroke=e,a.style.stroke=t,n.style.fill=o,l.style.backgroundColor=r},Z=(e,t,o,r,l)=>{let c=document.querySelector(".sound_Settings");c.style.backgroundColor=l,c.style.color=o;let a=document.querySelectorAll(".timer_audio");a.forEach((l=>{l.style.backgroundColor=r,l.addEventListener("mouseover",(()=>{l.style.backgroundColor=t,l.style.color=e})),l.addEventListener("mouseout",(()=>{l.style.backgroundColor=r,l.style.color=o})),l.addEventListener("click",(()=>{for(let e=0;e<$.length;e++)a[e].style.color=o,a[e].style.textDecoration="line-through",a[e].style.backgroundColor=r,a[e].style.border="none";l.style.textDecoration="none",l.style.backgroundColor="red",l.style.color="blue"}))}))},J=()=>{j("dark"),z("#f9fcfb","#1E222A"),H("#23272f","#23272f"),R("#2a2e36","#2a2e36"),U("#E78992","#1E222A","#E78992"),V("#f9fcfb","#1E222A","#61afef"),G("#1E222A","#61afef"),W("#f9fcfb","#2C323B","#4a5460","#40464F","#61afef","#2C323B"),Y("#C3C7CF","#AAAEB6"),K("#1E222A","#61afef","#61afef"),N("#787C84","#1E222A","#FF6E67","#1E222A","#23272f"),X("#A3BE8C","#23272f","#787C84","#1E222A"),Z("#FF6E67","#1E222A","#787C84","#2a2e36","#2a2e36","#1E222A"),se()},Q=()=>{j("light"),z("#545E6A","#ffffff"),H("#ffffff","#fafafa"),R("#ffffff","#fafafa"),U("#545E6A","#C0E4FE","#545e6a"),V("#FD8A89","#FFD9D8","#ffffff"),G("#545e6a","#C0E4FE"),W("#ffffff","#545E6A","#4a5460","#C0E4FE","#545E6A","#ffffff"),Y("#545e6a","#3C3E4A"),K("#f0f0f0","#C0E4FE","#545e6a"),N("#82868E","#ffffff","#545e6a","#ffffff","#fafafa"),X("#8deeb9","#f0f0f0","#82868E","#ffffff"),Z("#545e6a","#ffffff","#545e6a","#8deeb9","#8deeb9"),se()};g.addEventListener("click",Q),m.addEventListener("click",J);let ee=document.querySelector(".timerText");const te=()=>{let e=document.querySelector("#dingding");null!=localStorage.savedSound&&(e.setAttribute("src",`./assets/sounds/${localStorage.savedSound}.mp3`),e.play()),e.play()},oe=(e,t)=>{let o;e<10?o=`0${e} : ${t}`:t<10&&(o=`${e} : 0${t}`),o=`${e} : ${t}`,ee.textContent=o},re=()=>{ee.style.backgroundImage="url('https://media1.tenor.com/images/5fe35bec1c80a880bf59ae32a9716ace/tenor.gif?itemid=8953038')",ee.textContent=">:("},le=()=>{localStorage.setItem("savedScore",Ee),localStorage.setItem("savedTheme",ke),localStorage.setItem("savedSound",be)},ce=()=>{let e=document.querySelector(".score"),t=parseInt(e.textContent)/5e4*100,o=document.querySelector(".scoreInnerCircle"),r=2*o.r.baseVal.value*Math.PI;o.style.strokeDasharray=r,o.style.strokeDashoffset=r-t/100*r},ae=e=>{p.textContent=e<10?`0${e} : 00`:`${e} : 00`},ne=()=>{let e=(Ce-qe/60)/Ce*100,t=document.querySelector(".innerC"),o=2*t.r.baseVal.value*Math.PI;t.style.strokeDasharray=o,t.style.strokeDashoffset=o-e/100*o};const se=()=>{let e="#"+document.querySelector("body").style.backgroundColor.match(/\d+/g).map((e=>(+e).toString(16).padStart(2,0))).join``;var t;document.querySelector(".aboutCaption").style.backgroundColor=(t="light"!=ke?7:-6,"#"+e.replace(/^#/,"").replace(/../g,(e=>("0"+Math.min(255,Math.max(0,parseInt(e,16)+t)).toString(16)).substr(-2))))};let de=document.querySelector(".auth_Div");[c,a].forEach((e=>{e.addEventListener("click",(()=>(ee.style.animation=" none",ee.style.backgroundImage="none","reset"===e.className?(Se="reset",clearInterval(ge),qe=60*Ce,oe(Ce,0),void ne()):(Se="start",new Audio("./assets/sounds/tick.mp3").play(),clearInterval(ge),void pe()))))}));let ue=0;l.addEventListener("click",(()=>{ue++,Se=ue%2==0?"resume":"pause","pause"==Se?(()=>{qe!==60*Ce&&0!==qe||re(),Se="pause",me=qe,clearInterval(ge);const e=Math.floor(me/60);oe(e,me%60)})():(qe!==60*Ce&&0!==qe||re(),Se="pause",qe!=60*Ce&&pe())})),i.addEventListener("mouseover",(()=>i.style.textDecoration="underline")),i.addEventListener("mouseout",(()=>i.style.textDecoration="none")),i.addEventListener("click",(()=>{[d,u,a,E,h,b,r,de].forEach((e=>e.style.display="none")),f.style.display="flex"}));const ye=()=>{[d,u,a,r].forEach((e=>{e.style.display=""})),[f,E,h,b,de].forEach((e=>e.style.display="none"))};S.addEventListener("click",(()=>ye())),v.addEventListener("click",(()=>([d,u,a,f,h,b,r,de].forEach((e=>{e.style.display="none"})),void(E.style.display="block")))),q.addEventListener("click",(()=>([f,E,d,u,a,b,r,de].forEach((e=>{e.style.display="none"})),void(h.style.display="block")))),k.addEventListener("click",(()=>([d,u,a,f,h,E,r,de].forEach((e=>{e.style.display="none"})),void(b.style.display="grid")))),L.addEventListener("click",(()=>{Ce++,ae(Ce),oe(Ce,0)})),A.addEventListener("click",(()=>{Ce>1&&(Ce--,ae(Ce),oe(Ce,0))})),x.addEventListener("click",(()=>{[I,D].forEach((e=>{e.style.backgroundColor="#36404c"})),Ce=25,ae(Ce),x.style.backgroundColor="#4a5460",ve="default"})),I.addEventListener("click",(()=>{[x,D].forEach((e=>{e.style.backgroundColor="#36404c"})),Ce=5,ae(Ce),I.style.backgroundColor="#4a5460",ve="break"})),D.addEventListener("click",(()=>{[I,x].forEach((e=>{e.style.backgroundColor="#36404c"})),Ce=25,ae(Ce),D.style.backgroundColor="#4a5460",ve="automatic"})),F.addEventListener("click",(()=>ye()));let ie=document.querySelector(".navBarLinks");C.addEventListener("click",(()=>ie.classList.toggle("show")));const fe=(e,t,o)=>{const r=document.querySelector("."+e);r.setAttribute("title",t);const l=document.createElement("i");l.classList.add("fas",o,"fa-lg"),r.appendChild(l)};o(912);let me,ge,Se,Ee=0,ke="lightTheme",be="yooo",ve="default";(()=>{switch(Ee=localStorage.getItem("savedScore"),ke=localStorage.getItem("savedTheme"),be=localStorage.getItem("savedSound"),0==localStorage.length||null==localStorage.savedScore?(Ee=0,localStorage.savedScore=0,le()):3==localStorage.length&&document.querySelector("#dingding").setAttribute("src",`./assets/sounds/${be}.mp3`),y.innerText=`${Ee}`,ke){case"dark":J();break;case"light":Q()}})(),fe("start","start","fa-play"),fe("reset","reset","fa-redo"),fe("pause","pause","fa-stop");let Ce=25,qe=60*Ce;const he=()=>{0==qe&&(clearInterval(ge),te(),"default"==ve&&(Ee=parseInt(Ee),Ee+=4*Ce,ce(),y.innerText=`${Ee}`,le()));const e=Math.floor(qe/60),t=qe%60;0!==qe?(oe(e,t),qe--,ne()):oe(e,t)},pe=()=>{qe="pause"==Se?me:60*Ce,ge=setInterval(he,1e3)};ce(),n.addEventListener("click",(()=>{O++,O%2!=0?J():Q()}))},912:()=>{firebase.initializeApp({apiKey:"AIzaSyAk8kebOX8MDqtYYyy7sAdd4fsZa4R8M0s",authDomain:"pomoreward.firebaseapp.com",projectId:"pomoreward",storageBucket:"pomoreward.appspot.com",messagingSenderId:"319256565665",appId:"1:319256565665:web:62d73e7fb1a493d51d5de0"});const e=firebase.auth();e.onAuthStateChanged((e=>{if(e){var t=e.email;console.log(t)}}));let t=document.getElementById("signInBtn"),o=document.getElementById("signOutBtn");document.getElementById("signUpBtn").addEventListener("click",(()=>{(()=>{let t=document.querySelector("#userEmail"),o=document.querySelector("#userPassword");e.createUserWithEmailAndPassword(t.value,o.value).catch((e=>alert(e.message)))})()})),t.addEventListener("click",(()=>{(()=>{let t=document.querySelector("#userEmail"),o=document.querySelector("#userPassword");e.signInWithEmailAndPassword(t.value,o.value).catch((e=>alert(e.message))),console.log("signed in! "+t.value)})()})),o.addEventListener("click",(()=>{e.signOut,alert("Signed out :<")}));let r=document.querySelector(".userStatus"),l=document.querySelector(".auth_Div");const c=document.querySelector(".settingsPage"),a=document.querySelector(".dashboardPage"),n=document.querySelector(".modesDiv"),s=document.querySelector(".aboutPage"),d=document.querySelector(".reset"),u=document.querySelector(".squareBox"),y=document.querySelector(".sessionBtns"),i=document.querySelector(".flexMain");r.addEventListener("click",(()=>{[c,s,u,y,d,a,i,n].forEach((e=>{e.style.display="none"})),l.style.display="grid"}))}},t={};function o(r){if(t[r])return t[r].exports;var l=t[r]={exports:{}};return e[r](l,l.exports,o),l.exports}o.d=(e,t)=>{for(var r in t)o.o(t,r)&&!o.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},o.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),o(21)})();