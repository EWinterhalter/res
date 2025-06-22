(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))r(t);new MutationObserver(t=>{for(const e of t)if(e.type==="childList")for(const i of e.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&r(i)}).observe(document,{childList:!0,subtree:!0});function a(t){const e={};return t.integrity&&(e.integrity=t.integrity),t.referrerPolicy&&(e.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?e.credentials="include":t.crossOrigin==="anonymous"?e.credentials="omit":e.credentials="same-origin",e}function r(t){if(t.ep)return;t.ep=!0;const e=a(t);fetch(t.href,e)}})();const d="/res/assets/me-BNIYZoMs.jpg";class h{constructor(n){this.patternSize=150,this.patternScaleX=1,this.patternScaleY=1,this.patternRefreshInterval=3,this.patternAlpha=15,this.canvas=n,this.ctx=this.canvas.getContext("2d"),this.ctx.scale(this.patternScaleX,this.patternScaleY),this.patternCanvas=document.createElement("canvas"),this.patternCanvas.width=this.patternSize,this.patternCanvas.height=this.patternSize,this.patternCtx=this.patternCanvas.getContext("2d"),this.patternData=this.patternCtx.createImageData(this.patternSize,this.patternSize),this.patternPixelDataLength=this.patternSize*this.patternSize*4,this.resize=this.resize.bind(this),this.loop=this.loop.bind(this),this.frame=0,window.addEventListener("resize",this.resize),this.resize(),window.requestAnimationFrame(this.loop)}resize(){this.canvas.width=window.innerWidth*devicePixelRatio,this.canvas.height=window.innerHeight*devicePixelRatio}update(){const{patternPixelDataLength:n,patternData:a,patternAlpha:r,patternCtx:t}=this;for(let e=0;e<n;e+=4){const i=Math.random()*255;a.data[e]=i,a.data[e+1]=i,a.data[e+2]=i,a.data[e+3]=r}t.putImageData(a,0,0)}draw(){const{ctx:n,patternCanvas:a,canvas:r,viewHeight:t}=this,{width:e,height:i}=r;n.clearRect(0,0,e,i),n.fillStyle=n.createPattern(a,"repeat"),n.fillRect(0,0,e,i)}loop(){++this.frame%this.patternRefreshInterval===0&&(this.update(),this.draw()),window.requestAnimationFrame(this.loop)}}document.addEventListener("DOMContentLoaded",()=>{const s=document.createElement("canvas");document.body.appendChild(s),new h(s);const n=document.createElement("div");n.className="container";const a=document.createElement("div");a.className="column";const r=document.createElement("div");r.className="block block-name",r.appendChild(document.createElement("p")).innerHTML="<strong>Резюме <br>  СТАЖЕР DevOps / Linux - инженер</strong>";const t=document.createElement("div");t.className="block block-info";const e=document.createElement("img");e.src=d,e.alt="Photo";const i=document.createElement("p");i.innerHTML=`<strong>Буланова Элина Николаевна</strong> 
 
 Личные качества: 
 
 * Быстро обучаюсь 
 * Ценю дисциплину 
 * Постоянно самосовершенствуюсь 
 * Эмпатична 
 `,t.appendChild(e),t.appendChild(i);const o=document.createElement("div");o.className="block block-skills",o.appendChild(document.createElement("p")).innerHTML=`<strong>Навыки</strong><br> * Уверенное владение UNIX (семейства Debian, RHEL, Arch) 
 * Опыт написания bash скриптов для автоматизации 
 и настройки конфигураций. Базовый Golnag 
 * PostgreSQL, MySQL, MongoDB 
 * Администрирование СУБД: MySQL, PostgreSQL, MongoDB 
 * Работа с Docker, описание Docker-compose файлов 
 * Настройка манифестов для Kubernetes, базовая работа с kubectl 
 * Опыт настройки IaC с помощью Ansible, Terraform, GitHub Actions 
 * Опыт работы с nginx, понимание работы сетевых протоколов`;const c=document.createElement("div");c.className="block block-ed",c.appendChild(document.createElement("p")).innerHTML=`<strong>Образование</strong> 
Международная Академия <br> Информационных Технологий «IT HUB» 
 Кафедра: Программирование и управление ИТ-продуктом 
 Специальность: Backend-разработчик 
 Период обучения: 2022 - 2026`;const l=document.createElement("div");l.className="block block-contacts",l.appendChild(document.createElement("p")).innerHTML=`
  <strong>Контактные данные</strong><br><br> 
  Телефон: +7 (985) 396-84-88<br>
  Email: <a href="mailto:bulanova_ale@mail.ru">bulanova_ale@mail.ru</a><br>
  Telegram: <a href="https://t.me/shaitanyan" target="_blank">@shaitanyan</a><br>
  Github: <a href="https://github.com/EWinterhalter" target="_blank">@EWinterhalter</a>
`,a.appendChild(r),a.appendChild(t),a.appendChild(o),a.appendChild(c),a.appendChild(l),n.appendChild(a),document.body.appendChild(n)});
