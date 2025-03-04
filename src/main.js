
import "./style.css";



class Grain {
  constructor (el) {
    this.patternSize = 150;
    this.patternScaleX = 1;
    this.patternScaleY = 1;
    this.patternRefreshInterval = 3; 
    this.patternAlpha = 15; 
    this.canvas = el;
    this.ctx = this.canvas.getContext('2d');
    this.ctx.scale(this.patternScaleX, this.patternScaleY);
    this.patternCanvas = document.createElement('canvas');
    this.patternCanvas.width = this.patternSize;
    this.patternCanvas.height = this.patternSize;
    this.patternCtx = this.patternCanvas.getContext('2d');
    this.patternData = this.patternCtx.createImageData(this.patternSize, this.patternSize);
    this.patternPixelDataLength = this.patternSize * this.patternSize * 4;
    this.resize = this.resize.bind(this);
    this.loop = this.loop.bind(this);
    this.frame = 0;
    window.addEventListener('resize', this.resize);
    this.resize();
    window.requestAnimationFrame(this.loop);
  }
  
  resize () {
    this.canvas.width = window.innerWidth * devicePixelRatio;
    this.canvas.height = window.innerHeight * devicePixelRatio;
  }

  update () {
    const {patternPixelDataLength, patternData, patternAlpha, patternCtx} = this;
    for (let i = 0; i < patternPixelDataLength; i += 4) {
      const value = Math.random() * 255;

      patternData.data[i] = value;
      patternData.data[i + 1] = value;
      patternData.data[i + 2] = value;
      patternData.data[i + 3] = patternAlpha;
    }
    patternCtx.putImageData(patternData, 0, 0);
  }

  draw () {
    const {ctx, patternCanvas, canvas, viewHeight} = this;
    const {width, height} = canvas;


    ctx.clearRect(0, 0, width, height);
    ctx.fillStyle = ctx.createPattern(patternCanvas, 'repeat');
    ctx.fillRect(0, 0, width, height);
  }

  loop () {
    const shouldDraw = ++this.frame % this.patternRefreshInterval === 0;
    if (shouldDraw) {
      this.update();
      this.draw();
    }
    window.requestAnimationFrame(this.loop);
  }
}


document.addEventListener("DOMContentLoaded", () => {
  const el = document.createElement("canvas");
  document.body.appendChild(el); 
  const grain = new Grain(el);

  const container = document.createElement("div");
  container.className = "container";

  const column = document.createElement("div");
  column.className = "column";

  const block0 = document.createElement("div");
  block0.className = "block block-name";
  block0.appendChild(document.createElement("p")).innerText = "Резюме \n DevOps / SRE / Linux - инженер";


  const block1 = document.createElement("div");
  block1.className = "block block-info";
  const img = document.createElement("img");
  img.src = "public/me.jpg";
  img.alt = "Photo";
  const text = document.createElement("p");
  text.innerText = "Буланова Элина Николаевна \n \n Личные качества: \n \n * Быстро обучаюсь \n * Ценю дисциплину \n * Постоянно самосовершенствуюсь \n * Эмпатична \n ";

  block1.appendChild(img);
  block1.appendChild(text); 

  const block2 = document.createElement("div");
  block2.className = "block block-skills";
  block2.appendChild(document.createElement("p")).innerText = "Навыки\n \n * Работа с UNIX системами, преимущественно c ArchLinux \n * Git, Github Actions, Dokcer, Kubernrtes, Ansible, Nginx \n * PostgreSQL, MySQL, MongoDB \n * JS, Golang, Bash \n * Понимание работы интернет протоколов и сетей";

  const block3 = document.createElement("div");
  block3.className = "block block-ed";
  block3.appendChild(document.createElement("p")).innerText = "Образование \n \n Международная Академия \n Информационных Технологий «IT HUB» \n Кафедра: Программирование и управление ИТ-продуктом \n Специальность: Backend-разработчик \n Период обучения: 2022 - 2026";

  const block4 = document.createElement("div");
  block4.className = "block block-contacts";
  block4.appendChild(document.createElement("p")).innerText = "Контактные данные \n \n Телефон: +79853968488 \n Email: bulanova_ale@mail.ru \n Telegram: @shaitanyan";

  column.appendChild(block0);
  column.appendChild(block1);
  column.appendChild(block2);
  column.appendChild(block3);
  column.appendChild(block4);
  container.appendChild(column);
  document.body.appendChild(container);
});
