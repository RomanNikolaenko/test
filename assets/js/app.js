document.addEventListener("DOMContentLoaded", function () {
   // dropdown
   let btn = document.querySelector(".dropdown span");
   let dList = document.querySelector(".dropdown__list");

   btn.addEventListener("click", function () {
      let h = dList.scrollHeight;

      if (document.querySelector(".dropdown").classList.contains('openDrop')) {
         btn.closest('.dropdown').classList.remove("openDrop");
         dList.style.maxHeight = null;
      } else {
         btn.closest('.dropdown').classList.add("openDrop");
         dList.style.maxHeight = h + "px";
      }

   })

   document.querySelector('body').addEventListener('click', function (e) {
      if (!e.target.closest('.dropdown')) {
         btn.closest('.dropdown').classList.remove("openDrop");
         dList.style.maxHeight = null;
      }
   });

   // burger
   let burger = document.querySelector('.header__burger');
   let _body = document.querySelector('body');

   burger.addEventListener('click', function (e) {
      if(_body.classList.contains('open')) {
         _body.classList.remove('open');
         _body.classList.add('transition');

         setTimeout(function() {
            _body.classList.remove('transition');
         }, 500)
      } else {
         _body.classList.add('open');
      }
   });

   let elA = document.getElementById('a'); // get canvas
   let elB = document.getElementById('b'); // get canvas
   let elC = document.getElementById('c'); // get canvas
   let elD = document.getElementById('d'); // get canvas
   let elE = document.getElementById('e'); // get canvas
   let elF = document.getElementById('f'); // get canvas
   let elG = document.getElementById('g'); // get canvas

   function percent(el, clr1, clr2) {
      if(el) {
         let options = {
            percent: el.getAttribute('data-percent') || 1,
            size: el.getAttribute('data-size') || 62,
            lineWidth: el.getAttribute('data-line') || 5,
            rotate: el.getAttribute('data-rotate') || 0
         }
      
         let canvas = document.createElement('canvas');
         let span = document.createElement('span');
         span.textContent = options.percent + '%';
      
         if (typeof (G_vmlCanvasManager) !== 'undefined') {
            G_vmlCanvasManager.initElement(canvas);
         }
      
         let ctx = canvas.getContext('2d');
         canvas.width = canvas.height = options.size;
      
         el.appendChild(span);
         el.appendChild(canvas);
      
         ctx.translate(options.size / 2, options.size / 2); // change center
         ctx.rotate((-1 / 2 + options.rotate / 180) * Math.PI); // rotate -90 deg
      
         //imd = ctx.getImageData(0, 0, 240, 240);
         let radius = (options.size - options.lineWidth) / 2;
      
         let drawCircle = function (color, lineWidth, percent) {
            percent = Math.min(Math.max(0, percent || 1), 1);
            ctx.beginPath();
            ctx.arc(0, 0, radius, 0, Math.PI * 2 * percent, false);
            ctx.strokeStyle = color;
            ctx.lineCap = 'square'; // butt, round or square
            ctx.lineWidth = lineWidth
            ctx.stroke();
         };
      
         drawCircle(clr1, options.lineWidth, 100 / 100);
         drawCircle(clr2, options.lineWidth, options.percent / 100);
      }
   }

   percent(elA, 'transparent', '#fff');
   percent(elB, 'transparent', '#fff');
   percent(elC, 'transparent', '#fff');
   percent(elD, 'transparent', '#fff');
   percent(elE, 'transparent', '#fff');
   percent(elF, 'transparent', '#dbebfe');
   percent(elG, 'transparent', '#dbebfe');
});