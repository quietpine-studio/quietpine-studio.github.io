/* QUIETPINE – Scroll-Einblendungen + Nav-Schatten */
(function(){
  var els=document.querySelectorAll('.reveal');
  if('IntersectionObserver' in window && els.length){
    var io=new IntersectionObserver(function(es){
      es.forEach(function(e){ if(e.isIntersecting){ e.target.classList.add('in'); io.unobserve(e.target); } });
    },{threshold:.12,rootMargin:'0px 0px -40px 0px'});
    els.forEach(function(el){ io.observe(el); });
  } else { els.forEach(function(el){ el.classList.add('in'); }); }
  var nav=document.querySelector('.nav');
  if(nav){ var f=function(){ nav.classList.toggle('scrolled', window.scrollY>10); }; f(); window.addEventListener('scroll',f,{passive:true}); }
})();
