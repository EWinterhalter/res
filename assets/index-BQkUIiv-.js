(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))s(t);new MutationObserver(t=>{for(const e of t)if(e.type==="childList")for(const i of e.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&s(i)}).observe(document,{childList:!0,subtree:!0});function a(t){const e={};return t.integrity&&(e.integrity=t.integrity),t.referrerPolicy&&(e.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?e.credentials="include":t.crossOrigin==="anonymous"?e.credentials="omit":e.credentials="same-origin",e}function s(t){if(t.ep)return;t.ep=!0;const e=a(t);fetch(t.href,e)}})();class d{constructor(n){this.patternSize=150,this.patternScaleX=1,this.patternScaleY=1,this.patternRefreshInterval=3,this.patternAlpha=15,this.canvas=n,this.ctx=this.canvas.getContext("2d"),this.ctx.scale(this.patternScaleX,this.patternScaleY),this.patternCanvas=document.createElement("canvas"),this.patternCanvas.width=this.patternSize,this.patternCanvas.height=this.patternSize,this.patternCtx=this.patternCanvas.getContext("2d"),this.patternData=this.patternCtx.createImageData(this.patternSize,this.patternSize),this.patternPixelDataLength=this.patternSize*this.patternSize*4,this.resize=this.resize.bind(this),this.loop=this.loop.bind(this),this.frame=0,window.addEventListener("resize",this.resize),this.resize(),window.requestAnimationFrame(this.loop)}resize(){this.canvas.width=window.innerWidth*devicePixelRatio,this.canvas.height=window.innerHeight*devicePixelRatio}update(){const{patternPixelDataLength:n,patternData:a,patternAlpha:s,patternCtx:t}=this;for(let e=0;e<n;e+=4){const i=Math.random()*255;a.data[e]=i,a.data[e+1]=i,a.data[e+2]=i,a.data[e+3]=s}t.putImageData(a,0,0)}draw(){const{ctx:n,patternCanvas:a,canvas:s,viewHeight:t}=this,{width:e,height:i}=s;n.clearRect(0,0,e,i),n.fillStyle=n.createPattern(a,"repeat"),n.fillRect(0,0,e,i)}loop(){++this.frame%this.patternRefreshInterval===0&&(this.update(),this.draw()),window.requestAnimationFrame(this.loop)}}document.addEventListener("DOMContentLoaded",()=>{const r=document.createElement("canvas");document.body.appendChild(r),new d(r);const n=document.createElement("div");n.className="container";const a=document.createElement("div");a.className="column";const s=document.createElement("div");s.className="block block-name",s.appendChild(document.createElement("p")).innerText=`Резюме 
 DevOps / SRE / Linux - инженер`;const t=document.createElement("div");t.className="block block-info";const e=document.createElement("img");e.src="/me.jpg",e.alt="Photo";const i=document.createElement("p");i.innerText=`Буланова Элина Николаевна 
 
 Личные качества: 
 
 * Быстро обучаюсь 
 * Ценю дисциплину 
 * Постоянно самосовершенствуюсь 
 * Эмпатична 
 `,t.appendChild(e),t.appendChild(i);const c=document.createElement("div");c.className="block block-skills",c.appendChild(document.createElement("p")).innerText=`Навыки
 
 * Работа с UNIX системами, преимущественно c ArchLinux 
 * Git, Github Actions, Dokcer, Kubernrtes, Ansible, Nginx 
 * PostgreSQL, MySQL, MongoDB 
 * JS, Golang, Bash 
 * Понимание работы интернет протоколов и сетей`;const o=document.createElement("div");o.className="block block-ed",o.appendChild(document.createElement("p")).innerText=`Образование 
 
 Международная Академия 
 Информационных Технологий «IT HUB» 
 Кафедра: Программирование и управление ИТ-продуктом 
 Специальность: Backend-разработчик 
 Период обучения: 2022 - 2026`;const l=document.createElement("div");l.className="block block-contacts",l.appendChild(document.createElement("p")).innerText=`Контактные данные 
 
 Телефон: +79853968488 
 Email: bulanova_ale@mail.ru 
 Telegram: @shaitanyan`,a.appendChild(s),a.appendChild(t),a.appendChild(c),a.appendChild(o),a.appendChild(l),n.appendChild(a),document.body.appendChild(n)});
